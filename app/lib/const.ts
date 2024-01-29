import stairs_1 from '~/media/stairs/stairs_1.jpg';
import stairs_2 from '~/media/stairs/stairs_2.jpg';
import stairs_3 from '~/media/stairs/stairs_3.jpg';
import stairs_4 from '~/media/stairs/stairs_4.jpg';
import stairs_5 from '~/media/stairs/stairs_5.jpg';

import ladder_1 from '~/media/ladder/ladder_1.jpg';

export const PHONE_NUMBER = '123.456.7890';
export const COMPANY_NAME = 'JIWLA';

export const ALL_PROJECT_IMAGES = [
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
