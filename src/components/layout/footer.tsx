import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6 px-4">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-1">
        <Typography className="flex flex-wrap items-center justify-center text-xs md:text-sm" variant="body3">
          <Copyright className="mr-1 inline-block h-3 w-3 md:h-4 md:w-4" />
          {new Date().getFullYear()} |&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.FIGMA_FILE}
          >
            Designed
          </Link>
          &nbsp;and&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB_REPO}
          >
            coded
          </Link>
          &nbsp;with ❤️️ by Sagar Shah
        </Typography>
        <Typography className="text-xs md:text-sm" variant="body3">
          Customized by Farhan Muhammad
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
