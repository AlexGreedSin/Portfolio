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
          <Link href="/projects/CodeL">CodeL</Link>
        </li>
        <li>
          <Link href="/projects/SpaceSurvivor">SpaceSurvivor</Link>
        </li>
        <li>
          <Link href="/projects/SystemeCaisse">SystemeCaisse</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
