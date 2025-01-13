import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id :0,
        title : "Flash Light App",
        desc : "A minimalist flashlight app built with Flutter, utilizing device camera flash for illumination."
,
        img : "/project_1.png",
        tags : ["Dart","Flutter"],
    },
    {
      id :1,
        title : "Calculator App",
        img : "/calculator.png",
        desc :"A basic calculator app developed in Flutter, performing arithmetic operations with a user-friendly interface.",
        tags : ["Dart","Flutter"],
    },
    {
      id :2,
        title : "To-Do App",
        desc : "A simple and intuitive task management app built with Flutter, allowing users to create, edit, and delete tasks.",
        img : "/todo.png",
        tags : ["Dart","Flutter"],

    },
    {
      id :3,
        title : "Dynamic Resume",
        desc : "A clean and responsive static resume website built using HTML, CSS, and JavaScript, showcasing my skills, experience, and education."
,
        img :"/res-3.png",
        tags : ["HTML","CSS","Javascript"],

    },
    {
      id :4,
        title : "SignUp Pages",
        desc : "A responsive sign-up page built with Flutter, featuring form validation and authentication.",
        img :"/sing_up.png",
        tags : ["Dart","Flutter"],

    }
]

const Projects = () => {
  return (
    <div data-aos="zoom-out" id = 'projects' className = 'container pt-32'>

        <Heading title='My Projects'/ >
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>

            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            tags={el.tags}
            img={el.img}
            desc={el.desc}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
