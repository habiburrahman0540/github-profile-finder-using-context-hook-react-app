import React,{useState,useEffect} from 'react'
import Spinners from "../layout/Spinner"
const UserResult = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] =useState(true)
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
            headers:{
                Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        const data = await response.json();
        setUsers(data);
        setLoading(false)

    }
    if(!loading){
        return (
            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user)=>(
                     <h3>{user.login}</h3>
        ))}
            </div>
          )
    }else{
        return <Spinners/>
    }
 
}

export default UserResult