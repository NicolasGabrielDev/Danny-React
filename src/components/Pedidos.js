import React from 'react'
import './App.css'

export default function Pedidos (props) {
    return (
        <>
            <div className='container' style={{ display: props.display }}>
                <p className='title'>Danny Lanches</p>
                <p className='sub-title'>Deus em tudo... e muito carinho e dedicação para você!</p>
                <p className='text'>{props.cliente}</p>
                <p className='text'>{props.endereco}</p>
                <p className='text'>{props.telefone}</p>
                <div className='div'>
                    <span>{props.pedido}</span>
                </div>
                <p className='text'>{props.observacao}</p>
                <div style={{ display: "flex", justifyContent: "space-around", width: '100%', paddingLeft: 12 }}>
                    <span className='text'>Valor: {props.valor}</span>
                    <span className='text'>Troco para: {props.troco}</span>
                </div>
            </div>
        </>
    )
}