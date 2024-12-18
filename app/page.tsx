// CUSTOM LOGIC
import { signInAction } from '@/actions/authAction';

//CUSTOM UI
import LandingHeader from '@/components/server/landingHeader';
import CustomButton from '@/components/client/customButton';

export default async function Home() {
  return (
    <main className='mx-auto w-11/12 lg:w-10/12 xl:max-w-screen-xl'>
      <LandingHeader />
      <section className='flex min-h-[calc(100vh_-_144px)] flex-col items-start justify-start gap-6 pt-32 sm:pt-40 lg:pt-52 xl:pt-56'>
        <div className='flex flex-col items-start justify-start gap-1 lg:gap-2'>
          <h2 className='text-2xl font-thin text-muted-foreground sm:text-3xl lg:text-4xl xl:text-5xl'>
            Parties can be{' '}
            <span className='font-normal text-foreground'>stressful</span>,{' '}
            <br />
            <span className='font-normal text-primary'>Focus</span> on what
            matters
          </h2>
          <p className='max-w-xs text-sm lg:max-w-sm xl:max-w-md xl:text-lg'>
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
