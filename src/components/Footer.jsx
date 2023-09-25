import {FaFacebook, FaGithub, FaYoutube, FaTwitch, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return ( <>
    <div className="w-full flex justify-between bg-[#02044A] text-gray-300 py-8 px-2">
        <div className="col-span-2 pt-2 md:pt-2 m-auto">
            <div className="">
            <p className=" text-center font-bold uppercase">Subscribe to our Newsletter!</p>
            <p>The latest news and articles will be sent to your inbox weekly.</p>
            </div>
            <form className="flex flex-col mt-2 sm:flex-row" action="">
            <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Enter email address" />
            <button className="p-2 mb-4 bg-[#00B86E] hover:border-green-500 hover:text-green-500">Subscribe</button>
        </form>
        <p className='text-center mb-2'>Stay Updated on my Socials : </p>
            <ul className="flex justify-center items-center gap-7">
                <a href="" className='hover:text-blue-500'><FaFacebook/></a>
                <a href="" className='hover:text-gray-500'><FaGithub/></a>
                <a href="" className='hover:text-red-500'><FaYoutube/></a>
                <a href="" className='hover:text-purple-500'><FaTwitch/></a>
                <a href="" className='hover:text-black'><FaTwitter/></a>
            </ul>
        </div>
        
    </div>
    </> );
}
 
export default Footer;