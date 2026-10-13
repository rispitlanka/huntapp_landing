import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/sections/Footer';
import { site } from '@/lib/site';

/** Change this whenever you edit the policy. */
const LAST_UPDATED = '13 October 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy — Hunt',
  description:
    'How Hunt collects, uses and protects your location, photos and account details, and the choices you have.',
  alternates: { canonical: '/privacy' },
};

const { company, email } = site;
const Mail = () => <a href={`mailto:${email}`}>{email}</a>;

type Section = { id: string; title: string; body: ReactNode };

const sections: Section[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          Hunt is run by {company.shortName}, a company registered in Sri Lanka at {company.address}. In this
          policy, &ldquo;Hunt&rdquo;, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean that company.
        </p>
        <p>
          This policy covers the Hunt app for explorers, the Hunt Business app and our website. We handle personal
          data under Sri Lanka&apos;s Personal Data Protection Act, No. 9 of 2022.
        </p>
        <p>
          For any privacy question or request, email <Mail /> or write to the address above. Our data protection
          officer is [name or role].
          {/* TODO: name your data protection officer */}
        </p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'What we collect',
    body: (
      <>
        <p>
          We collect only what we need to run Hunt. Some of it you give us, and some is created when you use the
          app.
        </p>
        <Table
          head={['Data', 'What it includes', 'Why we need it']}
          rows={[
            ['Account details', 'Name, email, phone number, profile photo, sign-in ID if you use Google sign-in', 'Create your account, sign you in, contact you about your account'],
            ['Precise location', 'GPS position while you check in or browse the map', 'Show places near you and confirm you are at a place before a visit counts'],
            ['Photos and videos', 'What you capture in Hunt, with the time and place it was taken', 'Verify your visit, award points, and show your posts if you choose to share them'],
            ['Points and rewards', 'Points earned, visits, offers saved, rewards redeemed', 'Keep your wallet balance and history correct'],
            ['Activity in the app', 'Places viewed, searches, follows, likes', 'Improve suggestions and fix problems'],
            ['Device data', 'Device model, operating system, app version, language, crash logs, IP address', 'Keep the app working, secure and free of fraud'],
            ['Messages to us', 'Support emails and reports', 'Answer you and resolve issues'],
          ]}
        />
        <p>We do not collect your contacts, call logs, SMS, health data or financial data beyond payout details.</p>
      </>
    ),
  },
  {
    id: 'location',
    title: 'Location',
    body: (
      <>
        <p>
          Hunt needs your precise location to confirm you are really at a place. Each place has a check-in circle,
          for example 100 m around a café. A photo or video earns points only when it is taken inside that circle.
        </p>
        <ul>
          <li><b>While using the app:</b> we read your location when you open the map, look for places nearby or capture a visit.</li>
          <li><b>In the background:</b> only if you turn on nearby alerts. We then check your location now and then to tell you about offers close by. You can turn this off at any time.</li>
          <li><b>What we store:</b> the location attached to each visit, so we can show your history and check for fraud. We do not keep a continuous track of where you go.</li>
        </ul>
        <p>
          You can turn location off in your phone&apos;s settings. Hunt will still work for browsing, but visits
          cannot be confirmed and will not earn points.
        </p>
      </>
    ),
  },
  {
    id: 'photos-and-videos',
    title: 'Photos and videos',
    body: (
      <>
        <p>
          Hunt uses your camera only when you open it to capture a visit. We do not access the rest of your gallery
          unless you choose a file to upload.
        </p>
        <ul>
          <li><b>The business sees your visit.</b> The place you visited can see the photo or video, your display name and the time, so it can confirm your visit and reward you.</li>
          <li><b>Posting is your choice.</b> If you share a capture to the feed, other Hunt users can see it, along with your display name and the place.</li>
          <li><b>Location data in files.</b> We remove precise location data from shared photos and videos. Only the place name is shown.</li>
          <li><b>Please be respectful.</b> Avoid capturing people who have not agreed to it, and don&apos;t post anything illegal or harmful. We may remove content that breaks our Terms.</li>
          <li><b>Deleting.</b> You can delete a post at any time. Points already earned from that visit may be reversed.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use your data',
    body: (
      <>
        <p>We use your data for these purposes, and for each one we rely on a lawful reason allowed under Sri Lankan law.</p>
        <Table
          head={['Purpose', 'Lawful reason']}
          rows={[
            ['Run your account, confirm visits, award and redeem points', 'Needed to provide the service you signed up for'],
            ['Use your location and camera', "Your consent, given through your phone's permission prompts"],
            ['Send offers and nearby alerts', 'Your consent, which you can withdraw in Settings'],
            ['Detect fake check-ins, fraud and abuse', 'Our legitimate interest in keeping rewards fair'],
            ['Improve the app and fix crashes', 'Our legitimate interest, using data that is grouped or de-identified where possible'],
            ['Keep records for tax, accounting or legal requests', 'Legal obligation'],
          ]}
        />
        <p>
          We do not use your data for automated decisions with legal effects on you. Our fraud checks may hold
          points for review. If that happens, a person reviews it and you can ask us to look again.
        </p>
        <p className="legal__callout">
          We do not sell your personal data, and we do not show third-party advertising based on your personal data.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    body: (
      <>
        <p>We share data only in these cases:</p>
        <ul>
          <li><b>Businesses you visit:</b> your display name, the visit, your capture and the reward you redeem. They do not get your email, phone number or exact location history.</li>
          <li><b>Other users:</b> only what you post publicly, such as your display name, profile photo and shared captures.</li>
          {/* TODO: name the real providers you use */}
          <li><b>Service providers:</b> companies that host our servers, store files, send notifications, analyse crashes or process payouts. Examples are [Google Cloud / Firebase], [payment or payout provider] and [analytics provider]. They act on our instructions and may not use your data for their own purposes.</li>
          <li><b>Legal reasons:</b> when the law requires it, for example a valid request from a Sri Lankan court or authority, or to protect someone&apos;s safety.</li>
          <li><b>Business changes:</b> if Hunt is merged or sold, your data may move to the new owner under this policy. We will tell you first.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'businesses',
    title: 'For businesses',
    body: (
      <>
        <p>
          If you list a place on Hunt Business, we collect the owner&apos;s or staff member&apos;s name, email and
          phone number, plus the business name, address, map position, check-in radius, photos, offers and point
          rules.
        </p>
        <ul>
          <li>Business details and offers are public in the Hunt app.</li>
          <li>Guests&apos; visits and captures are shared with you only to confirm visits and run rewards. You may not use guest data for anything else, such as adding guests to marketing lists, without their separate consent.</li>
          <li>We show you visit counts and summary statistics. These are grouped, so individual guests cannot be identified from them.</li>
          <li>If you add staff accounts, you are responsible for giving them access only to what they need.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'keeping-data',
    title: 'Keeping and protecting data',
    body: (
      <>
        <p>We keep data only as long as we need it.</p>
        <Table
          head={['Data', 'How long we keep it']}
          rows={[
            ['Account details', 'While your account is open, then deleted within 30 days of closing it'],
            ['Visits, captures and points history', 'While your account is open; public posts are removed when you delete them or your account'],
            ['Payout and transaction records', '7 years, as required for tax and accounting'],
            ['Device data and crash logs', 'Up to 12 months'],
            ['Fraud and abuse records', 'Up to 2 years after the event'],
          ]}
        />
        <p>
          <b>Security.</b> Data is encrypted in transit (HTTPS) and at rest. Staff access is limited and logged, and
          we review our security regularly. No system is completely secure, so if a breach affects you, we will tell
          you and the authorities as the law requires.
        </p>
        <p>
          {/* TODO: where are your servers? */}
          <b>Storage outside Sri Lanka.</b> Our servers may be located outside Sri Lanka, for example in [Singapore
          or India]. When data leaves Sri Lanka, we use providers with protections that meet the standard required
          by Sri Lankan law.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    body: (
      <>
        <p>Under Sri Lanka&apos;s Personal Data Protection Act you can:</p>
        <ul>
          <li><b>See</b> the personal data we hold about you and get a copy.</li>
          <li><b>Correct</b> data that is wrong or out of date.</li>
          <li><b>Delete</b> your data, unless we must keep it by law.</li>
          <li><b>Withdraw consent</b> for location, camera or notifications at any time.</li>
          <li><b>Object</b> to uses based on our legitimate interest.</li>
          <li><b>Complain</b> to the Data Protection Authority of Sri Lanka if you are not happy with our response.</li>
        </ul>
        <p><b>How to do it:</b></p>
        <ol>
          <li>Most settings are in the app under Profile → Settings: edit your profile, turn off notifications, or download your data.</li>
          <li>For anything else, email <Mail />. We reply within 21 working days and may ask you to confirm your identity first.</li>
        </ol>
        <p>You can also turn off location or camera access in your phone&apos;s settings.</p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        Hunt is for people aged 18 and over. We do not knowingly collect data from anyone under 18. If you think a
        child has signed up, email us and we will delete the account.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as Hunt grows. The date at the top shows the latest version. For important
        changes, we will notify you in the app or by email before they take effect.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <address className="legal__contact">
        <b>{company.name}</b>
        <span>{company.address}</span>
        <span>
          Email: <Mail />
        </span>
      </address>
    ),
  },
];

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="legal__table">
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
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Nav onHome={false} />
      <main className="legal">
        <div className="wrap">
          <header className="legal__head">
            <span className="label">Legal · Last updated {LAST_UPDATED}</span>
            <h1 className="title">Privacy Policy</h1>
            <p className="lead">
              Hunt uses your location, the photos and videos you take, and your account details to confirm visits to
              local places and give you points and rewards. We do not sell your personal data. This policy explains
              what we collect, why, and the choices you have.
            </p>
            <span className="hand legal__note">the short version: we only use what we need</span>
          </header>

          <div className="legal__grid">
            <nav className="legal__toc" aria-label="On this page">
              <span className="label">On this page</span>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="legal__body">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="legal__section">
                  <h2>
                    <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
