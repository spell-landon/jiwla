import clsx from 'clsx';
import { Phone } from '@mui/icons-material';
import { COMPANY_NAME, PHONE_NUMBER } from '~/lib/const';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import jiwla_logo from '~/media/jiwla_logo.png';

const Header = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={clsx('w-full py-4 text-primary')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 flex justify-between items-center'
        )}>
        {/* Logo */}
        {/* <h1>{COMPANY_NAME}</h1> */}
        <img src={jiwla_logo} alt='' className='h-5' />

        {/* Contact */}
        <div className={clsx('flex items-center gap-1')}>
          <Phone fontSize='small' className='text-primary' />
          {isMobile ? (
            <a href={`tel:${PHONE_NUMBER}`} className='font-roboto font-light'>
              {PHONE_NUMBER}
            </a>
          ) : (
            <p className='font-roboto font-light'>{PHONE_NUMBER}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
