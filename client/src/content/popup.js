import Header from "./header";
import { useState } from "react";
import "./popup.css";
const Popup =({setEachData,eachData,each,index})=>{
    const [instructions,setInstructions] = useState(false);
    const [ingredients,setIngredients] = useState(false);

    return(
        <div className="popup_content">
            <div className="popup_body">

            <Header/>
            <div>

            <img src={each.image} alt="recipe"></img>
            <div>

            <button onClick={()=>{setInstructions(!instructions)}}>Instructions</button>
            <button onClick={()=>{setIngredients(!ingredients)}}>Ingredients</button>
        
   
            [instructions?{each.instructions}:""]
            [ingredients?{each.directions}:""]
            {/* {ingredients?{each.directions}:""} */}
            </div>
            </div>
            </div>
        </div>
    )
}
export default Popup;