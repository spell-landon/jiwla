import clsx from 'clsx';
import { Phone } from '@mui/icons-material';
import { COMPANY_INFO } from '~/lib/const';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import jiwla_logo from '~/media/jiwla_logo.png';
import { Link } from '@remix-run/react';

const Header = () => {
  const { phoneNumber } = COMPANY_INFO;
  const { isMobile } = useWindowDimensions();
  return (
    <div className={clsx('w-full py-4 text-primary')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 flex justify-between items-center'
        )}>
        {/* Logo */}
        <Link to='/'>
          <img src={jiwla_logo} alt='' className='h-5' />
        </Link>

        {/* Contact */}
        <div className='flex gap-6 items-center'>
          <Link
            to='/contact'
            className='text-primary/80 font-normal hover:text-primary cursor-pointer'>
            Contact
          </Link>
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
      </div>
    </div>
  );
};

export default Header;
