import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import styles from '../styles/testimonial.module.css'

const Testimonials = () => {
  return (
    <div className={styles.testimonialContainer}>
      <p className={styles.testmonialHeader}>What Our Students Say</p>
      <div className={styles.cardsContainer}>
      <div className={styles.testmonialCards}>
        <div>
            <div className={styles.userDesc}>
                <img src="/images/testimonial1.png" alt="" />
                <div className={styles.userInfo}>
                    <span className={styles.userName}>Avish</span>
                    <span>CSE Student</span>
                </div>
            </div>
            <div className={styles.userExperience}>
                <span>"I consider my experience at Ashok IT to be incredibly important in my growth as a competent professional. During my time at Ashok IT, I had the opportunity to learn through both books and practice and develop a large variety of essential technical skills. Thank you Ashok IT ."</span>
                <div>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                </div>
            </div>
        </div>
        
      </div>
      <div className={styles.testmonialCards}>
        <div>
            <div className={styles.userDesc}>
                <img src="/images/testimonial1.png" alt="" />
                <div className={styles.userInfo}>
                <span className={styles.userName}>Avish</span>
                    <span>CSE Student</span>
                </div>
            </div>
            <div className={styles.userExperience}>
                <span>"I consider my experience at Ashok IT to be incredibly important in my growth as a competent professional. During my time at Ashok IT, I had the opportunity to learn through both books and practice and develop a large variety of essential technical skills. Thank you Ashok IT ."</span>
                <div>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                </div>
            </div>
        </div>
        
      </div>
      <div className={styles.testmonialCards}>
        <div>
            <div className={styles.userDesc}>
                <img src="/images/testimonial1.png" alt="" />
                <div  className={styles.userInfo}>
                <span className={styles.userName}>Avish</span>
                    <span>CSE Student</span>
                </div>
            </div>
            <div className={styles.userExperience}>
                <span>"I consider my experience at Ashok IT to be incredibly important in my growth as a competent professional. During my time at Ashok IT, I had the opportunity to learn through both books and practice and develop a large variety of essential technical skills. Thank you Ashok IT ."</span>
                <div>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                <RiStarSFill/>
                </div>
            </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Testimonials
