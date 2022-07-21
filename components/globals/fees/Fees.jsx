import React from 'react'
import styles from '../fees/Fees.module.css'

export const Fees = () => {
  return (
    <div className={`${styles.feeContainer}`}>

      <h1>Membership Benefits</h1>
      <ul>
        <li>You will learn how not to lose money.</li>
        <li>You will understand when to buy & when to sell.</li>
        <li>You will learn how to build a portfolio independently.</li>
        <li>You will learn why valuation is a rough exercise.</li>
        <li>You will understand how to analyse industry structures through SOIC Sectoral Analysis.</li>
        <li>You will understand how to apply the SOIC Investment Checklist and the 5 bucket Framework.</li>        
      </ul>
      <h1 className='mt-4'>Membership Fees</h1>   
        <h5><b>Rs-14999/- (Inclusive of GST)</b></h5>
   
    </div>
  )
}


export default Fees