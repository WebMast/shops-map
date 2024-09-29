import Link from "next/link";

const Footer = () => {
 return (
     <footer className="w-full py-8 mt-8 text-black border-t-[1px] border-black/20">
         <div className="container mx-auto text-center">
             <Link className="text-sm" href='/contact-us'>Contact Us</Link>
             <Link className="text-sm mx-32" href='/terms-and-conditions'>Terms and conditions</Link>
             <Link className="text-sm" href='/about-us'>About Us</Link>
         </div>
     </footer>
 )
}

export default Footer;