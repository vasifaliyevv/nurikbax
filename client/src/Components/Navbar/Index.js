import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Index.module.css'
const Index = () => {
  return (
    <>
    <nav>
    <div className={styles.nav}>
    <div className={styles.navleft}>
    <img alt='sek' width={51} height={43} src='https://preview.colorlib.com/theme/course/images/logo.png.webp'/>
    <h1>Course</h1>
    </div>

    <div className={styles.navmid}>

    <ul>
    <li>
    <Link to='/' className={styles.link}>HOME</Link>
    </li>
    <li>
    <Link to='/add' className={styles.link}>ADD</Link>
    </li> 
    <li>
    COURSES
    </li> 
    <li>
    ELEMENTS
    </li>
    <li>
    NEWS
    </li>
    <li>
    CONTACT
    </li>
    
    </ul>
    </div>

    <div className={styles.navright}>

<h1>📞 +43 4566 7788 2457</h1>

    </div>
    </div>
    
    </nav>
    
    </>
  )
}

export default Index