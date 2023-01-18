import SocialNetwork from './SocialNetwork'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

import Avatar from '../img/img.jpeg'


const Sidebar= () => {
  return(
   <aside id="sidebar">
     <img src={Avatar}  alt="Stevenson LM Georges" />
     <p className="title">Desenvolvedor Front-End</p>
     <SocialNetwork />
     <InformationContainer />
     <a href="" className="btn">Download curriculo
     </a>

  </aside>
  )
}

export default Sidebar