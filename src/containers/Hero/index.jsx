import React from 'react'
// import './styles/hero.css'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(images/Background.jpg);
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .hero-main-content {
    max-width: 600px;
    text-align: center;
    position: relative;
    .special-underline {
      transform: translateX(-20px);
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 100;
      color: #fff;
    }
  }

  h3 {
    color: rgba(255,255,255, 0.6);
    font-weight: 100;
    position: absolute;
    bottom: 32px;
  }

  a {
    color: #fff;
  }
`

class Hero extends React.Component {
  render() {
    return (
      <Container className="hero" >
        <div className="hero-main-content">
          <h1>Hello, we're here to make progressive Webapps for the <span className="primary-color">future.</span></h1>
          <div className="special-underline" />
        </div>
        <a href="mailto:hello@marklyck.com" className="action-btn">Contact Us</a>
        <h3>When a static website just doesn't cut it!</h3>
      </Container>
    )
  }
}

export default Hero
