import React from 'react'

const Message = ({message}) => {
    if (!message){
        return null
    }    
    return (
        <div>
            console.log(message)
            window.alert({message.text})
        </div>
        )
}
export default Message