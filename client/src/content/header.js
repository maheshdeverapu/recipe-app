import { Link, useNavigate } from "react-router-dom";

const Header=()=>{
    // const [search,setSearch] = useState("");
    // const [data,setData]= useState([]);
    const navigate = useNavigate()
    // useEffect(()=>{
    //     searchHandle();
    // },[])
    // const searchHandle=(e)=>{
    //     e.preventDefault();
    //     let value = e.target.value;
    //     fetch("/getRecipe",{
    //     method:"get",
    //     headers:{
    //         "content-type":"application/json",
    //         "Authorization":localStorage.getItem("token")
    //     }
    // }).then(res=>res.json()).then((data)=>{
    //     if(data.error){
    //         return alert(data.error)
    //     }
    //     console.log(data);
    //     // setData()
    // }).catch((err)=>{
    //     console.log(err)
    // }).finally()

    // }
    const logoutHandle=(e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate("/");
    }
    return(
        <div>

        
        <div>

            
            <Link to={"/home"}><p><img src="https://png.pngitem.com/pimgs/s/79-796935_fork-knife-fork-knife-icon-png-transparent-png.png" alt="logo"></img>home page</p></Link>
            {/* <input type={"text"} onChange={(e)=>{searchHandle(e)}} value={search}/> */}

        </div>
        <div>
            <button onClick={(e)=>{logoutHandle(e)}}>logout</button>
        </div>
        </div>
    )
}
export default Header;