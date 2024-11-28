// NEXT
import Image from 'next/image';

//ICONS
import { Disc3 } from 'lucide-react';
import BlackGoogleIcon from '@/public/google-icon-black.svg';

// CUSTOM LOGIC
import { signInAction } from '@/actions/authAction';

//CUSTOM UI
import CustomButton from '@/components/client/customButton';

export default function LandingHeader() {
  return (
    <header className='flex h-32 w-full items-center justify-between'>
      <div className='flex items-center justify-start gap-1.5'>
        <Disc3
          className='size-9'
          width={40}
          height={40}
          color='#9333ea'
        />
        <h1 className='text-lg font-bold lg:text-xl'>PartyPal</h1>
      </div>
      <CustomButton
        variant='outline'
        onClickAction={signInAction}
      >
        <Image
          src={BlackGoogleIcon}
          alt='Google icon'
        />
        Sign in
      </CustomButton>
    </header>
  );
}
