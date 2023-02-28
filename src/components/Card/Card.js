import "./Card.scss";
import { AiFillCloseCircle } from "react-icons/ai";

export function Card({ backgroundColor, collaborator, onRemoveCollaborator }) {

    return (
        <div className="card-component">
            <AiFillCloseCircle
                className="delete-collab"
                onClick={onRemoveCollaborator}
                size={25}
            />
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={collaborator.imageUrl} alt="Imagem do colaborador."/>
            </div>
            <div className="footer">
                <h4>{ collaborator.name }</h4>
                <h5>{ collaborator.role }</h5>
            </div>
        </div>
    );
}
