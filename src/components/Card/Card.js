import "./Card.scss";
import { AiFillCloseCircle } from "react-icons/ai";

export function Card({ backgroundColor, imageUrl, name, role, indexCollab, setCollaborators }) {
    return (
        <div className="card-component">
            <AiFillCloseCircle
                className="delete-collab"
                onClick={removeCollaborator(indexCollab, setCollaborators)}
                size={25}
            />
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

function removeCollaborator(indexCollab, setCollaborators) {
    return () => {
        setCollaborators(prevCollabs => {
            const beforeIndex = prevCollabs.slice(0, indexCollab);
            const afterIndex = prevCollabs.slice(indexCollab + 1);

            return [...beforeIndex, ...afterIndex];
        });
    };
}
