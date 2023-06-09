import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as ROUTES from './constants/Routes'
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'))
const Layout = lazy(() => import('./components/Layout'))
const ChatRoom = lazy(() => import('./pages/ChatRoom'))
const Login = lazy(() => import('./pages/Login'))

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />} >
            <Route path={ROUTES.MAIN} element={<Layout />} >
              <Route index element={<ChatRoom />} />
            </Route>
          </Route>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
