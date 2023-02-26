import "./Course.scss";
import Card from "../../Card";
import { useEffect, useState } from "react";
import hexToRgba from "hex-to-rgba";

export function Course({ color, name, newCollaborator, setNumCollaborators }) {
    const [collaborators, setCollaborators] = useState([]);
    const [colorState, setColorState] = useState(color);

    useEffect(() => {
        if (name !== newCollaborator.course) return;

        setCollaborators(prevCollabs => {
            for (let collab of prevCollabs) {
                if (collab.name === newCollaborator.name) {
                    console.log("Collaborator already exists with this name!");
                    return prevCollabs;
                }
            }
            setNumCollaborators(prev => prev+1);
            return [...prevCollabs, newCollaborator];
        });
    }, [name, newCollaborator, setNumCollaborators]);

    return (
        collaborators.length > 0 && (
            <section
                className="course-component"
                style={{
                    backgroundColor : hexToRgba(colorState, '0.6'),
                    backgroundImage: "url('images/fundo.png')"
                }}
            >
                <input
                    className="input-color"
                    onChange={event => setColorState(event.target.value)}
                    value={colorState}
                    type="color"
                />
                <h3 style={{borderColor: colorState}}>
                    { name }
                </h3>
                <div className="cards">
                    {
                        collaborators.map((collaborator, index) =>
                            <Card
                                backgroundColor={colorState}
                                imageUrl={collaborator.imageUrl}
                                indexCollab={index}
                                key={collaborator.name}
                                name={collaborator.name}
                                role={collaborator.role}
                                setCollaborators={setCollaborators}
                                setNumCollaborators={setNumCollaborators}
                                collaborators={collaborators}
                            />
                        )
                    }
                </div>
            </section>
        )
    );
}
