export default function InputText({ type, name, label, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input type={type} id={name} name={name} onChange={onChange} />
        </div>
    )
}
