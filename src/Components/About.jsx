import AboutImage from '../assets/img/about2.jpg';
import { Link } from 'react-scroll';

const About=()=>{
    return <section id='about' className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img className='object-cover h-full w-[566px]
                 md:mx-auto lg:mx-0 rounded-2xl' 
                src={AboutImage} alt="aboutImg" />

                <div className="flex flex-col items-center
                text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className='text-3xl lg:text-4xl font-medium
                        lg:font-extrabold mb-3
                        before:content-about relative
                        before:absolute
                        before:opacity-40
                        before:-top-[2rem]
                        before:hidden
                        before:lg:block'>
                            Tejasvi Bishnoi
                        </h2>
                        <p className='mb-4 text-accent'>
                            Fullstack Web Developer
                        </p>
                        <hr className='mb-8 opacity-5'/>
                        <p className='mb-8'>
                        Hello, I am Tejasvi Bishnoi, a Full Stack Web Developer.
                        <br />
                        I have a background in structural engineering and have recently 
                        made a career change to pursue my passion for web development.
                        <br />
                        Joined Masai School, a coding boot camp, and completed a 35-week full-time MERN stack web development course 
                        and got hands-on experience of 1300+ hours of coding.
                        <br />
                        From designing buildings and bridges to amazing websites and web applications, 
                        the journey has been fascinating.
                        <br />
                         I have acquired expertise in front-end technologies such as 
                         HTML, CSS, JavaScript, and React, and also have experience in 
                         back-end technologies like Node.js, Express, and MongoDB. 
                         I am excited to bring my problem-solving skills, 
                         attention to detail, and passion for technology to the world of 
                         web development, and looking forward to new challenges and opportunities.
                        <br />
                        </p>
                    </div>

                    <Link to={`contact`} smooth={true} >
                        <button className='btn btn-md bg-accent
                        hover:bg-accent-hover transition-all'>
                            Contact Me
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
        </section>
}

export default About;