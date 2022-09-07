import { FC } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { ProgressBar } from '../../common/ProgressBar';
import {
  BlobIcon,
  ChevronRightIcon,
  FocusIcon,
  HappyIcon,
  PersonalIcon,
  SleepIcon,
} from '../../../icons';
import { Journey } from '../../../graphql/entities';
import { JOURNEY_TYPE } from '../../../types/enums';

export interface IJourneyRowProps {
  journey: Journey;
}

const journeyTypes = {
  [JOURNEY_TYPE.FOCUS]: { color: 'primary', icon: FocusIcon },
  [JOURNEY_TYPE.SLEEP]: { color: 'success', icon: SleepIcon },
  [JOURNEY_TYPE.HAPPY]: { color: 'warning', icon: HappyIcon },
  [JOURNEY_TYPE.PERSONAL]: { color: 'primary', icon: PersonalIcon },
};

export const JourneyRow: FC<IJourneyRowProps> = ({ journey }) => {
  const router = useRouter();
  const { color, icon: JourneyIcon } = journeyTypes[journey.type];

  const gotoDetailPage = () => {
    if (!journey.isComingSoon) {
      router.push(`/journeys/${journey.id}`);
    }
  };

  return (
    <div className={classnames('journey-row pr-1')}>
      <div
        className={classnames(
          'thumbnail',
          journey.isComingSoon && 'opacity-20',
        )}
      >
        <BlobIcon size={66} color={color} />
        <JourneyIcon className="icon" size={20} color="white" />
      </div>
      <div
        className={classnames(
          'content-wrapper',
          !journey.progress && 'pt-3 pb-1',
        )}
      >
        <div className="content">
          <div className="d-flex items-center text-md font-bold mb-1">
            <span
              className={journey.isComingSoon ? 'opacity-40' : ''}
            >
              {journey.name}
            </span>
            {journey.isComingSoon && (
              <span className="badge ml-2">Coming soon</span>
            )}
          </div>
          <div
            className={classnames(
              'text-sm text-gray truncate mb-3',
              journey.isComingSoon && 'opacity-30',
            )}
          >
            {journey.description}
          </div>
          {!!journey.progress && (
            <ProgressBar
              className="mb-3"
              theme={color}
              percent={journey.progress}
            />
          )}
        </div>
        <ChevronRightIcon
          className={classnames(
            'p-2 mb-2',
            !journey.isComingSoon && 'cursor-pointer',
          )}
          size={16}
          color="light"
          onClick={gotoDetailPage}
        />
      </div>
    </div>
  );
};
