import React,{ useState } from 'react';
import axios from 'axios';


const InputForm =()=>{
    const [formData,SetFormData] = useState({
        "email":"",
        "username":"",
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;

        SetFormData({
            ...formData,
            [name]:value,
        });
    };
    

    const handleSubmit = async(event)=>{
        event.preventDefault();
   

    try{
        const response = await axios.post('http://127.0.0.1:8000/input_field_test/user/',{
            email:formData.email,
            username:formData.username,
        });

        alert("Data sent successfully"+JSON.stringify(response.data));
    }
    catch(error){
        console.error("Error sendign data",error);
        alert('Failed to send data!');

    }};
    return(
        <div className='container mt-5'>
            <h2>Send Input to API</h2>
            <form onSubmit ={ handleSubmit }>
                <div className='mb-3'>
                    <label htmlFor='inputField' className='form-label'>Enter Email:</label>
                    <input type="email"
                    className='form-control'
                    id="email"
                    name="email"
                    placeholder = 'Enter a valid email'
                    value={FormData.email}
                    onChange={handleChange}
                    required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='inputField'className='form-label'>Enter Username:</label>
                    <input type='text'
                    className='form-control'
                    id='username'
                    name="username"
                    placeholder='Enter a valid username'
                    value={FormData.username}
                    onChange={handleChange}
                    required />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>

    );

};

export default InputForm;