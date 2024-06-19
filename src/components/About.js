import AboutImg from '../Assets/Aboutme.jpg';

export default function About(){
             const config ={
              line1:"Hello! I'm Ruthra kotti C, during my six-month internship as a Full Stack Web Developer, I developed responsive web applications using HTML, CSS, Tailwind CSS and JavaScript, and built dynamic user interfaces with React.js. I created and managed RESTful APIs with Node.js and Python,frameworks using Flask, Django and maintained databases using MySQL and MongoDB. I collaborated with teams to integrate front-end and back-end components, utilizing Git/GitHub for version control. This experience enhanced my technical skills and prepared me for future opportunities in the tech industry.",
              line2:"I also gained experience in deploying applications using cloud services like AWS",
              line3:"My internship provided valuable insights into agile development methodologies, allowing me to effectively contribute to project sprints and deliverables."

             }
         

              return <section id='About' className='flex flex-col md:flex-row bg-third px-5'>
                      <div className=' md:w-1/2' >
                            <img className='h-[550px] w-[550px]' src={AboutImg} alt="" />
                      </div>
                     <div className='md:w-1/2 flex  justify-center' >
                            <div className='flex flex-col justify-center text-white'>
                            <h1 className='text-3xl border-b-4  mb-5 w-[170px] font-bold '>About Me</h1>
                            <p className='pb-5'>{config.line1}</p>
                            <p className='pb-5'>{config.line2}</p>
                            <p className='pb-5'>{config.line3}</p>
                            </div>
                     </div>
              </section>
}