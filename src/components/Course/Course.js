import "./Course.scss";
import Card from "../Card";
import { useState } from "react";
import hexToRgba from "hex-to-rgba";

export function Course({ course, onRemoveCollaborator }) {
    const [colorState, setColorState] = useState(course.color);

    if (course.collaborators.length === 0) return;

    const styleSection = {
        backgroundColor : hexToRgba(colorState, '0.6'),
        backgroundImage: "url('images/fundo.png')"
    };

    const styleCourseName = { borderColor: colorState };

    const cards = course.collaborators.map((collaborator, index) =>
        <Card
            key={collaborator.name}
            backgroundColor={colorState}
            collaborator={collaborator}
            onRemoveCollaborator={onRemoveCollaborator(course, index)}
        />
    );

    return (
        <section className="course-component" style={styleSection}>
            <input
                className="input-color"
                onChange={event => setColorState(event.target.value)}
                type="color"
                value={colorState}
            />
            <h3 style={styleCourseName}>{course.name}</h3>
            <div className="cards">{cards}</div>
        </section>
    );
}
