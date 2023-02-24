import Form from "../Form";
import {useState} from "react";
import Collaborator from "../../common/Collaborator";
import Course from "./Course";

export function Registration() {
    const [collaborator, setCollaborator] = useState(new Collaborator());

    return (
        <span>
            <Form addNewCollaborator={setCollaborator} />
            {
                getCoursesElements().map((course) =>
                    <Course
                        backgroundColor={course.backgroundColor}
                        borderColor={course.borderColor}
                        newCollaborator={collaborator}
                        key={course.name}
                        name={course.name}
                    />
                )
            }
        )
        </span>
    );
}

class CourseElement {
    constructor(backgroundColor, borderColor, name) {
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
        this.name = name;
    }
}

function getCoursesElements() {
    return [
        new CourseElement("#F0F8E2", "#A6D157", "Data Science"),
        new CourseElement("#FDE7E8", "#E06B69", "Devops"),
        new CourseElement("#E8F8FF", "#82CFFA", "Front-end"),
        new CourseElement("#FFEEDF", "#FF8A29", "Inovação e Gestão"),
        new CourseElement("#FFF5D9", "#FFBA05", "Mobile"),
        new CourseElement("#D9F7E9", "#57C278", "Programação"),
        new CourseElement("#FAE9F5", "#DB6EBF", "UX e Design")
    ];
}
