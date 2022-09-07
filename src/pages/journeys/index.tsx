import { FullLayout } from '../../layouts/FullLayout';
import { Journey } from '../../graphql/entities';
import { JOURNEY_TYPE, MODULE } from '../../types/enums';
import { JourneyRow } from '../../components';

const journeys: Journey[] = [
  {
    id: 1,
    name: 'Focus',
    description: 'Get some sleep and sweet dreams of your life',
    type: JOURNEY_TYPE.FOCUS,
    progress: 16,
    isComingSoon: false,
    episodes: [],
  },
  {
    id: 2,
    name: 'Goodnight',
    description: 'Get some sleep and sweet dreams of your life',
    type: JOURNEY_TYPE.SLEEP,
    progress: 0,
    isComingSoon: false,
    episodes: [],
  },
  {
    id: 3,
    name: 'Happiness',
    description: 'Get some sleep and sweet dreams of your life',
    type: JOURNEY_TYPE.HAPPY,
    progress: 82,
    isComingSoon: false,
    episodes: [],
  },
  {
    id: 4,
    name: 'Personalised breathing',
    description: 'Get some sleep and sweet dreams of your life',
    type: JOURNEY_TYPE.PERSONAL,
    progress: 0,
    isComingSoon: false,
    episodes: [],
  },
  {
    id: 5,
    name: 'Energy',
    description: 'Get some sleep and sweet dreams of your life',
    type: JOURNEY_TYPE.SLEEP,
    progress: 0,
    isComingSoon: true,
    episodes: [],
  },
  {
    id: 6,
    name: 'Energy',
    description: 'Get some sleep and sweet dreams of your life',
    type: JOURNEY_TYPE.SLEEP,
    progress: 0,
    isComingSoon: true,
    episodes: [],
  },
];

const Journeys = () => (
  <FullLayout module={MODULE.JOURNEY}>
    <h1 className="text-2xl ml-2 mt-6 mb-5">Your journeys</h1>
    {journeys.map((journey) => (
      <JourneyRow key={journey.id} journey={journey} />
    ))}
  </FullLayout>
);

export default Journeys;
