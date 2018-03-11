
import { render } from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";
import "./sidebar.css";
import Login from "./Login.js";
import team_logo from './inSpect-logo.svg';
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Dashboard</h2>
  },
  {
    path: "/issues",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Issues</h2>
  },
  {
    path: "/generate-report",
    sidebar: () => <div>Generate Reports</div>,
    main: () => <h2>Generate Reports</h2>,
  }
];

const Sidebar = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "0px",
          width: "20%",
          height: "1000px",
          background: "#24292B"
        }}
      >
        <div className="sidebar-logo">
          <img src={team_logo} className="ca-logo" alt="logo" />
          <h2>Welcome, user!</h2>
        </div>
        <ul
          style={{ textDecoration: "none", listStyleType: "none", padding: 0 }}
        >
          <li>
            <div className="sidebar">
              <Link to="/" className="link">Dashboard</Link>
            </div>
          </li>
          <li>
            <div className="sidebar">
              <Link to="/issues" className="link">Issues</Link>
            </div>
          </li>
          <li>
            <div className="sidebar">
              <Link to="/generate-report" className="link">Generate Reports</Link>
            </div>
          </li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route key={index} path={route.path} exact={route.exact} />
        ))}
      </div>

      <div style={{ flex: 1, padding: "0px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default Sidebar;
