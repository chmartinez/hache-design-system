import React from 'react';
import { Alert } from './components/';

function App() {
	return (
		<div>
			<h1>Challenge is awaiting. This is not for cagones...</h1>
			<section>
				<h2>Components</h2>
				<div>
					<h4>An Alert!</h4>
					<Alert message="More than alert, this looks like a bubble with info in it, right?"/>
					<Alert message="I'm not blue. I'm a red with green" color="green" backgroundColor="red"/>
				</div>
			</section>
		</div>
	);
}

export default App;