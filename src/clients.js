import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styled'

export default function Clients(){
    const clients = JSON.parse(localStorage.getItem('client')) || [];
    let [data, setData] = useState(clients);

    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Cliente cadastrado com sucesso!`)

        // Add client to Local Storage database
        let clientsLocalStorage = JSON.parse(localStorage.getItem('client')) ?? [];

        const id = clientsLocalStorage.length + 1;
        let data = {
            id,
            name,
            cpf,
            email,
            contact,
            address,
            birthday
        };

        clientsLocalStorage.push(data);
        let database = JSON.stringify(clientsLocalStorage);
        localStorage.setItem('client', database);

        evt.target.reset();
        window.location.reload();
    }
    
    return (
        <section>
            <h1>Clientes</h1>
            <form onSubmit={handleSubmit}>
                <Style.RegisterForm>   
                    <Style.DataField>
                        <label>Nome</label>
                            <input
                                placeholder="Nome do Cliente" 
                                onChange={e => setName(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>CPF</label>
                            <input type="number"
                                placeholder="CPF" 
                                onChange={e => setCPF(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Nascimento</label>
                            <input
                                placeholder="XX/XX/XXXX" 
                                onChange={e => setBirthday(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Email</label>
                            <input type="text"
                                placeholder="Email" 
                                onChange={e => setEmail(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Endereço</label>
                            <input
                                placeholder="Endereço" 
                                onChange={e => setAddress(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Contato</label>
                            <input
                                placeholder="(XX)XXXXX-XXXX)"
                                onChange={e => setEmail(e.target.value)} />
                    </Style.DataField>
                    <input type="submit" value="Cadastrar" />
                    <Link to='/'>
                        <button>Voltar</button>
                    </Link>
                </Style.RegisterForm>
            </form>
            <Style.Title>Lista Cadastrada</Style.Title>
            <Style.container>
                <Style.Text width={"300px"}>Nome</Style.Text>
                <Style.Text width={"150px"}>CPF</Style.Text>
                <Style.Text width={"150px"}>Nascimento</Style.Text>
                <Style.Text width={"210px"}>Email</Style.Text>
                <Style.Text width={"330px"}>Endereço</Style.Text>
                <Style.Text width={"150px"}>Contato</Style.Text>
            </Style.container>
            {data.map(client => (
                <Style.container key={client.id}>
                    <Style.Text width={"300px"}>{client.name}</Style.Text>
                    <Style.Text width={"150px"}>{client.cpf}</Style.Text>                    
                    <Style.Text width={"150px"}>{client.birthday}</Style.Text>
                    <Style.Text width={"210px"}>{client.email}</Style.Text>
                    <Style.Text width={"330px"}>{client.address}</Style.Text>
                    <Style.Text width={"150px"}>{client.contact}</Style.Text>
                </Style.container>
            ))}
        </section>
    )
}