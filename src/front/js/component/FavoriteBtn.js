import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const FavoriteBtn = (props) => {
  const {store, actions} = useContext(Context)
    const handleClick = () => {
        if(document.querySelector(`#favIcon${props.type}${props.id}`).classList == 'far fa-heart'){
          document.querySelector(`#favIcon${props.type}${props.id}`).classList = 'fas fa-heart'
        }else {
          document.querySelector(`#favIcon${props.type}${props.id}`).classList = 'far fa-heart'
        }
        console.log(props.item); 
        let fav = {
          id: props.id,
          type: props.type,
          item: props.item
        }
        if (store.favorites.filter(e => e.id === props.id && e.type === props.type).length > 0) {
          // remove
          console.log('here');
          actions.removeFavorite(fav)
        } else {
          // add
          actions.addFavorite(fav)         
        }
    }

  return (
    <button 
        className="btn btn-primary" 
        onClick={()=> handleClick()}
    >
        <i id={`favIcon${props.type}${props.id}`} className="far fa-heart" />
    </button>
  )
}

export default FavoriteBtn