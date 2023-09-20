// SidebarMenu.js
import Link from 'next/link';
import styles from '../styles/SidebarMenu.module.css';

const SidebarMenu = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.linkList}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects/CodeL">Projects</Link>
        </li>
        <li>
          <Link href="/projects/SpaceSurvivor">Projects</Link>
        </li>
        <li>
          <Link href="/projects/SystemeCaisse">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
