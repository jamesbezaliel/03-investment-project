export default function Input({ userInput, handleData }) {

  handleData
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            onChange={(event) => handleData(event, "initialInvestment")}
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) => handleData(event, "annualInvestment")}
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            onChange={(event) => handleData(event, "expectedReturn")}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            onChange={(event) => handleData(event, "duration")}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
