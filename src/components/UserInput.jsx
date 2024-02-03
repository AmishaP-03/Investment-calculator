export default function UserInput({userInput, onUserInputChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.initialInvestment} 
                        // onChange={(event) => handleChange('initialInvestment', event.target.value)}  // The anonymous function passed to onChange will receive the event object

                        // Since the state was lifted up to App component
                        onChange={(event) => onUserInputChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual investment</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.annualInvestment} 
                        // onChange={(event) => handleChange('annualInvestment', event.target.value)}
                        onChange={(event) => onUserInputChange('annualInvestment', event.target.value)}
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
                        // onChange={(event) => handleChange('expectedReturn', event.target.value)}
                        onChange={(event) => onUserInputChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput.duration} 
                        // onChange={(event) => handleChange('duration', event.target.value)}
                        onChange={(event) => onUserInputChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}