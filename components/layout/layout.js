import { Fragment } from "react";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="G-PBR42K7QKE" />
      <GoogleAnalytics gaId="G-PBR42K7QKE" />
    </Fragment>
  );
}

export default Layout;
