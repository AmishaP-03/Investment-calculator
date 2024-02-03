import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 5000,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((currentUserInput) => {
            return {
                ...currentUserInput,
                [inputIdentifier]: newValue
            };
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.initialInvestment} 
                        onChange={(event) => handleChange('initialInvestment', event.target.value)}  // The anonymous function passed to onChange will receive the event object
                    />
                </p>
                <p>
                    <label>Annual investment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.annualInvestment} 
                        onChange={(event) => handleChange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.expectedReturn} 
                        onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.duration} 
                        onChange={(event) => handleChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}