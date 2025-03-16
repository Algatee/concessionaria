import Link from 'next/link';


export default function PagPrincipal() {
  return (
    <div
      className="pag-principal-container"
      style={{ 
        backgroundImage: "url('/images/mercedes-cla-2020.jpg')",
        backgroundPosition: 'center 20%', 
      }}
    >
      
      <div className="conteudo-principal">
        <h1 className="titulo-principal">Bem-vindo à Concessionária</h1>
        <h2 className="subtitulo-principal">Ckar Multimarcas</h2>

        <Link
          href="/listaCarros"
          className="botao-lista-carros"
        >
          Ver lista de carros
        </Link>
      </div>
    </div>
  );
}