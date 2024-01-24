import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Tag(){
    const [tag, setTag] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setTag(res.data))
        .catch(err => console.log(err))

    },[])

const handleDelete = async (id) => {
    try{
        await axios.delete('http://localhost:8081/tag/'+id)
        window.location.reload()
    }catch(err){
        console.log(err);
    }

}

    return (
        <div className='d-flex bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3.5'>
            <Link to="http://127.0.0.1:5500/index.html" className='btn'>Home</Link>
            <Link to="/insights" className='btn'>Insights</Link>
            <Link to="/map" className='btn'>Map</Link>


                <Link to ="/create" className='btn btn-success'>Add Tag</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Tag ID</th>
                            <th>Location</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tag.map((data, i) => (
                                <tr>
                                    <td>{data.tag_id}</td>
                                    <td>{data.location}</td>
                                    <td>{data.destination_link}</td>
                                    <td>
                                        <Link to={`update/${data.tag_id}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger' onClick={e => handleDelete(data.tag_id)}>Delete</button>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
            </div>
        </div>
        
    )
}

export default Tag;