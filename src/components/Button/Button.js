import "./Button.scss";

export function Button(props) {
    return (
        <button className="button-component">
            {props.children}
        </button>
    );
}
