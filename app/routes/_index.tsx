import type { MetaFunction } from '@remix-run/node';
import { ImageCarousel } from '~/components/ImageCarousel';
import ImageGrid from '~/components/ImageGrid';
import Testimonial from '~/components/Testimonial';
import { COMPANY_NAME } from '~/lib/const';

export const meta: MetaFunction = () => {
  return [
    { title: `${COMPANY_NAME} Construction` },
    { name: 'description', content: `${COMPANY_NAME} Construction` },
  ];
};

export default function Index() {
  return (
    <div className='h-full'>
      <ImageCarousel />
      <Testimonial />
      <ImageGrid />
    </div>
  );
}
