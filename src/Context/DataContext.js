import { createContext, useEffect, useState } from "react";

 export let DataContext = createContext('')

export default function DataContextProvider(props){

     const [data,setData]=useState([]);

  const apiGit = ()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              // console.log(json);
              setData(json)
            })
  }
  useEffect(()=>{
    apiGit()
  },[])

    return <DataContext.Provider value={{data}}>
{props.children}
    </DataContext.Provider>
}