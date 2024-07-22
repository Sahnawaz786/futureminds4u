import React from 'react';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../card.module.css'

const CardDisplay = () => {
  return (
    <div className={styles.Container}>
        <p className={styles.textCourses}>Explore Our Courses</p>
        <div className={styles.cards}>

      {
       
        [1,2,3,4,5,6,7,8].map((elem,index)=>{
           return <div className={styles.box}><Cards/></div> 
        })
      }
        </div>

    </div>
  )
}

export default CardDisplay
