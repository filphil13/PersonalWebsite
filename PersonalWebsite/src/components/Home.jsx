import { HiArrowNarrowRight } from "react-icons/hi"
function Home() {


    return ( 
        <div name='home' className='w-full h-screen bg-[#0a192f] flex'>
        {/* Container */}
			<div className='max-w-fit mx-auto px-8 flex flex-col justify-center items-center h-full'>
				<div>
					<p className='text-pink-600'>Hi, my name is</p>
					<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
						Filipe Madureira
					</h1>
					<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
						I'm a Full Stack Developer.
					</h2>
					<p className='text-[#8892b0] py-4 max-w-[700px]'>
						Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione 
						quis architecto dolor quam qui. Non inventore natus, consequuntur blanditiis 
						animi. Rerum optio cum aliquid nostrum sint qui minus?
					</p>
					<div>
						<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
							View Work
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3 ' />
							</span>
						</button>
					</div>
				</div>
				<img 
					className="border-2 border-black h-auto max-w-md rounded-full " 
					src="/src/assets/ProfilePic2.jpg">
				</img>
			</div>
		</div>
    )

  }
  
  export default Home