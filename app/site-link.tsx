'use client';
import type { ComponentProps } from 'react';
import { useTranslation } from './i18n';
import { localizedHref } from './i18n-core';
/** Native links keep the static export independent of a server-side RSC router. */
export default function SiteLink({
  children,
  href,
  ...props
}: ComponentProps<'a'>) {
  const { language } = useTranslation();
  return (
    <a {...props} href={href ? localizedHref(href, language) : href}>
      {children}
    </a>
  );
}
