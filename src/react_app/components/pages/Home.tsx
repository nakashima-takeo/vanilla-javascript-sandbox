import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Home: FC = memo(() => {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  )
})
