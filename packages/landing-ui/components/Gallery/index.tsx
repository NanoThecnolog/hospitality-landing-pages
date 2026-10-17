import Image from 'next/image';
import styles from './styles.module.scss';
export function Gallery({ images }: { images: string[] }) { return <section className={styles.gallery} aria-label="Galeria de acomodações">{images.slice(0,5).map((src,i)=><div className={styles[`item${i+1}`]} key={src}><Image src={src} alt={`Acomodação ${i+1}`} fill sizes="(max-width:760px) 100vw,40vw"/></div>)}</section>; }
