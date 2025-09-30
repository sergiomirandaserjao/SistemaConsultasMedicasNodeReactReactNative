import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login.jsx"
import Register from "./pages/Register/register.jsx";
import Appointment from "./pages/Appointments/appointments.jsx"
import AppointmentAdd from "./pages/Appointment-add/appointment-add.jsx";




function Rotas(){

    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/appointments" element={<Appointment/>}/>
        <Route path="/appointments/add" element={<AppointmentAdd/>}/>
        <Route path="/appointments/edit/:id_appointment" element={<AppointmentAdd/>}/>



    </Routes>
    </BrowserRouter>


}

export default Rotas;