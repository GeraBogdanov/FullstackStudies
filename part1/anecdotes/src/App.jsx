import { useState } from "react";

const Header = (props) => <h1>{props.text}</h1>;
const Anecdote = (props) => <div>{props.text}</div>;
const Vote = (props) => <div>has {props.text} votes</div>;
const Votes = (props) => <div>{props.text}</div>
const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;
const App = () => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(8).fill(0));

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const vote = (props) => {
    const copy = [...points];
    copy[props] += 1;
    setPoints(copy);
  };

  const handleClick = () => {
    console.log(`handleClick ${selected}`);
    const random = getRandomInt(8);
    setSelected(random);
  };
  const voteClick = () => {
    vote(selected);
    handleClick();
  };

  const mostVotes = () => {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > points[max]) {
        max = i;
      }
    }
    return max;
  };
  console.log(points);
  console.log(mostVotes());

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} />
      <Button handleClick={handleClick} text="next"/>
      <Button handleClick={voteClick} text="vote"/>
      <Votes text={points}/>
      <Header text="Anecdote with most votes" />
      <Anecdote text={anecdotes[mostVotes()]} />
      <Vote text={points[mostVotes()]} />
    </div>
  );
};

export default App;
