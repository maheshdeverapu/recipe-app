import { useState } from "react";

const Search=()=>{
    const [searchValue,setSearchValue] = useState("");
    const searchRecipeHandle=(e)=>{
        e.preventDefault();
        setSearchValue(e.target.value)
        // let value = e.target.value;
        fetch(`/getSearchRecipe/${searchValue}`,{
        method:"get",
        headers:{
            "content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
    }).then(res=>res.json()).then((data)=>{
        if(data.error){
            return alert(data.error)
        }
        console.log(data);
        // setData(data.recipe)
    }).catch((err)=>{
        console.log(err)
    }).finally()

    }
    return(
        <div>
 <input type={"text"} onChange={(e)=>{searchRecipeHandle(e)}} value={searchValue}/>
        </div>
    )
}
export default Search;