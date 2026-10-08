import { useEffect,useState } from "react";


function Information(){
    const[users,setUsers]= useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then ((data)=>{
            setUsers(data)
        })
    },[])

    return(
        <div>
            <h1>users</h1>

            <table  border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                        </tr>
                   ))}
                </tbody>
            </table>
        </div>
    )
}
export default Information