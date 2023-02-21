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
            <h1 className='profileName'>{`Welcome back ${store.user_name}`}</h1>
            <h3>Your Favorites</h3>
            <div className='profileCardGrid'>
                { favorites.length > 0 &&
                    favorites.map((item, idx) => {
                        //console.log(item);
                        return (
                            <div  key={idx}>
                                <Card item={item.item} id={item.id} type={item.type}/>
                            </div>                            
                        )}
                    )  
                }
            </div>
            <button 
                onClick={() => actions.logout()} 
                className="btn btn-warning"
                style={{margin: '3rem'}}
            >
                Log Out
            </button>
        </div>
    ) 
}

export default Profile