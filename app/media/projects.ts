import stairs_1 from './stairs/stairs_1.jpg';
import stairs_2 from './stairs/stairs_2.jpg';
import stairs_3 from './stairs/stairs_3.jpg';
import stairs_4 from './stairs/stairs_4.jpg';
import stairs_5 from './stairs/stairs_5.jpg';
import ladder_1 from './ladder/ladder_1.jpg';

export const SAMPLE_IMAGES = [
  'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export const PROJECT_IMAGES = [
  stairs_1,
  stairs_2,
  stairs_3,
  stairs_4,
  stairs_5,
  ladder_1,
];

export type Project = {
  label: string;
  images: string[];
};

export const PROJECTS: Project[] = [
  {
    label: 'Stairs',
    images: [stairs_1, stairs_2, stairs_3, stairs_4, stairs_5],
  },
  {
    label: 'Ladders',
    images: [ladder_1],
  },
];

export const SAMPLE_PROJECTS: Project[] = [
  {
    label: 'Stairs',
    images: SAMPLE_IMAGES,
  },
  {
    label: 'Ladders',
    images: [ladder_1],
  },
];
