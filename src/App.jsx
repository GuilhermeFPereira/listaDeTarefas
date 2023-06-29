
import { useState } from 'react' // funcao de criar uma variavel que vai ser mostrado na tela, toda vez que eu altere essa variavel, ela fica visivel na tela
import { v4 as uuid } from 'uuid' // ele eh uma funcao, soh de chamar ele, ja cria um Id aleatorio

import { FcEmptyTrash, FcOk } from "react-icons/fc";


import { Container, ToDoList, Input, Button, ListItem } from './styles.js'

function App() {
  // Código JavaScript
  // quando altera um valor na list, ele nao altera na tela --> eh necessario usar o useState()
  // list => valor da lista (variavel)[posicao 0] // setList -> ele vai criar um novo valor pra list e substitui (ferramenta p/ alterar valor da variavel)[posicao 1] // useState(0) -> posicao inicial, apartir daqui que comeca a contar
  // toda vez que eu quero alterar o list , PRECISO utilizar o setList
  const [list, setList] = useState([{ id: uuid(), task: 'nothing', finished: true }])
  const [inputTask, setInputTask] = useState('')

  function inputChange(event) { // o event

    setInputTask(event.target.value)

  }

  function clickButton() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }]) // os ... --> serve para que os novos items do array sejam ADICIONADOS ao lado, ao invez de substituir ou dar bugs
  } //(...) ele coloca o item anterior + o novo item

  function finalizarTarefa(id){
    
    const newList = list.map( item => (
      item.id === id ? { ... item, finished: !item.finished } : item
    ))

    setList(newList)

  }

  function deleteItem(itemId){
    const newItem = list.filter( item => item.id !== itemId ) // ele so vai adcionar ao novo array, os items que nao encontrar no id que estou procurando, pq estou pedindo pra colocar os itens diferentes do id que estou mandando
    setList(newItem)

  }

  // Retorna Código HTML 
  return (
    // Fragment <></>
    <>
      <Container>
        <ToDoList>
          <Input onChange={inputChange} placeholder="O que tem para fazer HJ ?" />
          <Button onClick={clickButton} >Adicionar</Button>

          <ul>
            {list.map((item) => (    // isso eh muito usado no REACT // quando usa o ()  --> nao precisa usar o RETURN
            <ListItem key={item.id} isFinished={item.finished} >  
             <FcOk onClick={() => finalizarTarefa(item.id)} /*Qando escolho manualmente oq quero enviar , precisa fazer essa arrowFunction */ />
             <li >{item.task}</li>     
             <FcEmptyTrash onClick={() => deleteItem(item.id)} />
            </ListItem>
              )) // toda vez que usa um map, precisa de uma key, e ela sempre vai no pai
            }
          </ul>
        </ToDoList>
      </Container>

    </>
  )
}

export default App
