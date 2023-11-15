import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

test('App ', async () => {
  render(<App />);

  await waitFor(() => {
    screen.getByText('기본카레(9,000원)');
  });
});
