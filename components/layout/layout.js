import { Fragment } from "react";

import MainNavigation from "./main-navigation";
import MainFooter from "./main-footer";
import Breadcrumb from "./breadcrumb";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <Breadcrumb />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
