import { LuArrowRight, LuClock3, LuMapPin, LuMenu, LuPhone, LuX } from 'react-icons/lu';
import styles from './styles.module.scss';

export type IconName = 'arrow' | 'phone' | 'pin' | 'clock' | 'menu' | 'close';
const icons = { arrow: LuArrowRight, phone: LuPhone, pin: LuMapPin, clock: LuClock3, menu: LuMenu, close: LuX };

export function Icon({ name }: { name: IconName }) {
  const Component = icons[name];
  return <Component className={`${styles.icon} icon`} aria-hidden="true" focusable="false"/>;
}
