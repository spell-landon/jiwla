import clsx from 'clsx';
import { useState } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import { PROJECTS, Project } from '~/lib/const';
import 'lightbox.js-react/dist/index.css';

const ImageGrid = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState(PROJECTS[0]);
  const handleClick = (project: Project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  return (
    <div
      className={clsx('w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3')}>
      {PROJECTS.map((project) => {
        const image = project.images[0];
        return (
          <button
            key={image}
            onClick={() => handleClick(project)}
            className='relative group w-full aspect-square overflow-hidden transition-all duration-200 ease-out'>
            <img
              key={image}
              className={clsx(
                'w-full object-center object-cover inline-block aspect-square md:group-hover:scale-110 transition-all duration-200 ease-out'
              )}
              alt=''
              src={image}
            />
            <div className='flex flex-col visible opacity-100 md:invisible md:opacity-0 absolute inset-0 md:group-hover:flex md:group-hover:opacity-100 md:group-hover:visible justify-center items-center bg-primary/30 backdrop-blur-sm transition-all duration-200 ease-out gap-2'>
              <span className={clsx('text-white font-semibold text-xl')}>
                {project.label}
              </span>
              <div className='px-5 py-2 font-normal text-base border border-white text-white bg-transparent hover:bg-white/20 transition-all duration-200 ease-out'>
                View
              </div>
            </div>
          </button>
        );
      })}

      <SlideshowLightbox
        images={currentProject.images.map((image) => {
          return { src: image, alt: image };
        })}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier='lbox1'
        theme='lightbox'
        slideshowInterval={5000}
        onClose={() => {
          setIsOpen(false);
        }}></SlideshowLightbox>
    </div>
  );
};

export default ImageGrid;
