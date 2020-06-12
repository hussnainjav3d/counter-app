import React, { useState } from 'react';
import './App.css';

function App() {
	let [ count, setCount ] = useState(0);
	let [ isMorning, setMorning ] = useState(true);
	return (
		<div className={`box ${isMorning ? 'dayTime' : ''}`}>
			<button className="nightBtn" onClick={() => setMorning(!isMorning)}>
				Background Color : {isMorning ? 'Morning' : 'Night'}
			</button>
			<h1>Counter </h1>
			<p className="valueCounter">{count}</p>
			<div className="btnDiv">
				<button className="incrementBtn" onClick={() => setCount(++count)}>
					+
				</button>
				<button className="decrementBtn" onClick={() => setCount(--count)}>
					-
				</button>
			</div>
			<button className="resetBtn" onClick={() => setCount(0)}>
				Reset
			</button>
			<div className="footer">
				<h3>Copyright &copy; Hussnain Javed 2020</h3>
			</div>
		</div>
	);
}

export default App;
