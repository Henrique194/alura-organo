import "./DropDown.scss";

export function DropDown(props) {
    return (
        <div className="dropdown-component">
            <label>
                {props.label}
            </label>
            <select onChange={onChange(props)} required={props.required} value={props.useState[0]}>
                <option value="">Selecione um time...</option>
                {props.items.map(
                    (item) => <option key={item}>{item}</option>
                )}
            </select>
        </div>
    );
}

function onChange(props) {
    return (event) => {
        const setState = props.useState[1];
        setState(event.target.value);
    };
}
