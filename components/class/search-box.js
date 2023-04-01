import { useState, useEffect } from "react";

import staticApi from "@/services/staticApi";

function SearchBox() {
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

  const [addressList, setAddressList] = useState([]);
  const [checkedAddresses, setCheckedAddresses] = useState([]);
  const [checkedGrades, setCheckedGrades] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [checkedSubjects, setCheckedSubjects] = useState([]);

  useEffect(() => {
    staticApi
      .getAddressList()
      .then((res) => {
        setAddressList(res.data);
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

  const handleAddress = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedAddresses([...checkedAddresses, value]);
    } else {
      setCheckedAddresses(checkedAddresses.filter((v) => v !== value));
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

  return (
    <div>
      <aside className="menu">
        <p className="menu-label">Khu vực</p>
        <ul className="menu-list">
          {addressList.map(function (address, i) {
            return (
              <li key={i}>
                <a>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value={address.code}
                      checked={checkedAddresses.includes(address.code)}
                      onChange={handleAddress}
                    />
                    <span className="ml-1">{address.name}</span>
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
                <input type="checkbox" />
                <span className="ml-1">Sinh viên</span>
              </label>
            </a>
          </li>
          <li>
            <a>
              <label className="checkbox">
                <input type="checkbox" />
                <span className="ml-1">Giáo viên</span>
              </label>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SearchBox;
