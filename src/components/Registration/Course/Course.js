import "./Course.scss";
import Card from "../../Card";
import { useEffect, useState } from "react";

export function Course({ backgroundColor, borderColor, name, newCollaborator }) {
    const [collaborators, setCollaborators] = useState([]);

    useEffect(() => {
        if (name !== newCollaborator.course) return;
        for (let collab of collaborators) {
            if (collab.name === newCollaborator.name) {
                console.log("Collaborator already exists with this name!");
                return;
            }
        }

        setCollaborators(prevCollabs => [...prevCollabs, newCollaborator]);
    }, [collaborators, name, newCollaborator]);

    return (
        collaborators.length > 0 && (
            <section
                className="course-component"
                style={{backgroundColor : backgroundColor}}
            >
                <h3 style={{borderColor: borderColor}}>
                    { name }
                </h3>
                <div className="cards">
                    {
                        collaborators.map((collaborator) =>
                            <Card
                                backgroundColor={borderColor}
                                imageUrl={collaborator.imageUrl}
                                key={collaborator.name}
                                name={collaborator.name}
                                role={collaborator.role}
                            />
                        )
                    }
                </div>
            </section>
        )
    );
}
