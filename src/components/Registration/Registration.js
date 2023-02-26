import Form from "../Form";
import { useState } from "react";
import Collaborator from "../../common/Collaborator";
import Course from "./Course";
import "./Registration.scss";

export function Registration() {
    const [collaborator, setCollaborator] = useState(new Collaborator());
    const [numCollaborators, setNumCollaborators] = useState(0);

    return (
        <span className="registration-component">
            <Form addNewCollaborator={setCollaborator} />
            <section className="organization">
                { numCollaborators > 0 && <h1>Minha organização</h1> }
                {
                    getCoursesElements().map((course) =>
                        <Course
                            color={course.color}
                            newCollaborator={collaborator}
                            key={course.name}
                            name={course.name}
                            setNumCollaborators={setNumCollaborators}
                        />
                    )
                }
            </section>
        </span>
    );
}

class CourseElement {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

function getCoursesElements() {
    return [
        new CourseElement("#A6D157", "Data Science"),
        new CourseElement("#E06B69", "Devops"),
        new CourseElement("#82CFFA", "Front-end"),
        new CourseElement("#FF8A29", "Inovação e Gestão"),
        new CourseElement("#FFBA05", "Mobile"),
        new CourseElement("#57C278", "Programação"),
        new CourseElement("#DB6EBF", "UX e Design")
    ];
}
