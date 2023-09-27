// CSS
import styles from "./About.module.css";


import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste na construção de um Blog, feito com React no FrontEnd e Firebase no BackEnd.</p>
      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </div>
  )
}

export default About