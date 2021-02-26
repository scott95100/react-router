import { Link } from 'react-router-dom'






const Procedures = ()=> {
    const procedures = [
        "Deep Cleaning",
        "Filling",
        "Crown",
        "Root Canal",
        "Oral Surgery"
      ];

    const procedureList = procedures.map((procedure, index)=> {
        return <li key={index}><Link to={`/procedures/${procedure}`}>{procedure}</Link></li>
    })


    
    return (
        <div>
            <h1>Procedures</h1>
            <ul>
                {procedureList}

            </ul>
        </div>
    )
}

export default Procedures