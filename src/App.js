import './App.css';
import Employee from './Employee';
import { useState } from 'react';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("dev");

  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }}>
      </input>

       <Employee name="Aiman" role="Intern" />
       <Employee name="Abby" role={role} />
       <Employee name="John" />
       </>
       ) : (
         <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
