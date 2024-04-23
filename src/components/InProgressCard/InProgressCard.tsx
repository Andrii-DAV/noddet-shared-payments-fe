import { useLocation, useMatches } from 'react-router-dom';
import { Match } from '../../types/router.ts';

export const InProgressCard = () => {
  const matches = useMatches();
  const location = useLocation();
  const match = matches.find(
    ({ pathname, handle }) => pathname === location.pathname && handle
  ) as Match | undefined;

  return (
    <div className="mt-4 rounded-lg bg-orange-500 bg-opacity-75 p-6 shadow-xl shadow-gray-200 text-gray-50">
      <h5 className="mb-2 text-xl font-bold leading-tight">
        This is a pet React projcet.
      </h5>
      <p className="mb-4 text-base font-medium">
        {match?.handle?.label || ''} page is in progress.
      </p>
    </div>
  );
};
