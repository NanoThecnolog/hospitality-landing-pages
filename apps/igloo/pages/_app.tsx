import type { AppProps } from 'next/app';
import '@sites/landing-ui/styles/global.scss';
export default function App({ Component, pageProps }: AppProps) { return <Component {...pageProps}/>; }
