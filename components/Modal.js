import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import styles from '../styles/Home.module.css';

export default function Modal({ open, children, onClose }) {

    if (!open) return null
    
    return ReactDom.createPortal(
        <div className={styles.scrollComponent}>
            <div className={styles.overlay} />
            <div className={styles.modal}>
            <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
      )
  }