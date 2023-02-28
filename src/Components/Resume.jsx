import Tejas_Resume from "../Resume/Tejasvi_Bishnoi_Resume.pdf";

const Resume = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/10uJHnnfIZK_9STVG-mMtqizP4eTsbBAP/view?usp=sharing"
    );
  };

  return (
    <section id="resume" className="bg-tertiary py-12 ">
      <div className="container mx-auto my-auto px-5 py-5">
        <div className="flex flex-row justify-around items-center">
          <h2>Download Resume</h2>

          <a href={Tejas_Resume} download="Tejasvi_Bishnoi_Resume">
            <button
              onClick={openResume}
              className="btn btn-md
               bg-accent hover:bg-accent-hover transition-all">
              Download
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
