import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    feedback: '',
    rating: ''
  });

  const handleChange =(e) =>{
    const{name,value}=e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`PLease Confirm your details: \n \n${confirmationMessage}`);
    if (isConfirmed) {
      console.log("Submitting feedback: ", formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert("Thank you for your valuable feedback!");
    }
  };


  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text"
              name='name'
              value ={formData.name}
              onChange={handleChange}
              placeholder='Your Name'/>
        <input type="email"
              name='email'
              value ={formData.email}
              onChange={handleChange}
              placeholder='Your Email'/>
              
        <textarea
              name='feedback' 
              rows="5"
              value ={formData.feedback}
              onChange={handleChange}
              placeholder='Your Feedback'/>
        
         <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Rate Us:</span>
                    <lable><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                    /> 1</lable>
                  <lable>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    /> 2</lable>
                  <lable>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    /> 3</lable>
                   <lable> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    /> 4</lable>
                    <lable><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    /> 5</lable>
                </div>

                <button type='submit'>Submit</button>
        
        
      </form>
    </>
  );
};

export default FeedbackForm;
