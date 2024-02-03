import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({userInput}) {
    const resultsData = calculateInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (for the current year)</th>
                    <th>Total interest</th>
                    <th>Investment capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((resultPerYear) => {
                    const totalInterest = resultPerYear.valueEndOfYear - resultPerYear.annualInvestment * resultPerYear.year - userInput.initialInvestment;
                    return (
                        <tr key={resultPerYear.year}>
                            <td>{resultPerYear.year}</td>
                            <td>{formatter.format(resultPerYear.valueEndOfYear)}</td>
                            <td>{formatter.format(resultPerYear.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(resultPerYear.valueEndOfYear - totalInterest)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}