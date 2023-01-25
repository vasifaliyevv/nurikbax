import React from 'react'
import styles from './Index.module.css'
const Courses = ({cours}) => {
  return (
    <div className={styles.carddbmain}>
              <img
                width={400}
                height={270}
                src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                alt="sasd"
              />

              <div className={styles.cardtext}>
                <h1>{cours.desc}</h1>
                <h4>{cours.position}</h4>
              </div>

              <div className={styles.cardtextname}>
                <img src="https://preview.colorlib.com/theme/course/images/author.jpg.webp" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyConten: "center",
                    marginLeft: "-55px",
                  }}
                >
                  <h1>Nurik,</h1>
                  <h4>Nurik hello</h4>
                </div>
                <div className={styles.cardprice}>50%</div>
              </div>
              <button>details</button>

            </div>
  )
}

export default Courses