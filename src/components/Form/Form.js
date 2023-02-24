import "./Form.scss";
import InputForm from "../InputForm";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";
import Collaborator from "../../common/Collaborator";

export function Form({ addNewCollaborator }) {
    const states = {
        "cargo" : useState(""),
        "dropdown" : useState(""),
        "imagem" : useState(""),
        "nome" : useState("")
    };

    return (
        <section className="form-component">
            <form onSubmit={onSubmit(states, addNewCollaborator)}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputForm
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    useState={states["nome"]}
                />
                <InputForm
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    useState={states["cargo"]}
                />
                <InputForm
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    useState={states["imagem"]}
                />
                <DropDown
                    items={getItems()}
                    label="Time"
                    required={true}
                    useState={states["dropdown"]}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    );
}

function getItems() {
    return [
        "Programação", "Front-end",
        "Data Science", "Devops",
        "UX e Design", "Mobile",
        "Inovação e Gestão"
    ];
}

function onSubmit(states, addNewCollaborator) {
    return (event) => {
        event.preventDefault();

        const newCollaborator = new Collaborator(
            states["dropdown"][0],
            states["imagem"][0],
            states["nome"][0],
            states["cargo"][0]
        );
        addNewCollaborator(newCollaborator);

        clearForm(states);
    }
}

function clearForm(states) {
    Object.keys(states).forEach(field => states[field][1](''));
}
