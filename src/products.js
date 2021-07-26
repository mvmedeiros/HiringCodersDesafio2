import React,  { useState }  from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styled'

export default function Products(){
    const products = JSON.parse(localStorage.getItem('product')) || [];
    let [data, setData] = useState(products);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Produto cadastrado com sucesso!`)

        // Add client to Local Storage database
        let productsLocalStorage = JSON.parse(localStorage.getItem('product')) ?? [];

        const id = productsLocalStorage.length + 1;
        let data = {
            id,
            name,
            category,
            brand,
            quantity,
            price
        };

        productsLocalStorage.push(data);
        let database = JSON.stringify(productsLocalStorage);
        localStorage.setItem('product', database);

        evt.target.reset();
        window.location.reload();
    }

    return (
        <section>
            <h1>Produtos</h1>
            <form onSubmit={handleSubmit}>
                <Style.RegisterForm>   
                    <Style.DataField>
                        <label>Nome do produto</label>
                            <input
                                placeholder="Nome do produto" 
                                onChange={e => setName(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Categoria</label>
                            <input
                                placeholder="Categoria" 
                                onChange={e => setCategory(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Marca</label>
                            <input
                                placeholder="Marca" 
                                onChange={e => setBrand(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Quantidade</label>
                            <input type="number"
                                placeholder="Quantidade" 
                                onChange={e => setQuantity(e.target.value)} />
                    </Style.DataField>
                    <Style.DataField>
                        <label>Preço</label>
                            <input type="number" step="0.01" pattern="^\d*(\.\d{0,2})?$"
                                placeholder="Preço" 
                                onChange={e => setPrice(e.target.value)} />
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
                <Style.Text width={"150px"}>Categoria</Style.Text>
                <Style.Text width={"150px"}>Marca</Style.Text>
                <Style.Text width={"210px"}>Quantidade</Style.Text>
                <Style.Text width={"330px"}>Preço (R$)</Style.Text>
            </Style.container>
            {data.map(product => (
                <Style.container key={product.id}>
                    <Style.Text width={"300px"}>{product.name}</Style.Text>
                    <Style.Text width={"150px"}>{product.category}</Style.Text>                    
                    <Style.Text width={"150px"}>{product.brand}</Style.Text>
                    <Style.Text width={"210px"}>{product.quantity}</Style.Text>
                    <Style.Text width={"330px"}>{product.price}</Style.Text>
                </Style.container>
            ))}
        </section>
    )
}