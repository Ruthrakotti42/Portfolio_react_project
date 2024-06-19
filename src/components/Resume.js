import ResumeImg from '../Assets/resume.jpg';

export default function Resume(){
       const config ={
              link:'https://drive.google.com/file/d/1vhDzPspiJTJwBq74ynscXU4z6JaZ39M7/view?usp=drive_link',
       }
              return <section id='Resume' className='flex flex-col md:flex-row bg-primary py-12 px-5'>
                      <div className='py-5 md:w-1/2 flex justify-center md:justify-end ' >
                            <img className='w-[300px]' src={ResumeImg} alt=""/>
                      </div>
                     <div className='md:w-1/2 flex  justify-center' >
                            <div className='flex flex-col justify-center text-white'>
                            <h1 className='text-3xl border-b-4  mb-5 w-[110px] font-bold '>Resume</h1>
                            <p className='pb-5'> You can view my resume <a className='btn ' href={config.link}>Download</a></p>
                            
                            </div>
                     </div>
              </section>
}