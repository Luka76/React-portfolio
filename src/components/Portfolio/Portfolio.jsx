import React from 'react'
import "./Portfolio.css"
import img1 from "../../assets/portfolio-1.jpg"
import img2 from "../../assets/portfolio-2.jpg"
import img3 from "../../assets/portfolio-3.jpg"
import img4 from "../../assets/portfolio-4.jpg"
// import img5 from "../../assets/portfolio-5.jpg" food order image
import img6 from "../../assets/portfolio-6.jpg"

const data = [
  {
    id: 1,
    image: img1,
    title: "College instructions",
    github: "https://github.com/Luka76/konzultacije",
    demo: "https://dribbble.com"
  },
  {
    id: 2,
    image: img2,
    title: "Hair saloon website",
    github: "https://github.com/Luka76/M.A.K-website",
    demo: "https://dribbble.com"
  },
  {
    id: 3,
    image: img3,
    title: "HTML and CSS learning",
    github: "https://github.com/Luka76/Slider_example",
    demo: "https://dribbble.com"
  },
  {
    id: 4,
    image: img3,
    title: "Slider",
    github: "https://github.com/Luka76/Solution",
    demo: "https://dribbble.com"
  },
  {
    id: 6,
    image: img4,
    title: "News website",
    github: "https://github.com/Luka76/First-react-app",
    demo: "https://dribbble.com"
  },
  {
    id: 5,
    image: img6,
    title: "Portfolio project",
    github: "https://github.com/Luka76/React-portfolio",
    demo: "https://dribbble.com"
  },
]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
            </div>
        </article>  
            )      
          })
        }
      </div>
    </section>
  )
}

export default Portfolio