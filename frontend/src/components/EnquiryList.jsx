// // src/components/EnquiryList.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const EnquiryList = () => {
//   const [enquiries, setEnquiries] = useState([]);

//   const fetchData = async () => {
//     const res = await axios.get("http://127.0.0.1:8000/api/enquiries/");
//     setEnquiries(res.data);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://127.0.0.1:8000/api/enquiries/${id}/`);
//     fetchData();
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <table border="1">
//       <thead>
//         <tr>
//           <th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Created</th><th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {enquiries.map((enq) => (
//           <tr key={enq.id}>
//             <td>{enq.name}</td>
//             <td>{enq.email}</td>
//             <td>{enq.phone}</td>
//             <td>{enq.message}</td>
//             <td>{new Date(enq.created_at).toLocaleString()}</td>
//             <td><button onClick={() => handleDelete(enq.id)}>Delete</button></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default EnquiryList;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const EnquiryList = ({ refreshFlag }) => {
//   const [enquiries, setEnquiries] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://127.0.0.1:8000/api/enquiries/");
//       setEnquiries(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/enquiries/${id}/`);
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [refreshFlag]);

//   return (
//     <table className="enquiry-table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Message</th>
//           <th>Created</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {enquiries.map((enq) => (
//           <tr key={enq.id}>
//             <td>{enq.name}</td>
//             <td>{enq.email}</td>
//             <td>{enq.phone}</td>
//             <td>{enq.message}</td>
//             <td>{new Date(enq.created_at).toLocaleString()}</td>
//             <td>
//               <button className="delete-button" onClick={() => handleDelete(enq.id)}>
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default EnquiryList;


// src/components/EnquiryList.jsx
// src/components/EnquiryList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const EnquiryList = ({ refreshFlag, search }) => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/enquiries/", {
          params: { search: search || "" }
        });
        setEnquiries(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [refreshFlag, search]);  // fetchData not listed, because it's inside effect

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/enquiries/${id}/`);
      // after delete, fetch data again
      const res = await axios.get("http://127.0.0.1:8000/api/enquiries/", {
        params: { search: search || "" }
      });
      setEnquiries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table className="enquiry-table">
     
      <tbody>
        {enquiries.map((enq) => (
          <tr key={enq.id}>
            <td>{enq.name}</td>
            <td>{enq.email}</td>
            <td>{enq.phone}</td>
            <td>{enq.message}</td>
            <td>{new Date(enq.created_at).toLocaleString()}</td>
            <td>
              <button className="delete-button" onClick={() => handleDelete(enq.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EnquiryList;
