import type { MetaFunction } from '@remix-run/node';
import { ImageCarousel } from '~/components/ImageCarousel';
import ImageGrid from '~/components/ImageGrid';
import Testimonial from '~/components/Testimonial';

export const meta: MetaFunction = () => {
  return [
    { title: 'JIWLA Construction - Stairs' },
    { name: 'description', content: 'JIWLA Construction - Stairs' },
  ];
};

export default function Stairs() {
  return (
    <div className='h-full min-h-[400px] lg:min-h-[600px] w-full'>
      <h2>STAIRS</h2>
      <ImageCarousel />
      <Testimonial />
      <ImageGrid />
    </div>
  );
}

// TODO: Use this link below to create a lightbox for the images
// https://neptunian.github.io/react-photo-gallery/examples/lightbox.html
