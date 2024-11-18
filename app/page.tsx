// CUSTOM LOGIC
import { signInAction } from '@/actions/authAction';

//CUSTOM UI
import LandingHeader from '@/components/server/landingHeader';
import CustomButton from '@/components/client/customButton';

export default async function Home() {
  return (
    <main className='mx-auto w-11/12 sm:w-10/12 xl:max-w-screen-xl'>
      <LandingHeader />
      <section className='flex min-h-[calc(100vh_-_144px)] flex-col items-start justify-start gap-6 pt-36 sm:pt-44 lg:gap-8 lg:pt-52 xl:pt-64'>
        <div className='flex flex-col items-start justify-start gap-1 lg:gap-2'>
          <h2 className='text-2xl font-thin text-muted-foreground sm:text-4xl lg:text-5xl xl:text-6xl'>
            Parties can be{' '}
            <span className='font-normal text-foreground'>stressful</span>,{' '}
            <br />
            <span className='font-normal text-primary'>Focus</span> on what
            matters
          </h2>
          <p className='max-w-xs text-sm lg:max-w-sm lg:text-lg xl:max-w-none xl:text-xl'>
            Gather your friends and start planning more parties, stress-free.
          </p>
        </div>
        <CustomButton
          size='lg'
          className='shadow-xl shadow-violet-400 lg:text-lg'
          onClickAction={signInAction}
        >
          Start now
        </CustomButton>
      </section>
    </main>
  );
}
