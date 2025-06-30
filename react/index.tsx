import React from 'react';
import { createRoot } from 'react-dom/client';
import ButtonDemo from './ButtonDemo';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<ButtonDemo />);
}
