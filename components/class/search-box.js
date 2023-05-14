import { useState, useEffect } from "react";

import staticApi from "@/services/staticApi";

function SearchBox({ onChangeSearch }) {
  const gradeList = [
    {
      code: "14",
      name: "Lớp 1, 2, 3, 4",
    },
    {
      code: "58",
      name: "Lớp 5, 6, 7, 8",
    },
    {
      code: "911",
      name: "Lớp 9, 10, 11",
    },
    {
      code: "12",
      name: "Lớp 12",
    },
    {
      code: "Uni",
      name: "Luyện thi đại học",
    },
  ];

  const [provinceList, setProvinceList] = useState([]);
  const [checkedProvinces, setCheckedProvinces] = useState([]);
  const [checkedGrades, setCheckedGrades] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [checkedSubjects, setCheckedSubjects] = useState([]);
  const [checkedTutorTypes, setCheckedTutorTypes] = useState([]);
  const [checkedClassTypes, setCheckedClassTypes] = useState([]);

  useEffect(() => {
    staticApi
      .getProvinceList()
      .then((res) => {
        setProvinceList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    staticApi
      .getSubjectList()
      .then((res) => {
        setSubjectList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    onChangeSearch({
      addresses: checkedProvinces,
      grades: checkedGrades,
      subjects: checkedSubjects,
      tutorTypes: checkedTutorTypes,
      classTypes: checkedClassTypes,
    });
  }, [
    checkedProvinces,
    checkedGrades,
    checkedSubjects,
    checkedTutorTypes,
    checkedClassTypes,
  ]);

  const handleAddress = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedProvinces([...checkedProvinces, value]);
    } else {
      setCheckedProvinces(checkedProvinces.filter((v) => v !== value));
    }
  };
  const handleGrade = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedGrades([...checkedGrades, value]);
    } else {
      setCheckedGrades(checkedGrades.filter((v) => v !== value));
    }
  };
  const handleSubject = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedSubjects([...checkedSubjects, value]);
    } else {
      setCheckedSubjects(checkedSubjects.filter((v) => v !== value));
    }
  };
  const handleTutorType = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedTutorTypes([...checkedTutorTypes, value]);
    } else {
      setCheckedTutorTypes(checkedTutorTypes.filter((v) => v !== value));
    }
  };
  const handleClassType = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedClassTypes([...checkedClassTypes, value]);
    } else {
      setCheckedClassTypes(checkedClassTypes.filter((v) => v !== value));
    }
  };

  return (
    <div>
      <aside className="menu">
        <p className="menu-label">Khu vực</p>
        <ul className="menu-list">
          {provinceList.map(function (province, i) {
            return (
              <li key={i}>
                <a>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value={province.code}
                      checked={checkedProvinces.includes(province.code)}
                      onChange={handleAddress}
                    />
                    <span className="ml-1">{province.name}</span>
                  </label>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="menu-label">Khối lớp</p>
        <ul className="menu-list">
          {gradeList.map(function (grade, i) {
            return (
              <li key={i}>
                <a>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value={grade.code}
                      checked={checkedGrades.includes(grade.code)}
                      onChange={handleGrade}
                    />
                    <span className="ml-1">{grade.name}</span>
                  </label>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="menu-label">Môn học</p>
        <ul className="menu-list">
          {subjectList.map(function (subject, i) {
            return (
              <li key={i}>
                <a>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value={subject.code}
                      checked={checkedSubjects.includes(subject.code)}
                      onChange={handleSubject}
                    />
                    <span className="ml-1">{subject.name}</span>
                  </label>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="menu-label">Trình độ yêu cầu</p>
        <ul className="menu-list">
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" value={1} onChange={handleTutorType} />
                <span className="ml-1">Sinh viên</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" value={1} onChange={handleTutorType} />
                <span className="ml-1">Giáo viên</span>
              </label>
            </a>
          </li>
        </ul>

        <p className="menu-label">Nơi dạy</p>
        <ul className="menu-list">
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" value={1} onChange={handleClassType} />
                <span className="ml-1">Trực tuyến</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" value={0} onChange={handleClassType} />
                <span className="ml-1">Tại gia</span>
              </label>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SearchBox;
