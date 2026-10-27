import { Icon, type IconName } from '../Icon';
import styles from './styles.module.scss';
export function ContactLine({ icon, label, text, href }: { icon: Extract<IconName,'phone'|'mail'|'clock'|'pin'>; label: string; text: string; href?: string }) { return <div className={styles.line}><span><Icon name={icon}/></span><div><small>{label}</small>{href ? <a href={href}>{text}</a> : <p>{text}</p>}</div></div>; }
