import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-principal">
      <Link href="/" className="logo-link">
        <Image
          src="/images/logo.png"
          alt="Logo da Concessionária"
          width={150}
          height={50}
          className="logo-principal"
        />
      </Link>
    </header>
  );
}