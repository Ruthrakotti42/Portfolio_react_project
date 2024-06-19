import websiteImg1 from '../Assets/CRMimage.jpg' 
import websiteImg2 from '../Assets/ecommerce-websites.jpg' 
import websiteImg3 from '../Assets/Portfolio_img.jpg' 

export default function Project() {
        const config ={
          projects:[
            { 
             Image: websiteImg1,
             Discreption:'A CRM website. Build with Full-stack React, Python & SQL',
             link:'https://github.com/Ruthrakotti42/Fin-Audit_CRM-Project'
            },
            {
             Image: websiteImg2,
             Discreption:'A ecommerce website. Build with React.js, Node.js & Mongodb',
             link:'https://github.com/Ruthrakotti42/Shopcart_react_project'
            },
            {
             
             Image: websiteImg3,
             Discreption:'Basic Portfolio website. Build with React.js, Tailwind CSS',
             link:'https://github.com/Ruthrakotti42/Portfolio_react_project'
            }
          ]
        }
              return <section id='Projects' className="flex flex-col px-5 py-20 justify-center bg-secondary text-white">
                            <div className='w-full'>
                            <div className=" flex flex-col py-5 px-10" >
                                <h1 className='text-3xl border-b-4  mb-5 w-[115px] font-bold'>Projects</h1>
                                <p>These are some of my best project. I have build this with React, MERN stack and Tailwind CSS. Check them out. </p>
                            </div>
                            </div>
                            <div className='w-full'>
                            <div className="flex flex-col md:flex-row gap-5 px-10 ">
                              {config.projects.map((project) =>(
                               
                                 <div className='relative'>
                                 <img  className='h-[200px] w-[500px]' src= {project.Image} alt='' />
                                 <div className='project-desc'>
                                 <p className='text-center px-5 py-5'>{project.Discreption}</p>
                                 <div className='flex justify-center'>
                                 <a  className='btn' target='blank' href={project.link}>View Project</a>
                                 </div>
                                 </div>
                             </div>
                             
                              ))}
                             
                              
                                 
                               
                            </div>
                            </div>
              </section>
}