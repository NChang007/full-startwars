import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const {store, actions} = useContext(Context)
    let typeURL = props.character ? "/components/character/" : "/components/planet/"
    let name = ''
    if (props.character){
        name = props.character.name
    }else if(props.planet) {
        name = props.planet.name
    } else {
        name = props.starship
    }

    // make people data as a variable
    let characterProps = props.character ? <div>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`} className="card-img-top"  style={{maxHeight: "300px", objectFit: "cover"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5> 
                <h6>Gender: {props.character.gender}</h6> 
                <h6>Hair color: {props.character.hair_color}</h6> 
                <h6>Eye color: {props.character.eye_color}</h6>
            </div>
        </div> : ""
    let planetProps = props.planet ? <div>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`} className="card-img-top" style={{maxHeight: "300px", objectFit: "cover"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <h6>Diameter: {props.planet.diameter}</h6>
                <h6>Population: {props.planet.population}</h6>
                <h6>Terrain: {props.planet.terrain}</h6>
            </div>
        </div> : ""
    
    let starshipProps = props.starship ? <div>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${props.id + 1}.jpg`} className="card-img-top" style={{maxHeight: "300px", objectFit: "cover"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title" >{props.starship.name}</h5>
                <h6>Cost: {props.starship.cost_in_credits}</h6>
                <h6>Rating: {props.starship.hyperdrive_rating}</h6>
                <h6>Model: {props.starship.model}</h6>
            </div>
    </div> : ""


    return (
        <div className="card" style={{"width": "18rem"}}>
            {props.character ? characterProps : "" }
            {props.planet ? planetProps : "" }
            {props.starship ? starshipProps : ''}

            <div className="d-flex" style={{justifyContent: 'space-between'}}>
                <Link to={typeURL + props.id}>
                    <span className="btn btn-primary">Learn More</span>
                </Link>
                <button 
                    className="btn btn-primary" 
                    // onClick=''
                >
                    <i className="fas fa-heart" />
                </button>
            </div>
        </div>
    )
}

export default Card