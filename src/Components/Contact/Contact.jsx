import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  useEffect(() => {
      document.title = 'Contact'
    }, [])
  return (
    <section className=' pt-15 md:pt-0 min-h-screen w-full bg-[url("/car-about2.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4'>
      <div className="max-w-4xl w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl">
        {/* Contact Information Section */}
        <div className="bg-black bg-opacity-70 text-white p-8 md:w-1/3 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-300">yousef.hatem.developer@gmail</p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Visit Us</h3>
                <p className="text-gray-300">Elshiekh Zayed, City</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white bg-opacity-90 p-8 md:w-2/3 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}