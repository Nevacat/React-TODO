import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Note from '../pages/Note';
import NewNote from '../pages/NewNote';
import Layout from '../components/common/Layout';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="note" element={<Note />} />
        <Route path="newNote" element={<NewNote />} />
      </Route>
    </Routes>
  );
}

export default Router;
