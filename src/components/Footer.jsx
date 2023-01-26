import React from 'react'
import{
    FaDribbbleSquare,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolore dolores, quidem voluptatem ad sint cumque ab reiciendis consequuntur, fugiat blanditiis suscipit.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebook size={30}/>
            <FaDribbbleSquare  size={30}/>
            <FaGithub  size={30}/>
            <FaGithub  size={30}/>
            <FaInstagram  size={30}/>
            <FaTwitter  size={30}/>
        </div>

        </div>
        <div className='lg:col-span-3 flex justify-between'>
            <div>
                <h5 className='font-medium text-gray-400'>Solutions</h5>
                <ul>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Analytic</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                   

                </ul>
            </div>
            <div>
                <h5 className='font-medium text-gray-400'>Support</h5>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guide</li>
                    <li className='py-2 text-sm'>Status</li>
                   

                </ul>
            </div>
            <div>
                <h5 className='font-medium text-gray-400'>Company</h5>
                <ul>
                    <li className='py-2 text-sm'>ABout</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                   

                </ul>
            </div>
        </div>
       
   
      
    </div>
  )
}

export default Footer
