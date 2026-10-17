declare module '*.module.scss' {
  const classNames: Readonly<Record<string, string>>;
  export default classNames;
}

declare module '*.scss';
