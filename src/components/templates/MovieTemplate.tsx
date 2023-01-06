import React from 'react';

export const MovieTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='movie-layout'>{children}</div>
  );
};