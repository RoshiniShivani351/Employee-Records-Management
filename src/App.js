import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import EmployeeTable from './EmployeeTable';
import CreateEmployee from './CreateEmployee';
import EditEmployee from './EditEmployee';
import ViewEmployee from './ViewEmployee';


function App() {
  return (
    // route /=redirected to home page (emplyeetable.js)
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<EmployeeTable/>}> </Route>
          <Route path="/Employee/create" element={<CreateEmployee/>}> </Route>
           <Route path="/Employee/edit/:employeeid" element={<EditEmployee/>}> </Route>
            <Route path="/Employee/view/:employeeid" element={<ViewEmployee/>}> </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
