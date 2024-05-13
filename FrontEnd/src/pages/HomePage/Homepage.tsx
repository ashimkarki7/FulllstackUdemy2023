import React, { Fragment, useEffect } from 'react';
import CustomMapComponent from '../../component/Map/map.tsx';
import { HomepageProps } from './types/homePage.ts';

const HomepageComponent: React.FC<HomepageProps> = (props: any) => {
  const { getLocations, locations, locationLoading } = props;

  useEffect(() => {
    getLocations();
  }, []);

  return <Fragment>{locationLoading === false && <CustomMapComponent locations={locations} />}</Fragment>;
};

export default HomepageComponent;
