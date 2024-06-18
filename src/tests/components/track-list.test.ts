import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import TrackList from '@/components/molecules/TrackList.vue'

describe('Track List', () => {
  it('show empty message, only when the list is empty', async () => {
    const { rerender } = render(TrackList, {
      props: {
        tracks: {
          items: []
        }
      }
    })

    const component = screen.getByTestId('track-list-empty-message')

    expect(component.innerHTML).toBe('No tracks found')

    rerender({
      props: {
        tracks: {
          items: [
            {
              id: '1',
              name: 'Song 1',
              duration_ms: 1000
            }
          ]
        }
      }
    })

    const componentAfterRerender = screen.getByTestId('track-list-empty-message')

    expect(componentAfterRerender.innerText).toBeFalsy()
  })
})
