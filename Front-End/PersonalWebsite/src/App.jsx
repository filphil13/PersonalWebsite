import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css'

function App() {

	return (
		<>
			<  Navbar  />
			<div>
			<	Home   />
			< Projects />
			<  Contact />
			<  Footer  />
			</div>
		</>
	)
}

export default App
