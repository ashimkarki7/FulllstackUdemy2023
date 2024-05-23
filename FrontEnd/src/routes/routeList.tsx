import HomePageContainer from '../pages/HomePage/Container/HomePageContainer.tsx';
import ProductContainer from '../pages/Products/Container/ProductContainer.tsx';
import LoginContainer from '../pages/Login/container/LoginContainer';
import {RouteItem} from "./routes.ts";
import {ProtectedRoute} from "../hooks/ProtectedRoute";




const routes: RouteItem[] = [
    { path: '/Login', element: <LoginContainer /> },
    { path: '/', element: <ProtectedRoute> <HomePageContainer type={'/'} />  </ProtectedRoute>},
    { path: '/Measurement', element: <ProtectedRoute> <HomePageContainer type={'Measurement'} /></ProtectedRoute> },
    { path: '/CAD Overlay', element:<ProtectedRoute> <ProductContainer   type={'CAD'}/></ProtectedRoute> },

    // Add more routes as needed
];

export default routes;