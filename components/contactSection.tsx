import React from "react";
// import { ReactComponent as InstagramIcon } from "./instagram.svg";
// import { ReactComponent as MailIcon } from "./mail.svg";
// import { ReactComponent as MapsIcon } from "./maps.svg";
// import { ReactComponent as PhoneIcon } from "./phone.svg";
// import { ReactComponent as RegisterIcon } from "./register.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";
import "./contact.css";

function ContactSection(): JSX.Element {
  return (
    <div>
      <div className="map__container">
        <div className="map__left__parent">
          <div className="map__left_top">
            <div className="map__icon">
              {/* <MapsIcon
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              /> */}
            </div>
            <div className="map__content">
              <p>Sardar Vallabhbhai National Institute of Technology,</p>
              <p>Ichhanath Road,</p>
              <p>Surat - 395007</p>
              <p>Gujarat</p>
            </div>
          </div>
          <div className="map__left">
            <div className="map__icon">
              {/* <InstagramIcon
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              /> */}
            </div>
            <div className="map__content">
              <p>@dsc_nitSurat</p>
            </div>
          </div>
          <div className="map__left">
            <div className="map__icon">
              {/* <PhoneIcon
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              /> */}
            </div>
            <div className="map__content">
              <p>+91 7897897890</p>
            </div>
          </div>
          <div className="map__left">
            <div className="map__icon">
              {/* <MailIcon
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              /> */}
            </div>
            <div className="map__content">
              <p>dsc_nitsurat@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6497220608194!2d72.78070867471804!3d21.166333683040296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec8b56fdf3%3A0x423b99085d26d1f9!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%2C%20SVNIT.!5e0!3m2!1sen!2sin!4v1703058666159!5m2!1sen!2sin"
            width="700"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
