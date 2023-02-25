import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import EachRecipe from "./eachRecipe";
import Search from "./search";
import "./home.css";

const Home=()=>{
    const [search,setSearch] = useState("");
    const [data,setData]= useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        // console.log(localStorage.getItem("token"))
        if(localStorage.getItem("token")==null){
            return navigate("/")
        }
        search_Handle();
        
    },[])
    const search_Handle=()=>{
        // e.preventDefault();
        // let value = e.target.value;
        fetch("/getRecipe",{
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
        setData(data.recipe)
    }).catch((err)=>{
        console.log(err)
    }).finally()

    }

    const searchHandle=(e)=>{
        e.preventDefault();
        // setSearchValue(e.target.value)
        let value = e.target.value;
        setSearch(e.target.value)
        fetch(`/getSearchRecipe/${value}`,{
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
        setData(data.recipe)
    }).catch((err)=>{
        console.log(err)
    }).finally()

    }

    const addrecipeHandle=(e)=>{
        e.preventDefault();
        navigate("/addRecipe")
    }
    return(
        <div>
            {/* <i class="fa-solid fa-fork-knife"></i> */}
            {/* <Link to={"/home"}><p><img src="https://png.pngitem.com/pimgs/s/79-796935_fork-knife-fork-knife-icon-png-transparent-png.png" alt="logo"></img>home page</p></Link> */}
            {/* <p><i class="fa-solid fa-fork-knife"></i>home page</p> */}
            <Header/>
            {/* <Search setData={setData} data={data}/> */}
            <div className="search_bar_content">
            <input className="search_bar" type={"text"} onChange={(e)=>{searchHandle(e)}} value={search}  placeholder="search recipe with title here" />
            </div>
            <div className="image_addRecipe">

            <img onClick={(e)=>{addrecipeHandle(e)}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCyOMBh3MAw0ncgGiyUt5RXsOGHUTyJ0PrT1qjQklnQ&s" alt="add recipe"></img>
            </div>
            <div className="each_recipe_content">

            {data?(data?.map((each,index)=>{
                return(
                  
                        <EachRecipe each={each} key={index}/>
                        
                )
            })):""}
            </div>
        </div>
    )
}
export default Home;