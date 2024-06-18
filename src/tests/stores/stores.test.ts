// stores/counter.spec.ts
import usePlayerStore from '@/stores/player'
import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('begins with no audio', () => {
    const player = usePlayerStore()

    expect(player.url).toBe('')
    expect(player.name).toBe('')
  })

  it('sets the audio', () => {
    const player = usePlayerStore()

    player.setAudio('url_name', 'url')

    expect(player.url).toBe('url_name')
    expect(player.name).toBe('url')
  })

  it('clears the audio', () => {
    const player = usePlayerStore()

    player.setAudio('url_name', 'url')

    player.closeAudio()

    expect(player.url).toBe('')
    expect(player.name).toBe('')
  })
})
