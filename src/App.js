import './index.css';
import Employee from './Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {name: "Abby",
      role: "Developer",
      img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      },
      {name: "Olu",
      role: "Manager",
      img: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg",
      },
      {name: "Caleb",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      },
      {name: "Jacob",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      },
      {name: "Sarah",
      role: "DevOps Guru",
      img: "https://images.pexels.com/photos/7243094/pexels-photo-7243094.jpeg",
      },
      {name: "Jess",
      role: "Human Relations",
      img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg",
      },

    ]);

  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }}>
      </input>

          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
                console.log(employee)
              return (
                <Employee 
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
       </>

       ) : (
         <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
