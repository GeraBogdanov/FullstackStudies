const Header = (props) => {
    return <h1>{props.name}</h1>;
  };
  
  const Total = (props) => {
    return <p>Number of exercises {props.sumOfExercises}</p>;
  };
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    );
  };
  
  const Content = (props) => {
    const total = props.parts.reduce((acc, sum) => acc + sum.exercises, 0);
    console.log(total);
    return (
      <div>
        {props.parts.map((item) => (
          <Part key={item.id} part={item.name} exercises={item.exercises} />
        ))}
        <Total sumOfExercises={total} />
      </div>
    );
  };
  
  const Course = (props) => {
    console.log(props.course.parts);
    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
      </div>
    );
  };

  export default Course;