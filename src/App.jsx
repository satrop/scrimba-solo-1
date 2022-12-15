import { useState } from 'react';
import Image from './Components/Image/Image';
import Info from './Components/Info/Info';
import About from './Components/About/About';
import Interests from './Components/Interests/Interests';
import Footer from './Components/Footer/Footer';

import './app.scss';

function App() {
	const [isActive, setActive] = useState('false');
	const ToggleClass = () => {
		setActive(!isActive);
	};

	return (
		<>
			<button
				className={`toggle-button ${isActive ? '' : 'light'}`}
				onClick={ToggleClass}
			>
				Toggle {`${isActive ? 'Light' : 'Dark'}`} Design
			</button>
			<div className={`card ${isActive ? 'dark' : 'light'}`}>
				<Image />
				<Info />
				<About />
				<Interests />
				<Footer />
			</div>
		</>
	);
}

export default App;
