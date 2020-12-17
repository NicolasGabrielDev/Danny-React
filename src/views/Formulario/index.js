import React from 'react'
import Pedidos from '../../components/Pedidos'
import './styles.css'

export default function Formulario() {
    const [cliente, setCliente] = React.useState('')
    const [pedido, setPedido] = React.useState('')
    const [observacao, setObservacao] = React.useState('')
    const [valor, setValor] = React.useState('')
    const [troco, setTroco] = React.useState('')
    const [endereco, setEndereco] = React.useState('')
    const [display, setDisplay] = React.useState('flex')

    return (
        <>
            <body>
                <main className='container-form' style={{ display: display }}>
                    <h1 className='title'>Novo pedido:</h1>
                    <form>
                        <div className='container-form'>
                            <label>Cliente:</label>
                            <input value={cliente} onChange={e => setCliente(e.target.value)} />

                            <label>Pedido:</label>
                            <textarea rows='6' value={pedido} onChange={e => setPedido(e.target.value)} />

                            <label>Observação:</label>
                            <input value={observacao} onChange={e => setObservacao(e.target.value)} />

                            <label>Valor:</label>
                            <input value={valor} onChange={e => setValor(e.target.value)} />

                            <label>Troco:</label>
                            <input value={troco} onChange={e => setTroco(e.target.value)} />

                            <label>Endereço:</label>
                            <input value={endereco} onChange={e => setEndereco(e.target.value)} />

                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button onClick={(e) => {
                                e.preventDefault()
                                setCliente('')
                                setPedido('')
                                setObservacao('')
                                setValor('')
                                setTroco('')
                                setEndereco('')
                            }}>
                                Limpar
                        </button>
                            <button style={{ backgroundColor: '#006400' }} onClick={(e) => {
                                e.preventDefault()
                                setDisplay('none')
                                setTimeout(() => {
                                    window.print()
                                }, 500);
                                setTimeout(() => {
                                    setDisplay('flex')
                                }, 8000);
                            }}>
                                Imprimir
                        </button>
                        </div>
                    </form>
                </main>
                <Pedidos
                    cliente={cliente}
                    pedido={pedido}
                    observacao={observacao}
                    valor={valor}
                    troco={troco}
                    endereco={endereco}
                    display={ display === 'flex' ? "none" : "flex"}
                />
            </body>
        </>
    )
}