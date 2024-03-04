import {useState} from 'react';

export default function StudentForm({setStudentList}) {
    const [nameInput, setNameInput] = useState("")
    const [notif, setNotif] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:4000/students', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({name: nameInput})
        })
        .then(response => response.json())
        .then( json => {
            const newStudent = {
                id: json.id,
                name: json.name
            }
            setStudentList( (prev) => [...prev, newStudent])
            setNameInput("")
            setNotif(`${json.name} is added succesffuly.`)
        })
    }

    return (
        <>         
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={nameInput} onChange={(e)=>setNameInput(e.target.value)}/>
                <br/>
                <button type="submit">Add Student</button>
            </form>
            <h5>{notif}</h5>
        </>

    )
}