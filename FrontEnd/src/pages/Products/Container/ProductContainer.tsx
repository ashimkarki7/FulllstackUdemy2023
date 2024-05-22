import ProductComponent from '../ProductComponent.tsx';
import * as homepageSlice from '../slice.ts';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHook.ts';

const ProductContainer = (props: any) => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(state => state?.productData?.payload);
  const productLoading = useAppSelector(state => state?.productData?.loading);

  props = { ...props, products, productLoading };
  const getProducts = () => {
    return dispatch(homepageSlice.getProducts());
  };

  return <ProductComponent getProducts={getProducts} {...props} />;
};
export default ProductContainer;
