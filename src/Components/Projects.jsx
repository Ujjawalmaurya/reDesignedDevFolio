import React from 'react'
import ProjectCard from '../Cards/ProjectCard'

function Projects() {
  return (
        <section id="projects" className="portfolio-mf sect-pt4 route">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
            <div className="title-box text-center">
            <h3 className="title-a">
            Projects
            </h3>
            <p className="subtitle-a">
            Some of my projects are here.
            </p>
            <div className="line-mf"></div>
            </div>
            </div>
            </div>
            <div className="row">
            <ProjectCard href='https://play.google.com/store/apps/details?id=com.nca.digishala&hl=en_IN&gl=US' img='https://play-lh.googleusercontent.com/Qbb4IeYbhaE63rAIGL5XYCvgixdephNmVB480sDP6gwOVVdgfCDbQYbp0cDJnYE7bvg=s180-rw' title='DigiShala' description='Fully functioning app' date='18 Sep. 2018'  />

            <ProjectCard href='https://play.google.com/store/apps/details?id=com.nca.mentor_digishala&hl=en_IN&gl=US' img='https://play-lh.googleusercontent.com/FbbF8Ky6tfM8m0LYONIXcj63d6UgO9XXdf6i7JfRXpQZ0oebU1d5O_2goUfspAbLdw=s180-rw' title='Mentor -Digishala' description='Fully functioning mentor app' date='18 Sep. 2018' />

            <ProjectCard href='https://github.com/Ujjawalmaurya/KWiZ' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOcEfuGD3FUfSBWGP86vD6faeERFXThgMyJfBJYgBhMREF8FtThd775lbXnuUbOqTJtg&usqp=CAU' title='KWiZ' description='Web Design' date='18 Sep. 2018' />

            <ProjectCard href='https://github.com/Ujjawalmaurya/FullStackToDo' title='Full Stack To-Do web app' description='Full stack To-do web app' date='Jan 9, 2023'/>

            <ProjectCard href='https://ujjawalmaurya.github.io/DrumKitProject' title='Drum-Kit web app' description='Drumming web appl' date='Jan 7, 2023'
                // img='https://github.com/Ujjawalmaurya/DrumKitProject/raw/master/screenshots/01.png'
            />

            <ProjectCard title='Paytm clone' description='Tailwind CSS' href='https://github.com/Ujjawalmaurya/Paytm-clone' date='Dec 11, 2022' />
            
            <ProjectCard title='Rode Clone' description='Tailwind CSS' href='https://github.com/Ujjawalmaurya/Rode-clone' date='Dec 11, 2022' />
            
            <ProjectCard title='Shopify Clone' description='Tailwind CSS' href='https://github.com/Ujjawalmaurya/Shopify-Clone' date='Dec 11, 2022' />

            {/* <ProjectCard title='' description='' href='' date='' /> */}
                
            </div>
        </div>
    </section>
  )
}

export default Projects