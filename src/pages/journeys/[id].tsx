import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, EpisodeRow, ProgressBar } from '../../components';
import { FullLayout } from '../../layouts/FullLayout';
import { Journey } from '../../graphql/entities';
import {
  EPISODE_STATUS,
  JOURNEY_TYPE,
  MODULE,
} from '../../types/enums';

const Journeys = () => {
  const [journey, setJourney] = useState<Journey>();
  const router = useRouter();
  const id = Number(router.query.id);

  useEffect(() => {
    setJourney({
      id,
      name: 'Focus',
      description:
        'Get some sleep and sweet dreams. Get some sleep and sweet dreams. Get some sleep and sweet dreams. Get some sleep and sweet dreams.',
      type: JOURNEY_TYPE.FOCUS,
      progress: 16,
      isComingSoon: false,
      episodes: [
        {
          id: 1,
          name: 'Get started',
          duration: '12min',
          status: EPISODE_STATUS.DONE,
        },
        {
          id: 2,
          name: 'Be one',
          duration: '12min',
          status: EPISODE_STATUS.NEXT_UP,
        },
        {
          id: 3,
          name: 'Goodnight',
          duration: '12min',
          status: EPISODE_STATUS.LOCKED,
        },
        {
          id: 4,
          name: 'Goodnight',
          duration: '12min',
          status: EPISODE_STATUS.LOCKED,
        },
        {
          id: 5,
          name: 'Goodnight',
          duration: '12min',
          status: EPISODE_STATUS.LOCKED,
        },
      ],
    });
  }, [id]);

  const { totalCount, completedCount } = useMemo(() => {
    const count = journey?.episodes?.length || 0;
    const completed = (journey?.episodes || []).filter(
      (item) => item.status === EPISODE_STATUS.DONE,
    ).length;
    return {
      totalCount: count,
      completedCount: completed,
    };
  }, [journey]);

  const onContinue = () => {
    if (!journey || !journey.episodes) {
      return;
    }
    const index = journey.episodes.findIndex(
      (item) => item.status === EPISODE_STATUS.NEXT_UP,
    );
    const episodes = journey.episodes.map((item, i) => {
      if (i === index) {
        return { ...item, status: EPISODE_STATUS.DONE };
      }
      if (i === index + 1) {
        return { ...item, status: EPISODE_STATUS.NEXT_UP };
      }
      return item;
    });
    setJourney({
      ...journey,
      episodes,
    });
  };

  return (
    <FullLayout title="Episodes" module={MODULE.JOURNEY}>
      {journey && (
        <div className="px-2">
          <div className="d-flex items-center justify-between">
            <h1 className="text-2xl font-bold">{journey.name}</h1>
            {completedCount < totalCount && (
              <Button className="text-sm" onClick={onContinue}>
                Continue
              </Button>
            )}
          </div>
          <p className="text-sm text-gray mt-3">
            {journey.description}
          </p>

          <ProgressBar
            className="mt-4"
            theme="primary"
            percent={(completedCount / (totalCount || 1)) * 100}
          />

          <div className="mt-6">
            {(journey.episodes || []).map((episode, i) => (
              <EpisodeRow
                key={episode.id}
                index={i + 1}
                episode={episode}
                onContinue={onContinue}
              />
            ))}
          </div>
        </div>
      )}
    </FullLayout>
  );
};

export default Journeys;
