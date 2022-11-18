import ValidateContainer from 'containers/ValidateContainer';
import React, { FunctionComponent } from 'react';
import { Route, Routes, unstable_HistoryRouter as HistoryRoute } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import history from 'helpers/history';

const App: FunctionComponent = () => {
  return (
    <>
      <HistoryRoute history={history}>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/validate" element={<ValidateContainer />} />
        </Routes>
      </HistoryRoute>
    </>
  );
}

export default App;
