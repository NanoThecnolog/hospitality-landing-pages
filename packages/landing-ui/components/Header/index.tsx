import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { SiteConfig } from '../../types';
import { Icon } from '../Icon';
import styles from './styles.module.scss';

export function Header({ config }: { config: SiteConfig }) {
  const [open, setOpen] = useState(false);
  return <header className={`${styles.header} ${config.layout === 'editorial' ? styles.editorial : ''}`}><div className={styles.inner}>
    <Link href="/" className={styles.brand} aria-label={`${config.brand} — início`}>
      {config.logo ? <Image src={config.logo} alt="" width={64} height={64} className={styles.logo}/> : <span className={styles.mark}>{config.shortBrand}</span>}
      <span><strong>{config.brand}</strong><small>{config.eyebrow}</small></span>
    </Link>
    <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Navegação principal">{config.nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<a className={styles.cta} href={`https://wa.me/${config.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">Fale conosco</a></nav>
    <button className={styles.menu} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/></button>
  </div></header>;
}
