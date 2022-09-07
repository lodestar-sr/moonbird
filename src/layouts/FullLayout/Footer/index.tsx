import { FC } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { ROUTE } from '../../../constants';
import {
  HomeIcon,
  JourneyIcon,
  SettingsIcon,
  StatsIcon,
} from '../../../icons';
import { MODULE } from '../../../types/enums';

export interface IFooterProps {
  module: MODULE;
}

const buttons = [
  {
    label: 'Home',
    icon: HomeIcon,
    module: MODULE.HOME,
    link: ROUTE.HOME,
  },
  {
    label: 'Journeys',
    icon: JourneyIcon,
    module: MODULE.JOURNEY,
    link: ROUTE.JOURNEYS.INDEX,
  },
  {
    label: 'Stats',
    icon: StatsIcon,
    module: MODULE.STATISTICS,
    link: ROUTE.STATS,
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
    module: MODULE.SETTINGS,
    link: ROUTE.SETTINGS,
  },
];

export const Footer: FC<IFooterProps> = ({ module }) => (
  <div className="footer">
    {buttons.map((button) => (
      <Link key={button.label} href={button.link}>
        <div
          className={classnames(
            'menu-button',
            module === button.module ? 'text-primary' : 'text-gray',
          )}
        >
          <button.icon size={28} />
          <span className="text-xs font-bold">{button.label}</span>
        </div>
      </Link>
    ))}
  </div>
);
