import { FC } from 'react';
import { useRouter } from 'next/router';
import { Footer } from './Footer';
import { ChevronLeftIcon } from '../../icons';
import { MODULE } from '../../types/enums';

export interface IFullLayoutProps {
  title?: string;
  module: MODULE;
}

export const FullLayout: FC<IFullLayoutProps> = ({
  title,
  module,
  children,
}) => {
  const router = useRouter();

  const onBack = () => {
    router.back();
  };

  return (
    <div className="full-layout">
      {title && (
        <div className="header d-flex items-center text-primary font-bold px-4 pt-5 pb-3">
          <ChevronLeftIcon
            className="cursor-pointer"
            size={28}
            onClick={onBack}
          />
          <div className="flex-grow-1 text-xl text-center pr-3">
            {title}
          </div>
        </div>
      )}
      <div className="layout-content">{children}</div>
      <Footer module={module} />
    </div>
  );
};
