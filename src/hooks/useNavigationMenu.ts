import { useRouter } from 'next/router';
import { NAVIGATION_MENUS } from '@/consts/navigation';
import { TNavigationMenu } from '@/types/Navigation';

const useNavigationMenu = () => {
  const router = useRouter();
  const { pathname } = router;

  const items = NAVIGATION_MENUS.map(menu => {
    return {
      ...menu,
      isActive: menu.link === pathname,
    };
  }) as TNavigationMenu[];

  return { items };
};

export default useNavigationMenu;
