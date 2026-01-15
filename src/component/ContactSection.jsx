import React, { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { Watermark } from "antd";
import { useSubmitEnquiryMutation } from "../redux/api";
import { toast } from "react-toastify";

/* 🔹 Regex (ONLY LOGIC ADDITION) */
const nameRegex = /^[A-Za-z\s]*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = () => {
  const [submitEnquiry, { isLoading }] = useSubmitEnquiryMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  /* 🔹 UPDATED handleChange (STYLE SAME) */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: only letters & space
    if (name === "fullName") {
      if (!nameRegex.test(value)) return;
    }

    // Phone: only numbers, max 10 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* 🔹 UPDATED handleSubmit (STYLE SAME) */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.fullName.trim().length < 3) {
      toast.warning("Name must be at least 3 characters");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.warning("Please enter a valid email");
      return;
    }

    if (formData.phone.length !== 10) {
      toast.warning("Phone number must be exactly 10 digits");
      return;
    }

    try {
      await submitEnquiry(formData).unwrap();
      toast.success("Enquiry submitted successfully ");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong ");
    }
  };

  return (
    <Watermark content={"ENGELL"} gap={[300, 300]}>
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

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-[#D33A3D]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-gray-500">
                      Plot no. 7, Raj Nagar, Station Road, opp. Goldie Cinema,
                      Chhatrapati Sambhajinagar 431005
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

              <div className="flex justify-start gap-4 mt-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-600 border shadow-md">
                  <a href="https://wa.me/919049991851" target="_blank">
                    <FaWhatsapp size={22} />
                  </a>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 border shadow-md">
                  <a href="https://www.facebook.com/profile.php?id=100070899367194" target="_blank">
                    <TiSocialFacebook size={22} />
                  </a>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-pink-500 border shadow-md">
                  <a href="https://www.instagram.com/engellinstitute?igsh=aGI2YWtraWJlcTRp" target="_blank">
                    <FaInstagram size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Enquire Now</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full mt-1 border rounded-md px-4 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full mt-1 border rounded-md px-4 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full mt-1 border rounded-md px-4 py-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Interested In</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-md px-4 py-2"
                  >
                    <option value="">Select a course</option>
                    <option value="German Language">German Language</option>
                    <option value="Japanese Language">Japanese Language</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific questions?"
                    className="w-full mt-1 border rounded-md px-4 py-2"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-700 to-[#D33A3D]"
                >
                  {isLoading ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </div>

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
    </Watermark>
  );
};

export default ContactSection;
