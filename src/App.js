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
                        variation="warning"
                        message="Support different variations, from warnings..."
                    />
                    <Alert
                        variation="error"
                        message="To errors..."
                    />
                </div>
            </section>
        </div>
    );
}

export default App;
