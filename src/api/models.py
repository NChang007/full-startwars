from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Characters(db.Model):
    __tablename__ = 'Characters'
    id = db.Column(db.Integer, primary_key=True, unique = True)
    name = db.Column(db.String(256))
    birth_year = db.Column(db.String(256))
    eye_color = db.Column(db.String(256))
    gender = db.Column(db.String(256))
    hair_color = db.Column(db.String(256))
    height = db.Column(db.String(256)) 
    mass = db.Column(db.String(256))
    skin_color = db.Column(db.String(256))
    homeworld = db.Column(db.String(256))
    image = db.Column(db.String(256))
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "birth_year": self.birth_year,
            "eye_color": self.eye_color,
            "gender": self.gender,
            "hair_color": self.hair_color,
            "height": self.height,
            "mass": self.mass,
            "skin_color": self.skin_color,
            "homeworld": self.homeworld,
            "image": self.image,
        }
    
    def to_dict(self):
        return {}