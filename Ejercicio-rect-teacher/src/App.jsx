
import { useState } from 'react';
import './App.css'

function App() {
  const [teacherName, setTeacherName] = useState('Sofía');


  return <div>
     <h2>Teacher Name: {teacherName}</h2>
    <ul>
      <li> <button onClick={()=>setTeacherName('Data')}>Data</button></li>
      <li> <button onClick={()=>setTeacherName('Reyes')}>Reyes</button></li>
      <li> <button onClick={()=>setTeacherName('Yolanda')}>Yolanda</button></li>
      </ul>
  </div>
}

export default App


