import { formatDate } from '@/utils/dateFormat'
import { formatMilliseconds } from '@/utils/timeFormat'
import { describe, expect, it } from 'vitest'

describe('Date Utils', () => {
  it('format date correctly', async () => {
    const date = '2024-03-22'

    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('21/3/2024')
  })
})

describe('Time Utils', () => {
  it('format time on miliseconds correctly', async () => {
    const time = 164833

    const formattedDate = formatMilliseconds(time)

    expect(formattedDate).toBe('02:44')
  })
})
