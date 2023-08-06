
function Navbar() {


    return (
			<nav className='fixed w-full h-[80px] bg-color2 border-2 border-black flex justify-between items-center px-4 '>
				<div>
					<h1 className='text-5xl font-semibold text-color1 ml-10 '>Filipe Madureira</h1>
				</div>

				<ul className='flex items-center'>
					<li className='mx-2'>
						<a 
							className='bg-color3 border-2 text-xl font-semibold border-black text-black px-5 py-3 rounded-lg' 
							href='#'
							>
							Resume
						</a>
					</li>

					<li className='mx-2'>
						<a 
							className='bg-color4 border-2 text-xl font-semibold border-black text-black py-3 px-5 rounded-lg' 
							href='#'
							>
							Projects
						</a>
					</li>

					<li className='mx-2'>
						<a 
							className='bg-color5 border-2 text-xl font-semibold border-black text-black py-3 px-5 rounded-lg' 
							href='#'
							>
							Contact
						</a>
					</li>
				</ul>
			</nav>
	)
  }
  
  export default Navbar