import React from 'react';
import TestPalette from './Pages/Test_RemoveFromFinalBuild/TestPalette';

// Components
import TestTypography from './Pages/Test_RemoveFromFinalBuild/TestTypography';

// Assets

export default function App() {
  return (
    <main class='flex flex-col gap-16'>
      <TestTypography />
      <TestPalette />
    </main>
  );
}
