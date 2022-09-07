import { FC } from 'react';
import classnames from 'classnames';

export interface IProgressBarProps {
  className?: string;
  theme: string;
  percent?: number;
}

export const ProgressBar: FC<IProgressBarProps> = ({
  className,
  theme,
  percent = 0,
}) => (
  <div
    className={classnames(
      'progress-bar',
      `theme-${theme}`,
      className,
    )}
  >
    <div
      className={classnames('bar', `bg-${theme}`)}
      style={{ width: `${percent}%` }}
    />
  </div>
);
