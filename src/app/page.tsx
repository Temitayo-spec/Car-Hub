'use client';
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components';
import { fetchCars } from '../../utils/fetch';
import { fuels, yearsOfProduction } from '../../constants';
import { Key, useEffect, useState } from 'react';
import { CarProps } from '../../typing';
import Image from 'next/image';

const Home = () => {
  const [allCars, setAllCars] = useState([]) as any;
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  //filter states
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const allCars = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      });
      setAllCars(allCars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [manufacturer, model, fuel, year, limit]);

  return (
    <section>
      <Hero />
      <div className="mt012 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: CarProps, i: Key | null | undefined) => (
                <CarCard key={i} car={car} />
              ))}
            </div>

            {loading && (
              <div className="w-full flex-center mt-16">
                <Image
                  src="/svgs/loader.svg"
                  width={50}
                  height={50}
                  alt="loading"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit  > allCars?.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message as any}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
