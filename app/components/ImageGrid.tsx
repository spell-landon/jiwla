import { Link } from '@remix-run/react';
import clsx from 'clsx';

import { PROJECTS } from '~/media/projects';

const ImageGrid = () => {
  return (
    <div className={clsx('w-full grid grid-cols-1', 'md:grid-cols-3')}>
      {PROJECTS.map((project) => {
        const image = project.images[0];
        return (
          <Link
            to={project.to}
            className='relative group w-full aspect-square overflow-hidden transition-all duration-200 ease-out'>
            <img
              key={image}
              className={clsx(
                'w-full object-center object-cover inline-block aspect-square group-hover:scale-110 transition-all duration-200 ease-out'
              )}
              alt=''
              src={image}
            />
            <div className='hidden absolute inset-0 group-hover:flex justify-center items-center bg-black/30 backdrop-blur-sm transition-all duration-200 ease-out'>
              <span className='text-white font-semibold'>{project.label}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ImageGrid;
