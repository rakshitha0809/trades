// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StudentForm from './components/StudentForm';
// import StudentDetails from './components/StudentDetails';

// const App = () => {
//   const [studentData, setStudentData] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<StudentForm setStudentData={setStudentData} />} />
//         <Route path="/details" element={<StudentDetails studentData={studentData} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Stats from './components/Stats';

// const App = () => {
//   const [studentData, setStudentData] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home setStudentData={setStudentData} />} />
//         <Route path="/stats" element={<Stats studentData={studentData} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Stats from './components/Stats';

// const App = () => {
//   const [formData, setFormData] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home setFormData={setFormData} />} />
//         <Route path="/stats" element={<Stats formData={formData} />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setFormData={setFormData} />} />
        <Route path="/stats" element={<Stats formData={formData} />} />
      </Routes>
    </Router>
  );
}
export default App;



