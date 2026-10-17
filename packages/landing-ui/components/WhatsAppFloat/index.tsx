import { Icon } from '../Icon';
import styles from './styles.module.scss';
export function WhatsAppFloat({ whatsapp }: { whatsapp: string }) { return <a className={styles.float} href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp"><Icon name="phone"/></a>; }
