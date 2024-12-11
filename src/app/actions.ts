'use server';

import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export async function getRandomImage(query: string) {
  const images = await unsplash.search.getPhotos({
    query: query,
    page: 1,
    perPage: 10,
    orientation: 'landscape',
  });

  return images.response?.results[Math.floor(Math.random() * 10)];
}
