import type { MetaFunction } from '@remix-run/node';
import { ImageCarousel } from '~/components/ImageCarousel';
import Testimonial from '~/components/Testimonial';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className='h-full min-h-[400px] lg:min-h-[600px] w-full'>
      <ImageCarousel />
      <Testimonial />
    </div>
  );
}
