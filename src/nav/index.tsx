import * as React from "react"
import CSS        from "csstype"
import { Link }   from "react-router-dom"

const navStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};

const Nav = (): JSX.Element => (
  <nav className="twelve rows" style={navStyle}>
    <Link to="/">Home</Link>
    <Link to="/reports">Reports</Link>
  </nav>
);

export default Nav;

// /* slim down! */
// [@bs.val] external document: Dom.document = "document";
// [@bs.set] external setTitleDom: (Dom.document, string) => unit = "title";
// // [@bs.get] external getTitleDom: Dom.document => string = "title";

// // let getTitle = () => getTitleDom(document);
// let setTitle = setTitleDom(document);
// // let unsetTitle = () => setTitle("");

// let navButton =
//   ReactDOMRe.Style.make(~marginTop="5px", ~marginBottom="5px", ());

// type route = {
//   path: string,
//   title: string,
// };

// let routes = [
//   {path: "/", title: "Home"},
//   {path: "/reports", title: "Reports"},
//   {path: "/reports/new", title: "New Report"},
// ];

// [@react.component]
// let make = () => {
//   // let url = ReasonReactRouter.useUrl();
// <nav className="twelve rows" style=navStyle>
//     {routes
//      |> List.mapi((idx, route) =>
//           <button
//             style=navButton
//             key={route.path ++ string_of_int(idx)}
//             onClick={_ => {
//               ReasonReactRouter.replace(route.path);
//               setTitleDom(document, route.title);
//             }}>
//             {React.string(route.title)}
//           </button>
//         )
//      |> Belt.List.toArray
//      |> React.array}
//   </nav>;
// };
