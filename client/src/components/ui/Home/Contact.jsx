import React from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Contact() {
  return (
    <section className="w-screen flex" id="contact">
      <div className="w-[50%]">
        <img src="/contact3.jpg" alt="contact section image" />
      </div>
      <div className="w-[50%] bg-slate-950 flex justify-center items-center flex-col gap-8 text-white">
        <h2 className="text-3xl italic">We’d Love To Hear From You</h2>
        <p className="text-center italic w-[50%]">
          Whether you have questions about listings, need technical support, or
          want help finding the right property, our team is here to
          assist.Whether you have questions about listings, need technical
          support, or want help finding the right property, our team is here to
          assist.
        </p>
        <button className="btn-primary">contact now</button>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-xl" />
            <span>support@dwell.com</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-xl" />
            <span>+971 XX XXX XXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker className="text-xl" />
            <span>Office 000, Business Tower, Dubai, UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
