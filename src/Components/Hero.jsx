// import Message from "./Message"
import { Link } from "react-scroll";
import Dp from "../assets/img/dp-tejas-1.png";
// import ab from '../assets/img/outline-text/about.svg'
import Tejasvi_Bishnoi_Resume from "../Resume/Tejasvi_Bishnoi_Resume.pdf";

const Hero = () => {
    
    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/10uJHnnfIZK_9STVG-mMtqizP4eTsbBAP/view?usp=sharing"
        );
      };

  return (
    <section
      id="home"
      className=" lg:h-[100vh] md:h-[vh] flex 
         items-center bg-primary lg:bg-cover 
         lg:bg-center lg:bg-no-repeat py-32 lg:py-0 
         overflow-hidden"
    >
      <div
        className="container mx-auto h-full 
            md:h-[55vh] lg:h-[100vh]"
      >
        <div className="flex items-center h-full pt-8">
          {/* Left side */}
          <div
            className="flex1 flex flex-col 
                    items-center sm:items-center md:mx-auto lg:items-start"
          >
            <p className=" font-primary text-3xl text-accent mb-[22px]">
              Hey, I'm Tejasvi 👋🏼
            </p>
            <h1
              className="text-4xl leading-[50px] md:text-3xl
                         md:leading-tight lg:text-4xl lg:leading-[1,2] font-bold
                          md:tracking-[-2px] text-center ">
              I'm a Full Stack Web Developer
            </h1>
            <br />
            {/* <div className="container mx-auto border lg:w-[400px]">
              <p>
              Hello, I am Tejasvi Bishnoi, a Full Stack Web Developer.
              I have a background in structural engineering and
              </p>
            </div> */}
            <Link to="about" smooth={true}>
              <p
                className=" pt-4 pb-8 md:pt-6 md:pb-12
                         max-w-[480px] text-lg text-center 
                         lg:text-left hover:underline cursor-pointer"
              >
                Know More About Me
              </p>
            </Link>

            <div className="flex flex-1 gap-4 p-2">
              <Link to="contact" smooth={true}>
                <button
                  className="btn btn-md bg-accent
                         hover:bg-accent-hover md:btn-lg transition-all">
                  Work with me
                </button>
              </Link>

                <a href={Tejasvi_Bishnoi_Resume} download="fw19_0574-Tejasvi-Bishnoi-Resume">
                    <button
                    onClick={openResume}
                    className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg">
                    Resume
                    </button>
                </a>
              
            </div>
          </div>
          {/* Right Side [DP] */}
          <div
            className="lg:flex flex-1
                     lg:justify-end lg:items-end 
                     h-full hidden sm:hidden md:flex 
                     md:justify-center md:items-center">
            <img src={Dp} alt="DP" width={"75%"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
