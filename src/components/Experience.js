import AboutImg from '../Assets/about.png';

export default function Experience(){
             const config ={
              line1:"During my internship at Uniq Technologies as a Full Stack Developer, I was deeply involved in developing and maintaining dynamic web applications.",
              line2:"I worked on both front-end and back-end technologies, including HTML, CSS, JavaScript, and Node.js.",
              line3:"Collaborating closely with the design team, I enhanced user interfaces to ensure a seamless user experience.",
              line4:"My responsibilities included writing and debugging code, conducting code reviews, and optimizing application performance.",
              line5:"I managed databases with MongoDB, implemented RESTful APIs, and utilized cloud services like AWS for deployment.",
              line6:"This hands-on experience significantly improved my technical skills and reinforced my passion for full stack development.",
              

             }
         

              return <section id='About' className='flex flex-col md:flex-row bg-secondary py-10 px-5'>
                      <div className='md:w-1/2' >
                            <img className='h-[400px] w-[600px]' src={AboutImg} alt="" />
                      </div>
                     <div className='md:w-1/2 flex  justify-center' >
                            <div className='flex flex-col justify-center text-white'>
                            <h1 className='text-3xl border-b-4  mb-5 w-[170px] font-bold '>Experience</h1>
                            <p className='pb-3'>{config.line1}</p>
                            <p className='pb-3'>{config.line2}</p>
                            <p className='pb-3'>{config.line3}</p>
                            <p className='pb-3'>{config.line4}</p>
                            <p className='pb-3'>{config.line5}</p>
                            <p className='pb-3'>{config.line6}</p>
                            </div>
                     </div>
              </section>
}