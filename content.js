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
const GROUPS = [
  {
    id: 'law',
    title: 'New laws',
    lede: 'The Iowa Legislature finished its work for the year on May 3. These are now law, or will be soon.',
  },
  {
    id: 'ballot',
    title: 'On the ballot November 3',
    lede: 'Two big open races and one question about taxes. The chamber does not tell you who to vote for. These entries explain what each choice decides, and give the argument on both sides.',
  },
  {
    id: 'local',
    title: 'Happening in Polk City',
    lede: 'City and county decisions that touch local businesses directly. This part changes the most.',
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
    title: 'U.S. House: check which district you are in',
    meta: 'Polk County is split between two districts',
    plain: 'Polk County is divided between the 3rd and 4th districts, so your neighbors down the road may not vote in the same race you do. Check your address.',
    body: `
      <p>Polk County is split between Iowa's 3rd and 4th congressional districts. That means the answer is different depending on where in the county you are.</p>
      <p>The 3rd District is held by Zach Nunn, a Republican. State Sen. Sarah Trone Garriott is running against him. It covers the eastern and southern parts of Polk County and is expected to be one of the closest House races in the country.</p>
      <p>The 4th District is an open seat, because Randy Feenstra ran for governor instead. Chris McGowan is the Republican nominee.</p>`,
    matters: {
      heading: 'How to check, and why bother',
      html: `<p>Use the Polk County district maps linked below, or call the Auditor's office. This is worth knowing even if you never vote. Your congressional office is who you call when a federal agency is holding something up, when a permit is stuck, or when you have an SBA problem. Calling the wrong one wastes a week.</p>`,
    },
    sources: [
      { label: 'District maps for Polk County', publisher: 'Polk County Auditor', url: 'https://www.polkcountyiowa.gov/county-auditor/election/election-maps/' },
      { label: '3rd District race overview', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/Iowa%27s_3rd_Congressional_District_election,_2026' },
      { label: 'How analysts rate the 3rd District race', publisher: 'Cook Political Report', url: 'https://www.cookpolitical.com/house/race/483096' },
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
