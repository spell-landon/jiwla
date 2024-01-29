import { FoundationRounded } from '@mui/icons-material';
import { COMPANY_INFO } from '~/lib/const';

const Testimonial = () => {
  const { companyName } = COMPANY_INFO;
  return (
    <div className='w-full max-w-sm sm:max-w-7xl mx-auto py-16 px-4'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <span className='text-center font-normal'>
          {companyName} Construction brings architectural visions to life with
          unparalleled craftsmanship in iron works.
        </span>
        <div className='flex gap-2 items-center'>
          <div className='bg-primary/50 h-[1px] w-[10vw]' />
          <FoundationRounded className='h-6 w-6 text-primary/50' />
          <div className='bg-primary/50 h-[1px] w-[10vw]' />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
