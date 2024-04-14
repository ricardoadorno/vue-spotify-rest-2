import type { TokenContent } from '@/common/types/TokenContent'
import axios from 'axios'

async function getAcessToken() {
  const fetchParams = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:
      'grant_type=client_credentials&client_id=' +
      import.meta.env.VITE_SPOTIFY_API_KEY +
      '&client_secret=' +
      import.meta.env.VITE_CLIENT_SECRET
  }

  try {
    const { data } = await axios.post<TokenContent>(
      'https://accounts.spotify.com/api/token',
      fetchParams.body,
      {
        headers: fetchParams.headers
      }
    )

    return { ...data, created_at: new Date().getTime() }
  } catch (error) {
    throw console.error(error)
  }
}

export default {
  getAcessToken
}
