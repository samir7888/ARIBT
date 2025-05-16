'use server';

const url = process.env.API_URL;

export async function serverFetch<T>(path: string): Promise<T | null> {
  console.log('path', path)
  try {
    if (!url) throw new Error("API_URL is not defined in environment variables.");
    const response = await fetch(`${url}${path}`, {
      // Optional: you can set method, headers, cache, etc.
      method: 'GET',
      cache: 'no-store', // prevents stale data (optional, adjust if needed)
    });

    if (!response.ok) {
      console.error(`Fetch failed: ${response.status} ${response.statusText}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Server fetch error:', error);
    return null;
  }
}
