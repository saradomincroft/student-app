import { useState, useEffect } from "react";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";

export default function StudentApp() {
    const [studentList, setStudentList] = useState([])
    const [display, setDisplay] = useState("list")
    const [prompt, setPrompt] = useState("")

    useEffect( () => {
        fetch('http://localhost:4000/students')
        .then(response => response.json())
        .then(json => setStudentList(json))
    }, [])

    function deleteStudent(id) {
        fetch(`http://localhost:4000/students/${id}`, {
          method: "DELETE"
        })
        .then( response => {
            if (response.ok) {
                const newStudentList = studentList.filter( student => student.id != id)
                setStudentList(newStudentList)
            }
        })
    }

    return (
        <>
            <select value={display} onChange={(e) => setDisplay(e.target.value)}>
                <option value="list">Student List</option>
                <option value="form">Student Form</option>
            </select>
            <p>{prompt}</p>
            {
                display === "list"
                ?
                <StudentList studentList={studentList} deleteStudent={deleteStudent} setPrompt={setPrompt}/>
                :
                <StudentForm setStudentList={setStudentList} />
            }
        </>
    )
}