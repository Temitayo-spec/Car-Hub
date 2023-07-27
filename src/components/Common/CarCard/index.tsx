'use client';
import { useState } from 'react';
import { CarProps } from '../../../../typing';
import { calculateCarRent } from '../../../../utils/calculateCarRent';
import Image from 'next/image';
import { CustomButton, CarDetails } from '../../';
import { generateCarImageUrl } from '../../../../utils/fetch';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, fuel_type, transmission, make, model, year, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={generateCarImageUrl(car)} fill alt="cars" priority className='object-contain' />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray group-hover:invisible">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/svgs/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/svgs/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/svgs/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/svgs/right-arrow.svg"
            handleClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        car={car}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
