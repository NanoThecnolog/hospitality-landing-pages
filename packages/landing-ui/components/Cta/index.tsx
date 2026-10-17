import type { SiteConfig } from '../../types';
import { Icon } from '../Icon';
import styles from './styles.module.scss';
export function Cta({ config }: { config: SiteConfig }) { return <section className={`${styles.section} ${config.layout === 'editorial' ? styles.editorial : ''}`}><div className={`container ${styles.inner}`}><div><p className="eyebrow">Atendimento</p><h2>Planeje sua próxima experiência.</h2><p>Converse com a equipe e consulte condições e disponibilidade.</p></div><a className="button button-accent" href={`https://wa.me/${config.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp <Icon name="arrow"/></a></div></section>; }
