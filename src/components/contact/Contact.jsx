import "./contact.css"
import emailjs from '@emailjs/browser'
import { useRef ,useState} from "react"
import {motion, useInView} from "motion/react"
import ContactSvg from "./Svg"

const listVariant ={
    initial:{
        x:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.2
        }
    }
}


const Contact = () => {
    const [error, setError] = useState(false);
    const [sussess, setSuccess] = useState(false);
    const form = useRef();
    const ref = useRef();
    const inView =useInView(ref);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            setSuccess(true);
          },
          (error) => {
            setError(true);
          },
        );
    };


    return (
        <div className='contact' ref={ref}>
            <div className='cSection'>
                <motion.form variants={listVariant} initial="initial" animate={inView ? "animate":"initial"} onSubmit={sendEmail} ref={form}>
                    <motion.h1 variants={listVariant} className='cTitle'>Let&apos;as keep in touch</motion.h1>
                    <motion.div variants={listVariant} className='formItem'>
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder='Enter your name' />
                    </motion.div>
                    <motion.div variants={listVariant} className='formItem'>
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder='Enter your email' />
                    </motion.div>
                    <motion.div variants={listVariant} className='formItem'>
                        <label>Message</label>
                        <textarea rows={10} name="user_message" placeholder='Write your message...' />
                    </motion.div>
                    <motion.button variants={listVariant} className="formButton">Send</motion.button>
                    {sussess && (
                        <span>Your message has been sent!</span>
                    )}
                    {error && (
                        <span>Something went wrong!</span>
                    )}
                </motion.form>
            </div>
            <div className='cSection'>
                <ContactSvg/>
            </div>
        </div>
    )
}
export default Contact