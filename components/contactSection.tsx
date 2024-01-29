import React from "react";

import "./contact.css";

export default function ContactSection() {
  return (
    <div className="rounded pl-2 m-4 bg-secondary flex justify-between items-center">
      <div>
        <p>Sardar Vallabhbhai National Institute of Technology,</p>
        <p>Ichhanath Road,</p>
        <p>Surat - 395007</p>
        <p>Gujarat</p>

        <p>@dsc_nitSurat</p>

        <p>+91 7897897890</p>

        <p>dsc_nitsurat@gmail.com</p>
      </div>
      <div>
        <iframe
          className="rounded"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6497220608194!2d72.78070867471804!3d21.166333683040296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%2C%20SVNIT.!5e0!3m2!1sen!2sin!4v1703058666159!5m2!1sen!2sin"
          width="400"
          height="200"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
