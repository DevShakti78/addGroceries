import { GroceryInput } from "./Grocerinput"
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'
import { AddToList } from "./Grocerylist";

export const Grocery =()=>{
    const [Item,SetItem] = useState([])
    const addItem = (product) =>{
const pro = {
    id: uuidv4(),
    ProdName:product

}
SetItem([...Item,pro])
    }
    return(
    <div>
      <GroceryInput addItem={addItem}/>  
      {Item.map((e)=>
<AddToList Item={e.ProdName} key={e.id}/>

      )}
    </div>
    )
}