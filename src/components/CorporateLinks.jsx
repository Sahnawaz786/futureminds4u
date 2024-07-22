import React from 'react'
import styles from '../styles/corporate.module.css' 

const CorporateLinks = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.headerTitle}>The Bright Place to Build The Best Career Value</p>
        <p className={styles.subTitle}>Best Opportunity To Learn From Currently Working Professionals</p>
      </div>
      <div>
      <div className={styles.cards}>
        <div className={styles.cardBox} style={{backgroundColor:'#35CC57'}}>
            <img className={styles.corporateImg} src="/images/classroom-training.png" alt="" />
            <span>Online Training</span>
        </div>
        <div className={styles.cardBox} style={{backgroundColor:'#4589C1'}}>
            <img className={styles.corporateImg} src="/images/classroom-training.png" alt="" />
            <span>Online Training</span>
        </div>
        <div className={styles.cardBox} style={{backgroundColor:'#FD7E14'}}>
            <img className={styles.corporateImg} src="/images/classroom-training.png" alt="" />
            <span>Online Training</span>
        </div>
        <div className={styles.cardBox} style={{backgroundColor:'#8864C3'}}>
            <img className={styles.corporateImg} src="/images/classroom-training.png" alt="" />
            <span>Online Training</span>
        </div>
        <div className={styles.cardBox} style={{backgroundColor:'#E25118'}}>
            <img className={styles.corporateImg} src="/images/classroom-training.png" alt="" />
            <span>Online Training</span>
        </div>
        <div className={styles.cardBox} style={{backgroundColor:'#27AB9B'}}>
            <img className={styles.corporateImg} src="/images/classroom-training.png" alt="" />
            <span>Online Training</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CorporateLinks
