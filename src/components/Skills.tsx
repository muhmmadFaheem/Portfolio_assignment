import React from 'react'

const Skills = () => {
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000" id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap 20 items center'>
            <div>
                <h2 className='text-4xl md:text-5xl'>Digital DNA</h2>
                <p className='text-white-500 pt-2'>
                As a versatile and innovative developer,
                 I specialize in crafting seamless mobile 
                 experiences with Flutter and stunning web applications
                  with Next.js and Tailwind CSS. With expertise in both mobile and web development, 
                I efficiently bridge the gap between functionality and aesthetics. My skills include:
                </p>

            </div>
            <div className='grid grid-cols-3 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
                <h2 className='text-green-500 pt-2'>Typescript</h2>
                <h2 className='text-green-500 pt-2'>Next.JS</h2>
                <h2 className='text-green-500 pt-2'>React.Js</h2>

            </div>

            <div className='space-y-2'>
                <h2 className='text-blue-600 pt-2'>Tailwind</h2>
                <h2 className='text-blue-600 pt-2'>CSS</h2>
                <h2 className='text-blue-600 pt-2'>Node.Js</h2>

            </div>
            
            <div className='space-y-2'>

                <h2 className='text-pink-900 pt-2'>Flutter </h2>
                <h2 className='text-pink-900 pt-2'>Mobile App</h2>

                <h2 className='text-pink-900 pt-2'>Dart</h2>

            </div>
            
            
        </div>
        

          

        </div>
    </div>
  )
}

export default Skills
