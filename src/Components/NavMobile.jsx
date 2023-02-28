import { navigation } from "../data";
import { XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { Bars3BottomLeftIcon as MenuAlt3Icon } from '@heroicons/react/24/outline';
import Tejas_Resume from "../Resume/Tejasvi_Bishnoi_Resume.pdf";

// import Socials from "./Social";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";

const NavMobile = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/10uJHnnfIZK_9STVG-mMtqizP4eTsbBAP/view?usp=sharing"
        );
      };

   const circleVariants = {   // these are framer motion variants
        hidden:{
            scale:0
        },
        visible:{
            scale:180,
            transition:{
                type: 'spring',
                stiffness: 160,
                damping: 60,
            },
        },
    };

    const ulVariants = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                delay:0.1,
            },
        },
    };

    return <nav className=" relative">
        <div onClick={()=> setIsOpen(true)} className="cursor-pointer text-white ">
            <MenuAlt3Icon className=' w-8 h-8'/>
        </div>

        {/* this code below is for motion-framer enabled effect */}
        <motion.div variants={circleVariants}
        initial='hidden' animate={isOpen? 'visible':'hidden'}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'>
        </motion.div>

        {/* Menu starts from here */}
        <motion.ul variants={ulVariants} initial='hidden'
        animate={isOpen? 'visible': ''}
        className={`${isOpen? 'right-0':'-right-full'}
         fixed top-0 bottom-0 w-full flex flex-col justify-center
          items-center transition-all duration-300 overflow-hidden`}>
            
            {/* Menu Close Icon here */}
            <div onClick={()=> setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
                <XIcon className="w-8 h-8"/>
            </div>
                {
                    navigation.map((item, index)=>{
                        return <li key={index} className='mb-8'>
                            <Link 
                            to={item.href}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            onClick={()=> setIsOpen(false)}
                            className=' text-xl cursor-pointer capitalize'>
                                {item.name}
                            </Link>
                        </li>
                })
            }
            <li>
                <button onClick={openResume}
                className=' text-xl cursor-pointer capitalize'>
                    <a href={Tejas_Resume} download="fw19_0574-Tejasvi-Bishnoi-Resume">
                        Resume
                    </a>
                </button>
            </li>
        </motion.ul>
    </nav>
}

export default NavMobile;