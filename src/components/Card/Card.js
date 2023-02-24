import "./Card.scss";

export function Card({ backgroundColor, imageUrl, name, role }) {
    return (
        <div className="card-component">
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={imageUrl} alt="Imagem do colaborador."/>
            </div>
            <div className="footer">
                <h4>{ name }</h4>
                <h5>{ role }</h5>
            </div>
        </div>
    );
}
