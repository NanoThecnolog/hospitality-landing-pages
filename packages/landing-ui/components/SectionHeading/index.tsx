import styles from './styles.module.scss';
export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <div className={styles.heading}><p className="eyebrow eyebrow-dark">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>; }
