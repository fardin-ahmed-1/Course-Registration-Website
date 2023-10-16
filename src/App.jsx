import './App.css'
import Courses from './assets/component/Courses'
import Sidebar from './assets/component/Sidebar'
import Header from './assets/component/Header'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [coursePrice, setCoursePrice] = useState(0)
  const [credit, setCredit] = useState(0)
  const [courseName, setCourseName] = useState([])
  const [remaining, setRemaining] = useState(20)
  const handbutton = (coursename, courseCreadit, price) => {
    const isHave = courseName.find((item) => item == coursename)
    if (isHave) {
      return toast('This item is already selected.')
    } 
    const newCredit = (credit + courseCreadit)
    const newPrice = (coursePrice + price)
    const newRemaining = (remaining - courseCreadit)
      if (newCredit<=20) {
        setRemaining(newRemaining)
        setCredit(newCredit)
      setCoursePrice(newPrice)
      } else{
        return  toast("Selection Error: You have exhausted your available credit limit  of 20 ") 
    }
    const newCoureName = [...courseName, coursename]
    setCourseName(newCoureName)
  }
  return (
    <>
      <Header ToastContainer={ToastContainer}></Header>
      <div className='flex-none lg:flex gap-5 py-14'>
        <div className='flex-1'>
          <Courses handbutton={handbutton}></Courses>
        </div>
        <div className='w-full lg:w-[310px] mt-6 md:mt-0'>
          <Sidebar coursePrice={coursePrice} courseName={courseName} credit={credit} remaining={remaining}> </Sidebar>
        </div>
      </div>
    </>
  )
}
export default App
