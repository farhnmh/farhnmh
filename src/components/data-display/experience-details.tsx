import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  company,
  positions,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
      {/* Header with Company Logo and Name */}
      <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[50px]"
        />
        <Typography variant="subtitle" className="font-bold text-gray-900">
          {company}
        </Typography>
      </div>

      {/* Positions List */}
      <div className="flex flex-col gap-6">
        {positions.map((pos, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <Typography variant="body1" className="font-semibold text-gray-900">
                {pos.position}
              </Typography>
              <Typography className="text-sm text-gray-700 md:text-right">
                {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                  pos.startDate
                )}{' '}
                -{' '}
                {pos.currentlyWorkHere
                  ? 'Present'
                  : pos.endDate
                  ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                      pos.endDate
                    )
                  : 'NA'}
              </Typography>
            </div>
            <ul className="flex list-disc flex-col gap-2 pl-6 md:gap-1">
              {pos.summary?.map((sentence, idx) => (
                <Typography component="li" key={idx}>
                  {sentence}
                </Typography>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceDetails;
