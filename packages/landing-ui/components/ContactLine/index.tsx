import { Icon, type IconName } from '../Icon';
import styles from './styles.module.scss';
export function ContactLine({ icon, label, text }: { icon: Extract<IconName,'phone'|'clock'|'pin'>; label: string; text: string }) { return <div className={styles.line}><span><Icon name={icon}/></span><div><small>{label}</small><p>{text}</p></div></div>; }
