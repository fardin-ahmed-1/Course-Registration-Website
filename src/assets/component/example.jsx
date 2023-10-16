import { useState } from 'react'
import './App.css'
import Cart from './assets/Component/Cart/Cart'
import Courses from './assets/Component/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './assets/Component/Header/Header';


function App() {

  // state declare 
  let [details,setDetails]=useState([]);

  // state of remaining credit
  let [remain,setRemain]=useState(20);

  // state total credit hour
  let [time,setTime]=useState(0);

  // state for total price
  let [price ,setPrice]=useState(0)

  

  //declare function

  let handleDetails=({title,price,credit})=>{

        

       
        let remainCredit=remain-credit;
        remainCredit <0 ?  alert("Wow so easy!") : setRemain(remainCredit);
        // // remain credit end
      
    


        let newTime=time+credit;
        newTime >20 ? '' : setTime(newTime);

      
        // take time credit end
        // price set 
        // let price1=course.price;
        let newPrice=price+price;
        newTime<21 ? setPrice(newPrice):''

        // price end
         


  }


  return (

    <>

      <Header ToastContainer={ToastContainer}></Header>


      <div className='md:flex'>
        

      {/*  */}

             <Courses handleDetails={handleDetails}></Courses>
             <Cart details={details} remain={remain} time={time} price={price}></Cart>

      </div>



    </>

  )
}

export default App