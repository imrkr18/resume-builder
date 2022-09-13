import React from 'react'
import styles from './InputEdit.module.css'

function InputEdit({Label, ...props}) {
  return (
   <div className={styles.container}>
        {Label && <lable>{Label}</lable>}

        <input type="text" {...props}/>
   </div> 
  )
  
}

export default InputEdit