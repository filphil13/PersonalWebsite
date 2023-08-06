import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Introduction from './components/Introduction'

import './App.css'

function App() {

  return (
		<div className='min-h-screen bg-green-700'>
			<Navbar/>
      <Introduction/>
      <Footer/>
		</div>
  )
}

export default App
