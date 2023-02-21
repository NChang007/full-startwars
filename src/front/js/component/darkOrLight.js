import React from 'react'

const darkOrLight = () => {
    
    const handleClick = (e) => {
        // if(document.body.classList.contains = ""){
        //     document.body.classList.add = "dark-side"
        // }else {
        //     document.body.classList = ""
        // }
        document.body.classList.toggle('dark-side')
    }

  return (
    <div>
        <button onClick={(e) => handleClick()}>
            <img src='../../img/icons8-sith-empire-96.png' />
        </button>
    </div>
  )
}

export default darkOrLight