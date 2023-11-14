import { useState } from 'react'

export default function TextInput({ onChange, id, label }) {
    // state    , setState
    //    [ '-' , ƒ       ]
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    return (<div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} onChange={handleChange} />
        <h3>{value}</h3>
    </div>)
}
