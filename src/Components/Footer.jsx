import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
<<<<<<< HEAD
  
=======
      <div className='h-60 md:flex mt-20  opacity-90 justify-evenly md:h-40  items-center bg-violet-300 w-4/5 mx-auto'>
        <p className='text-4xl mt-10  w-100 md:text-5xl md:w-150 mb-10 text-amber-500 font-bold '>
          Subscribe to recieve future updates!</p>
        <input className='  w-100  md:mt-5  bg-gray-400 p-3 opacity-80 rounded-xl  text-black text-2xl md:mr-20 md:w-150 h-15' type="email" placeholder="Enter Your Email Address" id="" />
        <button className='mt-2 md:cursor-pointer bg-blue-300  h-10 rounded-xl px-3 text-amber-50 text-xl md:mr-30'>Subscribe</button></div>
>>>>>>> ad182f414dec03c87ddf4df1ec41a2b63a63efdb
      <div className='flex flex-col  items-center  gap-10 mt-30   bg-pink-100 justify-evenly  md:flex-row    '>
        <div className='flex-col '>
          <div><img className='max-w-20 mt-5 max-h-20 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumBDVsn-16viIQ9pFnRB2awDWgjZ87c57xQ&s" alt="" srcset="" /><h1 className='font-bold text-2xl '>Job Dhundo</h1></div>
          <p className='w-100   font-semibold mt-5 md:w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, neque quos! Pariatur placeat laudantium similique laborum eligendi possimus nam cum, exercitationem adipisci consequatur nihil iusto iure quos quisquam ullam nostrum?</p>
          <div className='flex mb-6  mt-4 items-center gap-5 text-4xl'>
            <FaInstagramSquare className='text-pink-400' />
            <FaTwitter className='text-blue-400' />
            <FaYoutube className='text-red-600' />
            <FaFacebookSquare className='text-blue-400' />
          </div>
        </div>
        <div className='mr-20  md:mr-0'><h1 className='text-3xl text-black  font-extrabold '>About</h1>
          <ul className='mt-4  font-bold text-gray-800'><li>Job</li>

            <li>Privacy</li>

            <li>Police</li>

            <li>Application</li>

            <li>Candidates</li></ul></div>
        <div ><h1 className='text-3xl text-black  font-extrabold'>Quick Links</h1>
          <ul className='mt-4  font-bold text-gray-800'><li>All Job</li>

            <li>Job Details</li>

            <li>How to Apply</li>

            <li>Resume</li>

          </ul></div>
        <div><h1 className='text-3xl  text-black  font-extrabold'>Get in Touch</h1>
          <ul className='mt-4  font-bold  text-gray-800'><li>India</li>



            <li>+012345</li>

            <li>deepibhatt03@gmail.com</li>

            <li>9911124378</li></ul></div>
      </div>
      <div className=' mt-15 text-center '>
        <ul><li className='text-4xl font-bold mt-5 '>Our Products</li>
          <li className='text-xl text-gray-500 font-semibold   mt-7'>Our other brands and products, you might be interested</li>
          <li className='grid grid-cols-3  gap-5 md:flex items-center justify-evenly  mb-5 mt-10'><div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://play-lh.googleusercontent.com/wiAQAX41pAP7n4MN6Jk90lo_A3HqsYk_x-7Fkd8T6ryNl9bgOOyF5zF4McUhk_o1iQ" alt="logo" srcset="" /> <p className='font-bold text-xl'>Cutshort</p></div>
            <div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://www.onlinemarketplaces.com/wp-content/uploads/2021/07/snaphunt.png" alt="logo" srcset="" /> <p className='font-bold text-xl'>SanpHunt</p></div>
            <div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewWviN7O6ryCUvog0cEtRDDVebtZrEPWt6A&s" alt="logo" srcset="" /> <p className='font-bold text-xl'>Upwork</p></div>
            <div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoA9cO-yJCqCfH0Mf-8zeig7kZwvExfaxVA&s" alt="logo" srcset="" /> <p className='font-bold text-xl'>GlassDoor</p></div>
            <div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://play-lh.googleusercontent.com/76gEFhQto5xMHr2Qf8nWLvm1s0O60clhkwHvxQDSeI3hthf7Zs05JJQeyg5H347DGQ" alt="logo" srcset="" /> <p className='font-bold text-xl'>Naukri</p></div>
            <div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://avatars.slack-edge.com/2022-06-08/3628164267735_7035d65564bb181b33f7_512.png" alt="logo" srcset="" /> <p className='font-bold text-xl'>Indeed</p></div>
            <div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://yt3.googleusercontent.com/vmpMU5zsNrS8_NqkdwJP48h75YuhtbtUjUcmmXyxbpmopSMx51RiNIA47n5hqrMZ4PRjTX-d4Mc=s900-c-k-c0x00ffffff-no-rj" alt="logo" srcset="" /> <p className='font-bold text-xl'>TimesJob</p></div>
            <div className=' flex items-center  gap-1 justify-center'> <img className='w-10 h-10 rounded-full' src="https://pimwp.s3-accelerate.amazonaws.com/2023/02/Untitled-design-2022-12-19T101207.258.jpg.webp" alt='logo' srcset="" /> <p className='font-bold text-xl'>Foundit</p></div></li>
          <hr className='opacity-20' />
          <li className='text-lg mb-3  mt-3  text-gray-500'>@  Copyright 2025 - Job Dhundo | A Product by 4th year students</li></ul>
      </div>
    </div>
  )
}

export default Footer
