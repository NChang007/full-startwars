const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],

		},
		actions: {
			loadData: () => {
				const store = getStore();
				
				fetch("https://swapi.dev/api/people")
				.then((res) => res.json())
				.then((data) => {
					setStore({ characters: data.results });
				})
				.catch((error) => {console.log(error)})

				fetch("https://swapi.dev/api/planets")
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setStore({planets: data.results})
				})
				.catch((error) => {console.log(error)})

				fetch("https://swapi.dev/api/starships")
				.then((res) => res.json())
				.then((data) => {
					setStore({starships: data.results})
				})
				.catch((error) => {console.log(error)})

				
			},
		}
	};
};

export default getState;
