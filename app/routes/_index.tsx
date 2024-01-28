import type { MetaFunction } from '@remix-run/node';
import { ImageCarousel } from '~/components/ImageCarousel';
import ImageGrid from '~/components/ImageGrid';
import Testimonial from '~/components/Testimonial';

export const meta: MetaFunction = () => {
  return [
    { title: 'JIWLA Construction' },
    { name: 'description', content: 'JIWLA Construction' },
  ];
};

export default function Index() {
  return (
    <div className='h-full min-h-[400px] lg:min-h-[600px] w-full'>
      <ImageCarousel />
      <Testimonial />
      <ImageGrid />
    </div>
  );
}
