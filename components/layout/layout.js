import { Fragment } from "react";

import MainNavigation from "./main-navigation";
import MainFooter from "./main-footer";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
