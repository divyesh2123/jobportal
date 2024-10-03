import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import SignUpForRecruiter from './pages/SignUpForRecruiter';
import JobList from './pages/JobList';

function App() {
  return (
    <Routes>

      <Route path='/' element={<SignUpForRecruiter></SignUpForRecruiter>}/>
      <Route path='/jobs' element={<JobList></JobList>}/>
    </Routes>
  );
}

export default App;
