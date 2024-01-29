import { MailOutline, Phone } from '@mui/icons-material';
import { MetaFunction } from '@remix-run/node';
import clsx from 'clsx';
import { useWindowDimensions } from '~/hooks/useWindowDimensions';
import { COMPANY_INFO } from '~/lib/const';

export const meta: MetaFunction = () => {
  const { companyName } = COMPANY_INFO;
  return [
    { title: `${companyName} Contact` },
    { name: 'description', content: `${companyName} Contact` },
  ];
};

export default function Contact() {
  const { phoneNumber, emailAddress, address, addressUrl } = COMPANY_INFO;
  const { isMobile } = useWindowDimensions();
  return (
    <div className='w-full flex flex-col font-raleway'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13758.621855799296!2d-97.774271!3d30.445867449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1706503051081!5m2!1sen!2sus'
        height='400'
        style={{ border: '0px', width: '100%' }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
      <div className='w-full py-8 px-4'>
        <div className='w-full max-w-xl mx-auto flex flex-col sm:flex-row justify-between gap-8 sm:gap-4'>
          {/* Contact Info */}
          <div className='flex flex-col gap-4'>
            <span className='font-medium'>Contact Info</span>
            <div className='flex flex-col text-primay/80 gap-2'>
              <div className={clsx('flex items-center gap-1')}>
                <Phone fontSize='small' className='text-primary/80' />
                {isMobile ? (
                  <a
                    href={`tel:${phoneNumber}`}
                    className='font-roboto font-light'>
                    {phoneNumber}
                  </a>
                ) : (
                  <p className='font-roboto font-light'>{phoneNumber}</p>
                )}
              </div>
              <div className={clsx('flex items-center gap-1')}>
                <MailOutline fontSize='small' className='text-primary/80' />
                <a
                  href={`mailto:${emailAddress}`}
                  className='font-roboto font-light text-[#6484A0]'>
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>
          {/* Address */}
          <div className='flex flex-col gap-4'>
            <span className='font-medium'>Address</span>
            <a
              href={addressUrl}
              className='font-roboto font-light text-[#6484A0]'>
              {address}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
