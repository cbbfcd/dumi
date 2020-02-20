import React from 'react';
import { IFatherDocOpts } from '../..';
import { ILocale } from '../../routes/getLocaleFromRoutes';
import { INavItem } from '../../routes/getNavFromRoutes';
import { IMenuItem } from '../../routes/getMenuFromRoutes';

interface IContext {
  rootPath: string;
  slug: string;
  locale: ILocale['name'];
  locales: ILocale[];
  navs: INavItem[];
  menus: IMenuItem[];
  mode: IFatherDocOpts['mode'];
  logo: IFatherDocOpts['logo'];
  title: IFatherDocOpts['title'];
  desc: IFatherDocOpts['desc'];
  repoUrl: string;
  routeMeta: { [key: string]: any };
}

export default React.createContext<IContext>({
  /**
   * current root path (with locale prefix)
   */
  rootPath: '/',
  /**
   * current slug
   */
  slug: '',
  /**
   * current locale name
   */
  locale: '',
  /**
   * all available locales
   */
  locales: [],
  /**
   * mode
   */
  mode: 'doc',
  /**
   * logo URL
   */
  logo: '',
  /**
   * title
   */
  title: '',
  /**
   * desc
   */
  desc: '',
  /**
   * repository url
   */
  repoUrl: '',
  /**
   * nav list for current locale
   */
  navs: [],
  /**
   * menu list for current locale with current path
   */
  menus: [],
  /**
   * meta of current route
   */
  routeMeta: {},
});
