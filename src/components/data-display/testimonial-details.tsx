import Image from 'next/image';

import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 shadow-none md:p-12">
      <Image
        src={personAvatar!}
        alt={`${personName} avatar`}
        className="h-20 w-20 rounded-full object-cover"
      ></Image>
      <Typography className="text-center">&quot;{testimonial}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default TestimonialDetails;
