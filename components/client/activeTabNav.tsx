'use client';

import { usePathname } from 'next/navigation';

export default function ActiveTabNav({
  links,
}: {
  links: { (pathname: string): JSX.Element }[];
}) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex items-center justify-between gap-10'>
        {links.map((link, index) => (
          <li key={index}>{link(pathname)}</li>
        ))}
      </ul>
    </nav>
  );
}
