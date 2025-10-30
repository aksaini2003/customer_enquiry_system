
// import React, { useState } from "react";
// import "./App.css";
// import EnquiryForm from "./components/EnquiryForm";
// import EnquiryList from "./components/EnquiryList";

// function App() {
//   const [refresh, setRefresh] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>Customer Enquiry System</h1>

//       <div className="search-container">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search by name or email"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>

//       <EnquiryForm onSuccess={() => setRefresh(!refresh)} />

//       <hr className="divider" />

//       <EnquiryList
//         refreshFlag={refresh}
//         search={searchQuery}
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import EnquiryForm from "./components/EnquiryForm";
import EnquiryList from "./components/EnquiryList";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Customer Enquiry System</h1>

      {/* Enquiry Form First */}
      <EnquiryForm onSuccess={() => setRefresh(!refresh)} />

      {/* Search bar below the form */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by name or email"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <hr className="divider" />

      <EnquiryList refreshFlag={refresh} search={searchQuery} />
    </div>
  );
}

export default App;
