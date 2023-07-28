'use client';

import { ShowMoreProps } from '../../../../typing';
import { useRouter } from 'next/navigation';
import CustomButton from '../CustomButton';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set('limit', `${(pageNumber + 1) * 10}`);

    const newParams = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newParams);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
