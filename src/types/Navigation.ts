export type TNavigationDto = {
  key: string;
  link: string;
  name: string;
};

export type TNavigationMenu = TNavigationDto & { isActive: boolean };

export type TNavigation = TNavigationDto[];
