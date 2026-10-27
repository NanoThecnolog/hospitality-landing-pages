import { LuArrowRight, LuClock3, LuMail, LuMapPin, LuMenu, LuPhone, LuX } from 'react-icons/lu';
import styles from './styles.module.scss';

export type IconName = 'arrow' | 'phone' | 'mail' | 'pin' | 'clock' | 'menu' | 'close';
const icons = { arrow: LuArrowRight, phone: LuPhone, mail: LuMail, pin: LuMapPin, clock: LuClock3, menu: LuMenu, close: LuX };

export function Icon({ name }: { name: IconName }) {
  const Component = icons[name];
  return <Component className={`${styles.icon} icon`} aria-hidden="true" focusable="false"/>;
}
