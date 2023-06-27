
function App() {
 // Código JavaScript

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
          <li>Levar Fofin dar peao</li>
          <li>Comprar pao</li>
          <li>Aulinhas DevClub</li>
        </ul>
      </div>
      
    </>
  )
}

export default App
