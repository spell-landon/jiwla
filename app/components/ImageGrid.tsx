import clsx from 'clsx';
import { useState } from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import { PROJECTS, Project } from '~/media/projects';
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
                'w-full object-center object-cover inline-block aspect-square group-hover:scale-110 transition-all duration-200 ease-out'
              )}
              alt=''
              src={image}
            />
            <div className='flex md:hidden absolute inset-0 md:group-hover:flex justify-center items-center bg-primary/30 backdrop-blur-sm transition-all duration-200 ease-out'>
              <span className='text-white font-semibold text-xl md:text-lg'>
                {project.label}
              </span>
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
