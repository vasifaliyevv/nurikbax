import React from "react";
import styles from "./Index.module.css";
import Carousel from "../Carousel";
import Courses from './Courses'
import axios from 'axios';
import { useEffect,useState } from "react";
const Index = () => {

  const [courses,setCourses] = useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:8080/api/courses')
    .then((res)=> {setCourses(res.data)
        console.log(res.data);
    })
},[])
const sortHandler = () => {
  setCourses(
    [...courses].sort((a, b) => {
      return a.position - b.position
    }),
  )
}
  return (
    <>
      <section className={styles.carousel}>
        <Carousel />
      </section>

      <section className={styles.card}>
        <div className={styles.cardmain}>
          <div className={styles.cardmaintext}>
            <hr />
            <h1>Popular Courses</h1>
          </div>

          <div className={styles.carddb}>
          <button onClick={sortHandler}>Sort</button>
     
            {
              courses.map((cours,id)=>{
                  return(
          <Courses key={id} cours={cours}/>
                  )
              })
          }
          </div>
        </div>
      </section>

      <section className={styles.register}>
        <div className={styles.reg}>
          <div className={styles.regtext}>
            <h1>Register now</h1>

            <p>
              In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
              vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
              finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante
              nisl fermentum nulla, vitae tempo.
            </p>

            <button>Register Now</button>
          </div>
        </div>

        <div className={styles.search}>
          <div className={styles.searchmain}>
            <div className={styles.searchimg}></div>
            <h1>salam</h1>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="surname" />
            <input type="text" placeholder="sdasdas" />
            <button type="submit">Search Course</button>
          </div>
        </div>
      </section>


<section className={styles.card}>
        <div className={styles.cardmain2}>
          <div className={styles.cardmaintext}>
            <hr />
            <h1>Our Services</h1>
          </div>

          <div className={styles.carddb}>
            <div className={styles.carddbmain}>
              <img
                width={400}
                height={270}
                src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                alt="sasd"
              />

              <div className={styles.cardtext}>
                <h1>Salam</h1>
                <h4>salam21313</h4>
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
            </div>
            <div className={styles.carddbmain}>
              <img
                width={400}
                height={270}
                src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                alt="sasd"
              />

              <div className={styles.cardtext}>
                <h1>Salam</h1>
                <h4>salam21313</h4>
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
            </div>
            <div className={styles.carddbmain}>
              <img
                width={400}
                height={270}
                src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                alt="sasd"
              />

              <div className={styles.cardtext}>
                <h1>Salam</h1>
                <h4>salam21313</h4>
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
            </div>
            <div className={styles.carddbmain}>
              <img
                width={400}
                height={270}
                src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                alt="sasd"
              />

              <div className={styles.cardtext}>
                <h1>Salam</h1>
                <h4>salam21313</h4>
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
            </div>
            <div className={styles.carddbmain}>
              <img
                width={400}
                height={270}
                src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                alt="sasd"
              />

              <div className={styles.cardtext}>
                <h1>Salam</h1>
                <h4>salam21313</h4>
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
            </div>
          </div>
        </div>
      </section>

      <section className={styles.events}>
<div className={styles.event1}>
<div className={styles.cardmaintext}>
            <hr style={{width:"100px"}} />
            <h1>Upcoming Events</h1>
          </div>
          <div className={styles.eventcard}>
          <div className={styles.eventorange}>
          <h1>07</h1> 
          <h2>January</h2>
          </div>

          <div >
          <h1>Student Festival
          </h1>
          <h3>  Grand Central Park
          </h3>
          <h6>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
          </h6>

          </div>
          <img width={350} src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp"/>
          </div>
          <div className={styles.eventcard}>
          <div className={styles.eventorange}>
          <h1>07</h1> 
          <h2>January</h2>
          </div>

          <div >
          <h1>Student Festival
          </h1>
          <h3>  Grand Central Park
          </h3>
          <h6>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
          </h6>

          </div>
          <img width={350} src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp"/>
          </div>
          <div className={styles.eventcard}>
          <div className={styles.eventorange}>
          <h1>07</h1> 
          <h2>January</h2>
          </div>

          <div >
          <h1>Student Festival
          </h1>
          <h3>  Grand Central Park
          </h3>
          <h6>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.
          </h6>

          </div>
          <img width={350} src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp"/>
          </div>

</div>

      </section>
    </>
  );
};

export default Index;
