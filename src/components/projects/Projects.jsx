import "./projects.css";
import project1 from "../../assets/portfolio1.jpg.png";
import project2 from "../../assets/book stor.png";
import project3 from "../../assets/bondi.png";
import project4 from "../../assets/crud.png";
import project5 from "../../assets/portfolio5.png";
import project6 from "../../assets/portfolio6.jpg";
import { motion } from "framer-motion";

const allProject = [
  {
    id: 1,
    img: project2,
    title: "e-Commerce",
    github: "kk",
    demo: "https://iridescent-paletas-fbb2a0.netlify.app/",
    technologies: "The technologies used : React - Css-context- react-router",
  },

  {
    id: 2,
    img: project1,
    title: "Shane",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
    technologies: "The technologies used : HTML - Css-javascript",
  },

  {
    id: 3,
    img: project3,
    title: "Bondi",
    github: "kk",
    demo: "https://shehab202.github.io/bondi/",
    technologies: "The technologies used : HTML - Css-Bootstrap",
  },
  {
    id: 4,
    img: project4,
    title: "CRUD",
    github: "kk",
    demo: "https://shehab202.github.io/crud/",
    technologies: "The technologies used : HTML - Css-javascript",
  },
  {
    id: 5,
    img: project5,
    title: "Project 5",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
    technologies: "The technologies used : HTML - Css-javascript",
  },
  {
    id: 6,
    img: project6,
    title: "Project 6",
    github: "kk",
    demo: "https://shehab202.github.io/repo/#",
    technologies: "The technologies used : HTML - Css-javascript",
  },
];

function Projects() {
  return (
    <div>
      <div className="project" id="project">
        <div className="component">
          <h5>What Project I Have</h5>
          <h2>Some Project</h2>
        </div>
        <div className="container">
          <div className="box">
            {allProject.map((e) => (
              <motion.div
                key={e.id}
                className="card"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  type: "spring",
                  ease: "easeInOut",
                  delay: 0.1,
                  stiffness: 100,
                }}
              >
                <div className="imag">
                  <img src={e.img} alt="" />
                </div>
                <div className="text">
                  <h4>{e.title}</h4>
                  <h5>{e.technologies}</h5>
                </div>
                <motion.div className="demo" whileTap={{ scale: 0.9 }}>
                  <a href={e.demo} target="_blank">
                    View Demo
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
