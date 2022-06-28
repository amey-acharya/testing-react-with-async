import React, { useState } from 'react'
import Output from './Output'

function Greetings() {
    const [changedText, setChangedText] = useState(false)
    
    const changeTextHandler = () => {
        setChangedText(true)
    }
  return (
    <div>
        <h2>Hello World!</h2>
        {!changedText && <Output>It's a great day to test</Output>}
        {changedText && <Output>Changed</Output>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Greetings