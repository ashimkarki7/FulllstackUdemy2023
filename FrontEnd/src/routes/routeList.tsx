import HomePageContainer from '../pages/HomePage/Container/HomePageContainer.tsx';
import LoginContainer from '../pages/Login/container/LoginContainer';
import {RouteItem} from "./routes.ts";
import {ProtectedRoute} from "../hooks/ProtectedRoute";




const routes: RouteItem[] = [
    { path: '/Login', element: <LoginContainer /> },
    { path: '/', element: <ProtectedRoute> <HomePageContainer type={'/'} />  </ProtectedRoute>},
    { path: '/Measurement', element: <ProtectedRoute> <HomePageContainer type={'Measurement'} /></ProtectedRoute> },
    { path: '/CAD Overlay', element:<ProtectedRoute> <HomePageContainer   type={'CAD'}/></ProtectedRoute> },
    // Add more routes as needed
];

export default routes;