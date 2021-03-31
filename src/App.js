import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Profileform from './components/Profileform'
import Workexperience1Accordion from './components/Workexperience1Accordion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import WorkExperienceDetails from './components/WorkExperienceDetails';
import Personaldetails from './components/Personaldetails';
import Skills from './components/Skills'
import Collapseworkexperience from './components/Collapseworkexperience'
import Workexperience2 from './components/Workexperience2'



const data1 = [
  { id: 1, name: "WorkExperienceDetails ", content: () => <WorkExperienceDetails />, state: "active" },
  { id: 2, name: "WorkExperienceDetails ", content: () => <WorkExperienceDetails />, state: "inactive" },
  { id: 3, name: "WorkExperienceDetails ", content: () => <WorkExperienceDetails />, state: "inactive" },
]



class App extends Component {
  render() {

    // function App() {
    // const [selectedDate, setSelectedDate] = useState(null)
    return (

      <div className="App">
        {/* <Formwithformik /> */}
        <Profileform />
        {/* <Workexperience1Accordion data1={data1}/> */}
        <Workexperience2/> 
        <Personaldetails />

        {/* <Listview /> */}
        <Skills
          name="Level"
          items={[
            { value: 'Select level', id: 1 },
            { value: 'Expert', id: 2 },
            { value: 'Experienced', id: 3 },
            { value: 'Skilfull', id: 4 },
            { value: 'Intermediate', id: 5 },
            { value: 'Beginner', id: 6 }
          ]}
        />
        {/* <Collapseworkexperience/> */}

      </div>

    );
  }
}

export default App;
