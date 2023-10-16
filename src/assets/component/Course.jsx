import dollar_simble from '../images/dollar-sign.svg'
import Frame from '../images/Frame.svg'

const Course = ({ course, handbutton }) => {
    const { coursename, credit, price, description, image } = course
    return (
        <div className="p-3 rounded-lg bg-white space-y-3">
            <img className='w-full' src={image} alt="Course cover image" />
            <h1 className="text-lg text-[#1C1B1B] font-semibold">{coursename}</h1>
            <p className="text-sm text-[#1C1B1B99] font-normal">{description.slice(0, 108)}...</p>
            <div className='flex justify-between'>
                <div className='flex gap-2 '>
                    <img src={dollar_simble} alt="" />
                    <p className="text-base text-[#1C1B1B99] font-medium"> Price : {price}</p>
                </div>
                <div className='flex gap-3 '>
                    <img src={Frame} alt="" />
                    <p className="text-base text-[#1C1B1B99] font-medium"> Credit : {credit}hr</p>
                </div>
            </div>
            <button onClick={()=>handbutton(coursename, credit, price, course)} className='w-full bg-[#2F80ED] rounded-lg text-lg text-white font-medium py-2 mb-9'> Select </button>
        </div>
    )
}
export default Course