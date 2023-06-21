import TutorCard from "@/components/tutor/tutor-card";

function TutorList({ tutorList }) {
  return (
    <section className="container section">
      <div className="content">
        <h1 className="is-size-3-touch">
          Đội ngũ gia sư tại trung tâm Paputea
        </h1>
      </div>
      <div className="columns is-multiline">
        {tutorList.map((tutorItem, index) => {
          return (
            <div key={index} className="column is-one-third">
              <TutorCard tutor={tutorItem} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TutorList;
