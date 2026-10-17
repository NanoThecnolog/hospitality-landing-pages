import Head from 'next/head';
import type { CSSProperties, ReactNode } from 'react';
import type { SiteConfig } from '../../types';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { WhatsAppFloat } from '../WhatsAppFloat';
import styles from './styles.module.scss';
export function SiteShell({ config, children, pageTitle }: { config: SiteConfig; children: ReactNode; pageTitle?: string }) { const vars = { '--primary': config.colors.primary, '--primary-dark': config.colors.primaryDark, '--accent': config.colors.accent, '--paper': config.colors.paper, '--ink': config.colors.ink, '--muted': config.colors.muted } as CSSProperties; return <div className={styles.site} style={vars}><Head><title>{pageTitle ? `${pageTitle} | ${config.brand}` : config.brand}</title><meta name="description" content={config.description}/><meta name="theme-color" content={config.colors.primaryDark}/></Head><Header config={config}/><main>{children}</main><Footer config={config}/><WhatsAppFloat whatsapp={config.contact.whatsapp}/></div>; }
