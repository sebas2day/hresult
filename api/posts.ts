import GhostContentAPI, {PostsOrPages, SettingsResponse} from '@tryghost/content-api';

const apiKey = process.env.GHOST_KEY;
if (!apiKey) {
  throw new Error("No Ghost API key");
}

const api = new GhostContentAPI({
  url: process.env.GHOST_URL || 'http://localhost:2368',
  key: apiKey,
  version: 'v3'
});

export async function getPosts(): Promise<PostsOrPages> {
  return await api.posts.browse({ limit: 'all' });
}

export async function getSinglePost(slug: string) {
  return await api.posts.read({ slug });
}

export async function getPage(slug: string) {
  return await api.pages.read({ slug })
}

export async function getSettings(): Promise<SettingsResponse> {
  return await api.settings.browse({ limit: 'all' });
}
