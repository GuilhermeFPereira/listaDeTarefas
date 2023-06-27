
function App() {
 // Código JavaScript
 const list = [
  {id : 4455, task: "Levar Fofin dar peao"},
  {id : 78975, task: "Comprar pao"}, 
  {id : 6994, task: "Comer um cadim"}
]

 function inputChange(event){ // o event
  console.log(event.target.value)
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
