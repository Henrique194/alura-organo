import Form from "../Form";
import { useState } from "react";
import Course from "../Course";
import "./Registration.scss";

export function Registration() {
    const [courses, setCourses] = useState(getCoursesElements());
    const numCollaborators = courses.reduce((acc, course) => acc + course.collaborators.length, 0);

    function handleNewCollaborator(newCollaborator) {
        const nextCourses = courses.map(course => { return {...course} });
        const selectedCourse = nextCourses.find(course => course.name === newCollaborator.course);

        addNewCollaborator(selectedCourse, newCollaborator);

        if (addNewCollaborator(selectedCourse, newCollaborator)) return;

        setCourses(nextCourses);
    }

    function handleRemoveCollaborator(course, indexCollaborator) {
        return () => {
            const nextCourse = {...course};
            removeCollaborator(nextCourse, indexCollaborator);

            setCourses(courses.map(el => el.name !== nextCourse.name ? el : nextCourse));
        };
    }

    return (
        <span className="registration-component">
            <Form onNewCollaborator={handleNewCollaborator}/>
            <section className="organization">
                { numCollaborators > 0 && <h1>Minha organização</h1> }
                { courses.map(course =>
                    <Course
                        key={course.name}
                        course={course}
                        onRemoveCollaborator={handleRemoveCollaborator}
                    />
                  )
                }
            </section>
        </span>
    );
}

function addNewCollaborator(course, newCollaborator) {
    if (course.collaborators.find(collab => collab.name === newCollaborator.name))
        return false;

    course.collaborators.push(newCollaborator);
    return true;
}

function removeCollaborator(course, indexCollaborator) {
    if (course.collaborators.length === 0) return false;

    const beforeIndex = course.collaborators.slice(0, indexCollaborator);
    const afterIndex = course.collaborators.slice(indexCollaborator + 1);
    course.collaborators = [...beforeIndex, ...afterIndex];

    return true;
}

function getCoursesElements() {
    return [
        { collaborators: [], color: "#A6D157", name: "Data Science" },
        { collaborators: [], color: "#E06B69", name: "Devops" },
        { collaborators: [], color: "#82CFFA", name: "Front-end" },
        { collaborators: [], color: "#FF8A29", name: "Inovação e Gestão" },
        { collaborators: [], color: "#FFBA05", name: "Mobile" },
        { collaborators: [], color: "#57C278", name: "Programação" },
        { collaborators: [], color: "#DB6EBF", name: "UX e Design" },
    ];
}
