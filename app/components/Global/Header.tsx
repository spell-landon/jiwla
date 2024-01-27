import clsx from 'clsx';
import { Phone } from '@mui/icons-material';

const Header = () => {
  return (
    <div className={clsx('w-full py-4')}>
      <div
        className={clsx(
          'w-full max-w-7xl mx-auto px-4 flex justify-between items-center'
        )}>
        {/* Logo */}
        <h1>JIWLA</h1>
        {/* Contact */}
        <div className={clsx('flex items-center gap-1')}>
          <Phone fontSize='small' />
          <p>123.456.7890</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
