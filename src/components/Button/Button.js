import "./Button.scss";

export function Button({ children }) {
    return (
        <button className="button-component">
            {children}
        </button>
    );
}
