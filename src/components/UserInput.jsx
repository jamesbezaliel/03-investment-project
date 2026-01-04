export default function UserInput({ inputData, handleChangeInput }) {
  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="text"
              required
              value={inputData.initialInvestment}
              onChange={(event) =>
                handleChangeInput(event, "initialInvestment")
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="text"
              required
              value={inputData.annualInvestment}
              onChange={(event) => handleChangeInput(event, "annualInvestment")}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="text"
              required
              value={inputData.expectedReturn}
              onChange={(event) => handleChangeInput(event, "expectedReturn")}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="text"
              required
              value={inputData.duration}
              onChange={(event) => handleChangeInput(event, "duration")}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
