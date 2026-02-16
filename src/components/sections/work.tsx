'use client';

import { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Button from '@/components/general/button';

const INITIAL_DISPLAY_COUNT = 6;

const WorkSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll 
    ? PROJECTS 
    : PROJECTS.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {displayedProjects?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}

      {PROJECTS.length > INITIAL_DISPLAY_COUNT && (
        <div className="flex justify-center">
          <Button
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : `Show More (${PROJECTS.length - INITIAL_DISPLAY_COUNT} more)`}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default WorkSection;
