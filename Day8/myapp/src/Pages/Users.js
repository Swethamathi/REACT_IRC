
import { useState } from "react";
import { useEffect } from "react";
import { getUser,deleteUser } from '../Services/Api'
const Users = () => {

    const [user, setUser] = useState([])
    const fetchData = async () => {
        try {
            const res = await getUser()
            setUser(res.data)

        }
        catch (e) {
            console.log(e)
        }
    }
const handleDelete=async(id)=>{
    try{
       const res= await deleteUser(id)
       if(res.status===200){
        alert('deleted')
       }
       fetchData()
    }
    catch(e){
        console.log(e)
    }
}
const handleEdit=(id)=>
{
    navigate('/edit/${id}')
}
    console.log(user)
 

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                            </td>
                            <td>
                                <button className="del-btn" onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            {/* <button onClick={handleAdd} */}


        </>


    )
}
export default Users