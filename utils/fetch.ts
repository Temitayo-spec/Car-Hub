import axios from 'axios';
import { CarProps, FilterProps } from '../typing';

export async function fetchCars(filters: FilterProps) {
  const {manufacturer, model, year, limit, fuel} = filters;
  const headers = {
    'X-RapidAPI-Key': '7fdc768057msh8deed64057b0c75p192d45jsn80a690258ef9',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await axios.get(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,
    {
      headers: headers,
      params: {
        manufacturer: manufacturer,
        model: model,
        year: year,
        limit: limit,
        fuel: fuel,
      }
    }
  );

  const result = await response.data;
  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomtype', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
