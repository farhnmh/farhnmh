import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
