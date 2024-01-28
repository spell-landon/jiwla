import type { MetaFunction } from '@remix-run/node';
import { useBeforeUnload, useLocation, useParams } from '@remix-run/react';
import { useCallback, useState } from 'react';
import { ImageCarousel } from '~/components/ImageCarousel';
import ImageGrid from '~/components/ImageGrid';
import Testimonial from '~/components/Testimonial';
import { PROJECTS, Project, SAMPLE_PROJECTS } from '~/media/projects';
import _ from 'lodash-es';
import { randomIntFromInterval } from '~/lib/helperFunctions';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { Gallery } from 'react-gallery-grid';

export const meta: MetaFunction = () => {
  return [
    { title: 'JIWLA Construction - Stairs' },
    { name: 'description', content: 'JIWLA Construction - Stairs' },
  ];
};

export default function ProjectName() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const { name } = useParams();
  const currentProject: Project =
    _.find(SAMPLE_PROJECTS, (project: Project) => {
      return _.lowerCase(project.label) === _.lowerCase(name);
    }) ?? SAMPLE_PROJECTS[0];

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}>
        Open Lightbox
      </button>

      <SlideshowLightbox
        images={currentProject.images.map((image) => {
          return { src: image, alt: image };
        })}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier='lbox1'
        theme='lightbox'
        slideshowInterval={5000}
        startingSlideIndex={currentIndex}
        onClose={() => {
          setIsOpen(false);
        }}></SlideshowLightbox>
    </>
  );
}

// TODO: Use this link below to create a lightbox for the images
// https://neptunian.github.io/react-photo-gallery/examples/lightbox.html
