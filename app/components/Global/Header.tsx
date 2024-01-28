import clsx from 'clsx';
import { Phone } from '@mui/icons-material';
import { Link } from '@remix-run/react';

const Header = () => {
  return (
    <div className={clsx('w-full py-4')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 flex justify-between items-center'
        )}>
        {/* Logo */}
        <Link to='/'>
          <h1>JIWLA</h1>
        </Link>
        {/* Contact */}
        <div className={clsx('flex items-center gap-1')}>
          <Phone fontSize='small' />
          <p className='font-roboto font-light'>123.456.7890</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
