import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('hello')

    const SubmitFunc=(e)=>{
        e.preventDefault();
        const data={
            clientName: name,
            clientEmail: email,
            subject: subject,
            message:message
        }

        console.log(data)

    }
    
  return (
    <>
      <div>
        <form onSubmit={SubmitFunc}
          className="space-y-8 w-full max-w-[780px]">
          <div className="flex gap-8">
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <input type="text" 
          className="input" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/>
          <textarea className="textarea" 
          placeholder="Your message" onChange={(e)=>setMessage(e.target.value)}></textarea>

          <button
            className="btn btn-lg bg-accent
                        hover:bg-accent-hover">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
