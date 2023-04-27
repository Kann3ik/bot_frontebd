import React, { useEffect } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import {Route, Routes} from 'react-router-dom'
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
    
  return (
    <div className="mt-0 ml-auto mr-auto p-[25px] pt-0 max-w-[500px]">
      <Header />
      <Routes>
        <Route index element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
