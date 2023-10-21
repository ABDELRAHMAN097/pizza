import React from 'react'
import  { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import joi from 'joi'
import axios from 'axios'

export default function Login() {
  let navigate = useNavigate();
  const [error,setError]=useState('')
  const [errorList,serErrorList]=useState([])
  const [isLoading,setisLoading] = useState(false)
  const [user , setuser]= useState({
    email:'',
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

  let sendLoginDataApi= async()=>{
    let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signin',user)
    console.log(data)
    if(data.message == 'success'){
      setisLoading(false)
      navigate('/home')
    }else{
      setError(data.message)
      setisLoading(true)
    }
  }

  let submitLoginForm=(e)=>{
    e.preventDefault();
    valedatLogin();
    setisLoading(true)
    let validate=valedatLogin()
    console.log(validate)
    if(validate.error){
      setisLoading(false)
      serErrorList(validate.error.details)
    }else{
      setisLoading(true)
      sendLoginDataApi();
    }

  }

  let valedatLogin=()=>{
    const schem=joi.object({
      email:joi.string().email({tlds:['com','net']}).required(),
      password:joi.string()
    })

  return schem.validate(user,{abortEarly:false})}

  return (
    <div className='py-5'> 
      <h4 className='fw-bold my-4'>Logination Form</h4>
      {errorList.map((err,index)=>{
      return  <div key={index} className='alert alert-danger my-2'>{err.message}</div>
      })}
      <form onSubmit={submitLoginForm}>
      
      <label htmlFor="email">email</label>
      <input onChange={userData} type="email" name='email' className='form-control my-input my-3' id='email'/>

      <label htmlFor="password">password</label>
      <input onChange={userData} type="password" name='password' className='form-control my-input my-3' id='password'/>
      
      {error.length> 0 ? <div className='alert alert-danger my-2'>{error}</div> : ''}
      <button className='btn btn-info'>{isLoading==true ? <i className='fas fa-spinner fa-spin'></i>:"Login"}</button>
      </form>
    </div>
  )
}