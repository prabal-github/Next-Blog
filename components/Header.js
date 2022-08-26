import React from 'react'
import styles from "../styles/Header.module.css"

const Header = () => {
    return (
        <div className='w-full px-10 text-center'>
            <div className={styles.headerStyle}>
                <p className='text-gray-600'>BLOGS</p>
            </div>
        </div>
    )
}

export default Header