import React from 'react';
import './index.scss'
import MovieList from '../MovieList/index';
import TagList from '../TagList/index';

export default function Welcome () {
  return (
    <>
    <div style={{padding: '20px 0'}}>
      <TagList/>
    </div>
    <div className="site-layout-background">
      <MovieList/>
    </div>
  </>
  )
}
