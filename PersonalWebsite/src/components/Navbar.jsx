
function Navbar() {


    return (
			<nav className='bg-color2 py-10 mb-12 flex justify-between'>
				<h1 className='text-5xl text-color1 ml-10 '>Filipe Madureira</h1>
				<ul className='flex items-center'>
					<li className='mx-2'>
						<a 
							className='bg-color3 text-black px- py-2 px-3 rounded-lg' 
							href='#'
							>
							Resume
						</a>
					</li>

					<li className='mx-2'>
						<a 
							className='bg-color4 text-black px- py-2 px-3 rounded-lg' 
							href='#'
							>
							Projects
						</a>
					</li>

					<li className='mx-2'>
						<a 
							className='bg-color5 text-black mr-7 py-2 px-3 rounded-lg' 
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