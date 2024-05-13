import HomepageComponent from '../Homepage.tsx';
import * as homepageSlice from '../slice.ts';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHook.ts';

const HomePageContainer = (props: any) => {
  const dispatch = useAppDispatch();

  const locations = useAppSelector(state => state?.locationData?.payload);
  const locationLoading = useAppSelector(state => state?.locationData?.loading);

  props = { ...props, locations, locationLoading };
  const getLocations = () => {
    return dispatch(homepageSlice.getLocations());
  };

  return <HomepageComponent getLocations={getLocations} {...props} />;
};
export default HomePageContainer;
