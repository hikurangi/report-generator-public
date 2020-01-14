module Form = {
  type field =
    | ProfileName
    | ProfileAge;
  
  type state = {
    name: string,
    age: int
  };

  type message = string;
  type submissionError = unit;

  let validators = []
}

[@react.component]
let make = () => {
  <h2>{React.string("Report")}</h2>
};