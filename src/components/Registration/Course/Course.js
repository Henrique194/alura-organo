import "./Course.scss";
import Card from "../../Card";
import { useEffect, useState } from "react";

export function Course({ backgroundColor, borderColor, name, newCollaborator }) {
    const [collaborators, setCollaborators] = useState([]);

    useEffect(() => {
        if (name !== newCollaborator.course) return;

        setCollaborators(prevCollabs => {
            for (let collab of prevCollabs) {
                if (collab.name === newCollaborator.name) {
                    console.log("Collaborator already exists with this name!");
                    return prevCollabs;
                }
            }
            return [...prevCollabs, newCollaborator];
        });
    }, [name, newCollaborator]);



    return (
        collaborators.length > 0 && (
            <section
                className="course-component"
                style={{
                    backgroundColor : backgroundColor,
                    backgroundImage: "url('images/fundo.png')"
                }}
            >
                <h3 style={{borderColor: borderColor}}>
                    { name }
                </h3>
                <div className="cards">
                    {
                        collaborators.map((collaborator, index) =>
                            <Card
                                backgroundColor={borderColor}
                                imageUrl={collaborator.imageUrl}
                                indexCollab={index}
                                key={collaborator.name}
                                name={collaborator.name}
                                role={collaborator.role}
                                setCollaborators={setCollaborators}
                            />
                        )
                    }
                </div>
            </section>
        )
    );
}
