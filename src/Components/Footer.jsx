import { social } from "../data";
import Logo from '../assets/img/svgTejas.svg'

const Footer=()=>{
    return <footer className="bg-tertiary py-12">
        <div className="container mx-auto">
            <div className="flex flex-col
            lg:flex-row space-y-6 lg:space-y-0
             items-center justify-between">
                {/* Social Icons */}
                <div className="flex space-x-6 
                items-center justify-center">
                    {social.map((el, index)=>{
                        const {href, icon} = el;
                        return <a 
                        className="text-accent text-base"
                        href={href} key={index} target='_blank'>
                            {icon}
                        </a>
                    })}
                </div>

                {/* Logo SVG */}
                <div>
                    <img src={Logo} alt="nameLogo" />
                </div>

                {/*  Copyright  */}
                <p>&copy; 2023 Tejasvi Bishnoi. All rights reserved</p>
            </div>
        </div>
    </footer>
}

export default Footer;