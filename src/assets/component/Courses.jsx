import { useEffect } from "react"
import { useState } from "react"
import Course from "./Course"
const Courses = ({handbutton}) => {
    const [courses, setCourses]=useState([])
    useEffect(()=>{
        fetch('coursedata.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {
    courses.map(course=> <Course key={course.id} course={course} handbutton={handbutton}> </Course> )
}
</div>
  )
}
export default Courses