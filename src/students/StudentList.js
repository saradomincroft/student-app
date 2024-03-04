import StudentInfo from "./StudentInfo"
export default function StudentList( {studentList, deleteStudent, setPrompt}) {

    return (
        <>
            <h1>Students List</h1>
            <ul>
                {
                    studentList.map( student => {
                        return <li><StudentInfo id={student.id} name={student.name} deleteStudent={deleteStudent} setPrompt={setPrompt}/></li>
                    })
                }
            </ul>
        </>
    )
}