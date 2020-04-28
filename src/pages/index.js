import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import bodypoints from '../assets/SVG/bodypoints.svg'
import spine from '../assets/SVG/spine.svg'
import shoulder from '../assets/SVG/shoulder.svg'
import lumbar from '../assets/SVG/lumbar.svg'
import hips from '../assets/SVG/hips.svg'
import knee from '../assets/SVG/knee.svg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'KineVR'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Revolucionando tratamientos con realidad virtual</h2>
              </header>
              <p>
                El proyecto nace de la idea de innovar respecto a las terapias
                convencionales kinésicas y médicas que existen actualmente para
                añadir un valor de motivación, inmersión y evaluación en tiempo
                real de las terapias.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
                  <img src={bodypoints} alt="bodypoints" />
                </li>
                <li>
                  <img src={spine} alt="spine" />
                </li>
                <li>
                  <img src={shoulder} alt="shoulder" />
                </li>
                <li>
                  <img src={lumbar} alt="lumbar" />
                </li>
                <li>
                  <img src={hips} alt="hips" />
                </li>
                <li>
                  <img src={knee} alt="knee" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  Experiencias en realidad virtual <br />
                  para tratar zonas específicas
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Para todo el mundo</h2>
              </header>
              <p>Actividades y simulaciones para todo tipo de personas</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <p>Ideado 100% para una efectiva recuperación</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <p>Tratamiento de carácter personalizado</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <p>Los mejores estándares de calidad</p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>¿Quieres saber más?</h2>
            </header>
            <p>Subscríbete a nuestro newsletter</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Subscribirse
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
