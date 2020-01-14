/* TODO: bs-css */
let header = ReactDOMRe.Style.make(~margin="50px auto", ());

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <main className="container">
    <section className="row" style=header> <Nav /> </section>
    <section className="row">
      <div className="twelve rows">
        {switch (url.path) {
         | [] => <h1> {React.string("HOME")} </h1>
         | ["reports"] => <ReportList />
         | ["reports", "new"] => <ReportNew />
         | _ => <h1> {React.string("Page not found")} </h1>
         }}
      </div>
    </section>
  </main>;
};