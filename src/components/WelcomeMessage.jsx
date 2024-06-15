import React from 'react'

const WelcomeMessage = ({itemlist}) => {
  return (
    itemlist.length==0 &&<h1 className='welcomemessage'>Enjoy your day</h1>
  )
}

export default WelcomeMessage