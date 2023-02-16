"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Characters
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


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