import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  const initialInvestment = userInput.initialInvestment;

  // helper function
  function calculateTotalInterest(valueEndOfYear, annualInvestment, year) {
    return valueEndOfYear - annualInvestment * year - initialInvestment;
  }

  function calculateTotalAmountInvested(valueEndOfYear, totalInterest) {
    return valueEndOfYear - totalInterest;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => {
          const totalInterest = calculateTotalInterest(
            data.valueEndOfYear,
            data.annualInvestment,
            data.year
          );
          const totalAmountInvested = calculateTotalAmountInvested(
            data.valueEndOfYear,
            totalInterest
          );

          // other way:
          // const totalInterest =
          //   data.valueEndOfYear -
          //   data.annualInvestment * data.year -
          //   userInput.initialInvestment;
          // const totalAmountInvested = data.valueEndOfYear - totalInterest;
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
