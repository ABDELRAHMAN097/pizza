
import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'



export default function Home() {
 let {data} = useContext(DataContext)
  return (
    <>
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

//010 30 18 33 53


