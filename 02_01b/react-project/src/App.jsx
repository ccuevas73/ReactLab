import {useEffect, useReducer} from "react"
import './App.css'
import chef from "./images/cartoon_chef.jpg"

function Header({name, year}){
  return(
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Mac N Cheese",
  "Salmon",
  "Tofu",
  "Veggi soup"
]

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}))

//console.log(dishObjects)

function Main({dishes, openStatus, onStatus}){
  return(
    <>
    <div>
      <button onClick={() => onStatus(true)}>
        I want to be open
      </button>
      <h2>Welcome to this amazing place! {openStatus ? "Open" : "Closed"}</h2>
    </div>
    <main>
      <img src ={chef} height={200} alt="a photo of a smiling chef owner!"/>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{listStyleType: "none"}}>{dish.title}
          </li>
        ))}
      </ul>
    </main>
    </>
  )
}

function App() {
  const [status, toggle] = useReducer((status) => !status, true)

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "close"}.`)
  }, [status])

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}</h1>
      <button onClick={toggle}> 
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Carlos" year={new Date().getFullYear()}/>
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle}/>
    </div>
  )
}

export default App
