'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

export default function LinkWithIdicator({
  href,
  className = 'bg-indigo-600',
  children,
}) {
  const pathname = usePathname();

  return (
    <NavigationMenuItem>
      <Link
        href={href}
        legacyBehavior
        passHref
      >
        {pathname === href ? (
          <NavigationMenuLink
            data-active
            className={`${navigationMenuTriggerStyle()} text-base font-semibold sm:h-12 sm:px-8 sm:text-lg`}
          >
            {children}
          </NavigationMenuLink>
        ) : (
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} text-base font-semibold sm:h-12 sm:px-8 sm:text-lg`}
          >
            {children}
          </NavigationMenuLink>
        )}
      </Link>
    </NavigationMenuItem>
  );
}
