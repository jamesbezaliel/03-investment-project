import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  // const initialInvestment =
  //   results[0].valueEndOfYear -
  //   results[0].interest -
  //   results[0].annualInvestment;

  const initialInvestment = userInput.initialInvestment;

    console.log(initialInvestment);
    // console.log(userInput.initialInvestment);
    

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((data) => {
            const totalInterest =
              data.valueEndOfYear - data.annualInvestment * data.year -
              initialInvestment;
            const totalAmountInvested = data.valueEndOfYear - totalInterest;
            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
