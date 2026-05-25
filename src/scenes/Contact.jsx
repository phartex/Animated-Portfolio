import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // On localhost, prevent submission and show alert
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      e.preventDefault();
      alert("Form submissions only work on the live deployed site (Netlify). Please deploy your site to test the form.");
      return;
    }
    // On production (Netlify), form submits normally
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="pt-24 pb-32">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-yellow">CONTACT</span> ME
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        <p className="mt-10 mb-10">
          Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
        </p>
      </motion.div>

      {/* CONTACT FORM */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <img 
            src="/assets/contact-image.png" 
            alt="contact" 
            className="w-full max-w-[400px]"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
             action="/success"
             
            onSubmit={handleSubmit}
          >
            {/* Hidden field for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field for spam protection */}
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mb-5"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mb-5"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mb-5 resize-none"
              required
            />
            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            >
              {isSubmitted ? "MESSAGE SENT!" : "SEND ME A MESSAGE"}
            </button>
          </form>

          {/* DIRECT CONTACT INFO */}
          <div className="mt-10">
            <p className="font-playfair text-xl mb-2">
              <span className="text-yellow">Phone:</span> 08104115752
            </p>
            <p className="font-playfair text-xl">
              <span className="text-yellow">Email:</span> fateruvictor96@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
