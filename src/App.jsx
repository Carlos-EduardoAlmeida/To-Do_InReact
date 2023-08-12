import React, { useState } from 'react'
import ListComponent from './componentes/list'

function App() {
  const [inputText, setInputText] = useState('não passou valor')
  const [textContent, setTextContent] = useState([])

  function changeText(event){
    setInputText(event.target.value)
  }

  function handleClick(){
    setTextContent([...textContent, inputText])
  }

  return (
    <main>
      <header>
        <h1>To-do List</h1>
        <h3>Digite suas tarefas abaixo:</h3>
        <input type="text" placeholder='max: 20 letras' name="textContent" maxlength="20" id="textContent" onChange={changeText}/>
        <input type="button" value="Enviar" onClick={handleClick} id='buttonHeader'/>
      </header>
      <article>
        {
          textContent.map(text => {
            return <ListComponent text={text}/>
          })
        }
      </article>

      <footer>Feito por Carlos Eduardo</footer>
    </main>
  )
}

export default App
