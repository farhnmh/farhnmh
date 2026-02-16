'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  const fallbackLabel = label.replace(/[^A-Za-z0-9#]/g, '').slice(0, 3);

  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 ring-1 ring-gray-200 dark:bg-gray-100 dark:ring-gray-300">
          {logo ? (
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={label}
              className="h-9 w-9 object-contain transition-transform duration-300 md:hover:scale-110"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-sm font-semibold text-gray-700 dark:bg-gray-200 dark:text-gray-700">
              {fallbackLabel}
            </div>
          )}
        </div>
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
