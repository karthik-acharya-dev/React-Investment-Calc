export default function UserInput({ userInput, onChange }) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>initial Investment</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>Anual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            ></input>
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) => onChange("duration", event.target.value)}
            ></input>
          </p>
        </div>
      </div>
    </>
  );
}
