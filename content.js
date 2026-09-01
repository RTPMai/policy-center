/* ==========================================================================
   POLK CITY AREA CHAMBER OF COMMERCE
   BUSINESS POLICY CENTER, CONTENT FILE

   This is the only file you need to edit to update the site.
   You do not need to touch index.html, styles.css, or app.js.

   HOW TO UPDATE
   1. Change reviewedOn below to today's date.
   2. Add, edit, or delete entries in the ENTRIES list.
   3. Save. If you are using GitHub, commit the change.
      The site rebuilds itself within about a minute.

   WRITING RULES FOR THIS PAGE
   - Write for a busy shop owner, not a lawyer.
   - Short sentences. One idea each.
   - If you have to use a technical word, add it to the GLOSSARY below.
   - No dashes in the middle of sentences. Use a period and start again.

   RULES THAT WILL SAVE YOU A HEADACHE
   - Every entry needs a unique "id". Use lowercase words with dashes.
     The id becomes the entry's web address, so it is how you link
     straight to one item from Facebook or an email.
   - Once an entry is published, do not change its id. That would break
     any link already shared.
   - Keep quotes balanced. If the page goes blank after an edit, you have
     almost certainly got a stray quote or a missing comma.
   ========================================================================== */

const SITE = {
  title: 'Business Policy Center',
  org: 'Polk City Area Chamber of Commerce',
  intro:
    'New laws, the November ballot, and local decisions that affect businesses here. Each one is explained in plain language, with links so you can check it yourself.',
  reviewedOn: 'September 1, 2026',
  cadence: 'Reviewed monthly',
  contactEmail: 'admin@polkcitychamber.com',
  chamberUrl: 'https://polkcitychamber.com',
};

/* Topic filters. Keep this list short. Four or five is the limit before
   people stop reading them. Each "id" must match the topics used in entries. */
const TOPICS = [
  { id: 'money', label: 'Money and grants' },
  { id: 'tax', label: 'Taxes and property' },
  { id: 'workforce', label: 'Hiring and staff' },
  { id: 'development', label: 'Growth and building' },
  { id: 'elections', label: 'Elections' },
];

/* The lookup tools at the top of the page. */
const TOOLS = [
  {
    title: 'Who represents me?',
    blurb: 'Type in your address. It shows your state senator and state representative, with phone and email.',
    url: 'https://www.legis.iowa.gov/legislators/find',
  },
  {
    title: 'Email any lawmaker',
    blurb: 'The full contact list for the Iowa Legislature.',
    url: 'https://www.legis.iowa.gov/legislators/informationOnLegislators/allLegislators',
  },
  {
    title: 'Register to vote',
    blurb: 'Register online with an Iowa license or ID. You can also check that you are still registered.',
    url: 'https://www.polkcountyiowa.gov/county-auditor/election/registerupdate-registration/',
  },
  {
    title: 'Where do I vote?',
    blurb: 'The official polling place lookup. Polls are open 7 a.m. to 8 p.m.',
    url: 'https://apps.sos.iowa.gov/elections/voterreg/pollingplace/search.aspx',
  },
  {
    title: 'What district am I in?',
    blurb: 'Maps showing which voting districts cover your address.',
    url: 'https://www.polkcountyiowa.gov/county-auditor/election/election-maps/',
  },
  {
    title: 'Polk County elections office',
    blurb: 'Election dates, absentee ballots, who is running, and official results.',
    url: 'https://www.polkcountyiowa.gov/county-auditor/election/',
  },
  {
    title: 'Every new Iowa law',
    blurb: 'The official state list of bills that passed, with the dates they take effect.',
    url: 'https://www.legis.iowa.gov/law/statutory/acts/enrolledBills',
  },
  {
    title: 'Chamber business resources',
    blurb: 'Our list of places that help with funding, licensing, and business advice.',
    url: 'https://polkcitychamber.com/business-resources',
  },
];

/* The three groups entries fall into. */
/* The four sections of the site. Each becomes its own page.
   "nav" is the short label in the top menu.
   "season" ties the section to a color from the chamber logo.
   "blurb" is what shows on the home page card. */
const GROUPS = [
  {
    id: 'money',
    nav: 'Grants',
    season: 'sun',
    title: 'Money you can go after',
    blurb: 'Grants, loans, and free help a Polk City area business can actually apply for, with straight talk about who qualifies.',
    lede: 'Each entry says who qualifies, because most of these are not open to everybody. Deadlines move, so always check the source link before you plan around a date.',
  },
  {
    id: 'ballot',
    nav: 'Ballot',
    season: 'winter',
    badge: 'November 3',
    title: 'On the ballot November 3',
    blurb: 'Federal, state, county, and township offices are all on this ballot, plus a statewide question about taxes.',
    lede: 'This is a big ballot. The chamber does not tell you who to vote for. These entries explain what each choice decides, and give the argument on both sides.',
  },
  {
    id: 'law',
    nav: 'New laws',
    season: 'spring',
    title: 'New laws',
    blurb: 'What changed at the Statehouse this year, and what it does to your taxes, your hiring, and your paperwork.',
    lede: 'The Iowa Legislature finished its work for the year on May 3. These are now law, or will be soon.',
  },
  {
    id: 'local',
    nav: 'Polk City',
    season: 'autumn',
    title: 'Happening in Polk City',
    blurb: 'City and county decisions that touch local businesses directly. This is the part that changes the most.',
    lede: 'Projects, funding, and priorities worth watching close to home.',
  },
];

/* Plain definitions for words that are hard to avoid.
   Add to this whenever you use a term a member might not know. */
const GLOSSARY = [
  {
    term: 'TIF',
    def: 'Tax increment financing. A city helps pay for a new development, then pays itself back out of the extra property tax the finished project generates. It is one of the main tools small cities use to get commercial projects built.',
  },
  {
    term: 'Rollback',
    def: 'The share of your property value that actually gets taxed. If your building is worth $200,000 and the rollback is 90%, you are taxed on $180,000.',
  },
  {
    term: 'Homestead exemption',
    def: 'A discount on property taxes for the home you live in. It does not apply to commercial property.',
  },
  {
    term: 'General fund',
    def: 'The main city checking account. It pays for police, streets, parks, and staff.',
    },
  {
    term: 'CDBG',
    def: 'Community Development Block Grant. Federal money passed down through the county for things like sidewalks, utilities, and accessibility work.',
  },
  {
    term: '28E agreement',
    def: 'A contract between two or more Iowa governments to share a service. Polk City uses one for regional water.',
  },
  {
    term: 'Toss-up',
    def: 'A rating used by election analysts. It means neither side is favored to win.',
  },
  {
    term: 'Match, or cost share',
    def: 'Money you have to put in yourself to unlock grant money. A 1 to 1 match means for every dollar the grant gives you, you spend a dollar of your own.',
  },
  {
    term: 'Reimbursement grant',
    def: 'You pay for the work first, then send receipts and get paid back. Important to know, because it means you need the cash up front.',
  },
  {
    term: 'Open seat',
    def: 'A race with no incumbent, because the current officeholder retired or is running for something else. Open seats are usually closer, and the winner arrives with no fixed positions on local issues.',
  },
  {
    term: 'Retention election',
    def: 'A yes or no vote on whether a sitting judge keeps the job. There is no opponent. You are only voting to keep them or not.',
  },
];

