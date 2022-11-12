import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "../../contexts/AuthContext";
import styles from "./styles.module.scss";

export function Header() {
  const { signOut } = useContext(AuthContext);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src="/logo.svg" alt="logo" width={190} height={60} />
        </Link>
        <nav className={styles.menuNav}>
          <Link legacyBehavior href="/category">
            <a>Categoria</a>
          </Link>
          <Link legacyBehavior href="/products">
            <a>Cardapio</a>
          </Link>
          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
