import React from "react"
import AboutCard from "./AboutCard";
import "../css/about.css"
import tmdb
  from "../images/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"

class About extends React.Component {
  render() {
    const {classes} = this.props
    const members = [
      {
        name: "Forest Park",
        email: "foresthpark@gmail.com",
        github: "https://github.com/foresthpark",
        image: "https://i.imgur.com/20Up2aL.jpg",
        story: "Always looking our for tech that can change the future. Passionate about solving problems and helping others solve other problems."
      },
      {
        name: "Dustin Joynt",
        email: "dustinjoynt@gmail.com",
        github: "https://github.com/dustinjoynt",
        image: "https://i.imgur.com/PAQQHdL.jpg",
        story: "Full stack developer student, passionate about front end development and creating unique customer experiences."
      }
    ]

    const notMembers = members.map(({name, email, github, image, story}, index) => {
      return (
        <AboutCard
          key={index}
          name={name}
          email={email}
          github={github}
          image={image}
          story={story}
        />
      )
    })

    return (
      <div>
        <div className="contributors">
          Collaborators
        </div>
        <div className="about">
          {notMembers}
        </div>
        <div className="api">
          This site was made using The Movie Databse API
        </div>
        <div className="image">
          <a href="https://www.themoviedb.org/documentation/api" target="_blank">
            <img src={tmdb} width="200" height="100"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default About
