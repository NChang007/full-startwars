const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			created: [],

		},
		actions: {
			loadData: () => {				
				fetch("https://swapi.dev/api/people")
				.then((res) => res.json())
				.then((data) => {
					setStore({ characters: data.results });
				})
				.catch((error) => {console.log(error)})

				fetch("https://swapi.dev/api/planets")
				.then((res) => res.json())
				.then((data) => {
					setStore({planets: data.results})
				})
				.catch((error) => {console.log(error)})

				fetch("https://swapi.dev/api/starships")
				.then((res) => res.json())
				.then((data) => {
					setStore({starships: data.results})
				})
				.catch((error) => {console.log(error)})	
				
				fetch("https://3001-nchang007-fullstartwars-4pcoc5dy9za.ws-us87.gitpod.io/api/characters")
				.then((res) => res.json())
				.then((data) => {
					setStore({created: data.data})
				})
				.catch((error) => {console.log(error)})	
			},
			getCharacter: (idx) => {
				const characters = getStore().characters;
				return characters[idx];
			},
			getPlanet: (idx) => {
				const planets = getStore().planets;
				return planets[idx];
			},
			getStarship: (idx) => {
				const starships = getStore().starships;
				return starships[idx];
			},
			getCreated: (idx) => {
				const created = getStore().created;
				return created[idx];
			},
		}
	};
};

export default getState;
