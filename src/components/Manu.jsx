import React from 'react'

const Manu = () => {
  return (
    <div className='container menu'>
        <h1 className='menu-title'>What is <span>Skilline?</span></h1>
        <p className='menu-text'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        <div className="menu-row">
            <div className="box">
                <h1>FOR INSTRUCTORS</h1>
                <button>Start a class today</button>
            </div>
            <div className="box box2">
                <h1>FOR STUDENTS</h1>
                <button>Enter access code</button>
            </div>
        </div>
    </div>
  )
}

export default Manu