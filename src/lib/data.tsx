import { Github, Twitter, Figma } from 'lucide-react';

import LogoGit from '/public/images/logos/icon-git.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoCsharp from '/public/images/logos/icon-csharp.png';
import LogoUnity from '/public/images/logos/icon-unity.svg';
import LogoUnreal from '/public/images/logos/icon-unreal.webp';

import LogoMolca from '/public/images/company/icon-molca.svg';
import LogoITPLN from '/public/images/company/icon-itpln.svg';
import LogoPKT from '/public/images/company/icon-pkt.svg';
import LogoMetanesia from '/public/images/company/icon-metanesia.svg';
import LogoAntigravity from '/public/images/company/icon-antigravity.svg';
import LogoArutala from '/public/images/company/icon-arutala.svg';
import LogoPateba from '/public/images/company/icon-pateba.svg';
import LogoIntive from '/public/images/company/icon-intive.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import AvatarAditya from '/public/images/testimonials/icon-aditya.png';
import AvatarGeorge from '/public/images/testimonials/icon-george.png';
import AvatarArlo from '/public/images/testimonials/icon-arlo.png';
import AvatarLily from '/public/images/testimonials/icon-lily.png';
import AvatarKirana from '/public/images/testimonials/icon-kirana.png';
import AvatarJatayu from '/public/images/testimonials/icon-jatayu.png';
import AvatarIvan from '/public/images/testimonials/icon-ivan.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/farhnmh',
  GITHUB_REPO: 'https://github.com/farhnmh',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Twitter,
    url: 'https://twitter.com/shahsagarm',
  },
  {
    icon: Figma,
    url: 'https://www.figma.com/@shahsagarm',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'C#',
    logo: LogoCsharp,
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    label: 'Unity',
    logo: LogoUnity,
    url: 'https://unity.com/',
  },
  {
    label: 'Unreal',
    logo: LogoUnreal,
    url: 'https://www.unrealengine.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoMolca,
    logoAlt: 'Molca Teknologi Nusantara logo',
    company: 'Molca Teknologi Nusantara',
    positions: [
      {
        position: 'Senior Unity Developer',
        startDate: new Date(2024, 0),
        currentlyWorkHere: true,
        summary: [
          'Leading immersive technology development for B2B industrial projects, focusing on VR training systems, AR applications, digital twin solutions, and IoT-integrated platforms.',
          'Architected scalable Unity-based simulation systems integrating IoT data streams using MQTT for real-time visualization.',
          'Optimized performance for high-fidelity industrial simulations across Meta Quest and WebGL platforms.',
          'Led small development teams, managed interns, and conducted code reviews ensuring clean architecture standards.',
          'Collaborated with designers, PMs, and stakeholders to align technical execution with client requirements.',
        ],
      },
      {
        position: 'Virtual Reality Developer (Freelance)',
        startDate: new Date(2023, 9),
        endDate: new Date(2023, 11),
        summary: [
          'Contributed to VR development for industrial simulation systems with focus on performance and realism.',
          'Developed interactive VR modules and implemented feature improvements.',
          'Conducted rigorous testing and refinement to deliver stable final builds for client deployment.',
        ],
      },
    ],
  },
  {
    logo: LogoIntive,
    logoAlt: 'Intive Studio logo',
    company: 'Intive Studio',
    positions: [
      {
        position: 'Game Programmer (Freelance)',
        startDate: new Date(2021, 11),
        currentlyWorkHere: true,
        summary: [
          'Developed cutting-edge game and interactive applications focusing on future-forward and renewable concepts.',
          'Contributed to game design, system flow architecture, and complex gameplay programming challenges.',
          'Presented technical ideas to stakeholders and optimized performance across Unity and Python tech stack.',
        ],
      },
    ],
  },
  {
    logo: LogoPateba,
    logoAlt: 'Pateba Studio logo',
    company: 'Pateba Studio',
    positions: [
      {
        position: 'Game Programmer',
        startDate: new Date(2021, 11),
        endDate: new Date(2025, 10),
        summary: [
          'End-to-end Unity game development in startup environment across multiple client projects.',
          'Developed core mechanics and implemented gameplay features with iterative feedback cycles.',
          'Integrated system improvements and optimized performance across Unity and Python pipelines.',
        ],
      },
    ],
  },
  {
    logo: LogoITPLN,
    logoAlt: 'Institut Teknologi PLN logo',
    company: 'Institut Teknologi PLN',
    positions: [
      {
        position: 'Unity User-Level Trainer',
        startDate: new Date(2024, 1),
        endDate: new Date(2024, 1),
        summary: [
          'Prepared structured Unity training materials covering fundamentals and best practices.',
          'Delivered intensive 3-day training session with hands-on workshops.',
          'Led interactive group discussions and guided students through real-world Unity projects.',
        ],
      },
    ],
  },
  {
    logo: LogoPKT,
    logoAlt: 'PT Pupuk Kalimantan Timur logo',
    company: 'PT Pupuk Kalimantan Timur',
    positions: [
      {
        position: 'Unity Trainer',
        startDate: new Date(2024, 0),
        endDate: new Date(2024, 0),
        summary: [
          'Delivered comprehensive Unity and C# training to industrial development team.',
          'Structured learning modules for progressive skill development.',
          'Ensured team independence and capability to maintain VR training systems post-training.',
        ],
      },
      {
        position: 'Virtual Reality Developer',
        startDate: new Date(2023, 8),
        endDate: new Date(2023, 11),
        summary: [
          'Developed Operator Training System (OTS) using VR to simulate industrial plant environments.',
          'Implemented interactive VR mechanics for industrial operator training with realistic workflows.',
          'Fixed critical feature bugs and optimized build performance for Meta Quest 2.',
          'Conducted UAT review with Project Manager and transferred knowledge to internal IT support team.',
        ],
      },
    ],
  },
  {
    logo: LogoMetanesia,
    logoAlt: 'Telkom Indonesia metaNesia logo',
    company: 'Telkom Indonesia – metaNesia',
    positions: [
      {
        position: 'Metaverse Programmer',
        startDate: new Date(2022, 8),
        endDate: new Date(2024, 0),
        summary: [
          'Developed core metaverse features for large-scale digital interaction platform using Unity.',
          'Built interactive AI-assisted interfaces and optimized multi-user interaction systems.',
          'Maintained performance stability in large-scale environments with thousands of concurrent users.',
          'Collaborated with tech platform squad to deliver seamless metaverse experiences.',
        ],
      },
    ],
  },
  {
    logo: LogoAntigravity,
    logoAlt: 'AntiGrvty logo',
    company: 'AntiGrvty',
    positions: [
      {
        position: 'Unity Developer (Freelance)',
        startDate: new Date(2023, 9),
        endDate: new Date(2023, 11),
        summary: [
          'Developed puzzle mini-game for Trakindo Trail App with tap & swipe mechanics.',
          'Integrated art, audio, and animation assets into cohesive gameplay experience.',
          'Built timer, leveling, and scoring economy system with dynamic matrix puzzle logic.',
          'Implemented win/lose conditions and polished game balance.',
        ],
      },
    ],
  },
  {
    logo: LogoArutala,
    logoAlt: 'ARUTALA logo',
    company: 'ARUTALA',
    positions: [
      {
        position: 'Virtual Reality Developer',
        startDate: new Date(2022, 8),
        endDate: new Date(2022, 11),
        summary: [
          'Developed VR training solutions using Meta Quest 2 for workforce development.',
          'Brainstormed and designed immersive VR training concepts with database integration.',
          'Monitored project milestones and handled post-project maintenance.',
        ],
      },
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Industrial Digital Twin Platform",
    description:
      "A scalable digital twin platform replicating real-world factory operations for training, simulation, and operational visualization. Contributed across UI/UX design, implementation, documentation, and small-team coordination. Deployed in multiple fertilizer and manufacturing industries.",
    url: "",
    previewImage: ProjectWingie,
    clientCompany: [
      "Molca Teknologi Nusantara",
      "Pupuk Kujang Cikampek",
      "Pupuk Kalimantan Timur",
      "Petrokimia Gresik",
      "Pupuk Sriwidjaja Palembang",
      "Ajinomoto"
    ],
    technologies: [
      "Unity",
      "C#",
      "Digital Twin",
      "Industrial Simulation",
      "UI/UX",
      "System Architecture",
      "Industrial Workflow Mapping"
    ]
  },
  {
    name: "Operator Training Simulator (OTS)",
    description:
      "An interactive operator training simulator designed to replicate industrial operational procedures in a safe and controlled digital environment, focusing on usability clarity and workflow accuracy.",
    url: "",
    previewImage: ProjectWingie,
    clientCompany: [
      "Petrokimia Gresik",
      "Pupuk Sriwidjaja Palembang"
    ],
    technologies: [
      "Unity",
      "C#",
      "Industrial Simulation",
      "Training System",
      "UI/UX",
      "Workflow Simulation"
    ]
  },
  {
    name: "VR Digital Learning Platform",
    description:
      "An immersive VR-based industrial learning system simulating factory environments to enhance spatial understanding, engagement, and training effectiveness.",
    url: "",
    previewImage: ProjectWingie,
    clientCompany: ["Pupuk Kujang Cikampek"],
    technologies: [
      "Unity",
      "Virtual Reality",
      "XR",
      "Industrial Training",
      "C#",
      "3D Interaction Design"
    ]
  },
  {
    name: "TAM Assessment Game (V1–V3)",
    description:
      "A WebGL-based assessment game developed for internal company learning at TAM. The platform evolved across three major versions, improving gameplay flow, UI clarity, and knowledge delivery related to assessment systems.",
    url: "",
    previewImage: ProjectWingie,
    clientCompany: ["Toyota Astra Motor"],
    technologies: [
      "Unity",
      "WebGL",
      "2D Game Development",
      "C#",
      "Game-based Learning",
      "UI/UX"
    ]
  },
  {
    name: "AICOC Assessment Game – Astra International",
    description:
      "A WebGL-based educational assessment game developed for Astra International, designed to provide interactive understanding of corporate assessment concepts through structured gameplay.",
    url: "",
    previewImage: ProjectWingie,
    clientCompany: ["Astra International"],
    technologies: [
      "Unity",
      "WebGL",
      "2D Game Development",
      "C#",
      "Corporate Learning"
    ]
  },
  {
    name: "Talent DNA for Kids",
    description:
      "An educational assessment game designed to identify children's strengths and potentials through interactive gameplay mechanics using a user-centered design approach.",
    url: "",
    previewImage: ProjectWingie,
    clientCompany: ["ACT Consulting Indonesia"],
    technologies: [
      "Unity",
      "C#",
      "Game Design",
      "UI/UX",
      "User Centered Design",
      "Assessment System"
    ]
  },
  {
    name: "NumberPedia – Interactive Projection Educational Game",
    description:
      "An interactive projection-based educational game designed for early childhood numeracy learning. The project combined motion-based gameplay with research-driven validation using TAM, TRI, and TRL frameworks to measure market readiness, user acceptance, and business feasibility.",
    url: "",
    previewImage: ProjectWingie,
    technologies: [
      "Unity",
      "C#",
      "Interactive Projection",
      "Educational Game Design",
      "TAM",
      "TRI",
      "TRL",
      "Market Validation"
    ]
  },
  {
    name: "VR Sejarah – Candi Belahan",
    description:
      "A Virtual Reality application developed to digitally preserve and introduce Candi Belahan as a cultural heritage site. The experience allows users to explore the temple virtually, improving accessibility through immersive 3D interaction.",
    url: "",
    previewImage: ProjectWingie,
    technologies: [
      "Unity",
      "Virtual Reality",
      "3D Asset Integration",
      "C#",
      "Cultural Digitization"
    ]
  },
  {
    name: "G-POLIN Educational Game",
    description:
      "An educational 2D game featuring multiple gameplay mechanics such as number line matching, cost calculation simulations, and simple data visualization to support logical and mathematical learning.",
    url: "",
    previewImage: ProjectWingie,
    technologies: [
      "Unity",
      "2D Game Development",
      "C#",
      "Educational Game Design",
      "Data Visualization"
    ]
  },
  {
    name: "AR Plane Parts",
    description:
      "An Augmented Reality mobile application that teaches users about airplane components, including assembly, maintenance, operation, and disassembly processes using interactive 3D visualization and text guidance.",
    url: "",
    previewImage: ProjectWingie,
    technologies: [
      "Unity",
      "Augmented Reality",
      "3D Visualization",
      "C#",
      "Mobile Development"
    ]
  },
  {
    name: "ARDA – AR Body Organ System",
    description:
      "An Android-based Augmented Reality application introducing human body organ systems such as the heart and arteries. Includes integrated YouTube streaming support for extended learning content.",
    url: "",
    previewImage: ProjectWingie,
    technologies: [
      "Unity",
      "Augmented Reality",
      "Android",
      "3D Asset Integration",
      "C#"
    ]
  },
  {
    name: "REPROVERSE – AR Reproductive System",
    description:
      "An AR-based Android application for recognizing human reproductive organs through interactive 3D visualization and audio dubbing explanation features.",
    url: "",
    previewImage: ProjectWingie,
    technologies: [
      "Unity",
      "Augmented Reality",
      "Android",
      "3D Asset Integration",
      "C#",
      "Audio Integration"
    ]
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Aditya Pamungkas',
    personAvatar: AvatarAditya,
    title: 'Unity Developer | Informatics Student at President University',
    testimonial:
      "He creates a relaxed atmosphere while seriously guiding Unity development and Digital Twin, VR, and AR projects, and he's always patient and open to questions!",
  },
  {
    personName: 'George Tamba',
    personAvatar: AvatarGeorge,
    title: 'Unity Developer | AR/VR/Digital Twin Developer | Informatics Student at President University',
    testimonial:
      'Farhan is not only highly skilled in Unity and Digital Twin development, but also a mentor who genuinely invests in growth and leadership!',
  },
  {
    personName: 'Arlo Mario Dendi',
    personAvatar: AvatarArlo,
    title: 'Pranata Komputer Ahli Pertama',
    testimonial:
      'Disciplined, reliable, highly intelligent, and an invaluable asset to any team he works with!',
  },
  {
    personName: 'Lily Fitri Hasanah',
    personAvatar: AvatarLily,
    title: 'Multimedia Laboratory Assistant | Institut Teknologi PLN',
    testimonial:
      'He explains complex VR concepts in a simple and practical way, making the learning process both enjoyable and highly productive!',
  },
  {
    personName: 'Kirana Hanifati',
    personAvatar: AvatarKirana,
    title: 'XR (AR/VR/MR) & AI Specialist | Unity Developer',
    testimonial:
      'He embraces challenges with enthusiasm and consistently delivers efficient, innovative, and high-quality results!',
  },
  {
    personName: 'Jatayu Wicaksono',
    personAvatar: AvatarJatayu,
    title: 'Interactive Experience Developer | AR/VR • AI • Game Technology',
    testimonial:
      'Kind, humble, highly adaptable, and truly a team player anyone would be grateful to work with!',
  },
  {
    personName: 'Muhammad Ivan Muntahir',
    personAvatar: AvatarIvan,
    title: 'Software & Security Engineer | Unity VR/AR Developer',
    testimonial:
      'An exceptional Unity Engineer who consistently exceeds expectations with strong technical expertise and creative problem-solving!',
  },
];
