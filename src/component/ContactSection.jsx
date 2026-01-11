import React from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { Watermark } from "antd";

const ContactSection = () => {
  return (
     
      <div className="bg-blue-300 py-16 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-[#D33A3D]  text-md font-bold uppercase text-sm ">
                Get In Touch
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
                Start Your Language <br /> Journey Today
              </h2>

              <p className="text-gray-800 mt-4 max-w-md font-bold">
                Visit our institute or give us a call to learn more about our
                courses and enroll in the next batch.
              </p>

              {/* Info Items */}
              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-[#D33A3D]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-gray-500">
                      Plot no. 7, Raj Nagar, Station Road, opp. Goldie Cinema, Chhatrapati Sambhajinagar 431005
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-[#D33A3D]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-gray-500">+91 90499 91851</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-[#D33A3D]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-sm text-gray-500">
                      Monday - Friday: 9:00 AM - 8:00 PM <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                <div className="w-10 h-10 rounded-full border border-green-300 flex items-center justify-center text-green-500">
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
                <div className="w-10 h-10 rounded-full border border-blue-300 flex items-center justify-center text-blue-600">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialFacebook />
                  </a>
                </div>
                <div className="w-10 h-10 rounded-full border border-pink-300 flex items-center justify-center text-[#D33A3D]">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Enquire Now</h3>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full mt-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Interested In</label>
                  <select className="w-full mt-1 border rounded-md px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option>Select a course</option>
                    <option>German Language</option>
                    <option>Japanese Language</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Any specific questions?"
                    className="w-full mt-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-700 to-[#D33A3D]"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-12 rounded-xl flex justify-end overflow-hidden h-[300px] w-full">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Aurangabad%20Station%20Road&output=embed"
              className="h-full w-[620px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
  
  );
};

export default ContactSection;
