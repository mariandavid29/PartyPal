export default function LandingNav({ children }) {
  return (
    <nav className='flex h-36 items-center justify-between'>
      <div className='flex items-center justify-center gap-3 sm:gap-5'>
        <h1 className='text-xl sm:text-2xl xl:text-3xl'>
          <span className='text-2xl sm:text-3xl xl:text-4xl'>🎈</span>
          <span className='font-bold'>Party</span>Pal
        </h1>
      </div>
      {children}
    </nav>
  );
}
