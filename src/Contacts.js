const Contacts = ()=> {
    const doctors = [
        "Doctor Feelgood",
        "Dr. FixTeeth"
      ];

    const doctorList = doctors.map((doctor, index)=> {
        return <li key={index}>{doctor}</li>
    })


    
    return (
        <div>
            <h1>Doctors</h1>
            <ul>
                {doctorList}

            </ul>
        </div>
    )
}

export default Contacts;