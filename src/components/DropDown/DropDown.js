import "./DropDown.scss";

export function DropDown({ items, label, required = false, useState }) {
    return (
        <div className="dropdown-component">
            <label>{ label }</label>
            <select
                onChange={e => useState[1](e.target.value)}
                required={required}
                value={useState[0]}
            >
                <option value="">Selecione um time...</option>
                { items.map( item => <option key={item}>{item}</option> ) }
            </select>
        </div>
    );
}
