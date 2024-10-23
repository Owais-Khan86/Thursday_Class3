import React from 'react';
// Import required icons from react-icons
import { FaEnvelope, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="text-xl text-center text-white my-14 pb-48  ">
      <h2 className="text-4xl font-black non-italic mb-4">Contact Me</h2>
      <p>Please contact me at: </p>
      <div className="flex justify-center space-x-10 mt-12">
      <a href="mailto:owaisned86@gmail.com" target="_blank" rel="noreferrer">
        <FaEnvelope className = "h-10 w-10" />
      </a>
      <a href="https://github.com/Owais-Khan86" target="_blank" rel="noreferrer">
        <FaGithub className = "h-10 w-10"/>
      </a>
      <a href="https://www.linkedin.com/in/owais-khan-4b81b696/" target="_blank" rel="noreferrer">
        <FaLinkedin  className = "h-10 w-10"/>
      </a>
      <a href="https://discordapp.com/users/993453647029608528" target="_blank" rel="noreferrer">
        <FaDiscord  className = "h-10 w-10"/>
      </a>
    </div>
    </div>

  );
}

export default Contact;
