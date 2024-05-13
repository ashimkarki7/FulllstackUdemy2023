import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import routes from './routeList.tsx';
import { Sidebar } from '../component/sidebar/sideBar.tsx';
import { styled, createGlobalStyle } from 'styled-components';
import { LayerIcon, ScaleIcon, MapIcon } from '../assets/svgs';
import CustomDiv from '../component/Div/div.tsx';
import { IconName } from '../model/enum.ts';
import {AuthProvider} from "../hooks/useAuth";
import {ProtectedRoute} from "../hooks/ProtectedRoute";

const AppRoutes: React.FC = () => {
  const GlobalStyle = createGlobalStyle`
      body {
        padding: 0;
        margin: 0;

      }
    `;

  const Container = styled.div`
    display: flex;
  `;

  const getSvgIcon = (iconName: string) => {
    switch (iconName) {
      case IconName.CADOverlay:
        return <LayerIcon />;
      case IconName.Measurement:
        return <ScaleIcon />;
      case IconName.Map:
        return <MapIcon />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<div className="loader-container">Error! Please refresh the page</div>}>
      <GlobalStyle />
      <AuthProvider>
        <Container>
          <ProtectedRoute>
            <Sidebar>
              {routes?.filter((routesData) => routesData?.path  !== '/Login')?.map((routeItems, index) => (
                  <Link key={index} to={`${routeItems?.path}`}>
                    {getSvgIcon(routeItems.path)}
                  </Link>
              ))}
            </Sidebar>
          </ProtectedRoute>

          <CustomDiv
              {...{
                flexgrow: 1,
              }}
          >
            <Routes>
              {routes?.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
            </Routes>
          </CustomDiv>
        </Container>
      </AuthProvider>

    </Suspense>
  );
};

export default AppRoutes;
