// src/StudentForm.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const StudentForm = ({ setStudentData }) => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [grade, setGrade] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const student = { name, age, grade };
//     setStudentData(student);
//     navigate('/details');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </div>
//       <div>
//         <label>Age:</label>
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
//       </div>
//       <div>
//         <label>Grade:</label>
//         <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default StudentForm;


// src/components/Stats.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Stats = ({ studentData }) => {
//   const navigate = useNavigate();

//   if (!studentData) {
//     navigate('/');
//     return null;
//   }

//   return (
//     <div>
//       <h2>Student Details</h2>
//       <p><strong>Name:</strong> {studentData.name}</p>
//       <p><strong>Age:</strong> {studentData.age}</p>
//       <p><strong>Grade:</strong> {studentData.grade}</p>
//     </div>
//   );
// }

// export default Stats;

// src/components/Stats.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Stats = ({ studentData }) => {
//   const navigate = useNavigate();

//   if (!studentData) {
//     navigate('/');
//     return null;
//   }

//   return (
//     <div>
//       <h2>Student Details</h2>
//       <p><strong>Unique ID:</strong> {studentData.uniqueId}</p>
//     </div>
//   );
// }
// export default Stats;

// src/components/Stats.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Stats = ({ formData }) => {
//   const navigate = useNavigate();

//   if (!formData) {
//     navigate('/');
//     return null;
//   }

//   return (
//     <div>
//       <h2>Details</h2>
//       <p><strong>Unique ID:</strong> {formData.uniqueId}</p>
//     </div>
//   );
// }

// export default Stats;

// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Stats = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const formData = location.state;

//   if (!formData) {
//     navigate('/');
//     return null;
//   }

//   return (
//     <div>
//       <h2>Details</h2>
//       <p><strong>Unique ID:</strong> {formData.uniqueId}</p>
//       <p><strong>Files:</strong></p>
//       <ul>
//         {formData.files.map((file, index) => (
//           <li key={index}>{file}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Stats;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const Stats = ({ formData }) => {
  const navigate = useNavigate();

  if (!formData) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h2>Details</h2>
      <p><strong>Unique ID:</strong> {formData.uniqueId}</p>
    </div>
  );
}
export default Stats;
