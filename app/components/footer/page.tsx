// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-container">
      
      <div className="footer-left">
        <p>© 2025 CkarMultimarcas</p>
        <p>Todos os direitos reservados</p>
      </div>

      
      <Link href="/" className="footer-logo-link">
        <Image
          src="/images/logo_costas.png" 
          alt="Logo Footer"
          width={130}
          height={40}
          className="footer-logo"
        />
      </Link>
    </footer>
  );
}