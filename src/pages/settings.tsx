import { FullLayout } from '../layouts/FullLayout';
import { MODULE } from '../types/enums';

export default function Settings() {
  return (
    <FullLayout module={MODULE.SETTINGS}>
      <h1 className="text-2xl ml-2 mt-6 mb-5">Settings</h1>
    </FullLayout>
  );
}
