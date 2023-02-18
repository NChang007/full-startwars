"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Characters, Favorites
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import datetime


api = Blueprint('api', __name__)

# login Route-----------------------------------------------------------------------------
@api.route("/login", methods=["POST"])
def create_token():
    if request.method == 'POST':
      email = request.json.get("email", None)
      password = request.json.get("password", None)

      if not email:
          return jsonify({"msg": "Email is required"}), 400
      if not password:
          return jsonify({"msg": "Password is required"}), 400

      user = User.query.filter_by(email=email).first()
      if not user:
          return jsonify({"msg": "Email/Password are incorrect"}), 401

      if not check_password_hash(user.password, password):
          return jsonify({"msg": "Username/Password are incorrect"}), 401

      # create token
      expiration = datetime.timedelta(days=3)
      access_token = create_access_token(identity= user.id, expires_delta= expiration)

      return jsonify(access_token=access_token)

    return jsonify(msg="wrong user")

# create user -----------------------------------------------------------------------------------------------------------
@api.route('/createUser', methods=['POST'])
def createUser():
  if request.method == 'POST':
    request_body = request.get_json()

    if not request_body["name"]:
      return jsonify({"msg": "Name is required"}), 400
    if not request_body["email"]:
      return jsonify({"msg": "Email is required"}), 400
    if not request_body["password"]:
      return jsonify({"msg": "Password is required"}), 400

    user = User.query.filter_by(email=request_body["email"]).first()
    if user:
      return jsonify({"msg": "Username  already exists"}), 400

    user = User(
          name = request_body["name"],
          email = request_body["email"],
          password = generate_password_hash(request_body["password"]),
      )

    db.session.add(user)   
    db.session.commit()
    return jsonify({"created": "Thanks. Your registration was successfully", "status": "true"}), 200

# get all characters
@api.route('/characters', methods=['GET'])
def getAllCharacters():
  characters = Characters.query.all()
  if characters is None:
    return jsonify(msg="No Characters exist")
  else:
    return jsonify(data=[character.serialize() for character in characters]) 

# get one Character
@api.route('/characters/<int:id>', methods=['GET'])
def getOneCharacters(id):
  character = Characters.query.get(id)
  if character is None:
    return jsonify(msg="This page does not exist")
  else:
    return jsonify(data=character.serialize())

# add favorite
@api.route('/favorites', methods=['POST'])
@jwt_required()
def addFavorite():
  uid = get_jwt_identity()
  request_body = request.get_json()
  print(request_body)
  favorite = Favorites(
    uid = uid,
    index = request_body['id'],
    item = repr(request_body['item']),
    type = request_body['type']
  )
  
  db.session.add(favorite)   
  db.session.commit()
  # get favorites for logged user
  favorites = getFavoritesByID(uid)
  # return those favs - same happens in the delete function
  return jsonify(favorites=favorites)

def getFavoritesByID(uid):
  favorites = Favorites.query.filter_by(uid=uid)
  favorites = [favorite.serialize() for favorite in favorites]
  print(favorites)
  return jsonify(favorites=favorites)
  