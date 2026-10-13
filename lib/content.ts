/** Page copy, kept in one place so it's easy to edit. */

export const steps = [
  {
    num: '01',
    tag: 'explore',
    title: 'Find a place',
    body: 'Open the map and see cafés, restaurants, shops and stays near you. Each one tells you what a visit is worth.',
  },
  {
    num: '02',
    tag: 'capture',
    title: 'Snap your visit',
    body: "When you're there, take a photo or a short video in the app. It only counts if you're really at the place.",
  },
  {
    num: '03',
    tag: 'earn',
    title: 'Get a treat',
    body: 'Once the place OKs your shot, the points land in your wallet. Swap them for a perk and show the code at the counter.',
  },
] as const;

export type IconName = 'compass' | 'camera' | 'wallet' | 'megaphone' | 'pin' | 'clock';

export const features: { icon: IconName; tag: string; title: string; body: string }[] = [
  { icon: 'compass', tag: 'explore', title: 'A map of good places', body: "See what's close, search by name or street, and filter by food, cafés, shops and more." },
  { icon: 'camera', tag: 'capture', title: 'Photos and videos', body: 'Every shot you take at a place earns points. Videos earn more, because they take more effort.' },
  { icon: 'wallet', tag: 'earn', title: 'A wallet per place', body: 'Your points are kept by place, so you always know how close you are to your next free thing.' },
  { icon: 'megaphone', tag: 'tonight', title: 'Offers near you', body: 'Kottu nights, new dishes and weekend deals, posted by the places themselves.' },
  { icon: 'pin', tag: 'heads up', title: 'Arrival nudges', body: 'Walk into a Hunt place and get a little reminder to snap it. You can turn this off any time.' },
  { icon: 'clock', tag: 'your diary', title: 'Your own log', body: "Every place you've been, every shot you sent, and what each one earned." },
];

export const walletPoints = [
  'See how many points you need for each perk',
  'Get a one-time code when you swap',
  "Show it at the counter, and that's it",
];

export const businessPoints = [
  'You choose how many points a photo or video is worth',
  'You check every shot before any points go out',
  'You set the perks, like a free drink or a meal',
  'Post offers that show up for people nearby',
  'Check guest codes at the counter in seconds',
];

export const polaroids = [
  { src: '/images/galle-fort.svg', alt: "A guest's photo of the Galle Fort lighthouse", caption: 'Galle Fort', tilt: -3, drop: 0, tape: 'ash', tapeTilt: -6 },
  { src: '/images/kottu.svg', alt: "A guest's photo of a kottu stall at night", caption: 'kottu night', tilt: 0, drop: 24, tape: 'orange', tapeTilt: 4 },
  { src: '/images/jaffna-kool.svg', alt: "A guest's photo of a Jaffna cool house", caption: 'Nallur kool!', tilt: 3, drop: 0, tape: 'ash', tapeTilt: -3 },
] as const;

export const faqs = [
  { q: 'Is Hunt free?', a: 'Yes. Hunt is free to download and free to use for everyone who explores.' },
  {
    q: 'How do I earn points?',
    a: "Go to a place on Hunt, open the app and take a photo or video there. The place checks it, and if it's a real shot from their place, the points go into your wallet.",
  },
  {
    q: 'Why do I need to turn on location?',
    a: "So Hunt can tell you're really at the place when you send a shot. Arrival nudges also use it, but you can turn those off in your profile.",
  },
  {
    q: 'What if my photo is rejected?',
    a: "Places say no to shots that aren't from their place. You'll see a short reason in your log, and you can always try again on your next visit.",
  },
  {
    q: 'Can I use my points anywhere?',
    a: 'Points belong to the place where you earned them. That way each place can offer perks it actually has, like its own drinks or dishes.',
  },
  {
    q: 'How do I add my business?',
    a: 'Tap "List your place" above. You\'ll add a photo, your address, how far the check-in circle reaches, and what a visit is worth.',
  },
];
