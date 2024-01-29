import { Phone } from '@mui/icons-material';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import { COMPANY_INFO } from '~/lib/const';
import map from '~/media/map.png';
import jiwla_logo_gray from '~/media/jiwla_logo_gray.png';

const Footer = () => {
  const { phoneNumber, addressUrl } = COMPANY_INFO;
  const { isMobile } = useWindowDimensions();
  return (
    <div className={clsx('w-full py-2 bg-gray-200 text-primary sm:mt-8')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16'
        )}>
        <div className='flex flex-col gap-4'>
          <img src={jiwla_logo_gray} alt='' className='h-5' />
          {/* Contact */}
          <div className={clsx('flex items-center gap-1')}>
            <Phone fontSize='small' className='text-primary' />
            {isMobile ? (
              <a href={`tel:${phoneNumber}`} className='font-roboto font-light'>
                {phoneNumber}
              </a>
            ) : (
              <p className='font-roboto font-light'>{phoneNumber}</p>
            )}
          </div>
        </div>
        <Link to={addressUrl}>
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
