/* slim down! */
[@bs.val] external document: Dom.document = "document";
[@bs.set] external setTitleDom: (Dom.document, string) => unit = "title";
// [@bs.get] external getTitleDom: Dom.document => string = "title";

// let getTitle = () => getTitleDom(document);
let setTitle = setTitleDom(document);
// let unsetTitle = () => setTitle("");

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
  // let url = ReasonReactRouter.useUrl();

  <nav className="twelve rows">
    {routes
     |> List.mapi((idx, route) =>
          <button
            className=""
            key={route.path ++ string_of_int(idx)}
            onClick={_ => {
              ReasonReactRouter.replace(route.path);
              setTitleDom(document, route.title);
            }}>
            {React.string(route.title)}
          </button>
        )
     |> Belt.List.toArray
     |> React.array}
  </nav>;
};