import { useEffect, useState } from 'react'
import BurgerStack from './components/BurgerStack.jsx'
import IngredientList from './components/IngredientList.jsx'
import './App.css';

function App() {
  
  const [clickedIngredients, setClickedIngredients] = useState([])
  handleClick = e => {
    console.log(e.target.innerText)
    setClickedIngredients([...clickedIngredients, { name: e.target.innerText}])
  }
  
  
  useEffect(() => {
    console.log(clickedIngredients)
  }, [clickedIngredients])

  
  return (
    <div className="burger-stacker">
      <IngredientList onClick={handleClick}/>
      <BurgerStack clickedIngredients={clickedIngredients}/>
    </div>
  );
}

export default App;
