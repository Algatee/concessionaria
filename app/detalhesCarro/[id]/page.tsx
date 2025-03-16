// app/detalhesCarro/[id]/page.tsx
import { carros } from '../../../Data/carrosData';
import Header from '@/app/components/header/page';
import Link from 'next/link'

export default function DetalhesCarro({ params }: { params: { id: string } }) {
  const carroId = parseInt(params.id);
  const carro = carros.find(c => c.id === carroId);

  if (!carro) {
    return <div>Carro não encontrado</div>;
  }

  return (
    <div className="pagina-detalhes-container">
      
      
      <div className="conteudo-detalhes">
        <h1 className="titulo-detalhes">{carro.modelo}</h1>
        
        <div className="detalhes-carro-container">
          <img
            src={carro.foto}
            alt={carro.modelo}
            className="imagem-detalhes"
          />
          
          <div className="informacoes-detalhes">
            <p className="dado-carro">
              <span className="destaque-detalhes">Ano:</span> {carro.ano}
            </p>
            <p className="dado-carro">
              <span className="destaque-detalhes">Preço:</span> {carro.preco}
            </p>
            <p className="dado-carro">
              <span className="destaque-detalhes">Especificações:</span> {carro.especificacoes}
            </p>
            
            <Link href="/listaCarros" className="botao-detalhes">
              Voltar para a lista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}