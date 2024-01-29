import { Phone } from '@mui/icons-material';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import { COMPANY_NAME, PHONE_NUMBER } from '~/lib/const';
import map from '~/media/map.png';
import jiwla_logo_gray from '~/media/jiwla_logo_gray.png';

const Footer = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={clsx('w-full py-2 bg-gray-200 text-primary')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16'
        )}>
        <div className='flex flex-col gap-4'>
          {/* <span>{COMPANY_NAME} Construction</span> */}
          <img src={jiwla_logo_gray} alt='' className='h-5' />
          {/* Contact */}
          <div className={clsx('flex items-center gap-1')}>
            <Phone fontSize='small' className='text-primary' />
            {isMobile ? (
              <a
                href={`tel:${PHONE_NUMBER}`}
                className='font-roboto font-light'>
                {PHONE_NUMBER}
              </a>
            ) : (
              <p className='font-roboto font-light'>{PHONE_NUMBER}</p>
            )}
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
