import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function ClassCard() {
  return (
    <div className="card">
      <header className="card-header">
        <div className="card-header-title">Mã số lớp</div>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Save
        </a>
        <a href="#" className="card-footer-item">
          Edit
        </a>
        <a href="#" className="card-footer-item">
          Delete
        </a>
      </footer>
    </div>
  );
}

export default ClassCard;
