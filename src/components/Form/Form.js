import "./Form.scss";
import Button from "../Button";
import DropDown from "../DropDown";
import InputForm from "../InputForm";
import { useState } from "react";

export function Form({ onNewCollaborator }) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [dropdown, setDropdown] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        onNewCollaborator({
            course: dropdown,
            imageUrl: imgUrl,
            name: name,
            role: role
        });

        // Clear Form
        setDropdown('');
        setImgUrl('');
        setName('');
        setRole('');
    }

    return (
        <section className="form-component">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputForm
                    label="Nome"
                    placeholder="Digite seu nome"
                    required
                    useState={[name, setName]}
                />
                <InputForm
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required
                    useState={[role, setRole]}
                />
                <InputForm
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    useState={[imgUrl, setImgUrl]}
                />
                <DropDown
                    items={getItems()}
                    label="Time"
                    required
                    useState={[dropdown, setDropdown]}
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
