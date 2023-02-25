import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./addRecipe.css";
const AddRecipe =()=>{
    const [addRecipeData,setaddRecipeData] = useState([]);
    const navigate = useNavigate();
    const addrecipeHandle = (e)=>{
        e.preventDefault();
        if(Object.keys(addRecipeData).length!==5){
            return alert('please fill all fields')
          
        }
        fetch("/addRecipe",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token"),               
            },

            body:JSON.stringify({
                addRecipeData,user:JSON.parse(localStorage.getItem("userID"))
                
            })
        }).then(res=>res.json()).then((data)=>{
            if(data.error){
                return alert(data.error)
            }
            alert('recipe added successfully')
            console.log(data)
            // localStorage.setItem("token",data.token)
            // localStorage.setItem("userID",data.userID)
            navigate("/home")
    }).catch((err)=>{
        console.log(err)
    }).finally()

    }
    return(
        <div className="addrecipe_content">
            <div className="addrecipe_data">
          
           
        
                <Link className="show_recipe" to={"/home"}>show recipe List</Link>
            
        
                <h1>Add recipe</h1>
                <p>Create new recipe</p>
            
                    <input type={"text"} placeholder="Recipe title" onChange={(e)=>{setaddRecipeData({...addRecipeData,title:e.target.value})}}/>
                
            
                    <input type={"text"} placeholder="Author" onChange={(e)=>{setaddRecipeData({...addRecipeData,author:e.target.value})}}/>
                
            
                    {/* <input type={"text"} placeholder="Author" onChange={(e)=>{setaddRecipeData({...addRecipeData,Author:e.target.value})}}/> */}
            
            
                    <input type={"text"} placeholder="Please paste your image link" onChange={(e)=>{setaddRecipeData({...addRecipeData,image:e.target.value})}}/>
                
            
                    <input type={"text"} placeholder="Ingredients" onChange={(e)=>{setaddRecipeData({...addRecipeData,ingredients:e.target.value})}}/>
                
            
                    <input type={"text"} placeholder="Recipe directions" onChange={(e)=>{setaddRecipeData({...addRecipeData,directions:e.target.value})}}/>
                
               <button onClick={(e)=>{addrecipeHandle(e)}}>Submit</button>
            
           
            </div>
        </div>
    )
}
export default AddRecipe;