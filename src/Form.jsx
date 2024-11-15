//Latest code
import { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Trim and validate inputs for both fields

    if (firstName.trim() === "" && lastName.trim() === "") {
      // Case: Both fields are empty
      setFullName`${firstName.trim()} ${lastName.trim()}`
    } else if (firstName.trim() === "" || lastName.trim() === "") {
      // Case: Only one field is empty
      setFullName(firstName || lastName);
    } else {
      // Case: Both fields are valid
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
      setError("");
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>{" "}
        {/* First Name Input */}{" "}
        <label htmlFor="firstName">First Name:</label>{" "}
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
         <br />{/* Last Name Input */}
        <label htmlFor="lastName">Last Name:</label>{" "}
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
       <br />{" "}
        <button type="submit">Submit</button>{" "}
      </form>
      {/* Display error message if validation fails */}{" "}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display full name if validation passes */}{" "}
      <h3>Full Name: {fullName}</h3>{" "}
    </div>
  );
};

export default DisplayName;

// 2nd old code
// import { useState } from 'react';

// const DisplayName = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [fullName, setFullName] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (firstName.trim() && lastName.trim()) {
//             setFullName(`${firstName} ${lastName}`);
//             setError('');
//         } else {
//             setError('Please fill in both fields.');
//             setFullName('');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h1>Full Name Display</h1>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                     id="firstName"
//                     type="text"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                     id="lastName"
//                     type="text"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <h3>Full Name: {fullName}</h3>
//             if
//         </div>
//     );
// };

// export default DisplayName;

// 1st old code
// import { useState } from "react";

// const DisplayName = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (firstName.trim() && lastName.trim()) {
//       setFullName(`${firstName} ${lastName}`);
//     } else {
//       alert("please fill in both fields");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Full Name Display</h1>
//         <label htmlFor="firstName"> First Name:</label>
//         <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//         <br />
//         <label htmlFor="lastName"> Last Name:</label>
//         <input id="lastName" type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
//         <br />
//         <button>Submit</button>
//       </form>
//       <h3>Full Name:{fullName}</h3>
//     </div>
//   );
// };

// export default DisplayName;
