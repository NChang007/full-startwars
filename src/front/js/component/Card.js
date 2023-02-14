import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const {store, actions} = useContext(Context)
    // let typeURL = props.character ? "/about/character/" : "/about/planet/"
    // let name = null
    // if (props.character){
    //     name = props.character.name
    // }else if(props.planet) {
    //     name = props.planet.name
    // } else {
    //     name = props.starship
    // }

    // make people data as a variable
    let characterProps = props.type == 'character' ? <div>
            <img 
                src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`} 
                className="card-img-top"  
                style={{maxHeight: "300px", objectFit: "cover"}} 
                alt="..." 
            />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5> 
                <h6>Gender: {props.item.gender}</h6> 
                <h6>Hair color: {props.item.hair_color}</h6> 
                <h6>Eye color: {props.item.eye_color}</h6>
            </div>
        </div> : ""
    let planetProps = props.type == 'planet' ? <div>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`} className="card-img-top" style={{maxHeight: "300px", objectFit: "cover"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <h6>Diameter: {props.item.diameter}</h6>
                <h6>Population: {props.item.population}</h6>
                <h6>Terrain: {props.item.terrain}</h6>
            </div>
        </div> : ""
    
    let starshipProps = props.type == 'starship' ? <div>
            <img 
                src={`https://starwars-visualguide.com/assets/img/starships/${props.id + 1}.jpg`} 
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}
                className="card-img-top" 
                style={{maxHeight: "300px", objectFit: "cover"}} 
                alt="..." />
            <div className="card-body">
                <h5 className="card-title" >{props.item.name}</h5>
                <h6>Cost: {props.item.cost_in_credits}</h6>
                <h6>Rating: {props.item.hyperdrive_rating}</h6>
                <h6>Model: {props.item.model}</h6>
            </div>
    </div> : ""


    return (
        <div className="card" style={{"width": "18rem"}}>
            {props.type == 'character' ? characterProps : "" }
            {props.type == 'planet' ? planetProps : "" }
            {props.type == 'starship' ? starshipProps : ''}

            <div className="d-flex" style={{justifyContent: 'space-between'}}>
                <Link to={'/about/' + props.type +'/'+ props.id}>
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