import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function UpdateTag(){
    const [location, setLocation] = useState('')
    const [url, setUrl] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {location, url})
        .then(res => {
            console.log(res);
            navigate('/')
        }).catch(err => console.log(err));
    }
    return(
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <h2>Update Tag</h2>
                        <div className="mb-2">
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder="Enter Location" className="form-control"
                            onChange = {e => setLocation(e.target.value)}
                            />

                        </div>
                        <div className="mb-2">
                            <label htmlFor="">URL</label>
                            <input type="text" placeholder="Enter URL" className="form-control" 
                            onChange = {e => setUrl(e.target.value)}/>

                    
                        </div>
                        <button className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateTag