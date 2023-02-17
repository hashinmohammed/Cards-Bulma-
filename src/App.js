import 'bulma/css/bulma.css'
import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from "./images/alexa.png"
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <section className="hero is-primary">
       <div className="hero-body">
            Personal Digital Assistants
        <p className="title"></p>
        </div> 
      </section>
        
       <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}
             description="lorem dfsdeewf fendsfn gnsdk wekfn"
            />

            </div>
            <div className="column is-4">
            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}
            description="lorem dfsdeewf fendsfn gnsdk wekfn"
            />
            </div>
            <div className="column is-4">
            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} 
             description="lorem dfsdeewf fendsfn gnsdk wekfn"
            />
            </div>
          </div>
        </section>
       </div>
       
       
        

    </div>
  )
}

export default App