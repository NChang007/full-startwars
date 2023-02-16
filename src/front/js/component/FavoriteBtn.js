import React from 'react'

const FavoriteBtn = (props) => {
    const handleClick = () => {
        if(document.querySelector(`#favIcon${props.type}${props.id}`).classList == 'far fa-heart'){
          document.querySelector(`#favIcon${props.type}${props.id}`).classList = 'fas fa-heart'
        }else {
          document.querySelector(`#favIcon${props.type}${props.id}`).classList = 'far fa-heart'
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