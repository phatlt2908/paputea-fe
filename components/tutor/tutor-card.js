function TutorCard({ tutor }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 is-capitalized">{tutor.tutorName}</p>
            <p className="subtitle is-6 is-uppercase">{tutor.job}</p>
          </div>
        </div>

        <div className="content">
          <div className="mb-1">Chuyên ngành: {tutor.major}</div>
          <div className="mb-1">{tutor.advantage}</div>
          <div>Đánh giá: (Chưa có đánh giá)</div>
        </div>
      </div>
    </div>
  );
}

export default TutorCard;
