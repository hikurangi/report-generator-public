[@react.component]
module ReporteeProfileForm = {
  open Formality;
  type field =
    | Name
    | DateOfBirth
    | AgeAtAssessment;

  type state = {
    name: string,
    dateOfBirth: int64,
    ageAtAssessment: int,
  };

  type validator = {
    field,
    strategy: Strategy.t,
  };

  type message = string;
  type submissionError = unit;

  module NameField = {
    let update = (state, value) => {...state, name: value};
    let validator = {
      field: Name,
      strategy: Strategy.OnSubmit,
      dependents: None,
      validate: state =>
        switch (state.name) {
        | "" => Error("Add a name")
        | _ => Ok(Valid)
        },
    };
  };

  module DateOfBirthField = {
    let update = (state, value) => {...state, dateOfBirth: value};
    let validator = {
      field: DateOfBirth,
      strategy: Strategy.OnSubmit,
      dependents: None,
      validate: state =>
        switch (state.dateOfBirth) {
        | f when f == Int64.zero => Error("Add a date of birth")
        | _ => Ok(Valid)
        },
    };
  };

    module AgeOfAssessmentField = {
    let update = (state, value) => {...state, ageAtAssessment: value};
    let validator = {
      field: AgeAtAssessment,
      strategy: Strategy.OnSubmit,
      dependents: None,
      validate: state =>
        switch (state.ageAtAssessment) {
        | f when f == 0 => Error("Add the age of the applicant at the time fo assessment")
        | _ => Ok(Valid)
        },
    };
  };

  let validators = [NameField.validator, DateOfBirthField.validator];
};

module ReporteeProfileFormHook = Formality.Make(ReporteeProfileForm);

[@react.component]
let make = () => {
  let form =
    ReporteeProfileFormHook.useForm(
      ~initialState=ReporteeProfileForm.{name: "", dateOfBirth: Int64.zero, ageAtAssessment: 0},
      ~onSubmit=(state, _form) => {
      Js.log2("form submitting", state)
    });

  Js.log2("Form state", form.state);

  <section>
    <h2> {React.string("Reportee Profile")} </h2>
    <form onSubmit={form.submit->Formality.Dom.preventDefault}>
      <label htmlFor="reportee-name"> {React.string("Name")} </label>
      <input
        name="reportee-name"
        value={form.state.name}
        disabled={form.submitting} /* possibly unnecessary */
        onBlur={_ => form.blur(Name)} /* NOTE: what does this do? */
        onChange={event =>
          form.change(
            Name,
            ReporteeProfileForm.NameField.update(
              form.state,
              event->ReactEvent.Form.target##value,
            ),
          )
        }
      />
      {switch (Name->(form.result)) {
       | Some(Error(message)) => <div> message->React.string </div>
       | Some(Ok(Valid | NoValue))
       | None => React.null
       }}
      <button type_="submit">
        {React.string("Save Reportee Details")}
      </button>
    </form>
  </section>;
};