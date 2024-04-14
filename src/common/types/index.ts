export type AlbumTypes = {
  id: string
  name: string
  album_type: string
  artists: Array<{
    id: string
    name: string
  }>
  images: Array<{
    height: number
    url: string
    width: number
  }>
  release_date: string
  tracks: {
    items: TrackItemsTypes[]
  }
}

export type TrackItemsTypes = {
  id: string
  name: string
  duration_ms: number
  artists: Array<{
    id: string
    name: string
  }>
}

export type TrackTypes = {
  id: string
  name: string
  duration_ms: number
  popularity: number
  explicit: boolean
  preview_url: string
  artists: Array<{ name: string }>
  album: {
    id: string
    name: string
    release_date: string
    images: Array<{
      height: number
      url: string
      width: number
    }>
  }
}
