import Image from "next/image";

function TutorCard({ tutor }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square
        ">
          <Image
            className="image-cover-object"
            src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg"
            alt="Hero image"
            width={400}
            height={400}
            priority
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media mb-0">
          <div className="media-content">
            <p className="title is-4 is-capitalized">{tutor.tutorName}</p>
            <p className="subtitle is-6 is-uppercase">{tutor.job}</p>
          </div>
        </div>

        {(tutor.major || tutor.advantage) && (
          <div className="content mt-2">
            {tutor.major && (
              <div className="mb-1">Chuyên ngành: {tutor.major}</div>
            )}
            {tutor.advantage && <div className="mb-1">{tutor.advantage}</div>}
            {/* <div>Đánh giá: (Chưa có đánh giá)</div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default TutorCard;
