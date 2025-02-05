import { useState } from "react"
import { service } from "../assets/assets"
import Slider from "../Components/Slider"



const ServicePage: React.FC = () => {

  const [selectService, setSelectService] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [selectDate, setSelectDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  return (
    <section className='bg-zinc-800 px-8 md:px-12 py-2'>
     <div className="max-w-md lg:max-w-5xl p-8 bg-zinc-900 mx-auto shadow-md rounded-md my-20">
        <h2 className="text-2xl font-bold text-amber-500 mb-6 flex items-center justify-center">✂️ Book Your Appointment</h2>
      <form className="space-y-4 text-white">
        <div>
          <label htmlFor="service" className="flex items-center mb-2 font-medium block">Select Service</label>
          <select name="service" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2">
            <option value="">Choose a Service</option>
            {
              service.map((item, index) => (
                <option value={service} key={index}>{item}</option>
              ))
            }
          </select>
        </div>
        
        <div>
          <label htmlFor="date" className="flex items-center mb-2 font-medium block">Select date</label>
          <input type="date" name="date" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2 cursor-pointer" />
        </div>
        
        <div>
          <label htmlFor="time" className="flex items-center mb-2 font-medium block">Select Time</label>
          <input type="time" name="time" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2 cursor-pointer" />
        </div>
        
        <div>
          <label htmlFor="name" className="flex items-center mb-2 font-medium block">Enter Your Name</label>
          <input type="text" name="name" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2" />
        </div>
          <button className="w-full bg-amber-500 text-white p-3 rounded hover:bg-amber-600 transition-colors mt-2">Book Appointment</button>
      </form>
      </div>
      <h1 className="text-amber-500 text-2xl md:text-3xl lg:text-4xl text-center">Our Gallery</h1>
      <p className="text-center text-gray-500 text-sm mb-10">Go through our gallery and choose what style suits you best</p>
      <div className="relative mb-20">
        <Slider /> 
      </div>
    </section>

  )
}

export default ServicePage