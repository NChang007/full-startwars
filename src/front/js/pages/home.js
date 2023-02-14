import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<div
		className=""
		style={{
			padding: "3rem",
			display: "flex",
			flexDirection:'column',
			justifyContent: "center",
			alignItems: "center",
		}}
		>
			<h2>CHARACTERS</h2>
			<div className="cardParent">
				{store.characters.map((char, idx) => {
				return (
					<div className="cardMapDiv" key={idx}>
						<Card character={char} id={idx}/>
					</div>
				);
				})}
			</div>
			
			<h2 className="planetsHeading">PLANETS</h2>
			<div className="cardParent">
				{store.planets.map((planet, idx) => {
					return (
					<div className="cardMapDiv" key={idx}>
						<Card planet={planet} id={idx}/>
					</div>
				);
				})}
			</div>	

			<h2 className="planetsHeading">STARSHIPS</h2>
			<div className="cardParent">
				{store.starships.map((starship, idx) => {
					return (
					<div className="cardMapDiv" key={idx}>
						<Card starship={starship} id={idx}/>
					</div>
				);
				})}
			</div>	
		</div>
	);
};
