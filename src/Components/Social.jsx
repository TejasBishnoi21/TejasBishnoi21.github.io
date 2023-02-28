import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import { social } from "../data";

const Socials = ()=>{
    return <ul className=" flex space-x-6">
        {social.map((item, index)=>{
            return  <li className=" flex justify-center 
            items-center text-accent "
            key={index}>
                <a className="text-base" href={item.href} target='_blank' rel="noreferrer">
                    {item.icon}
                </a>
            </li>
        })}
        <Link to={`contact`} smooth={true}>
            <li className="text-accent">{<FiMail/>}</li>
        </Link>
        
    </ul>
}

export default Socials;
