import { useState } from "react"
export const GroceryInput=({addItem})=>{
    const [text,SetText] = useState("")
    return (
        <div>

          <input type="text" onChange={(e)=>{
              console.log(e.target.value)
              SetText(e.target.value)
          }}></input>
        
          <button onClick={()=>{
              addItem(text)
          }}>Add Groceries</button>
            
        </div>
    )
}