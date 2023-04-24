import { Fragment } from "react";

import MainNavigation from "./main-navigation";
import MainFooter from "./main-footer";
import Breadcrumb from "./breadcrumb";
import SendMessageButton from "./send-message-button";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <Breadcrumb />
      <SendMessageButton />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
