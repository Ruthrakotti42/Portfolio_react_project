
export default function Contact(){
       const config ={
              Email:'ruthrakottifsd369@gmail.com',
              Phone:'+91 6380338742'
       }
              return <section id="Contact" className='flex flex-col bg-secondary px-5 py-32'>
                      
                     <div className='flex flex-col items-center text-white'>
                            <h1 className='text-3xl border-b-4  mb-5 w-[110px] font-bold '>Contact</h1>
                            <p className='pb-5'> If you want to discuss in detail, please contact me</p>
                            <p className="py-2"><span className="font-bold">Email:</span> {config.Email} </p>
                            <p className="py-2"><span className="font-bold">Phone:</span> {config.Phone} </p>

                     </div>
              </section>
}