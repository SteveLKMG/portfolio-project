import '../styles/components/maincontent.sass'

import AboutContainer from './AboutContainer'
import ProjectContainer from './ProjectContainer'
import TechnologiesContainer from './TechnologiesContainer'


const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer></AboutContainer>
      <TechnologiesContainer></TechnologiesContainer>
      <ProjectContainer>projetos</ProjectContainer>
    </main>
  )
}

export default MainContent