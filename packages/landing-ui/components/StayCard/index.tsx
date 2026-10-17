import Image from 'next/image';
import type { Stay } from '../../types';
import styles from './styles.module.scss';
export function StayCard({ stay }: { stay: Stay }) { return <article className={styles.card}><div className={styles.image}><Image src={stay.image} alt={stay.name} fill sizes="(max-width:760px) 100vw,33vw"/></div><div className={styles.body}><p className={styles.location}>{stay.location}</p><h3>{stay.name}</h3><p>{stay.description}</p>{stay.price && <strong className={styles.price}>A partir de {stay.price} <small>/ diária</small></strong>}</div></article>; }
