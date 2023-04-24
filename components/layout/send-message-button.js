import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./send-message-button.module.css";

function SendMessageButton() {
  return (
    <a
      href="http://m.me/munmeovn"
      target="_blank"
      className={classes.button + " button is-primary is-large is-rounded"}
    >
      <span className="icon is-small">
        <FontAwesomeIcon icon={faComment} />
      </span>
    </a>
  );
}

export default SendMessageButton;
