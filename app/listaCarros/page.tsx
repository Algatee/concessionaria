import Link from 'next/link';
import { carros } from '@/Data/carrosData';


export default function ListaCarros() {
  return (
    <div className="lista-carros-container">
      <h1 className="titulo-lista-carros">Lista de Carros</h1>
      <ul className="lista-carros">
        {carros.map((carro) => (
          <li key={carro.id} className="item-carro">
            <div className="detalhes-carro-container">
              <img
                src={carro.foto}
                alt={carro.modelo}
                className="imagem-carro"
              />
              <div className="detalhes-carro">
                <h2>{carro.modelo}</h2>
                <p className="ano-carro">Ano: {carro.ano}</p>
                <p className="preco-carro">Preço: {carro.preco}</p>
                <Link
                  href={`/detalhesCarro/${carro.id}`}
                  className="botao-detalhes"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}