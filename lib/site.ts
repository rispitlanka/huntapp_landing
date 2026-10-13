/**
 * Everything you'll want to change before going live lives here.
 */
export const site = {
  name: 'Hunt',
  url: 'https://your-domain.com', // TODO: your live domain (used for social previews)
  description:
    'Hunt shows you good cafés, food spots, shops and hidden places near you. Take a photo when you visit, earn points, and swap them for free food, drinks and deals.',

  // TODO: replace with your real store links
  appStoreUrl: '#',
  playStoreUrl: '#',

  email: 'info@rispit.com',

  // The company behind Hunt (shown on the privacy page)
  company: {
    name: 'Rispit PVT Ltd',
    shortName: 'Rispit',
    address: '84/4, Postoffice Lane, Vannarpannai, Sri Lanka',
  },

  // Legal pages
  privacyUrl: '/privacy',
  termsUrl: '#', // TODO: add a terms page
};

export const listPlaceHref = `mailto:${site.email}?subject=${encodeURIComponent('List my place on Hunt')}`;
