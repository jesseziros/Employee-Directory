import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


function Body() {
  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([])

  // const handleFilteredEmployees = () => {
  //   setFilteredEmployees(employees.filter(employee => employee.lastName === {onChange}))
  //   console.log(employee)
  // }
  useEffect(() => {
    Axios.get('https://randomuser.me/api/?results=50&nat=us')
      .then(result => {
        console.log(result.data)
        setEmployees(result.data.results);
      })
  }, [])
  return (
    <div className="Body">
      <table>
        <thead>
          <tr>
            <th>Employee</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            return (
              <tr key={employee.email}>
                <td>{employee.name.first} {employee.name.last}</td>
                <td><img src={employee.picture.thumbnail} alt=""></img></td>
                <td>{employee.cell}</td>
                <td>{employee.gender}</td>
                <td>{employee.dob.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Body;
