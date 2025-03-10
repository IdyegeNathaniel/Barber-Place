import { ChangeEvent, FormEvent, useState } from "react"
import { service, TimeSlot, timeSlots } from "../assets/assets"
//import Slider from "../Components/Slider"
import { FaScissors } from "react-icons/fa6";


export interface BookingDetails {
  selectService: string;
  date: string;
  time: string;
  name: string;
  phone: string
}


const ServicePage: React.FC = () => {

  const [formData, setFormData] = useState<BookingDetails>({
    selectService: '',
    date: '',
    time: '',
    name: '',
    phone: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('Form Data:', formData)
  }



  //GETTING CURRENT TIME
  const getCurrentDate = (): string => {
    const now = new Date();

    return now.toISOString().split('T')[0];
  };

  //GETTING CURRENT TIME
  const getAvailableTime = (): TimeSlot[] => {
    const now = new Date();

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    return timeSlots.filter(slot => {
      if (formData.date === getCurrentDate()) {
        const [hours] = slot.value.split(':').map(Number);
        return hours > currentHour ||
          (hours === currentHour && 0 > currentMinute);
      }
      return true;
    });
  }


  return (
    <section className='bg-zinc-800 px-8 md:px-12 py-2'>
      <div className="max-w-md lg:max-w-5xl p-8 bg-zinc-900 mx-auto shadow-md rounded-md my-5 md:my-20">
        <h2 className="text-2xl font-bold text-amber-500 mb-6 flex items-center justify-center"><FaScissors className="mr-2 " /> Book Your Appointment</h2>
        <form className="space-y-4 text-white" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="service" className="flex items-center mb-2 font-medium ">Select Service</label>
            <select name="service" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2 cursor-pointer" onChange={handleInputChange}>
              <option value="">Choose a Service</option>
              {
                service.map((item, index) => (
                  <option key={index} value={formData.selectService}>{item.type} ({item.duration}Mins)</option>
                ))
              }
            </select>
          </div>

          {/* DATE AND TIME */}
          <div className="flex gap-10">
            <div className="w-1/2">
              <label htmlFor="date" className="flex items-center mb-2 font-medium ">Select date</label>
              <input type="date" name="date" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2 cursor-pointer" min={getCurrentDate()} value={formData.date} onChange={handleInputChange} />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="flex items-center mb-2 font-medium ">Select Time</label>
              <select name="time" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2 cursor-pointer" value={formData.time} onChange={handleInputChange} disabled={!formData.date}>
                <option value="">Pick a Time</option>
                {
                  getAvailableTime().map((slot) => (
                    <option key={slot.value} value={slot.value}>{slot.label}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* NAME */}
          <div>
            <label htmlFor="name" className="flex items-center mb-2 font-medium ">Enter Your Name</label>
            <input type="text" name="name" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2" value={formData.name} onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="phone" className="flex items-center mb-2 font-medium ">Phone Number</label>
            <input type="tel" name="phone" className="w-full bg-zinc-800 border border-zinc-700 outline-none p-2" value={formData.phone} onChange={handleInputChange} />
          </div>

          <button className="w-full bg-amber-500 text-white p-3 rounded hover:bg-amber-600 transition-all duration-300 cursor-pointer mt-5 font-semibold" type="submit" disabled={!formData.selectService || !formData.date || !formData.time} >Book Appointment</button>
        </form>
      </div>
      <h1 className="text-amber-500 text-2xl md:text-3xl lg:text-4xl text-center font-medium">Our Gallery</h1>
      <p className="text-center text-gray-500 text-sm md:text-xm  mb-10">Go through our gallery and choose what style suits you best</p>
      {/* GALLERY CAROUSEL */}
      <div className="relative mb-20">
        {/* <Slider /> */}
      </div>
    </section>

  )
}

export default ServicePage