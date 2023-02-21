import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	window.onload = () => {
		const scrollContainer = document.querySelector(".cardParent");

	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});
	}

	return (
		<div
		className="homeCont"
		style={{
			padding: "3rem",
			display: "flex",
			flexDirection:'column',
			justifyContent: "center",
			alignItems: "center",
		}}
		>
			<h2 className="planetsHeading" >CHARACTERS</h2>
			<div className="cardParent">
				{store.characters.map((item, idx) => {
				return (
					<div className="cardMapDiv" key={idx}>
						<Card item={item} id={idx} type="character"/>
					</div>
				);
				})}
			</div>
			
			<h2 className="planetsHeading">PLANETS</h2>
			<div className="cardParent">
				{store.planets.map((item, idx) => {
					return (
					<div className="cardMapDiv" key={idx}>
						<Card item={item} id={idx} type="planet"/>
					</div>
				);
				})}
			</div>	

			<h2 className="planetsHeading">STARSHIPS</h2>
			<div className="cardParent">
				{store.starships.map((item, idx) => {
					return (
					<div className="cardMapDiv" key={idx}>
						<Card item={item} id={idx} type="starship" />
					</div>
				);
				})}
			</div>	

			<h2 className="planetsHeading">CREATED</h2>
			<div className="cardParent">
				{store.created.map((item, idx) => {
					return (
					<div className="cardMapDiv" key={idx}>
						<Card item={item} id={idx} type="created" />
					</div>
				);
				})}
			</div>
		</div>
	);
};
