import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

const About = () => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    console.log(params);
    let type = params.type;
    let fields = null
    let item = null;
    if (type == "character") {
        item = actions.getCharacter(parseInt(params.id));
        fields = 
            <div className='about'>
                <h1>{item.name}</h1>
                <div className='aboutImage'>
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.id) + 1}.jpg`} 
                        style={{maxHeight: "400px", objectFit: "cover"}}
                        onerror={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='aboutDetails'>
                    <h4>Height: {item.height}</h4>
                    <h4>Mass: {item.mass}</h4>
                    <h4>Hair Color: {item.hair_color}</h4>
                    <h4>Skin Color: {item.skin_color}</h4>
                    <h4>Eye Color: {item.eye_color}</h4>
                    <h4>Birth Year: {item.birth_year}</h4>
                </div>
            </div>
    } else if (type == "planet") {
        item = actions.getPlanet(parseInt(params.id));
        fields = 
            <div>
                <h1>{item.name}</h1>
            </div>
    } else if (type == "starship") {
        item = actions.getStarship(parseInt(params.id));
        fields = 
            <div>
                <h1>{item.name}</h1>
            </div>
    } 

  return (
    <div>
        {fields}
    </div>
  )
}

export default About