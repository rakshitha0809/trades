// // src/StudentDetails.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const StudentDetails = ({ studentData }) => {
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

// export default StudentDetails;


// src/components/Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = ({ setStudentData }) => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [grade, setGrade] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const student = { name, age, grade };
//     setStudentData(student);
//     navigate('/stats');
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

// export default Home;



// src/components/Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = ({ setStudentData }) => {
//   const [uniqueId, setUniqueId] = useState('');
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [file3, setFile3] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!/^[a-zA-Z0-9]{4}$/.test(uniqueId)) {
//       alert('Unique ID must be exactly 4 alphanumeric characters.');
//       return;
//     }
//     const student = { uniqueId, files: [file1, file2, file3] };
//     setStudentData(student);
//     navigate('/stats');
//   };

//   return (
//     <div className="form-container">
//       <h2>Enter Student Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Unique ID:</label>
//           <input
//             type="text"
//             value={uniqueId}
//             onChange={(e) => setUniqueId(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Upload File 1:</label>
//           <input
//             type="file"
//             onChange={(e) => setFile1(e.target.files[0])}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Upload File 2:</label>
//           <input
//             type="file"
//             onChange={(e) => setFile2(e.target.files[0])}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Upload File 3:</label>
//           <input
//             type="file"
//             onChange={(e) => setFile3(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Home;

// src/components/Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = ({ setFormData }) => {
//   const [uniqueId, setUniqueId] = useState('');
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [file3, setFile3] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!/^[a-zA-Z0-9]{4}$/.test(uniqueId)) {
//       alert('Unique ID must be exactly 4 alphanumeric characters.');
//       return;
//     }
//     const formData = { uniqueId, files: [file1, file2, file3] };
//     setFormData(formData);
//     navigate('/stats');
//   };

//   return (
//     <div className="form-container">
//       <h2>Enter Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Unique ID:</label>
//           <input
//             type="text"
//             value={uniqueId}
//             onChange={(e) => setUniqueId(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Upload File 1:</label>
//           <input
//             type="file"
//             onChange={(e) => setFile1(e.target.files[0])}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Upload File 2:</label>
//           <input
//             type="file"
//             onChange={(e) => setFile2(e.target.files[0])}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Upload File 3:</label>
//           <input
//             type="file"
//             onChange={(e) => setFile3(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Home;




// src/components/Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = ({ setFormData }) => {
//   const [uniqueId, setUniqueId] = useState('');
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [file3, setFile3] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!/^[a-zA-Z0-9]{4}$/.test(uniqueId)) {
//       alert('Unique ID must be exactly 4 alphanumeric characters.');
//       return;
//     }
//     const formData = { uniqueId, files: [file1, file2, file3] };
//     setFormData(formData);
//     navigate('/stats');
//   };

//   return (
//     <div>
//       <h1>Reflect on your trades</h1>
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Unique ID:</label>
//             <input
//               type="text"
//               value={uniqueId}
//               onChange={(e) => setUniqueId(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label></label>
//             <input
//               type="file"
//               onChange={(e) => setFile1(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label></label>
//             <input
//               type="file"
//               onChange={(e) => setFile2(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label></label>
//             <input
//               type="file"
//               onChange={(e) => setFile3(e.target.files[0])}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import axios from 'axios';

// const Home = ({ setFormData }) => {
//   const [uniqueId, setUniqueId] = useState('');
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [file3, setFile3] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!/^[a-zA-Z0-9]{4}$/.test(uniqueId)) {
//       alert('Unique ID must be exactly 4 alphanumeric characters.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('uniqueId', uniqueId);
//     formData.append('files', file1);
//     formData.append('files', file2);
//     formData.append('files', file3);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData);
//       setFormData({ uniqueId, files: response.data.filePaths });
//       navigate('/stats');
//     } catch (error) {
//       console.error('There was an error uploading the files!', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Reflect on your trades</h1>
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Unique ID:</label>
//             <input
//               type="text"
//               value={uniqueId}
//               onChange={(e) => setUniqueId(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>File 1:</label>
//             <input
//               type="file"
//               onChange={(e) => setFile1(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>File 2:</label>
//             <input
//               type="file"
//               onChange={(e) => setFile2(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>File 3:</label>
//             <input
//               type="file"
//               onChange={(e) => setFile3(e.target.files[0])}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Home;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import axios from 'axios';

// const Home = ({ setFormData }) => {
//   const [uniqueId, setUniqueId] = useState('');
//   const [file1, setFile1] = useState(null);
//   const [file2, setFile2] = useState(null);
//   const [file3, setFile3] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!/^[a-zA-Z0-9]{4}$/.test(uniqueId)) {
//       alert('Unique ID must be exactly 4 alphanumeric characters.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('uniqueId', uniqueId);
//     formData.append('files', file1);
//     formData.append('files', file2);
//     formData.append('files', file3);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData);
//       const data = { uniqueId, files: response.data.filePaths };
//       setFormData(data);
//       navigate('/stats', { state: data });
//     } catch (error) {
//       console.error('There was an error uploading the files!', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Reflect on your trades</h1>
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Unique ID:</label>
//             <input
//               type="text"
//               value={uniqueId}
//               onChange={(e) => setUniqueId(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>File 1:</label>
//             <input
//               type="file"
//               onChange={(e) => setFile1(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>File 2:</label>
//             <input
//               type="file"
//               onChange={(e) => setFile2(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>File 3:</label>
//             <input
//               type="file"
//               onChange={(e) => setFile3(e.target.files[0])}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Home;
//if not worked....................
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setFormData }) => {
  const [uniqueId, setUniqueId] = useState('');
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z0-9]{4}$/.test(uniqueId)) {
      alert('Unique ID must be exactly 4 alphanumeric characters.');
      return;
    }
    const formData = { uniqueId, files: [file1, file2, file3] };
    setFormData(formData);
    navigate('/stats');
  };

  return (
    <div>
      <h1>Reflect on your trades</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Unique ID:</label>
            <input
              type="text"
              value={uniqueId}
              onChange={(e) => setUniqueId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              type="file"
              onChange={(e) => setFile1(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              type="file"
              onChange={(e) => setFile2(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              type="file"
              onChange={(e) => setFile3(e.target.files[0])}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Home;



