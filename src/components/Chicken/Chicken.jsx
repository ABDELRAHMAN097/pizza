import React, { useEffect, useState } from 'react'
// import { json } from 'react-router-dom';

export default function Chicken() {
  const [data,setData]=useState([]);

  const apiGit = ()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              console.log(json);
              setData(json)
            })
  }

  useEffect(()=>{
    apiGit()
  },[])

  return (
    <>
    my store
    <br />
    <button className='btn btn-danger my-5' onClick={apiGit}>All Products</button>
    <br />
    {/* <pre>{json.stringify(data,null,2)}</pre> */}
    
 
     
 <div className="contaner">
       <div className="row">
        {data.map((item)=>{
          return <div className="col-md-4" key={item}>
            <img style={{height:"200px"}} src={item.image} alt='' className="w-100"/>
            <h3>{item.title}</h3>
            <p>Price:{item.price}</p>
            <p>{item.description}</p>
          </div>
        })}
       </div>
      </div>
      
    </>
  )
}
