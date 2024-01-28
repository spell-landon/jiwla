import { Phone } from '@mui/icons-material';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import map from '~/media/map.png';

const Footer = () => {
  return (
    <div className={clsx('w-full py-2 bg-gray-200 text-primary')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16'
        )}>
        <div className='flex flex-col gap-4'>
          <span>JIWLA Construction</span>
          {/* Contact */}
          <div className={clsx('flex items-center gap-1')}>
            <Phone fontSize='small' className='text-primary' />
            <p className='font-roboto font-light'>123.456.7890</p>
          </div>
        </div>
        <Link to='https://maps.app.goo.gl/qNQYuYPU3oTCGVaV6'>
          <img
            key={map}
            className={clsx(
              'object-cover object-center rounded-2xl aspect-video h-full max-h-64 shadow'
            )}
            alt=''
            src={map}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
