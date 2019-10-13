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
                    <Alert
                        dismissable
                        message="More than alert, this looks like a bubble with info in it, right?"
                    />
                    <Alert
                        backgroundColor="red"
                        color="green"
                        message="I'm not blue. I'm a red with green"
                    />
                </div>
            </section>
        </div>
    );
}

export default App;