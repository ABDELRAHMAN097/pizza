import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Logout from './components/Logout/Logout';
import Movis from './components/Movis/Movis';
import People from './components/People/People';
import Tvshow from './components/Tvshow/Tvshow';
import Signup from './components/Signup/Signup';
import Regester from './components/Regester/Regester';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import About from './components/About/About';
import Chicken from './components/Chicken/Chicken';
import DataContextProvider from './Context/DataContext'

export const router=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path: 'regester',element:<Regester/>},
    {path:'logout',element:<Logout/>},
    {path:'movis',element:<Movis/>},
    {path:'Chicken',element:<Chicken/>},
    {path:'people',element:<People/>},
    {path:'tvshow',element:<Tvshow/>},
    {path:'signup',element:<Signup/>},
    {index: true,element:<Home/>},
    {path:'login',element:<Login/>},
    {path:'about',element:<About/>},
    {path:'*',element:<Notfound/>},
    ]}
    
  ])

  const App = () => {
 
  
  return (
    <>
  <DataContextProvider>
       
       <RouterProvider router={router}/>

  </DataContextProvider>  
    </>
  );
}

export default App;






