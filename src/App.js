import { Suspense, lazy } from "react";
import {
  HashRouter, Route, Routes
} from "react-router-dom";
import './App.scss';

const Home = lazy(() => import('./pages/Home/Home'));
const AddMeeting = lazy(() => import('./pages/AddMeeting/AddMeeting'));
const SelectRooms = lazy(() => import('./pages/SelectRooms/SelectRooms'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <>
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-meeting" element={<AddMeeting />} />
          <Route path="/select-rooms" element={<SelectRooms />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
    </>
  );
}

export default App;
