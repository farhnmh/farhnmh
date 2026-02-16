'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

import FarhanPhoto1 from '/public/images/headshot/farhan (1).png';
import FarhanPhoto2 from '/public/images/headshot/farhan (2).png';
import FarhanPhoto3 from '/public/images/headshot/farhan (3).png';
import FarhanPhoto4 from '/public/images/headshot/farhan (4).png';
import FarhanPhoto5 from '/public/images/headshot/farhan (5).png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const photos = [FarhanPhoto1, FarhanPhoto2, FarhanPhoto3, FarhanPhoto4, FarhanPhoto5];

const HeroSection = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={photos[currentPhotoIndex]}
              alt="Headshot of Farhan Muhammad"
              className={`absolute z-10 h-[280px] w-[240px] rounded-3xl border-4 border-gray-50 shadow-sm transition-opacity duration-500 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] rounded-3xl bg-gray-100/60 max-md:top-3 md:bottom-2 md:right-2 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 pl-4 md:order-first md:items-start md:justify-center md:pl-8 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Farhan {' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              I&apos;m a Senior Unity Developer focused on crafting immersive
              technology across VR, digital twin, and interactive learning
              systems. I build real-time applications that combine strong architecture,
              thoughtful interaction design, and product awareness - ensuring
              they are not only engaging, but practical and scalable.
            </Typography>
            <Typography>
              As I grow into technical leadership, I manage interns and small
              teams while remaining deeply involved in development. No matter
              how complex the system, I still love turning ideas into
              interactive experiences that feel alive.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Surabaya, Indonesia</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
