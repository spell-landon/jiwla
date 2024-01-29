import type { MetaFunction } from '@remix-run/node';
import { ImageCarousel } from '~/components/ImageCarousel';
import ImageGrid from '~/components/ImageGrid';
import Testimonial from '~/components/Testimonial';
import { COMPANY_INFO } from '~/lib/const';

export const meta: MetaFunction = () => {
  const { companyName } = COMPANY_INFO;
  return [
    { title: `${companyName} Construction` },
    { name: 'description', content: `${companyName} Construction` },
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
