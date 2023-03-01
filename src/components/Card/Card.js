import "./Card.scss";
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

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
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.role}</h5>
                <FavoriteIcon />
            </div>
        </div>
    );
}

function FavoriteIcon() {
    const [isFavorite, setIsFavorite] = useState(false);

    function handleClick() {
        setIsFavorite(!isFavorite);
    }

    return (
        <>
            { isFavorite ? <AiFillHeart color="#FF0000" onClick={handleClick} size={25} />
                         : <AiOutlineHeart onClick={handleClick} size={25} />
            }
        </>
    );
}
