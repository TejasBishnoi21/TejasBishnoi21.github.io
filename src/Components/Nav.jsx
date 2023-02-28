import { Link } from 'react-scroll';
import { navigation } from '../data';
import Tejas_Resume from "../Resume/Tejasvi_Bishnoi_Resume.pdf";

const Nav = ()=>{

    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/10uJHnnfIZK_9STVG-mMtqizP4eTsbBAP/view"
        );
      };

    return <div>
        <ul id='navTitles' className='flex space-x-8 font-primary capitalize text-[15px]'>
            {navigation.map((item, index)=>{
                return (
                    <li className=' text-white hover:text-accent cursor-pointer' key={index}>
                        <Link 
                        to={item.href}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        className='transition-all duration-300'
                        >
                            {item.name}
                        </Link>
                    </li>
                )
            })}
            <li>
                <button onClick={openResume}
                className='hover:text-accent'>
                    <a href={Tejas_Resume} download="fw19_0574-Tejasvi-Bishnoi-Resume">
                        Resume
                    </a>
                </button>
            </li>
        </ul>
    </div>
}

export default Nav;