/* ==========================================================================
   ENTRIES

   Template for a new entry. Copy this, fill it in, paste it into the list:

   {
     id: 'short-unique-name',
     group: 'law',                 // law, ballot, or local
     topics: ['tax'],              // one or more topic ids
     title: 'Headline in plain words',
     meta: 'Bill number, date, status',
     plain: 'One sentence a member can understand without opening the entry.',
     body: `<p>What happened.</p>`,
     matters: {
       heading: 'What this means for you',
       html: `<p>Why a local business owner should care.</p>`,
     },
     sources: [
       { label: 'What the link says', publisher: 'Who published it', url: 'https://...' },
     ],
   },
   ========================================================================== */

const ENTRIES = [
  {
    id: 'property-tax-sf2472',
    group: 'law',
    topics: ['tax', 'development'],
    title: 'Property taxes are going down. City budgets are getting capped.',
    meta: 'Senate File 2472, signed May 18, 2026, now law',
    plain: 'Your property tax bill should ease. But the city now has a strict limit on how fast its income can grow, and fewer tools to attract new businesses.',
    body: `
      <p>The state expects this law to cut property taxes by about $4.2 billion over six years. Here is what it actually does.</p>
      <ul>
        <li>Cities and counties can only grow their main budget by 2% a year. A few things are exempt, including school funding and some special levies. County hospitals get 4%. The bus system and emergency management get 3%.</li>
        <li>Cities and counties cannot keep more than 35% of their yearly spending in savings.</li>
        <li>Homeowners get a new discount of 10% off their taxable value, up to $20,000. This does not apply to commercial property.</li>
        <li>Apartment buildings become their own tax category in 2027. Their taxes go up about 6%, phased in over three years.</li>
        <li>TIF districts are now capped at 23 years. After year 20, the city can only use 60% of the money and cannot borrow against it.</li>
        <li>The Business Property Tax Credit stays at $150,000. But the $125 million the state used to send cities to make up the difference now goes into a state fund instead.</li>
      </ul>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `
        <p>About 90% of our property tax base is houses. Only about 10% is businesses. The city council has said its number one goal is bringing in more commercial development, so homeowners are not carrying so much of the load.</p>
        <p>Now here is the tension. Polk City is growing much faster than 2% a year. Every new house means more streets to plow, more water to treat, and more calls for police. But the money the city can collect is capped at 2%. Something has to give. Usually that shows up as slower projects, thinner services, or new fees.</p>
        <p>The TIF change matters even more. TIF is how a small city makes the numbers work on a commercial project. Shortening it to 23 years makes some of those deals harder to close. That is a direct hit to the exact goal the city is chasing.</p>
        <p>If you own an apartment building or a mixed use building, your taxes go up starting in 2027. Worth mentioning to your accountant before you set next year's budget.</p>`,
    },
    sources: [
      { label: 'A clear breakdown of what the law changes', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/05/18/gov-kim-reynolds-signs-property-tax-law-projected-to-save-4-2-billion-over-6-years/' },
      { label: 'Session recap written for small business owners', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: "The governor's statement when she signed it", publisher: 'Office of the Governor', url: 'https://governor.iowa.gov/press-release/2026-05-19/gov-reynolds-signs-property-tax-relief-bill-other-bills-law' },
      { label: 'News coverage of the signing and the debate', publisher: 'The Gazette', url: 'https://www.thegazette.com/news/state/gov-kim-reynolds-signs-iowa-property-tax-reform-bill-into-law/article_4a1970f1-0cfa-497c-8f96-b557eae835c7.html' },
    ],
  },

  {
    id: 'business-court-sf639',
    group: 'law',
    topics: ['development'],
    title: 'Iowa now has a court just for big business lawsuits',
    meta: 'Senate File 639, now law',
    plain: 'Two judges will handle large business disputes. Only applies to cases worth $500,000 or more, so most small businesses will never see it.',
    body: `
      <p>Two judges are set aside to handle complicated business lawsuits. To qualify, a case has to involve at least $500,000.</p>
      <p>The kinds of cases it covers include contract fights, fraud, technology and patent licensing, trade secrets, non-compete agreements, commercial real estate disputes, and shareholder cases.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `<p>For most Main Street businesses, nothing changes. The dollar threshold is too high. It matters if you are signing a large contract, a franchise deal, or a big commercial lease. Knowing a dispute would get resolved faster changes whether a fight is worth having. Most relevant to construction, development, and larger manufacturers.</p>`,
    },
    sources: [
      { label: 'What the business court covers', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
    ],
  },

  {
    id: 'faster-filings-sf629',
    group: 'law',
    topics: ['development'],
    title: 'Business paperwork at the state should move faster',
    meta: 'Senate File 629, effective July 1, 2026',
    plain: 'Filing an LLC or getting a certificate of good standing should take less time than it used to.',
    body: `<p>The law speeds up how quickly the Secretary of State processes business filings.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `<p>Small, but useful. If you are starting an LLC, selling your business, or need a certificate of good standing for your bank, expect a shorter wait. Good to know if you are planning around a deadline.</p>`,
    },
    sources: [
      { label: 'New laws taking effect this summer and fall', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/a-strong-season-for-iowa-small-business/' },
      { label: 'File with the Iowa Secretary of State', publisher: 'sos.iowa.gov', url: 'https://sos.iowa.gov/business-services' },
    ],
  },

  {
    id: 'child-care-hf2514',
    group: 'law',
    topics: ['workforce'],
    title: 'Child care workers can now get child care help, permanently',
    meta: 'House File 2514, effective July 1, 2026',
    plain: 'A program that helps daycare staff afford their own child care is now permanent. That should mean more open daycare spots locally, which makes it easier for you to hire.',
    body: `<p>Since 2023 this had been a temporary pilot program. It is now permanent. People who work in child care can get state child care assistance no matter what they earn.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `<p>Think of this as a hiring issue, not a social program. Daycares here are short staffed, which means fewer open spots, which means parents cannot take shifts. Helping daycares keep employees opens up spots for everyone else's workers. If you run a daycare or are thinking about opening one, this changes your staffing math directly.</p>`,
    },
    sources: [
      { label: 'What passed and what failed this session', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/05/04/the-2026-legislative-session-is-over-heres-what-passed-failed-and-what-is-already-iowa-law/' },
    ],
  },

  {
    id: 'startup-investment-sf2453',
    group: 'law',
    topics: ['development'],
    title: 'State universities have to invest in Iowa startups',
    meta: 'Senate File 2453, must comply by July 1, 2027',
    plain: 'Somewhere between $39 and $49 million is headed toward Iowa startups. The money is not available yet. We will post it here when it is.',
    body: `<p>Iowa, Iowa State, and UNI each have to put 1% of their endowment into approved funds that invest in Iowa startups. That works out to roughly $39 to $49 million. They can ask for a waiver if the market makes it a bad idea.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `<p>Nothing to do yet. The funds have to be set up before any money moves. If you are building something that could grow fast, the useful thing is knowing when the door opens. We will watch for it.</p>`,
    },
    sources: [
      { label: 'How the investment requirement works', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: 'State help for small businesses and startups', publisher: 'Opportunity Iowa', url: 'https://opportunityiowa.gov/business/small-business-entrepreneurs/small-business-resources' },
    ],
  },

  {
    id: 'cdl-english-sf2426',
    group: 'law',
    topics: ['workforce'],
    title: 'New English test for commercial drivers',
    meta: 'Senate File 2426, now law',
    plain: 'Anyone applying for a CDL now has to pass an English test. If you hire drivers, expect a smaller pool of applicants.',
    body: `<p>People applying for a commercial driver's license now have to pass an English proficiency test before they can be licensed.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `<p>If you hire drivers for trucking, delivery, construction, or farm work, this is a new step for anyone you recruit. Finding drivers was already hard. Build extra time into your hiring plans.</p>`,
    },
    sources: [
      { label: 'Notable bills from this session', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/05/04/the-2026-legislative-session-is-over-heres-what-passed-failed-and-what-is-already-iowa-law/' },
    ],
  },

  {
    id: 'bills-returning-2027',
    group: 'law',
    topics: ['tax', 'workforce', 'development'],
    title: 'Three bills that failed and will probably be back',
    meta: 'Did not pass in 2026. Speak up before January.',
    plain: 'Right to repair, energy costs, and penny rounding all died this year. Lawmakers usually try again. Now is when your opinion counts.',
    body: `
      <ul>
        <li><strong>Right to repair.</strong> Would affect equipment dealers, repair shops, and farms.</li>
        <li><strong>Energy costs.</strong> A package of changes to utility and energy rules for employers.</li>
        <li><strong>Penny rounding.</strong> Rounding cash transactions at the register.</li>
      </ul>`,
    matters: {
      heading: 'What this means for you',
      html: `
        <p>Bills that fail one year usually come back the next. If one of these would change how you operate, say so now. Once the session starts in January and a bill is moving, your legislator has usually already picked a side.</p>
        <p>Tell the chamber, and tell your legislator yourself. The lookup tools at the top of this page will find their contact information in about a minute.</p>`,
    },
    sources: [
      { label: 'Bills that did not make it', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: 'Find and contact your legislators', publisher: 'Iowa Legislature', url: 'https://www.legis.iowa.gov/legislators/find' },
    ],
  },

  {
    id: 'grants-start-here',
    group: 'money',
    topics: ['money'],
    title: 'Start here before you chase any grant',
    meta: 'Free help, no cost to you',
    plain: 'Iowa pays for free business counseling. Use it before you spend a weekend on an application you were never eligible for.',
    body: `
      <p>Grant applications take real time. The fastest way to waste a weekend is to write one you never qualified for. These services are free and they will tell you straight.</p>
      <ul>
        <li><strong>America's SBDC Iowa.</strong> Free one on one counseling. They help with business plans, financials, and figuring out which funding actually fits you.</li>
        <li><strong>The Iowa Center.</strong> Coaching plus small business lending for people who have trouble getting a conventional bank loan.</li>
        <li><strong>IASourceLink.</strong> A directory of Iowa business resources, searchable by what you need.</li>
        <li><strong>SCORE.</strong> Free mentoring from retired and working executives.</li>
      </ul>`,
    matters: {
      heading: 'Why this is the first entry, not the last',
      html: `
        <p>Most grants below have a catch. Some are only for nonprofits. Some require you to spend your own money first and get paid back. Some need a match. A counselor spots that in ten minutes.</p>
        <p>All of these are already listed on the chamber's Business Resources page. This entry just tells you which one to call first.</p>`,
    },
    sources: [
      { label: 'Find your local SBDC counselor', publisher: "America's SBDC Iowa", url: 'https://iowasbdc.org/' },
      { label: 'Coaching and small business loans', publisher: 'The Iowa Center', url: 'https://theiowacenter.org/' },
      { label: 'Search Iowa business resources', publisher: 'IASourceLink', url: 'https://www.iasourcelink.com/' },
      { label: 'The chamber resource list', publisher: 'Polk City Area Chamber', url: 'https://polkcitychamber.com/business-resources' },
    ],
  },

  {
    id: 'grants-training-staff',
    group: 'money',
    topics: ['money', 'workforce'],
    title: 'Money to train the people you already have',
    meta: 'Iowa Workforce Development and IEDA. Ongoing.',
    plain: 'The state helps pay to train your current employees, run a paid internship, or start an apprenticeship. This is the most overlooked money on this page.',
    body: `
      <p>Several state programs help cover the cost of building up your workforce.</p>
      <ul>
        <li><strong>Iowa Jobs Training Program, known as 260F.</strong> Helps pay to train employees you already have. Runs through the community colleges, which for us means DMACC.</li>
        <li><strong>Registered Apprenticeship.</strong> Training grants covering more than 1,000 occupations, administered by Iowa Workforce Development. Not just the building trades.</li>
        <li><strong>Student Internship Program.</strong> Grants to small and medium companies in targeted industries to run paid internships.</li>
        <li><strong>STEM Internship Program.</strong> Same idea, for science, technology, engineering, and math roles.</li>
        <li><strong>Community College Consortium, known as 260.</strong> For training projects where two or more businesses go in together.</li>
      </ul>`,
    matters: {
      heading: 'Why this fits Polk City',
      html: `
        <p>Most Polk City businesses are too small to run a training budget. These programs are built for exactly that situation, and they apply to people already on your payroll rather than new hires.</p>
        <p>The consortium option is worth a look for the chamber itself. If several members need similar training, going in together may unlock money none of you could get alone. Tell the chamber if that interests you.</p>`,
    },
    sources: [
      { label: 'Training and workforce funding programs', publisher: 'Opportunity Iowa', url: 'https://opportunityiowa.gov/business/financial-assistance' },
      { label: 'Apprenticeship programs', publisher: 'Iowa Workforce Development', url: 'https://www.iowaworkforcedevelopment.gov/' },
    ],
  },

  {
    id: 'grants-targeted-small-business',
    group: 'money',
    topics: ['money'],
    title: 'If you are a woman, minority, veteran with a service-connected disability, or a person with a disability',
    meta: 'Targeted Small Business certification, IEDA',
    plain: 'Free state certification that gets you loans up to $50,000, early access to state contracts, and the right to sell up to $25,000 to state agencies without competitive bidding.',
    body: `
      <p>Iowa's Targeted Small Business program certifies businesses that are at least 51% owned, operated, and actively managed by a woman, a person with minority status, a service-disabled veteran, or a person with a disability.</p>
      <p><strong>To qualify you must:</strong></p>
      <ul>
        <li>Be located in Iowa</li>
        <li>Operate for profit</li>
        <li>Average less than $4 million in gross income over the last three years</li>
      </ul>
      <p><strong>What certification gets you:</strong></p>
      <ul>
        <li>Low interest loans up to $50,000, with the rate capped at 10%</li>
        <li>Early look at what state agencies are buying, before it goes public</li>
        <li>The ability to sell up to $25,000 in goods or services to a state agency without competitive bidding</li>
        <li>A listing in the public directory that both government and private buyers use</li>
        <li>Free business counseling</li>
      </ul>`,
    matters: {
      heading: 'Why this is worth an afternoon',
      html: `
        <p>The certification itself costs nothing. The $4 million ceiling means nearly every chamber member who fits the ownership criteria qualifies on size.</p>
        <p>The part people miss is the procurement side. State agencies have to report how much they buy from certified businesses. That is a real sales channel, not a token gesture, and most eligible owners never sign up for it.</p>`,
    },
    sources: [
      { label: 'Program details and how to qualify', publisher: 'Opportunity Iowa', url: 'https://opportunityiowa.gov/business/small-business-entrepreneurs/small-business-resources/targeted-small-business-program' },
      { label: 'Start a certification application', publisher: 'Iowa Economic Development Authority', url: 'https://iowaeda.microsoftcrmportals.com/tsb-application-start/' },
      { label: 'What certification gets you as a state vendor', publisher: 'Iowa Dept. of Administrative Services', url: 'https://das.iowa.gov/vendors/targeted-small-business-program' },
    ],
  },

  {
    id: 'grants-food-and-farm',
    group: 'money',
    topics: ['money', 'development'],
    title: 'Food, farm, and anything you make from Iowa products',
    meta: 'Choose Iowa Value-Added Grants. Next window opens December 2026.',
    plain: 'Up to $25,000 for equipment, a commercial kitchen, or an on-farm store. You have to match it dollar for dollar, and small businesses get preference.',
    body: `
      <p>The Iowa Department of Agriculture runs cost-share grants to help businesses sell more Iowa agricultural products, either by producing more or by reaching new markets.</p>
      <p><strong>What it covers:</strong> equipment used to produce value-added agricultural products, an on-farm store or commercial kitchen, and food hub development or expansion.</p>
      <p><strong>The rules:</strong> up to $25,000. You must match the grant one to one from private sources. The project cannot already be underway when you apply, and it has to finish within 12 months. Preference goes to businesses under 50 employees.</p>`,
    matters: {
      heading: 'Who this actually fits here',
      html: `
        <p>Think bakeries, butchers, coffee roasters, breweries, caterers, farm stands, anyone doing a commercial kitchen buildout, and any operation turning Iowa grown product into something you sell.</p>
        <p>Watch the match requirement. If the grant covers $25,000, you need $25,000 of your own money in the project. Plan the cash flow before you apply, not after.</p>`,
    },
    sources: [
      { label: 'Guidelines and eligible projects', publisher: 'Choose Iowa', url: 'https://www.chooseiowa.com/grants/valueadded' },
    ],
  },

  {
    id: 'grants-manufacturers-and-startups',
    group: 'money',
    topics: ['money', 'development'],
    title: 'Manufacturers, inventors, and anyone selling outside Iowa',
    meta: 'CIRAS, IEDA Innovation Continuum, and STEP',
    plain: 'Equipment grants up to $50,000 for manufacturers, up to $75,000 for federal research applications, and reimbursement for the cost of finding customers in other states or countries.',
    body: `
      <p><strong>Smart manufacturing grants.</strong> For small and mid-sized manufacturers adopting new technology. Equipment grants cover up to $50,000, and connected-technology infrastructure up to $25,000. Open to manufacturers with roughly 3 to 124 full-time employees. You need a CIRAS assessment first, and CIRAS is at Iowa State.</p>
      <p><strong>America's Seed Fund support.</strong> If you are going after a federal SBIR or STTR research grant, Iowa will put in up to $75,000. That is $50,000 once you win a phase one award and another $25,000 when you submit a phase two proposal.</p>
      <p><strong>The Iowa Innovation Continuum.</strong> Five state-backed funds that invest in Iowa companies through loans or royalty agreements rather than plain grants. These are for technology and high growth businesses, not Main Street retail.</p>
      <p><strong>STEP export grant.</strong> Reimburses eligible small businesses for the cost of expanding into markets outside Iowa.</p>`,
    matters: {
      heading: 'Be honest about whether this is you',
      html: `
        <p>Most of these are not for a retail shop or a service business. They are for manufacturers, product companies, and technology startups.</p>
        <p>The manufacturing grants are the most likely fit for a Polk City area member. If you make something in a building with equipment in it, the CIRAS assessment is free and worth the call regardless of whether you apply.</p>`,
    },
    sources: [
      { label: 'Grants and funding programs', publisher: 'Opportunity Iowa', url: 'https://opportunityiowa.gov/business/financial-assistance/grants-funding' },
      { label: 'Manufacturing assessments and assistance', publisher: 'Iowa State University Extension', url: 'https://www.extension.iastate.edu/program/community-and-leadership' },
    ],
  },

  {
    id: 'grants-nonprofit-and-community',
    group: 'money',
    topics: ['money', 'development'],
    title: 'Community project money, and the catch on it',
    meta: 'Prairie Meadows and Polk County. Applications open December, close late February.',
    plain: 'There is a lot of casino-funded grant money in Polk County, from $100 up to $1 million. Read this before you get excited: it is for nonprofits, not for-profit businesses.',
    body: `
      <p>Since 1989, Polk County and Prairie Meadows have put more than $1.8 billion back into the community through grant programs. There are two related tracks.</p>
      <p><strong>Prairie Meadows grants.</strong> Community Betterment Grants run from $100 to $99,999 for small and medium projects. Legacy Grants run from $100,000 to $1 million for large signature projects. Applications typically open in December and close at the end of February. Categories include arts and culture, economic development, education, and health and human services.</p>
      <p><strong>Polk County Community Betterment Grants.</strong> Funded from the county's share of Prairie Meadows profits and awarded by the Board of Supervisors.</p>
      <p><strong>The eligibility catch.</strong> Applicants must be nonprofit, tax-exempt organizations. A for-profit business cannot apply directly. Organizations under religious management are not eligible for the county program under state law.</p>`,
    matters: {
      heading: 'How a business actually uses this',
      html: `
        <p>You cannot apply for your storefront. But the chamber is a nonprofit, and so are most of the community organizations you work with. Projects that improve the business district, fund a community event, or build shared infrastructure can go through one of those.</p>
        <p>One warning worth having. Demand for county betterment grants has tripled in recent years, and the county saw its highest volume of declined requests in at least fifteen years. Assume it is competitive and apply early.</p>
        <p>If you have a project idea that would help Polk City businesses generally, bring it to the chamber before the December window opens. Putting it together takes longer than people think.</p>`,
    },
    sources: [
      { label: 'Prairie Meadows grant programs and deadlines', publisher: 'Prairie Meadows', url: 'https://www.prairiemeadows.com/' },
      { label: 'Polk County community grants', publisher: 'Polk County', url: 'https://communitygrants.polkcountyiowa.gov/' },
      { label: 'Reporting on rising demand for county grants', publisher: 'Axios Des Moines', url: 'https://www.axios.com/local/des-moines/2025/06/24/polk-county-grant-rules-demand-triples' },
    ],
  },

  {
    id: 'grants-where-to-look',
    group: 'money',
    topics: ['money'],
    title: 'Where to look for everything else',
    meta: 'Two official listings, plus one common trap',
    plain: 'IowaGrants.gov lists every state grant. Grants.gov lists every federal one. And no, most USDA rural programs will not work here, for a reason worth understanding.',
    body: `
      <p><strong>IowaGrants.gov</strong> is the state's official listing of open grant opportunities. Anyone can browse it. Search by agency or keyword.</p>
      <p><strong>Grants.gov</strong> is the federal equivalent.</p>
      <p><strong>The USDA rural trap.</strong> People see that Polk City has about 6,500 residents and assume USDA rural business programs apply. Two problems. First, most of those programs only accept applications from a city, county, tribe, or nonprofit, not from the business itself. Second, and more important, eligibility is not just about your town's population. Money has to go to areas outside the built-up edge of any city of 50,000 or more. Polk City sits right against Ankeny, which passed 77,000 people. Check the USDA eligibility map for your specific address before you invest any time.</p>`,
    matters: {
      heading: 'A word on grant scams',
      html: `
        <p>If a company emails or calls offering to get you a business grant for a fee, it is a scam. Real government grants never require an upfront payment to apply, and no one can guarantee you an award.</p>
        <p>Every legitimate program on this page is listed on a .gov site and free to apply for. If you are not sure, call the SBDC before you send anyone money.</p>`,
    },
    sources: [
      { label: 'State of Iowa grant listings', publisher: 'IowaGrants.gov', url: 'https://www.iowagrants.gov/' },
      { label: 'Federal grant listings', publisher: 'Grants.gov', url: 'https://www.grants.gov/' },
      { label: 'Rural Business Development Grant rules', publisher: 'USDA Rural Development', url: 'https://www.rd.usda.gov/programs-services/business-programs/rural-business-development-grants' },
    ],
  },

  {
    id: 'income-tax-amendment-sjr11',
    group: 'ballot',
    topics: ['tax', 'elections'],
    title: 'Ballot question: make income tax increases harder',
    meta: 'Senate Joint Resolution 11, you vote on it November 3',
    plain: 'A yes vote would change the state constitution so raising income taxes needs two thirds of lawmakers instead of a simple majority.',
    body: `
      <p>Right now, lawmakers can raise income tax rates with a simple majority vote. This change would require two thirds of both chambers to agree instead.</p>
      <p>It already passed the Legislature twice, which is what puts it in front of voters. The final vote in the House was 57 to 21 on May 3.</p>
      <p>Some background worth having. Iowa's income tax is currently a flat 3.8%. Next year's state budget is $9.6 billion. It plans to spend about $1.2 billion more than it takes in, covered by drawing down a savings fund.</p>`,
    matters: {
      heading: 'Both sides, plainly',
      html: `
        <p><strong>Supporters say</strong> it locks in low taxes for the long run, so businesses can plan without worrying about a future increase.</p>
        <p><strong>Opponents say</strong> it ties the hands of future lawmakers if the economy turns. They point at the gap between spending and revenue as a sign the state may need flexibility sooner than people think.</p>
        <p>For a business owner, the question underneath this is where the money comes from instead. If income taxes get hard to raise, pressure usually shifts to sales taxes, fees, and property taxes. Property taxes were just capped at the local level. Worth thinking about these two changes together.</p>`,
    },
    sources: [
      { label: 'The amendment, the vote, and the budget picture', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: 'Sample ballots and election dates', publisher: 'Polk County Auditor', url: 'https://www.polkcountyiowa.gov/county-auditor/election/' },
    ],
  },

  {
    id: 'governor-race',
    group: 'ballot',
    topics: ['elections', 'tax'],
    title: 'Governor: an open seat for the first time in 20 years',
    meta: 'Zach Lahn (R) and Rob Sand (D). Rated a toss-up.',
    plain: 'Kim Reynolds is not running again. Whoever wins sets the tax and business agenda for the next four years.',
    body: `
      <p>Gov. Kim Reynolds is not running for a third term. This is Iowa's first open race for governor since 2006.</p>
      <p>Zach Lahn is a businessman and farmer. He won a five way Republican primary on June 2 by less than one percentage point over Congressman Randy Feenstra, 37.8% to 37.0%.</p>
      <p>Rob Sand is the state auditor and the only Democrat currently holding a statewide office in Iowa. He ran unopposed in his primary.</p>
      <p>The Cook Political Report, which rates races nationally, calls this one a toss-up.</p>`,
    matters: {
      heading: 'Why it matters for business',
      html: `
        <p>The governor drives the tax agenda. How the new property tax law gets carried out, and whether the state changes its business incentives, both run through that office.</p>
        <p>There is also a practical angle. A close race means both campaigns want local audiences between now and November. If you would like a candidate to come talk to Polk City businesses, this is the year to ask. Tell the chamber.</p>`,
    },
    sources: [
      { label: 'Who is running, and past results', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/Iowa_gubernatorial_and_lieutenant_gubernatorial_election,_2026' },
      { label: 'How the primary finished', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/06/02/rep-randy-feenstra-concedes-to-zach-lahn-in-2026-iowa-gop-gubernatorial-primary/' },
      { label: 'Where the Republican candidates stood', publisher: 'Iowa Public Radio', url: 'https://www.iowapublicradio.org/political-news/2026-05-15/2026-iowa-governors-race-republican-primary-candidates' },
    ],
  },

  {
    id: 'senate-race',
    group: 'ballot',
    topics: ['elections'],
    title: 'U.S. Senate: another open seat',
    meta: 'Ashley Hinson (R), Josh Turek (D), Thomas Laehn (L)',
    plain: 'Joni Ernst is retiring. The race is close, and the farm economy is the issue driving it.',
    body: `
      <p>Sen. Joni Ernst is retiring after two terms. Ashley Hinson currently represents northeast Iowa in Congress. Josh Turek is a state representative.</p>
      <p>In August, Cook Political Report moved this race from leaning Republican to a toss-up. They pointed to the farm economy and a tough national climate for Republicans. A recent poll had Hinson ahead 48 to 45.</p>`,
    matters: {
      heading: 'Why it matters for business',
      html: `
        <p>Tariffs and farm income are the live issue. When farm income drops, it hits equipment dealers, seed and fertilizer suppliers, trucking, and eventually the restaurants and shops those families spend money at. Central Iowa feels that before most places do.</p>
        <p>A close Senate race also means candidates are unusually available for local events right now.</p>`,
    },
    sources: [
      { label: 'Who is running', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/United_States_Senate_election_in_Iowa,_2026' },
      { label: 'Background on the open seat', publisher: 'Ballotpedia News', url: 'https://news.ballotpedia.org/2026/08/06/turek-hinson-running-for-open-u-s-senate-seat-in-iowa-as-ernst-retires/' },
    ],
  },

  {
    id: 'congressional-district',
    group: 'ballot',
    topics: ['elections'],
    title: 'U.S. House: Polk City is in the 3rd District',
    meta: 'Zach Nunn (R) and Sarah Trone Garriott (D)',
    plain: 'One of the closest House races in the country runs right through here. Nunn has held the seat since 2022. Trone Garriott is a state senator who has flipped two Republican seats before.',
    body: `
      <p>Polk County is split between Iowa's 3rd and 4th congressional districts. Polk City is in the <strong>3rd</strong>, along with the rest of Senate District 23.</p>
      <p><strong>Zach Nunn (Republican)</strong> is the incumbent, from Bondurant. He won the seat in 2022 by unseating Cindy Axne, and was reelected in 2024.</p>
      <p><strong>Sarah Trone Garriott (Democrat)</strong> is a state senator from West Des Moines and an ordained Lutheran pastor who works on interfaith engagement for the Des Moines Area Religious Council. She won the June 2 primary. State Rep. Jennifer Konfrst had been running and dropped out in favor of her.</p>
      <p>This is expected to be one of the most competitive House races in the country. Polling last fall showed Trone Garriott ahead of Nunn in Polk County by a wide margin, while Nunn led comfortably in the rural parts of the district outside Polk and Dallas counties.</p>`,
    matters: {
      heading: 'Why this office matters even if you never vote',
      html: `
        <p>Your congressional office is who you call when a federal agency is sitting on something. A stuck permit, an SBA loan problem, an export question, a dispute with a federal contractor. That is casework, and every congressional office does it regardless of party.</p>
        <p>Because the district line runs through Polk County, a neighbor a few miles away may have a different office. If your address is near the edge of town, confirm it on the county district maps before you make that call.</p>`,
    },
    sources: [
      { label: '3rd District race overview', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/Iowa%27s_3rd_Congressional_District_election,_2026' },
      { label: 'How analysts rate the 3rd District race', publisher: 'Cook Political Report', url: 'https://www.cookpolitical.com/house/race/483096' },
      { label: 'Constituent services for the 3rd District', publisher: 'Office of Rep. Zach Nunn', url: 'https://nunn.house.gov/' },
      { label: 'District maps for Polk County', publisher: 'Polk County Auditor', url: 'https://www.polkcountyiowa.gov/county-auditor/election/election-maps/' },
    ],
  },

  {
    id: 'state-legislature-races',
    group: 'ballot',
    topics: ['elections', 'tax'],
    title: 'Your state senate seat is open for the first time in 15 years',
    meta: 'Polk City is in House District 45 and Senate District 23',
    plain: 'Jack Whitver retired, so the senate seat covering Polk City is wide open. Your state rep, Brian Lohse, is also on the ballot. These two races matter more to local business than anything else you will vote on.',
    body: `
      <p>Polk City sits in <strong>Iowa Senate District 23</strong> and <strong>Iowa House District 45</strong>. Both are on the November 3 ballot.</p>

      <h4>Senate District 23, an open seat</h4>
      <p>The district covers rural northern Polk County plus parts of eastern Polk and eastern Dallas counties, including Polk City, Alleman, Elkhart, Granger, Runnells, and parts of Grimes and Urbandale.</p>
      <p>Jack Whitver of Grimes held this seat and served as Senate Majority Leader from 2018. In September 2025 he announced he would not run again and stepped down as leader, citing ongoing treatment following a brain tumor diagnosis in 2024. That leaves the seat open.</p>
      <ul>
        <li><strong>Tony Thompson (Democrat)</strong>, a farmer and business owner from Elkhart. He was unopposed in the primary.</li>
        <li><strong>Republican side.</strong> Two candidates ran in the June 2 primary. Mike Bousselot, currently the state senator for District 21 in Ankeny, who moved over to run here with Whitver's backing. And Wes Enos of Bondurant. Check your sample ballot for the nominee.</li>
      </ul>

      <h4>House District 45</h4>
      <p>The district includes Polk City, Alleman, Elkhart, Bondurant, Runnells, Carlisle and nearby communities.</p>
      <ul>
        <li><strong>Brian Lohse (Republican)</strong>, the incumbent, of Bondurant. He has served since 2019 and spent eight years on the Bondurant city council before that. He is an attorney who also owns a restaurant, a fitness facility, and rental property. Austin Stubbs of Bondurant also ran in the June 2 Republican primary, so confirm the nominee on your sample ballot.</li>
        <li><strong>Kendra Haug (Democrat)</strong> of Bondurant. She was unopposed in the primary.</li>
      </ul>`,
    matters: {
      heading: 'Why the chamber watches these two races hardest',
      html: `
        <p>Everything in the New Laws section came out of these two chambers. The property tax cap, the TIF changes, the child care program. So will right to repair and the energy bill when the session opens in January.</p>
        <p>An open senate seat is a rare opening. Whoever wins arrives with no established relationships and no fixed positions on local issues. A chamber that shows up early gets heard. One that waits until February does not.</p>
        <p>These races are also small enough that a few dozen business owners is a real bloc. That is not true of a governor's race. It is very true here.</p>
        <p>Worth noting for anyone deciding whether this is worth their time: the current representative runs a restaurant and rental property himself, and the Democratic senate candidate is a farmer and business owner. These are people who will understand a conversation about input costs and staffing.</p>`,
    },
    sources: [
      { label: 'Official list of everyone who filed to run', publisher: 'Iowa Secretary of State', url: 'https://sos.iowa.gov/sites/default/files/2026-04/2026%20Primary%20-%20Candidate%20List%20Database%20-%20All%20Elections_1.pdf' },
      { label: 'Find your legislators by address', publisher: 'Iowa Legislature', url: 'https://www.legis.iowa.gov/legislators/find' },
      { label: 'Why the senate seat came open', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2025/09/16/iowa-senate-majority-leader-jack-whitver-announces-retirement-will-not-seek-reelection/' },
      { label: 'Look up your full sample ballot', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/Polk_County_Sample_Ballot_(Iowa)' },
    ],
  },

  {
    id: 'county-township-local-races',
    group: 'ballot',
    topics: ['elections'],
    title: 'County offices, township officers, and judges',
    meta: 'Also on the November 3 ballot',
    plain: 'Polk City does not pick a county supervisor this year. But the county attorney, recorder, and treasurer are on everyone\'s ballot, along with township officers, three county boards, and judges.',
    body: `
      <h4>County supervisor: not your district this year</h4>
      <p>Three of the five seats on the Polk County Board of Supervisors are up, but none of them cover Polk City.</p>
      <ul>
        <li><strong>District 1:</strong> the southwest side of Des Moines, West Des Moines, Clive, and Windsor Heights.</li>
        <li><strong>District 4:</strong> east and southeast Des Moines, Pleasant Hill, Runnells, Camp Township, and Four Mile Township. Longtime supervisor Tom Hockensmith is retiring.</li>
        <li><strong>District 5:</strong> north and northwestern Des Moines, the East Village, and parts of downtown. Longtime supervisor Angela Connolly is retiring.</li>
      </ul>

      <h4>Countywide offices, on every Polk County ballot</h4>
      <ul>
        <li><strong>County Attorney.</strong> Kimberly Graham is the Democratic candidate.</li>
        <li><strong>County Recorder.</strong> An open seat. Longtime recorder Julie Haggerty is not seeking reelection.</li>
        <li><strong>County Treasurer.</strong> Mary Wells is the Democratic candidate.</li>
      </ul>
      <p>Several of these had no Republican file, so some may be effectively decided already. Your sample ballot will show who actually appears.</p>

      <h4>Everything else down the ballot</h4>
      <ul>
        <li><strong>Township officers.</strong> Polk City sits in a township, and trustees and the clerk are elected on this ballot.</li>
        <li><strong>Three nonpartisan county boards.</strong> Hospital Board of Trustees, Soil and Water Conservation Board, and Agricultural Extension Council.</li>
        <li><strong>Judicial retention.</strong> Yes or no on whether sitting judges keep their seats. No opponents.</li>
        <li><strong>Local public measures.</strong> Cities and counties can put bond issues or other questions on this ballot.</li>
      </ul>
      <p>City council and school board are not on this ballot. Iowa moved those to odd years, so the next ones are November 2027.</p>`,
    matters: {
      heading: 'Why the county board still matters to you',
      html: `
        <p>You are not voting for a supervisor this year, but three of five seats are changing hands, and two long-serving members are leaving. That reshapes the board for years.</p>
        <p>This is the body that sets the county property tax levy, decides how Polk County spends its Community Development Block Grant money, and awards the county community betterment grants covered in the Grants section. Those decisions reach Polk City whether or not we picked the people making them.</p>
        <p>Practical advice: pull your sample ballot about a week early and look up anything you do not recognize. The bottom of the ballot is where most people quit, and those races are often decided by the fewest votes.</p>`,
    },
    sources: [
      { label: 'Who is running for Polk County offices', publisher: 'Des Moines Register', url: 'https://www.aol.com/articles/running-polk-county-elections-2026-110146287.html' },
      { label: 'What the general election covers', publisher: 'Polk County Auditor', url: 'https://www.polkcountyiowa.gov/county-auditor/election/news-and-press-releases/general-election-november-3-2026-candidate-information/' },
      { label: 'Sample ballot lookup by address', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/Polk_County_Sample_Ballot_(Iowa)' },
      { label: 'Election dates, early voting, and absentee', publisher: 'Polk County Auditor', url: 'https://www.polkcountyiowa.gov/county-auditor/election/' },
    ],
  },

  {
    id: 'economic-development-manager',
    group: 'local',
    topics: ['development'],
    title: 'Polk City has someone working on business recruitment now',
    meta: 'Started July 2026',
    plain: 'Jake Smith works in Polk City two days a week on bringing in and growing businesses. This is a new resource. Use it.',
    body: `<p>The city and the Greater Des Moines Partnership set up a trial arrangement. The Partnership hired Jake Smith as an Economic Development Manager. He has been based in Polk City two days a week since mid July.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `
        <p>There is now a real person, with metro level resources behind him, spending regular time in town on business growth. A year ago that did not exist.</p>
        <p>If you are looking to expand, move, find space, or get connected to someone, this is a door worth knocking on. Tell the chamber what you need and we will make sure it gets to the right people.</p>`,
    },
    sources: [
      { label: 'Council packet announcing the arrangement', publisher: 'City of Polk City', url: 'https://www.polkcityia.gov/sites/g/files/vyhlif5571/f/agendas/1_cc_agenda_july_13_2026_full_packet.pdf' },
      { label: 'Partnership benefits for chamber members', publisher: 'Greater Des Moines Partnership', url: 'https://www.dsmpartnership.com/investors-and-affiliate-network/regional-chamber-members/member-benefits' },
    ],
  },

  {
    id: 'cdbg-funding',
    group: 'local',
    topics: ['development'],
    title: 'Federal grant money renewed for Polk County',
    meta: 'Announced August 11, 2026',
    plain: 'Polk County got $2.5 million in federal money for things like sidewalks and utilities. Polk City is one of nine cities that can tap it.',
    body: `
      <p>Polk County received $2.5 million in federal housing and development funding. Going forward it qualifies for up to $987,000 a year.</p>
      <p>Nine cities take part, including Polk City. The others are Altoona, Bondurant, Clive, Grimes, Johnston, Pleasant Hill, Urbandale, and Windsor Heights, plus the unincorporated parts of the county.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `<p>Each city picks what it spends the money on, and the list changes year to year. Sidewalks, utilities, accessibility work, and other infrastructure all qualify. If your block is due for that kind of work, getting into the conversation early is how you have a say in the timing. Otherwise you find out when the orange barrels show up.</p>`,
    },
    sources: [
      { label: 'The announcement and the list of cities', publisher: 'Polk County', url: 'https://www.polkcountyiowa.gov/news-and-announcements/polk-county-announces-continuation-of-federal-community-development-block-grants-cdbg/' },
    ],
  },

  {
    id: 'commercial-residential-imbalance',
    group: 'local',
    topics: ['development', 'tax', 'workforce'],
    title: 'Polk City has lots of houses and not enough businesses',
    meta: 'From the city comprehensive plan and council priorities',
    plain: 'Houses make up about 90% of the tax base. Residents, the council, and the business community all agree we need more commercial. That agreement is unusual, and it is worth using.',
    body: `
      <p>Polk City is one of the fastest growing cities of its size in Iowa, at roughly 6,500 people. Stores and businesses have not kept up with all the new houses.</p>
      <p>When the city asked residents for input on its long range plan, 74% said the lack of jobs was a weakness. Lack of commercial development came out as the number one weakness overall. City leaders have said bringing in more commercial development is the council's top priority.</p>`,
    matters: {
      heading: 'Why the chamber keeps bringing this up',
      html: `
        <p>Residents, the city council, and business owners all want the same thing here. That almost never happens. It is the strongest position we have when we talk to the city or to lawmakers.</p>
        <p>Housing is part of the same problem. More than half the homes for sale here have been priced at $500,000 and up. Most people who work at Polk City businesses cannot afford to live here, so they commute. That makes it a hiring problem, not just a housing problem. If it is affecting your ability to staff up, tell us. Real examples from real members are what make the case.</p>`,
    },
    sources: [
      { label: "Why commercial development is the council's top priority", publisher: 'Business Record', url: 'https://www.businessrecord.com/commercial-development-no-1-priority-for-polk-city/' },
      { label: 'New retail helping balance the tax base', publisher: 'Business Record', url: 'https://www.businessrecord.com/new-polk-city-retail-center-helping-balance-communitys-tax-base/' },
      { label: 'Coverage of the debate over growth near Saylorville', publisher: 'WHO 13', url: 'https://who13.com/news/metro-news/polk-city-divided-moving-forward-on-development-near-saylorville-campgrounds/' },
    ],
  },

  {
    id: 'project-watchlist',
    group: 'local',
    topics: ['development'],
    title: 'Projects worth watching',
    meta: 'Checked and updated at each review',
    plain: 'Five local projects that could change your foot traffic, your costs, or your access. The trail connection is the one with a real deadline.',
    body: `
      <ul>
        <li><strong>510 S. 3rd Street.</strong> The city asked for development proposals and has been reviewing them.</li>
        <li><strong>Trail connection.</strong> Linking the Neal Smith Trail to the High Trestle Trail. Targeted to finish by December 2026.</li>
        <li><strong>East Northside Drive intersection.</strong> Construction will affect access for nearby businesses.</li>
        <li><strong>Regional water agreement.</strong> The council has been voting on changes to the shared water contract. Water capacity and rates are a real cost for some members.</li>
        <li><strong>Highway 415 corridor.</strong> The stretch between Polk City and Ankeny, where most of the growth pressure sits.</li>
      </ul>`,
    matters: {
      heading: 'The one with a date on it',
      html: `<p>The trail connection has an actual deadline and an obvious upside. Cyclists and walkers coming through means more people passing your door. If you sell food, drinks, retail, rentals, or services, start planning for it now instead of noticing it next spring.</p>`,
    },
    sources: [
      { label: 'City agendas, minutes, and project notices', publisher: 'City of Polk City', url: 'https://www.polkcityia.gov/' },
      { label: 'Mayor and city council', publisher: 'City of Polk City', url: 'https://www.polkcityia.gov/mayor-council' },
    ],
  },
];

/* Sources we check. Shown near the bottom of the page. */
const WATCHLIST = [
  { label: 'City of Polk City', note: 'Council agendas and minutes. The most useful source on this list.', url: 'https://www.polkcityia.gov/' },
  { label: 'Polk County announcements', note: 'Grants, county programs, and supervisor decisions.', url: 'https://www.polkcountyiowa.gov/news-and-announcements/' },
  { label: 'Iowa Legislature', note: 'The official list of bills that became law, with effective dates.', url: 'https://www.legis.iowa.gov/law/statutory/acts/enrolledBills' },
  { label: 'Iowa Capital Dispatch', note: 'Nonprofit statehouse reporting. Good for the why behind a bill.', url: 'https://iowacapitaldispatch.com/' },
  { label: 'NFIB Iowa', note: 'Small business take on state laws. They advocate for a point of view, so read it as one side.', url: 'https://www.nfib.com/state-news/iowa' },
  { label: 'Business Record', note: 'Des Moines area business news. Covers Polk City regularly.', url: 'https://www.businessrecord.com/' },
  { label: 'Iowa Public Radio', note: 'Statewide news and policy coverage.', url: 'https://www.iowapublicradio.org/' },
  { label: 'Ballotpedia', note: 'Neutral reference on candidates, offices, and ballot questions.', url: 'https://ballotpedia.org/Iowa' },
  { label: 'Greater Des Moines Partnership', note: 'Now a direct partner through the economic development arrangement.', url: 'https://www.dsmpartnership.com/' },
];
