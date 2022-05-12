import { useRouter } from 'next/router';

import { navigations } from '@/navs/navigations';

export const usePrevNext = () => {
  let router = useRouter();
  let pages = Object.keys(navigations).flatMap((category) => navigations[category]);
  let pageIndex = pages.findIndex((page) => page.href === router.pathname);

  return {
    prev: pageIndex > -1 ? pages[pageIndex - 1] : undefined,
    next: pageIndex > -1 ? pages[pageIndex + 1] : undefined,
  };
};
