type route = {
  path: string,
  title: string,
};

let routes = [
  {path: "/", title: "Home"},
  {path: "/reports", title: "Reports"},
  {path: "/reports/new", title: "New Report"},
];

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <div>
    <nav>
      {routes
       |> List.mapi((idx, route) =>
            <button
              key={route.path ++ string_of_int(idx)}
              onClick={_ => ReasonReactRouter.replace(route.path)}>
              {React.string(route.title)}
            </button>
          )
       |> Belt.List.toArray
       |> React.array}
    </nav>
    <main>
      {switch (url.path) {
       | [] => <h1> {React.string("HOME")} </h1>
       | ["reports"] => <ReportList />
       | ["reports", "new"] => <ReportNew />
       | _ => <h1> {React.string("Page not found")} </h1>
       }}
    </main>
  </div>;
};