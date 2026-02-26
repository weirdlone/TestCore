// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TestCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TestCore/i);
    expect(titleElement).toBeInTheDocument();
});
