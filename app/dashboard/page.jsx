import NewPartyForm from '@/components/client/newPartyForm';

export default async function DashboardPage() {
  return (
    <section className='mt-10 sm:mt-20 lg:mt-28'>
      <h1 className='text-center text-3xl font-black sm:text-4xl lg:text-5xl'>
        Party Coming Up?
      </h1>
      <NewPartyForm />
    </section>
  );
}
