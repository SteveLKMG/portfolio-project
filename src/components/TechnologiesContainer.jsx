// import React from 'react'
import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'
import '../styles/components/TechnologiesContainer.sass'

const technologies = [
  {id : 'html', name : 'HTML5', icon: <DiHtml5 />},
  {id : 'js', name : 'CSS3', icon: < DiCss3 />},
  {id : 'css', name : 'JavaScript', icon: <DiJsBadge />},
  {id : 'node', name : 'Node.js', icon: <DiNodejsSmall />},
  {id : 'mysql', name : 'MySQL', icon: <DiMysql />},
  {id : 'react', name : 'React', icon: <DiReact />},
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-ontainer'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech)=>(
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>
              ProgBr, OneBitCode, RocketSeat
            </p>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer