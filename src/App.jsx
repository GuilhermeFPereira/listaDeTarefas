
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid' // ele eh uma funcao, soh de chamar ele, ja cria um Id aleatorio

function App() {
 // Código JavaScript
  // quando altera um valor na list, ele nao altera na tela --> eh necessario usar o useState()
  // list => valor da lista // setList -> ele vai alterar o valor da list // useState(0) -> posicao inicial, apartir daqui que comeca a contar
  // toda vez que eu quero alterar o list , PRECISO utilizar o setList
  const [list, setList] = useState([{ id: uuid() , task: 'nothing'}]) 

 function inputChange(event){ // o event
  console.log(event.target.value)

  setList([{id : uuid(), task: event.target.value}])

  console.log(list)
 }

 function clickButton(){
  console.log("Click bottom")
 }

 // Retorna Código HTML 
  return (
    // Fragment <></>
    <>
      <div>
        <input onChange={inputChange} placeholder="O que tem para fazer HJ ?"/>
        <button onClick={clickButton} >Adicionar</button>

        <ul>
          {
            list.map(item => (    // isso eh muito usado no REACT // quando usa o ()  --> nao precisa usar o RETURN
            <li key={item.id} >{item.task}</li>     // toda vez que usa um map, precisa de uma key
            )) 
          }
        </ul>
      </div>
      
    </>
  )
}

export default App
