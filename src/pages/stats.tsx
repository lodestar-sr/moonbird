import { FullLayout } from '../layouts/FullLayout';
import { MODULE } from '../types/enums';

export default function Statistics() {
  return (
    <FullLayout module={MODULE.STATISTICS}>
      <h1 className="text-2xl ml-2 mt-6 mb-5">Stats</h1>
    </FullLayout>
  );
}
