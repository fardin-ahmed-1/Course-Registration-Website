const Sidebar = ({ coursePrice, courseName, credit, remaining}) => {
  
  return (
    <div className="py-6 px-6 rounded-lg bg-white space-y-2">
        <h1 className="text-lg text-[#2F80ED] font-bold border-b-[1px] border-[#1C1B1B33] pb-3">Credit Hour Remaining {remaining} hr</h1>
        <h1 className="text-lg text-[#1C1B1B] font-bold pt-3">Course Name </h1>

        <ol className="list-decimal px-6 pb-3 space-y-2">
           
            {courseName.map((name, index)=> <li key={index} className="text-base text-[#1C1B1B99] font-medium">{name}</li>)}
        </ol>

        <h1 className="text-lg text-[#1C1B1B] font-medium border-t-[1px] border-[#1C1B1B33] pt-2">Total Credit Hour : {credit}  </h1>
        <h1 className="text-lg text-[#1C1B1B] font-medium border-t-[1px] border-[#1C1B1B33] pt-2">Total Price : {coursePrice.toFixed(2)} USD</h1>
    </div>
  )
}

export default Sidebar