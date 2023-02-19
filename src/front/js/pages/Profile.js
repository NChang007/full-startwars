import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import Card from '../component/Card';

const Profile = () => {
    const { store, actions } = useContext(Context);
    let favorites = store.favorites
   // console.warn(favorites);
   // console.error("error")
    return (
        <div className='profileCont'>
            <h1 className='profileName'>user's name</h1>
            <h3>Your Favorites</h3>
            <div>
                { favorites.length > 0 &&
                    favorites.map((item, idx) => {
                        //console.log(item);
                        return (
                            <div className="col-3" key={idx}>
                                <Card item={item.item} id={item.id} type={item.type}/>
                            </div>                            
                        )}
                    )  
                }
            </div>
            <button onClick={() => actions.logout()} className="btn btn-warning">
                Log Out
            </button>
        </div>
    ) 
}

export default Profile