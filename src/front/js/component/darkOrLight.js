import React from 'react'
import jediLogo from '../../img/icons8-jedi-order-128.png'  //Icon by Icons8
import sithLogo from '../../img/icons8-sith-empire-96.png'  //Icon by Icons8

const darkOrLight = () => {
    
    const handleClick = (e) => {
        let icon = document.querySelector('#darkLightIcon')
        document.body.classList.toggle('dark-side')
        if (document.body.classList.contains('dark-side')){
            icon.src = jediLogo
        }else { icon.src = sithLogo }
    }

  return (
    <div>
      <img 
        id="darkLightIcon" 
        onClick={() => handleClick()}
        src={sithLogo} 
        style={{
          width: '50px',
          height: '50px',
          marginLeft: '3rem'
        }}
      />
    </div>
  )
}

export default darkOrLight