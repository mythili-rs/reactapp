import  { useState } from 'react';
import '../../css/About.css';

const About = () => {
  const [college, updateCollege] = useState("KEC");

  const updatingClg = () => {
    updateCollege("Kongu Engineering College");
  }

  return (
    <div>
      <h1>Welcome to {college}</h1>
      <button onDoubleClick={updatingClg}>Update College</button>
    </div>
  );
}

export default About;

