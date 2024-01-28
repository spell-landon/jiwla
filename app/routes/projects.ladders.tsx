import type { MetaFunction } from '@remix-run/node';
import { ImageCarousel } from '~/components/ImageCarousel';
import ImageGrid from '~/components/ImageGrid';
import Testimonial from '~/components/Testimonial';

export const meta: MetaFunction = () => {
  return [
    { title: 'JIWLA Construction - Ladders' },
    { name: 'description', content: 'JIWLA Construction - Ladders' },
  ];
};

export default function Ladders() {
  return (
    <div className='h-full min-h-[400px] lg:min-h-[600px] w-full'>
      <h2>LADDERS</h2>
      <ImageCarousel />
      <Testimonial />
      <ImageGrid />
    </div>
  );
}
