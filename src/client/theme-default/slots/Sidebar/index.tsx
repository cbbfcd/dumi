import { NavLink, useLocation, useSidebarData } from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import React, { type FC } from 'react';
import './index.less';

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const sidebar = useSidebarData();

  return (
    sidebar && (
      <div className="dumi-default-sidebar">
        {sidebar.map((item, i) => (
          <dl className="dumi-default-sidebar-group" key={String(i)}>
            {item.title && <dt>{item.title}</dt>}
            {item.children.map((child) => (
              <dd key={child.link}>
                <NavLink to={child.link} title={child.title} end>
                  {child.title}
                </NavLink>
                {child.link === pathname && <Toc />}
              </dd>
            ))}
          </dl>
        ))}
      </div>
    )
  );
};

export default Sidebar;
