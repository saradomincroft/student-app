import { useEffect } from 'react';
export default function StudentInfo({id, name, deleteStudent, setPrompt}) {
    
    useEffect( () => {
        return () => {
            setPrompt(`${name} is successfully deleted`)
        }
    }, [])

    return (
        <>
            <h4>{name}</h4>
            <button type="button" onClick={ () => deleteStudent(id)}>Delete</button>
        </>
    )
}