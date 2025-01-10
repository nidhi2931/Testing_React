import React, { useState } from 'react';
import axios from 'axios';

const Input=()=>{
    const [files,setFiles]= useState([]);
    const [loading,setLoading] = useState(false);

    const handleFileChange=(e)=>{
        setFiles([...e.target.files]);

    }

    const handleUpload= async()=>{
        if(files.length===0){
            alert('Please select at least one.');
            return;
        }

        const formData = new FormData();
        files.forEach((file)=>{
            formData.append("files",file);
        });
        setLoading(true);
        try{
            const response = await axios.post('http://127.0.0.1:8000/test1/documents/', formData,
                {
                    headers:{
                        'Content-Type':'multipart/form-data',
                    }
                }
            );
            alert("Files uploaded successfully!");
            console.log(response.data);
            setFiles([]);
        }
        catch(error){
            console.error("Error Uplaoding files",error);
            if(error.response){
                alert(`Failed to upload files.${error.response.status}`);
            }
            else{
                alert('Failed to upload files.');
            }
        }
        finally{
            setLoading(false);
        }

    }
    return(
        <div style={{margin:"50px auto", textAlign:"center"}}>
            <h2>Upload multiple files without form</h2>
            <input type='file' multiple accept='.doc,.docx,.pdf' onChange={handleFileChange}>
            </input>
            <br/>
            <button type='button' style={{marginTop:"20px"}} disabled={loading} onClick={handleUpload}>
                {loading ? "Uploading...":"Upload"}
            </button>
        </div>
    )

}
export default Input;