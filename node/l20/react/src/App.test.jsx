import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import axios from 'axios'
import { vi } from 'vitest'

// Мокаємо axios
vi.mock('axios')

describe('App component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading and then renders users', async () => {
    axios.get.mockResolvedValue({
      data: [{ id: '1', name: 'Alex' }, { id: '2', name: 'Anton' }]
    })

    render(<App />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Alex')).toBeInTheDocument()
      expect(screen.getByText('Anton')).toBeInTheDocument()
    })
  })

  it('shows fetchError when axios.get fails', async () => {
    axios.get.mockRejectedValue(new Error('Fetch failed'))

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/fetchError/i)).toBeInTheDocument()
    })
  })

  it('adds user successfully when clicking button', async () => {
    axios.get.mockResolvedValue({ data: [] })
    axios.post.mockResolvedValue({ data: { id: '3', name: 'New User' } })

    render(<App />)

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    })

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /додати користувача/i })

    await userEvent.type(input, 'New User')
    await userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('New User')).toBeInTheDocument()
    })
  })

  it('shows postError if post request fails', async () => {
    axios.get.mockResolvedValue({ data: [] })
    axios.post.mockRejectedValue(new Error('Post failed'))

    render(<App />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /додати користувача/i })

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    })

    await userEvent.type(input, 'Fail User')
    await userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText(/postError/i)).toBeInTheDocument()
    })
  })
})