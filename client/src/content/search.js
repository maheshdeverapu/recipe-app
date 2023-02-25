// import { useEffect, useState } from "react";
// import "./search.css";
// const Search=({setData,data})=>{
//     const [searchValue,setSearchValue] = useState("");
//     // setData(searchValue)
//     // useEffect(()=>{
//     //     setData(searchValue)
//     // },[searchValue])
//     const searchRecipeHandle=(e)=>{
//         e.preventDefault();
//         setSearchValue(e.target.value)
//         let value = e.target.value;
//         fetch(`/getSearchRecipe/${value}`,{
//         method:"get",
//         headers:{
//             "content-type":"application/json",
//             "Authorization":localStorage.getItem("token")
//         }
//     }).then(res=>res.json()).then((data)=>{
//         if(data.error){
//             return alert(data.error)
//         }
//         console.log(data);
//         // setSearchValue(data.title)
//     }).catch((err)=>{
//         console.log(err)
//     }).finally()

//     }
//     return(
//         <div className="search_bar_content">
//  <input className="search_bar" type={"text"} placeholder="search recipe with title here" onChange={(e)=>{searchRecipeHandle(e)}} value={searchValue}/>
//         </div>
//     )
// }
// export default Search;