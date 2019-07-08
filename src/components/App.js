import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';

import './app.scss'

const App = ({ route }) => {
  return (
    <div className={`app-wrapper`}>
      <Header />
      <main className={`content-wrapper`}>
        { renderRoutes(route.routes) }
      </main>
      <Footer />
    </div>
  )
}

export default {
  component: App
}
