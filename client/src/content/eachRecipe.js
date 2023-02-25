import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./eachRecipe.css"
const EachRecipe = ({each,index})=>{
    const navigate = useNavigate();
    const [eachData,setEachData] = useState(false);
    console.log(each)
    return(
        <div key={index} className="each_item" onClick={()=>{}}>
            <img className="image" src={each.image} alt='recipe'></img>
            <p>{each.title}</p>
            {/* {eachData?<Popup/>:""} */}
        </div>
    )
}
export default EachRecipe;