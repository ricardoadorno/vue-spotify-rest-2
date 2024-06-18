import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import SearchBar from '@/components/molecules/SearchBar.vue'

describe('Search Bar', () => {
  it('renders search bar', async () => {
    const submit = vi.fn()

    const { emitted } = render(SearchBar, {
      props: {
        placeholder: 'Search'
      }
    })

    console.log('log', emitted('submit'))

    expect(emitted().customEvent.length).toBe(1)

    const input = screen.getByTestId('search-bar') as HTMLInputElement

    await fireEvent.update(input, 'Bob')

    expect(input.value).toBe('Bob')
  })
})
