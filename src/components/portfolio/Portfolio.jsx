import React from 'react'
import './portfolio.css'
const Portfolio = () => {
    const data = [
        {
            id : 1,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-1_frgear.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 2,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-2_fnpklf.webp",
            title: "Project Title",
            detailes: "#"
        },

        {
            id : 3,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-3_byef7y.webp",
            title: "Project Title",
            detailes: "#"
        }, 
        {
            id : 4,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-4_kkvbrc.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 5,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-5_anxi6c.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 6,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-6_bamk5w.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 7,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-7_ifqoml.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 8,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209884/pixo/portfolio-8_sm5kc4.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 9,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209883/pixo/portfolio-9_hgo4bh.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 10,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209884/pixo/portfolio-10_dbqg50.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 11,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209884/pixo/portfolio-11_fk6hlc.webp",
            title: "Project Title",
            detailes: "#"
        },
        {
            id : 12,
            image: "https://res.cloudinary.com/dww0uun9v/image/upload/c_scale,w_512/v1655209884/pixo/portfolio-12_jgbtk2.webp",
            title: "Project Title",
            detailes: "#"
        },
    ]
  return (
    <section className="portfolio">
        <h1>Some of our work</h1>
        {
            data.map(({id, image, title, detailes})=>{
                return(
                    <figure key={id} className="port-item">
                        {/* <img src={image} alt="portfolio item"/> */}
                        <img className="cld-responsive" src={image} alt="portfolio item"/>
                        <figcaption className="port-desc">
                            <p>{title}</p>
                            <a href={detailes} className="button button-accent button-small">Project details</a>
                        </figcaption>
                    </figure>
                )
            })
        }
    </section>
  )
}

export default Portfolio