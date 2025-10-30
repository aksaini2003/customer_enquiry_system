
// import React, { useState } from 'react';
// import api from '../api';
// import '../App.css';

// const EnquiryForm = ({ onSuccess }) => {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
//   const [errors, setErrors] = useState({});   // changed from single error string
//   const [success, setSuccess] = useState('');

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };

//   const validatePhone = (phone) => {
//     const phoneRegex = /^[0-9]+$/;  // only digits
//     return phoneRegex.test(phone);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//     setSuccess('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     // Required fields
//     if (!form.name.trim()) newErrors.name = 'Name is required.';
//     if (!form.email.trim()) newErrors.email = 'Email is required.';
//     if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
//     if (!form.message.trim()) newErrors.message = 'Message is required.';

//     // Format validations
//     if (form.email && !validateEmail(form.email)) {
//       newErrors.email = 'Please enter a valid email address.';
//     }

//     if (form.phone && !validatePhone(form.phone)) {
//       newErrors.phone = 'Phone number must contain digits only.';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       await api.post('/', form);
//       setSuccess('Enquiry submitted successfully!');
//       setForm({ name: '', email: '', phone: '', message: '' });
//       setErrors({});
//       onSuccess();
//     } catch (err) {
//       setErrors({ submit: 'Failed to submit enquiry. Please try again.' });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="enquiry-form">
//       <div>
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         {errors.name && <div className="error-message">{errors.name}</div>}
//       </div>

//       <div>
//         <input
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//         {errors.email && <div className="error-message">{errors.email}</div>}
//       </div>

//       <div>
//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//         />
//         {errors.phone && <div className="error-message">{errors.phone}</div>}
//       </div>

//       <div>
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Message"
//           rows="4"
//         />
//         {errors.message && <div className="error-message">{errors.message}</div>}
//       </div>

//       <button type="submit">Submit</button>

//       {success && <div className="success-message">{success}</div>}
//       {errors.submit && <div className="error-message">{errors.submit}</div>}
//     </form>
//   );
// };

// export default EnquiryForm;


// src/components/EnquiryForm.jsx
import React, { useState } from 'react';
import api from '../api';
import '../App.css';

const EnquiryForm = ({ onSuccess }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // Only digits allowed, length 10 (for example, adjust if different)
  const validatePhone = phone => /^[0-9]{10}$/.test(phone);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setSuccess('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!validatePhone(form.phone)) {
      newErrors.phone = 'Phone must be 10 digits and contain digits only.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await api.post('/', form);
      setSuccess('Enquiry submitted successfully!');
      setForm({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      onSuccess();
    } catch (err) {
      setErrors({ submit: 'Failed to submit enquiry. Please try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="enquiry-form">
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>

      <div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>

      <div>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (10 digits)"
        />
        {errors.phone && <div className="error-message">{errors.phone}</div>}
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows="4"
        />
        {errors.message && <div className="error-message">{errors.message}</div>}
      </div>

      <button type="submit">Submit</button>

      {success && <div className="success-message">{success}</div>}
      {errors.submit && <div className="error-message">{errors.submit}</div>}
    </form>
  );
};

export default EnquiryForm;
