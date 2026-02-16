import Image from 'next/image';

import FarhanFullPose from '/public/images/farhan-full-pose.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={FarhanFullPose}
              alt="Full pose of Farhan Muhammad"
              className="absolute z-10 h-[360px] w-[280px] rounded-3xl border-4 border-gray-50 shadow-sm max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] rounded-3xl bg-gray-100/60 max-md:top-3 md:bottom-2 md:left-2 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">About me</Typography>
          <Typography>
            I started in startup technology where speed mattered, but so did
            building things that could survive real users. That shaped how I
            work today as a Senior Unity Developer: I build immersive systems
            that are market-ready, not just technically impressive.
          </Typography>
          <Typography>
            My recent work spans VR-based operator training, digital twin
            prototypes, and interactive projection games for early childhood.
            Each project balances experience design with reliability and the
            constraints of real-world deployment.
          </Typography>
          <Typography>
            As responsibilities grew, I moved into mentoring interns and
            coordinating small teams. I translate product vision into structured
            technical execution, emphasizing clean architecture, clear
            communication, and a culture where people and products can scale.
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography component="div" className="font-medium">
              Focus areas:
            </Typography>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Unity/C# architecture for production-ready XR
              </Typography>
              <Typography component="li">
                Immersive UX that supports training and education outcomes
              </Typography>
              <Typography component="li">
                Team guidance, delivery planning, and sustainable codebases
              </Typography>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <Typography component="div" className="font-medium">
              Finally, some quick bits about me.
            </Typography>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Bachelor in Game Technology
              </Typography>
              <Typography component="li">
                Magister in Startup Technology
              </Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
