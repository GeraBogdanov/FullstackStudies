import { useState } from "react";
import viteLogo from "/vite.svg";

function Header(props) {
  return <h1>{props.course}</h1>;
}

function Part(prop) {
  return (
    <p>
      {prop.part.name} {prop.part.exercises}
    </p>
  );
}

function Content(prop) {
  console.log(prop.parts);
  return prop.parts.map((part, i) => <Part key={i} part={part} />);
}

function Total(prop) {
  console.log(prop.parts);
  const total = prop.parts.reduce((a, b) => a + b.exercises, 0);
  return <p>Number of exercises {total}</p>;
}

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pamultilinemultiliness data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
