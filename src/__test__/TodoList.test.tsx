// __tests__/TodoList.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TodoList from '../components/Tareas/TodoList';

jest.mock('../components/Tareas/tareasService');

describe('TodoList Component', () => {
  test('renders TodoList correctly', async () => {
    // Mocked data for testing
    const mockedTareas = [
      { _id: '1', description: 'Task 1', createdAt: new Date(), updatedAt: new Date() },
      { _id: '2', description: 'Task 2', createdAt: new Date(), updatedAt: new Date() },
    ];

    // Set the mocked implementation for getTareas
    require('../components/Tareas/tareasService').getTareas.mockResolvedValueOnce({ data: mockedTareas });

    // Render the TodoList component
    render(<TodoList />);

    // Wait for the data to be loaded
    await waitFor(() => {
      // Check that the tasks are rendered on the screen
      expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    });
  });

  // You can add more test cases as needed
});
