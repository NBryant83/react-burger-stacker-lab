import { useState } from 'react'
import Ingredient from './Ingredient.jsx'

export default function IngredientList(props) {
  
  const ingredientObjects = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]

  const ingredients = ingredientObjects.map((ingredient, index) => {
    return <Ingredient 
              key={`yum ${index}`} 
              name={ingredient.name} 
              color={ingredient.color}
              handleClick={PaymentResponse.handleClick}
          />
  })


  return (    
    <div>
      <h1>Ingredient List</h1>
      
      {ingredients}
    </div>
  )
}