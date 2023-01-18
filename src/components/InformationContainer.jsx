import {AiFillPhone, AiOutlineMail,AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id='information'>
        <div className="info-card">
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telephone</h3>
                <p>(31)985511110</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail</h3>
                <p>georgesmarley84@outlook.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Belo Horizonte, MG</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer