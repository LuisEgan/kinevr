import React from 'react'
import Helmet from 'react-helmet'
import SweetAlert from 'react-bootstrap-sweetalert'
import { Modal, Button } from 'antd'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import bg1 from '../assets/photos/bg1.png'
import bottom from '../assets/photos/bottom.png'
import kid from '../assets/photos/kid.png'
import mediumAge from '../assets/photos/mediumAge.png'
import senior from '../assets/photos/senior.png'
import treatment from '../assets/photos/treatment.jpg'

import bodypoints from '../assets/SVG/bodypoints.svg'
import spine from '../assets/SVG/spine.svg'
import shoulder from '../assets/SVG/shoulder.svg'
import lumbar from '../assets/SVG/lumbar.svg'
import hips from '../assets/SVG/hips.svg'
import knee from '../assets/SVG/knee.svg'
import SubscribeForm from '../components/SubscribeForm'

class Homepage extends React.Component {
  state = {
    isSubscribeFormVisible: false,
    isFeedbackVisible: false,
  }

  onShowSubscribe = e => {
    e.preventDefault()
    this.setState({ isSubscribeFormVisible: true })
  }
  onSubscribe = () => {
    this.setState({ isFeedbackVisible: true, isSubscribeFormVisible: false })
  }

  render() {
    const siteTitle = 'KineVR'
    const { isSubscribeFormVisible, isFeedbackVisible } = this.state

    return (
      <Layout>
        <Helmet title={siteTitle} />

        {isSubscribeFormVisible && (
          <SweetAlert
            title="Ingresa tu email para mantenerte informado"
            confirmBtnStyle={{ display: 'none' }}
            onConfirm={() => {}}
          >
            <SubscribeForm onSubscribe={this.onSubscribe} />
          </SweetAlert>
        )}

        {isFeedbackVisible && (
          <SweetAlert
            success
            title="¡Gracias!"
            confirmBtnCssClass="feedbackBtn"
            confirmBtnText="¡Bien!"
            onConfirm={() => this.setState({ isFeedbackVisible: false })}
          >
            Te mantendremos al tanto
          </SweetAlert>
        )}

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
                <img src={treatment} alt="" />
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
                Gracias a nuestras avanzadas y realistas simulaciones
                interactivas, nuestros pacientes podrán tratar sus patologías o
                entrenar para prevenirlas de manera interesante, desafiante y
                entretenida. Cada simulación contará con un desafío específico
                para una patología en particular o para zonas corporales tales
                como espalda baja, hombros, tronco completo, miembro superior,
                etc… Lo que permite trabajar con más segmentos corporales en
                complemento volviendo la terapia más funcional y completa que
                alternativas más convencionales.
              </p>
              <p>
                Las simulaciones irán en orden de dificultad y nuestros
                pacientes podrán ir desafiandose cada vez más fomentando una
                sana y entretenida recuperación mejorando también así su calidad
                de vida en general.
              </p>
              <p>
                Nuestras terapias serán guiadas y asistidas por nuestros
                kinesiólogos quienes podrán intervenir en posturas o movimientos
                de manera externa mientras se trabaja junto a los equipos de
                realidad virtual, los cuales son cómodos, livianos y portátiles
                lo cual permitirá una experiencia más inmersiva.
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
                <img src={kid} alt="" />
              </span>
              <p>Ideado 100% para una efectiva recuperación</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={mediumAge} alt="" />
              </span>
              <p>Tratamiento de carácter personalizado</p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={senior} alt="" />
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
                <a onClick={this.onShowSubscribe} className="button special">
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
