import { HomePage } from '@sites/landing-ui/pages/HomePage';
import { siteConfig } from "../site.config";
export default function Page() {
  return <HomePage config={siteConfig} />;
}
