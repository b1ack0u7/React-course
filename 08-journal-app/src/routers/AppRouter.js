import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/auth/*' element={<AuthRouter/>}/>
          <Route path='/app/*' element={<JournalScreen/>}/>

          <Route path='/' element={<Navigate replace to='/auth'/>}/>
        </Routes>
      </BrowserRouter>
    )
}
