import React from 'react'
import Title from "../layouts/Title"
import Description from '../layouts/Description'
import howToUse from "../assets/howToUse.png"

const HowToUse = () => {
  return (
    <section>
      <div className='pt-4'>
        <Title titleText="How to use MailMonitor"/>
        <div className='pt-8'>
          <Description descriptionText="MailMonitor is menu bar MacOS application and you can access by clicking on it"/>
          <Description descriptionText="with the app launched number of unseen e-mails will be displayed all the time"/>
          <img className='rounded-lg mx-auto mt-8 w-[450px]' src={howToUse} alt='Image'></img>
        </div>
      </div>

      <div className='pt-16'>
        <Title titleText="setting preferences"/>
        <div className='pt-8'>
          <Description descriptionText="You can toggle auto-launch on login or automatical email reading/exporting daily"/>
        </div>
      </div>

      <div className='pt-16 pb-40'>
        <Title titleText="Keyboard shortcuts"/>
        <div className='pt-8'>
          <p className='text-center'> 
            <li> <span className='font-bold'>CTRL + CMD + R </span> to mark all emails as seen</li>
            <li> <span className='font-bold'>CTRL + OPTION + P</span> to generate report file </li>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowToUse