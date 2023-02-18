const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      starships: [],
      created: [],
      token: null,
      favorites: [],
    },
    actions: {
      loadData: () => {
        fetch("https://swapi.dev/api/people")
          .then((res) => res.json())
          .then((data) => {
            setStore({ characters: data.results });
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://swapi.dev/api/planets")
          .then((res) => res.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://swapi.dev/api/starships")
          .then((res) => res.json())
          .then((data) => {
            setStore({ starships: data.results });
          })
          .catch((error) => {
            console.log(error);
          });

        fetch(
          "https://3001-nchang007-fullstartwars-4pcoc5dy9za.ws-us87.gitpod.io/api/characters"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ created: data.data });
          })
          .catch((error) => {
            console.log(error);
          });
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

      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      logout: () => {
        const token = sessionStorage.removeItem("token");
        setStore({ token: null });
        window.location.href =
          "https://3000-nchang007-fullstartwars-4pcoc5dy9za.ws-us87.gitpod.io/";
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const res = await fetch(
            "https://3001-nchang007-fullstartwars-4pcoc5dy9za.ws-us87.gitpod.io/api/login",
            opts
          );
          if (res.status !== 200) {
            alert("there has been an error");
            return false;
          }
          const data = await res.json();
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error(error);
        }
      },

      createUser: async (name, email, password) => {
        const store = getStore();
        const opts = {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        };
        try {
          const res = await fetch(
            "https://3001-nchang007-fullstartwars-4pcoc5dy9za.ws-us87.gitpod.io/api/createUser",
            opts
          );
          if (res.status !== 200) {
            alert("there has been an error");
            return false;
          }
          const data = await res.json();
          console.log(data);
          if (data.status == "true") {
            //rederect to login
            window.location.href =
              "https://3000-nchang007-fullstartwars-4pcoc5dy9za.ws-us87.gitpod.io/login";
          }

          return true;
        } catch (error) {
          console.error(error);
        }
      },

      addFavorite: (item) => {
        let f = getStore().favorites;
        let t = getStore().token;
        f.push(item);
        if (sessionStorage.getItem("token")) {
          const opts = {
            headers: {
              Authorization: "Bearer " + t,
			  'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(item),
          };
          fetch(
            "https://3001-nchang007-fullstartwars-4pcoc5dy9za.ws-us87.gitpod.io/api/favorites",
            opts
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              //setStore({ favorites: data.favorites });
              setStore({ favorites: f });
            })
            .catch((error) => {
              //error handling
              console.log(error);
            });
        }
      },
      removeFavorite: (item) => {
        let f = getStore().favorites;
        f.forEach((el, i) => {
          if (el.id === item.id && el.type === item.type) {
            f.splice(i, 1);
          }
        });
        //console.log(f);
        setStore({ favorites: f });
      },
    },
  };
};

export default getState;
