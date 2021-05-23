import GhostContentAPI, {PostsOrPages, SettingsResponse} from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '1b7ad94b7a014bc820c42056e7',
  version: 'v3'
});

export async function getPosts(): Promise<PostsOrPages> {
  return await api.posts.browse({ limit: 'all' });
}

export async function getSinglePost(slug: string) {
  return await api.posts.read({ slug });
}

export async function getSettings(): Promise<SettingsResponse> {
  return await api.settings.browse({ limit: 'all' });
}
