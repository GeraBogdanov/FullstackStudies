import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

const Button = (props) => {
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
        </tr>
      </tbody>
  );
};

const Statistics = (props) => {
  const { good, bad, neutral} = props;

  const all = good + bad + neutral;

  const average = (good - bad) / all;

  const positive = (good / all) * 100;

  if (all === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <table>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </table>
      </div>
    );
  }
};

function App() {
  // save clicks of each button to its own staste
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  );
}

export default App;
