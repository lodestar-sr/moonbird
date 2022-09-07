import { FullLayout } from '../layouts/FullLayout';
import { MODULE } from '../types/enums';

export default function Home() {
  return (
    <FullLayout module={MODULE.HOME}>
      <h1 className="text-2xl ml-2 mt-6 mb-5">Home</h1>
    </FullLayout>
  );
}
