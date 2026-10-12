/**
 * Everything you'll want to change before going live lives here.
 */
export const site = {
  name: 'Hunt',
  url: 'https://your-domain.com', // TODO: your live domain (used for social previews)
  description:
    'Hunt shows you good bars, cafés and hidden spots near you. Take a photo when you visit, earn points, and swap them for free food and drinks.',

  // TODO: replace with your real store links
  appStoreUrl: '#',
  playStoreUrl: '#',

  // TODO: your contact email
  email: 'hello@example.com',

  // TODO: your legal pages
  privacyUrl: '#',
  termsUrl: '#',
};

export const listPlaceHref = `mailto:${site.email}?subject=${encodeURIComponent('List my place on Hunt')}`;
