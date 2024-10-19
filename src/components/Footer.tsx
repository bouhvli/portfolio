import React from 'react';

import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-12 w-full">
        <div className="container mx-auto px-6 md:px-12 ">
          <div className="flex flex-row justify-around text-center md:text-left">
            {/* Quote or Additional Info */}
            <div>
              <h3 className="text-xl font-semibold">Let's Collaborate</h3>
              <p className="mt-4">"Innovating with code, building with passion."</p>
              <p>Feel free to reach out for collaborations or questions.</p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold">Contact Me</h3>
              <p className="mt-4">Hamza Bouhali</p>
              <p>Email: <a href="mailto:hamza_bouhali@protonmail.com" className="text-blue-400">hamza_bouhali@protonmail.com</a></p>
              <p>Phone: <a href="tel:+212641041441" className="text-blue-400">+212 641-041441</a></p>
              <p>Address: Casablanca, Morocco</p>
            </div>
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold">Follow Me</h3>
              <div className="flex justify-center md:justify-start mt-4 space-x-6">
                <a href="https://www.linkedin.com/in/hamza-bouhali" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="https://github.com/hamzabouhali" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/hamza_bouhali" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p>© 2024 Hamza Bouhali. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
export default Footer