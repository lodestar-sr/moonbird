import { FC } from 'react';
import classnames from 'classnames';
import { Button } from '../../common/Button';
import { CheckIcon, LockIcon } from '../../../icons';
import { Episode } from '../../../graphql/entities';
import { EPISODE_STATUS } from '../../../types/enums';

export interface IEpisodeRowProps {
  index: number;
  episode: Episode;
  onContinue: () => void;
}

export const EpisodeRow: FC<IEpisodeRowProps> = ({
  index,
  episode,
  onContinue,
}) => (
  <div
    className={classnames(
      'episode-row',
      episode.status === EPISODE_STATUS.DONE && 'done',
      episode.status === EPISODE_STATUS.NEXT_UP && 'active',
      episode.status === EPISODE_STATUS.LOCKED && 'locked',
    )}
  >
    <div className="thumbnail">{index}</div>
    <div className="content-wrapper">
      <div className="content">
        <div className="text-md font-bold truncate mb-1">
          {episode.name}
        </div>
        <div className="text-sm text-gray truncate">
          {episode.duration}
        </div>
      </div>
      {episode.status === EPISODE_STATUS.DONE && (
        <CheckIcon size={24} color="primary" />
      )}
      {episode.status === EPISODE_STATUS.LOCKED && (
        <LockIcon size={24} color="primary" />
      )}
      {episode.status === EPISODE_STATUS.NEXT_UP && (
        <Button className="text-sm" onClick={onContinue}>
          Continue
        </Button>
      )}
    </div>
  </div>
);
