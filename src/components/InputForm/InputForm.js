import "./InputForm.scss";

export function InputForm(props) {
    return (
        <div className="inputform-component">
            <label>
                {props.label}
            </label>
            <input
                onChange={onChange(props)}
                placeholder={props.placeholder}
                required={props.required}
                value={props.useState[0]}
            />
        </div>
    );
}

function onChange(props) {
    return (event) => {
        const setState = props.useState[1];
        setState(event.target.value);
    }
}
