import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function CreateTag(){
    const [location, setLocation] = useState('')
    const [url, setUrl] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create', {location, url})
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return(
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <h2>Add Tag</h2>
                        <div className="mb-2">
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder="Enter Location" className="form-control"
                            onChange = {l => setLocation(l.target.value)}
                            />

                        </div>
                        <div className="mb-2">
                            <label htmlFor="">URL</label>
                            <input type="text" placeholder="Enter URL" className="form-control" 
                            onChange = {u => setLocation(u.target.value)}/>

                    
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTag