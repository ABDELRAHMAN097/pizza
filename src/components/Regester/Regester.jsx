import React from 'react'
import  { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import joi from 'joi'
import axios from 'axios'
export default function Regester() {
  let navigate = useNavigate();
  const [error,setError]=useState('')
  const [errorList,serErrorList]=useState([])
  const [isLoading,setisLoading] = useState(false)
  const [user , setuser]= useState({
    first_name:'',
    last_name:'',
    email:'',
    age:'',
    password:''
  });
  
  let userData=(e)=>{
    let myUser={...user}
    console.log(e.target.value)
    myUser[e.target.name]=e.target.value;
    setuser(myUser)
    console.log(myUser)
  }
  // api fanction


  //

  let sendRegesterDataApi= async()=>{
    let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user)
    console.log(data)
    if(data.message == 'success'){
      setisLoading(false)
      // navigate('./login')
    }else{
      setError(data.message)
      setisLoading(true)
    }
  }

  let submitRegesterForm=(e)=>{
    e.preventDefault();
    valedatRegester();
    setisLoading(true)
    let validate=valedatRegester()
    console.log(validate)
    if(validate.error){
      setisLoading(false)
      serErrorList(validate.error.details)
    }else{
      setisLoading(true)
      sendRegesterDataApi();
    }

  }

  let valedatRegester=()=>{
    const schem=joi.object({
      first_name:joi.string().min(3).max(8).required(),
      last_name:joi.string().min(3).max(8).required(),
      email:joi.string().email({tlds:['com','net']}).required(),
      password:joi.string(),
      age:joi.number().min(16).max(60).required()
    })
  return schem.validate(user,{abortEarly:false})
  }
  
  
  return (
    <div className='py-5'> 
      <h4 className='fw-bold my-4'>Regesteration Form</h4>
      {errorList.map((err,index)=>{
      return  <div key={index} className='alert alert-danger my-2'>{err.message}</div>
      })}
      <form onSubmit={submitRegesterForm}>

      <input onChange={userData} type="text" name='first_name'placeholder='first_name' className='form-control my-input my-3' id='first_name'/>

      <input onChange={userData} type="text" name='last_name' placeholder='last_name' className='form-control my-input my-3' id='last_name'/>

      <input onChange={userData} type="email" name='email' placeholder='email' className='form-control my-input my-3' id='email'/>

      
      <input onChange={userData} type="number" placeholder='age' name='age' className='form-control my-input my-3' id='age'/>

      <input onChange={userData} type="password" placeholder='**********' name='password' className='form-control my-input my-3' id='password'/>
      {error.length> 0 ? <div className='alert alert-danger my-2'>{error}</div> : ''}
      <button className='btn btn-info'>{isLoading==true ? <i className='fas fa-spinner fa-spin'></i>:"Regester"}</button>
      </form>
    </div>
  )
}
