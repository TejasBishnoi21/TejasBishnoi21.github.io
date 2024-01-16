import { contact } from "../data";
import ContactForm from "./ContactForm";

const Contact = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        {/*  Title Div */}
        <div
          className="flex flex-col
            items-center text-center">
          <h2
            className="section-title
                before:content-contact relative
                before:absolute 
                before:opacity-60
                before:-top-7
                before:-left-40
                before:hidden
                before:lg:block">
            Contact Me
          </h2>
          <p className="subtitle text-accent">
            I'm actively looking for full-time opportunities in web development
            and am open to work. If you find my profile interesting, please feel
            free to reach out.
          </p>
        </div>

        <div
          className="flex flex-col lg:gap-x-8
            lg:flex-row p-2"
        >
          {/* Info Div */}
          <div
            className="flex-col flex-1 lg:flex-col
                lg:items-start lg:space-y-8 mb-12 justify-center gap-10 
                lg:mb-0 lg:pt-2 p-1">
            {contact.map((el, index) => {
              const {
                icon,
                icon1,
                icon2,
                title,
                subtitle,
                description,
                remote,
                phone,
                github,
                linkedin,
              } = el;

              return (
                <div
                  className="flex flex-row 
                  lg:flex-row gap-x-4 mb-3" key={index}>
                  <div
                    className="text-accent rounded-sm 
                    w-14 h-14 flex items-center lg:items-start 
                    justify-center mt-2 mb-0 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>

                    <div
                      className="text-accent font-normal 
                      hover:underline cursor-pointer text-m">
                      <Mailto
                        email="tejas.vishnoi@gmail.com"
                        subject=""
                        body="Hello Tejas!">
                        {description}
                      </Mailto>
                    </div>
                    <p
                      className="text-accent font-normal text-sm">
                      {remote}
                    </p>
                    <p
                      className="text-accent font-normal text-sm">
                      {phone}
                    </p>
                    <div
                      className="flex flex-1 gap-8
                                    text-accent p-2 text-lg items-start">
                      <a href={linkedin} rel="noreferrer" target="_blank">
                        {icon1}
                      </a>
                      <a href={github} rel="noreferrer" target="_blank">
                        {icon2}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form Div */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
