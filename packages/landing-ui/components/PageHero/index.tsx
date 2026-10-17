import Image from 'next/image';
import styles from './styles.module.scss';
export function PageHero({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) { return <section className={styles.hero}><Image src={image} alt="" fill priority sizes="100vw"/><div className={styles.overlay}/><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div></section>; }
