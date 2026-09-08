import type { ComponentProps } from 'react';
/** Native navigation keeps the static export independent of a server-side RSC router. */
export default function SiteLink({ children, ...props }: ComponentProps<'a'>) {
  return <a {...props}>{children}</a>;
}
