import "./InputForm.scss";

export function InputForm({ label, placeholder, required = false, useState }) {
    return (
        <div className="inputform-component">
            <label>
                {label}
            </label>
            <input
                onChange={e => useState[1](e.target.value)}
                placeholder={placeholder}
                required={required}
                value={useState[0]}
            />
        </div>
    );
}
