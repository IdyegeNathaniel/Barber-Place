import { FaPhoneAlt } from "react-icons/fa"
import { assets } from "../assets/assets"
import { HiMail } from "react-icons/hi"
import { FaLocationPin } from "react-icons/fa6"


const AboutPage = () => {
    return (
        <section className='bg-zinc-800 px-8 md:px-12 py-8'>
            <div className="container">
                <h1 className="text-amber-500 text-center md:text-4xl text-2xl pb-2">About Us</h1>
                <p className="text-white text-center text-sm ">We want whats best for you!</p>
                <div className="flex flex-col md:flex-row gap-12 my-10">
                    <img src={assets.about_us} alt="image" className="w-full md:max-w-[360px]" />
                    <div className="flex flex-col justify-center text-md gap-5 text-gray-300 md:w-2/4">
                        <p><span className="text-white font-bold">The BarberPlace</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda deserunt culpa ea, praesentium corrupti libero recusandae id. Harum dolores cumque voluptas? Nemo maiores necessitatibus cum vero distinctio iusto voluptatem!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam fugit ipsa laboriosam facilis blanditiis sunt vitae aperiam magnam, quae illo accusamus, temporibus quaerat minima maiores reprehenderit modi, vero fugiat.
                            Alias soluta aspernatur itaque veniam adipisci ratione veritatis, dolor a debitis repellendus tenetur error earum tempora exercitationem. Consequuntur modi dolorem provident dolorum excepturi voluptates deleniti nihil magnam natus, est deserunt.
                            Magnam praesentium maiores .</p>
                        <h2 className="text-white font-bold">Our Goal</h2>
                        <p>Our vision at BarberPlace is to create a seamless grooming
                            experience for every Customer. We aim to bridge the gap between our Barbers
                            and clients, making it easier for you to access the
                            service you need, when you need it.</p>
                    </div>
                </div>
                <h1 className="text-amber-500 text-xl font-bold">WHY CHOOSE US</h1>
                <div className="flex flex-col md:flex-row my-10">
                    <div className="flex flex-col gap-5 border border-gray-400 rounded px-10 md:px-16 py-8 md:py-16 text-[15px] text-gray-400 hover:bg-stone-700 transition-all duration-300 cursor-pointer hover:text-white">
                        <b>EFFICIENCY:</b>
                        <p>
                            Streamlined appointment scheduling that fits into your busy
                            lifestyle.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 border border-gray-400 rounded px-10 md:px-16 py-8 md:py-16 text-[15px] text-gray-400 hover:bg-stone-700 transition-all duration-300 cursor-pointer hover:text-white">
                        <b>CONVENIENCE:</b>
                        <p>
                            Access to a network of trusted healthcare professionals in your
                            area.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 border border-gray-400 rounded px-10 md:px-16 py-8 md:py-16 text-[15px] text-gray-400 hover:bg-stone-700 transition-all duration-300 cursor-pointer hover:text-white">
                        <b>PERSONALIZATION:</b>
                        <p>
                            Tailored recommendations and reminders to help you stay on top of
                            your health.
                        </p>
                    </div>
                </div>
                <h1 className="text-amber-500 text-xl font-bold">For More Enquiries</h1>
                <div className="flex items-center flex-col md:flex-row my-10 gap-5">
                    <div className="flex justify-center items-center text-neutral-300 border border-gray-400 rounded px-4 py-2">
                        <FaPhoneAlt className="text-xl mr-2 text-indigo-500" />
                        <h2>+234 81256 2564</h2>
                    </div>
                    
                    <div className="flex justify-center items-center text-neutral-300 border border-gray-400 rounded px-4 py-2">
                        <HiMail className="text-xl mr-2 text-indigo-500 " />
                        <h2>thebarberplace@gmail.com</h2>
                    </div>
                    
                    <div className="flex justify-center items-center text-neutral-300 border border-gray-400 rounded px-4 py-2">
                        <FaLocationPin className="text-indigo-500 text-xl mr-2" />
                        <h2>KM4 off mainland, There</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage