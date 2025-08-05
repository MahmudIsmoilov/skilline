import React from 'react'

const Main = () => {
  return (
    <div className='container main-main'>
        <h1 className='main-title'>Our <span>Features</span></h1>
        <p className='main-text'>This very extraordinary feature, can make learning activities more efficient</p>
        <div className="card">
          <div className="left3">
            <h1 className='card-title'><span>Tools</span> For Teachers And Learners</h1>
            <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.</p>
          </div>
          <div className="right3">
            <img src="./images/right3.svg" alt="" />
          </div>
        </div>
        <div className="card">
          <div className="right3">
            <img src="./images/right3.2.svg" alt="" />
          </div>
          <div className="left3">
            <h1 className='card-title'>Assessments, <span>Quizzes</span>, Tests</h1>
            <p>Easily launch live assignments, quizzes, and tests.
            Student results are automatically entered in the online gradebook.</p>
          </div>
        </div>
        <div className="card">
          <div className="left3">
            <h1 className='card-title'><span>Class Management</span> Tools for Educators</h1>
            <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className="right3">
            <img src="./images/right3.3.svg" alt="" />
          </div>
        </div>
        <div className="card">
          <div className="right3">
            <img src="./images/right3.4.svg" alt="" />
          </div>
          <div className="left3">
            <h1 className='card-title'>One-on-One <span>Discussions</span></h1>
            <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
          </div>
        </div>
    </div>
  )
}

export default Main