import Header from "./header";
import { useState } from "react";
import "./popup.css";
const Popup =({setEachData,eachData,each,index})=>{
    const [instructions,setInstructions] = useState(false);
    const [ingredients,setIngredients] = useState(false);
const instructionsHandle=(e)=>{
    e.preventDefault();
    setInstructions(true);
    setIngredients(false)

}
const ingredientsHandle=(e)=>{
    e.preventDefault();
    setInstructions(false);
    setIngredients(true)
}
    return(
        <div className="popup_content">
            <div className="popup_body">

            {/* <Header /> */}
            <div className="logo_content" onClick={()=>{setEachData(!eachData)}}>
            <img className="image_logo" src="https://png.pngitem.com/pimgs/s/79-796935_fork-knife-fork-knife-icon-png-transparent-png.png" alt="logo"></img>
            <p className="logo_text" >Recipe App</p>
            </div>
            <div className="imag_button_content">

            <img className="image_size" src={each.image} alt="recipe"></img>
            <div className="side_content_buttons">
            <div className="buttons_content">

            <button className="button_instruc" onClick={(e)=>{instructionsHandle(e)}} >Instructions</button>
            <button onClick={(e)=>{ingredientsHandle(e)}}>Ingredients</button>
   
            </div>
            <p className="recipe_text">{instructions?each.directions:""}</p>
            <p className="recipe_text">{ingredients?each.ingredients:""}</p>
        
            </div>
            {/* {ingredients?{each.directions}:""} */}
            </div>
            </div>
        </div>
    )
}
export default Popup;