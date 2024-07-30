import React from "react";
import styles from "../styles/footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.fotterContainer}>
      <div className={styles.container1}>
        <img src="/images/reallogo.jpeg" alt="" />
        <span>
          Ashok IT is a leading Indian IT training institute preparing
          tech-aspirants for flourishing careers in this challenging and
          competitive domain since 2020.
        </span>
      </div>

      <div className={styles.container2}>
        <h3>QUICK LINKS</h3>
        <span>About Us</span>
        <span>Online Batches</span>
        <span>Classromm Batches</span>
        <span>Weekend Workshops</span>
        <span>Contact Us</span>
      </div>

      <div className={styles.container3}>
        <h3>OUR SERVICES</h3>
        <span>Online Training</span>
        <span>Classroom Training</span>
        <span>Corporate Training</span>
        <span>Placements</span>
        <span>Internship</span>
      </div>

      <div className={styles.container4}>
        <h3>Legal</h3>
        <span>Terms of use and privacy policy</span>
      </div>

      <div className={styles.container5}>
        <h3>Contact Us</h3>
        <div>
          <div className={styles.contactInfo}>
            <FaPhoneAlt />
            <span>91+ 9864912327</span>
          </div>
          <div className={styles.contactInfo}>
            <IoIosMail />
            <span>shanawajalam20@gmail.com</span>
          </div>
          <div className={styles.contactInfo}>
            <SiGooglemaps />
            <span>
              H.No - 7-1-413/2, Beside Sonabhai Temple, Ameerpet, Hyderabad -
              500016
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
