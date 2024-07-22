import React from "react";
import styles from "../styles.module.css";
import { ImUnlocked } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.centerContent}>
          <span style={{ fontWeight: "500" }}>
            For Course Enquiry - +91 9985396677
          </span>
        </div>
        <div className={styles.endContent}>
          <button className={styles.loginBtn}>
            <span className={styles.loginText}>
              <ImUnlocked />
              Login
            </span>
          </button>
        </div>
      </div>
      <div className={styles.navbarnextContainer}>
        <div>
          <img className={styles.ashokLogo} src="/images/logo.png" alt="" />
        </div>

        <div className={styles.logo}>
          <span
            style={{ backgroundColor: "#008000" }}
            className={styles.socialIcons}
          >
            <FaWhatsapp />
          </span>
          <span
            style={{ backgroundColor: "#55ACEE" }}
            className={styles.socialIcons}
          >
            <FaTwitter />
          </span>{" "}
          <span
            style={{ backgroundColor: "#C42020" }}
            className={styles.socialIcons}
          >
            <FaYoutube />
          </span>{" "}
          <span
            style={{ backgroundColor: "#3B5998" }}
            className={styles.socialIcons}
          >
            <FaFacebook />
          </span>{" "}
          <span
            style={{ backgroundColor: "#D6274D" }}
            className={styles.socialIcons}
          >
            <FaInstagram />
          </span>
        </div>
      </div>

      <div className={styles.navbarlastContainer}>
        <div className={styles.menuItems}>
          <a href="#">Home |</a>
        </div>

        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Services <FaAngleDown/> |</button>
          <div className={styles.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className={styles.menuItems}>
          <a href="#">Course Offering |</a>
        </div>

        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Training Schedules <FaAngleDown/> |</button>
          <div className={styles.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Carriers <FaAngleDown/> |</button>
          <div className={styles.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className={styles.menuItems}>
          <a href="#">About Us |</a>
        </div>
        <div className={styles.menuItems}>
          <a href="#">Contact Us</a>
        </div>


      </div>
    </>
  );
};

export default Navbar;
