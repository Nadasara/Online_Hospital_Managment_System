import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './Create.css'; // Create a CSS file for custom styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  {
    field: 'doctor',
    headerName: 'Doctor',
    width: 150,
    editable: true,
  },
  {
    field: 'user',
    headerName: 'Username',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'string',
    width: 110,
    editable: true,
  },

];




const Create = () => {

  const navigate = useNavigate();
  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown'];
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [userName, setUserName] = useState('');
  const [rows,setRows]=useState([])
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit =  (e) => {
    e.preventDefault();


    
    const data = {doctor:selectedDoctor,user:userName,date:selectedDate};
    axios.post('http://localhost:8080/create',data).then((res)=>{
     
      navigate('/create');
    })    


  };

  const [appointments, setAppointments] = useState([]);

  const handleBooking = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  useEffect(()=>{
    axios.get('http://localhost:8080/booking').then((res)=>{
      setRows(res.data)
    });
  },[rows])

 

  return (
      <div>
    <div className="form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select a Doctor</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Enter Your Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Select an Appointment Date</label>
          <input type="date" 
            selected={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>
        <button  onClick={handleSubmit} type="button" className="submit-btn">
          Book Appointment
        </button>
      </form>

    
    </div>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  );
};

export default Create;
