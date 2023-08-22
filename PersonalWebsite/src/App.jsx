import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'

import './App.css'

function App() {

	return (
			<div className ="flex-row">
				<  Navbar  />
				<	Home   />
				< Projects />
				<  Footer  />
			</div>
	)
}

export default App
