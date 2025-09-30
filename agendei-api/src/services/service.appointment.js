import repositoryAppointment from "../repositories/repository.appointment.js"


async function ListarByUser(id_user,dt_start,dt_end,id_doctor){

    const appointments = await repositoryAppointment.ListarByUser(id_user,dt_start,dt_end,id_doctor);

    return appointments

}
async function Inserir(id_user,id_doctor,id_service,booking_date,booking_hour){

    const appointment = await repositoryAppointment.Inserir(id_user,id_doctor,id_service,booking_date,booking_hour);

    return appointment

}


async function Excluir(id_user,id_appointment){

    const appointment = await repositoryAppointment.Excluir(id_user,id_appointment);

    return appointment

}


async function ListarbyId(id_appointment){

    const appointments = await repositoryAppointment.ListarbyId(id_appointment);

    return appointments

}

async function InserirAdmin(id_user,id_doctor,id_service,booking_date,booking_hour){

    const appointment = await repositoryAppointment.InserirAdmin(id_user,id_doctor,id_service,booking_date,booking_hour);

    return appointment

}
async function EditarAdmin(id_appointment,id_user,id_doctor,id_service,booking_date,booking_hour){

    const appointment = await repositoryAppointment.EditarAdmin(id_appointment,id_user,id_doctor,id_service,
        booking_date,booking_hour);

    return appointment

}


export default {ListarByUser,Inserir, Excluir,ListarbyId,InserirAdmin,EditarAdmin}