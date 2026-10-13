import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from '@/components/sections/Footer';
import { legal } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy — Hunt',
  description:
    'What Hunt collects, why, who we share it with, and the choices you have. Hunt does not sell your personal data.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'what-we-collect', title: 'What we collect' },
  { id: 'location', title: 'Location' },
  { id: 'photos-and-videos', title: 'Photos and videos' },
  { id: 'how-we-use', title: 'How we use your data' },
  { id: 'sharing', title: 'Who we share it with' },
  { id: 'businesses', title: 'For businesses' },
  { id: 'keeping-data', title: 'Keeping and protecting data' },
  { id: 'your-rights', title: 'Your rights and choices' },
  { id: 'children', title: 'Children' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact us' },
];

export default function PrivacyPolicy() {
  const mail = <a href={`mailto:${legal.email}`}>{legal.email}</a>;

  return (
    <>
      <header className="nav is-scrolled">
        <div className="wrap nav__inner">
          <Link href="/" className="wordmark" aria-label="Hunt home">
            hunt<i />
          </Link>
          <Link className="btn btn--sm" href="/">
            Back to Hunt
          </Link>
        </div>
      </header>

      <main className="legal">
        <div className="wrap legal__wrap">
          <div className="legal__head">
            <span className="label">Legal</span>
            <h1 className="title">Privacy Policy</h1>
            <p className="mono legal__date">Effective {legal.privacyUpdated}</p>
            <p className="lead">
              Hunt uses your location, the photos and videos you take, and your account details to confirm visits to
              local places and give you points and rewards. <strong>We do not sell your personal data.</strong> This
              policy explains what we collect, why, and the choices you have.
            </p>
          </div>

          <nav className="legal__toc soft" aria-label="On this page">
            <span className="label">On this page</span>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <Section n={1} id="who-we-are" title="Who we are">
            <p>
              Hunt is run by {legal.company}, a company registered in Sri Lanka at {legal.address}. In this policy,
              &ldquo;Hunt&rdquo;, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean that company.
            </p>
            <p>
              This policy covers the Hunt app for explorers, the Hunt Business app and our website. We handle personal
              data under Sri Lanka&rsquo;s Personal Data Protection Act, No. 9 of 2022.
            </p>
            <p>
              For any privacy question or request, including anything for our data protection contact, email {mail}{' '}
              or write to the address above.
            </p>
          </Section>

          <Section n={2} id="what-we-collect" title="What we collect">
            <p>We collect only what we need to run Hunt. Some of it you give us, and some is created when you use the app.</p>
            <Table
              head={['Data', 'What it includes', 'Why we need it']}
              rows={[
                [
                  'Account details',
                  'Name, email, phone number, profile photo, sign-in ID if you use Google sign-in',
                  'Create your account, sign you in, contact you about your account',
                ],
                [
                  'Precise location',
                  'GPS position while you check in or browse the map',
                  'Show places near you and confirm you are at a place before a visit counts',
                ],
                [
                  'Photos and videos',
                  'What you capture in Hunt, with the time and place it was taken',
                  'Verify your visit, award points, and show your posts if you choose to share them',
                ],
                [
                  'Points and rewards',
                  'Points earned, visits, offers saved, rewards redeemed',
                  'Keep your wallet balance and history correct',
                ],
                ['Activity in the app', 'Places viewed, searches, follows, likes', 'Improve suggestions and fix problems'],
                [
                  'Device data',
                  'Device model, operating system, app version, language, crash logs, IP address',
                  'Keep the app working, secure and free of fraud',
                ],
                ['Messages to us', 'Support emails and reports', 'Answer you and resolve issues'],
              ]}
            />
            <p>We do not collect your contacts, call logs, SMS, health data or financial data beyond payout details.</p>
          </Section>

          <Section n={3} id="location" title="Location">
            <p>
              Hunt needs your precise location to confirm you are really at a place. Each place has a check-in circle,
              for example 100 m around a café. A photo or video earns points only when it is taken inside that circle.
            </p>
            <ul>
              <li>
                <strong>While using the app:</strong> we read your location when you open the map, look for places
                nearby or capture a visit.
              </li>
              <li>
                <strong>In the background:</strong> only if you turn on nearby alerts. We then check your location now
                and then to tell you about offers close by. You can turn this off at any time.
              </li>
              <li>
                <strong>What we store:</strong> the location attached to each visit, so we can show your history and
                check for fraud. We do not keep a continuous track of where you go.
              </li>
            </ul>
            <p>
              You can turn location off in your phone&rsquo;s settings. Hunt will still work for browsing, but visits
              cannot be confirmed and will not earn points.
            </p>
          </Section>

          <Section n={4} id="photos-and-videos" title="Photos and videos">
            <p>
              Hunt uses your camera only when you open it to capture a visit. We do not access the rest of your gallery
              unless you choose a file to upload.
            </p>
            <ul>
              <li>
                <strong>The business sees your visit.</strong> The place you visited can see the photo or video, your
                display name and the time, so it can confirm your visit and reward you.
              </li>
              <li>
                <strong>Posting is your choice.</strong> If you share a capture to the feed, other Hunt users can see
                it, along with your display name and the place.
              </li>
              <li>
                <strong>Location data in files.</strong> We remove precise location data from shared photos and videos.
                Only the place name is shown.
              </li>
              <li>
                <strong>Please be respectful.</strong> Avoid capturing people who have not agreed to it, and don&rsquo;t
                post anything illegal or harmful. We may remove content that breaks our Terms.
              </li>
              <li>
                <strong>Deleting.</strong> You can delete a post at any time. Points already earned from that visit may
                be reversed.
              </li>
            </ul>
          </Section>

          <Section n={5} id="how-we-use" title="How we use your data">
            <p>We use your data for these purposes, and for each one we rely on a lawful reason allowed under Sri Lankan law.</p>
            <Table
              head={['Purpose', 'Lawful reason']}
              rows={[
                ['Run your account, confirm visits, award and redeem points', 'Needed to provide the service you signed up for'],
                ['Use your location and camera', 'Your consent, given through your phone’s permission prompts'],
                ['Send offers and nearby alerts', 'Your consent, which you can withdraw in Settings'],
                ['Detect fake check-ins, fraud and abuse', 'Our legitimate interest in keeping rewards fair'],
                [
                  'Improve the app and fix crashes',
                  'Our legitimate interest, using data that is grouped or de-identified where possible',
                ],
                ['Keep records for tax, accounting or legal requests', 'Legal obligation'],
              ]}
            />
            <p>
              We do not use your data for automated decisions with legal effects on you. Our fraud checks may hold
              points for review. If that happens, a person reviews it and you can ask us to look again.
            </p>
            <p>
              We do not sell your personal data, and we do not show third-party advertising based on your personal data.
            </p>
          </Section>

          <Section n={6} id="sharing" title="Who we share it with">
            <p>We share data only in these cases:</p>
            <ul>
              <li>
                <strong>Businesses you visit:</strong> your display name, the visit, your capture and the reward you
                redeem. They do not get your email, phone number or exact location history.
              </li>
              <li>
                <strong>Other users:</strong> only what you post publicly, such as your display name, profile photo and
                shared captures.
              </li>
              <li>
                <strong>Service providers:</strong> companies that host our servers, store files, send notifications and
                emails, or show maps. These are Railway (servers and database), Cloudinary (photo and video storage),
                Expo and Google Firebase Cloud Messaging (push notifications), Google Maps (maps) and our email delivery
                provider. They act on our instructions and may not use your data for their own purposes.
              </li>
              <li>
                <strong>Legal reasons:</strong> when the law requires it, for example a valid request from a Sri Lankan
                court or authority, or to protect someone&rsquo;s safety.
              </li>
              <li>
                <strong>Business changes:</strong> if Hunt is merged or sold, your data may move to the new owner under
                this policy. We will tell you first.
              </li>
            </ul>
          </Section>

          <Section n={7} id="businesses" title="For businesses">
            <p>
              If you list a place on Hunt Business, we collect the owner&rsquo;s or staff member&rsquo;s name, email and
              phone number, plus the business name, address, map position, check-in radius, photos, offers and point
              rules.
            </p>
            <ul>
              <li>Business details and offers are public in the Hunt app.</li>
              <li>
                Guests&rsquo; visits and captures are shared with you only to confirm visits and run rewards. You may not
                use guest data for anything else, such as adding guests to marketing lists, without their separate
                consent.
              </li>
              <li>
                We show you visit counts and summary statistics. These are grouped, so individual guests cannot be
                identified from them.
              </li>
              <li>If you add staff accounts, you are responsible for giving them access only to what they need.</li>
            </ul>
          </Section>

          <Section n={8} id="keeping-data" title="Keeping and protecting data">
            <p>We keep data only as long as we need it.</p>
            <Table
              head={['Data', 'How long we keep it']}
              rows={[
                ['Account details', 'While your account is open, then deleted within 30 days of closing it'],
                [
                  'Visits, captures and points history',
                  'While your account is open; public posts are removed when you delete them or your account',
                ],
                ['Payout and transaction records', '7 years, as required for tax and accounting'],
                ['Device data and crash logs', 'Up to 12 months'],
                ['Fraud and abuse records', 'Up to 2 years after the event'],
              ]}
            />
            <p>
              <strong>Security.</strong> Data is encrypted in transit (HTTPS) and at rest. Staff access is limited and
              logged, and we review our security regularly. No system is completely secure, so if a breach affects you,
              we will tell you and the authorities as the law requires.
            </p>
            <p>
              <strong>Storage outside Sri Lanka.</strong> Our servers and file storage are run by providers located
              outside Sri Lanka, such as Railway, Cloudinary and Google. When data leaves Sri Lanka, we use providers
              with protections that meet the standard required by Sri Lankan law.
            </p>
          </Section>

          <Section n={9} id="your-rights" title="Your rights and choices">
            <p>Under Sri Lanka&rsquo;s Personal Data Protection Act you can:</p>
            <ul>
              <li>See the personal data we hold about you and get a copy.</li>
              <li>Correct data that is wrong or out of date.</li>
              <li>Delete your data, unless we must keep it by law.</li>
              <li>Withdraw consent for location, camera or notifications at any time.</li>
              <li>Object to uses based on our legitimate interest.</li>
              <li>Complain to the Data Protection Authority of Sri Lanka if you are not happy with our response.</li>
            </ul>
            <p>
              <strong>How to do it:</strong>
            </p>
            <ol>
              <li>
                Most settings are in the app under Profile → Settings: edit your profile, turn off notifications, or
                download your data.
              </li>
              <li>
                For anything else, email {mail}. We reply within 21 working days and may ask you to confirm your identity
                first.
              </li>
            </ol>
            <p>You can also turn off location or camera access in your phone&rsquo;s settings.</p>
          </Section>

          <Section n={10} id="children" title="Children">
            <p>
              Hunt is for people aged 18 and over. We do not knowingly collect data from anyone under 18. If you think a
              child has signed up, email us at {mail} and we will delete the account.
            </p>
          </Section>

          <Section n={11} id="changes" title="Changes to this policy">
            <p>
              We may update this policy as Hunt grows. The date at the top shows the latest version. For important
              changes, we will notify you in the app or by email before they take effect.
            </p>
          </Section>

          <Section n={12} id="contact" title="Contact us">
            <address className="legal__contact card">
              <strong>{legal.company}</strong>
              <span>{legal.address}</span>
              <span>Email: {mail}</span>
            </address>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Section({ n, id, title, children }: { n: number; id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="legal__section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="legal__h2">
        <span className="legal__num">{String(n).padStart(2, '0')}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="legal__table" role="region" aria-label={head.join(', ')} tabIndex={0}>
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([first, ...rest]) => (
            <tr key={first}>
              <th scope="row">{first}</th>
              {rest.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
