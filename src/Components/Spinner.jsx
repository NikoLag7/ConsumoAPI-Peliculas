import React from 'react'
import { ImSpinner9 } from "react-icons/im";
import styles from './spinner.module.css'
function Spinner() {
  return (
    <div className={styles.spinner}>
      <ImSpinner9 className={styles.spinning} size={80}/>
    </div>
    
    )
}

export default Spinner