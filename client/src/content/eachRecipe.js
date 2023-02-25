import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./eachRecipe.css"
import Popup from "./popup";
const EachRecipe = ({each,index})=>{
    const navigate = useNavigate();
    const [eachData,setEachData] = useState(false);
    console.log(each)
    return(
        <div key={index} className="each_item" onClick={()=>{setEachData(!eachData)}}>
            <img className="image" src={each.image} alt='recipe'></img>
            <p>{each.title}</p>
            {eachData?<Popup each={each} key={index} setEachData={setEachData} eachData={eachData}/>:""}
        </div>
    )
}
export default EachRecipe;