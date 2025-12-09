export default function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea name={name} value={value} onChange={onChange}></textarea>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
}
