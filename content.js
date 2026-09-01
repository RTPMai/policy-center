/* ==========================================================================
   POLK CITY AREA CHAMBER — BUSINESS POLICY CENTER
   CONTENT FILE

   This is the only file you need to edit to update the site.
   You do not need to touch index.html, styles.css, or app.js.

   HOW TO UPDATE
   1. Change REVIEWED_ON below to today's date.
   2. Add, edit, or delete entries in the ENTRIES list.
   3. Save. If you are using GitHub, commit the change.
      The site rebuilds itself within about a minute.

   RULES THAT WILL SAVE YOU A HEADACHE
   - Every entry needs a unique "id". Use lowercase words with dashes.
     The id becomes the entry's web address, so it is how you link
     directly to one item from Facebook or an email.
   - Once an entry is published, do not change its id. That would break
     any link already shared.
   - Keep quotes balanced. If the page goes blank after an edit, you have
     almost certainly got a stray quote or a missing comma.
   - Apostrophes are fine inside backtick blocks (`like this`) but must be
     escaped inside single quotes.
   ========================================================================== */

const SITE = {
  title: 'Business Policy Center',
  org: 'Polk City Area Chamber of Commerce',
  intro:
    'What is changing in state law, what is on the ballot, and what is moving locally — with a plain reading of what each one means for a business operating in the Polk City area. Every entry links to its source.',
  reviewedOn: 'September 1, 2026',
  cadence: 'Reviewed monthly',
  contactEmail: 'admin@polkcitychamber.com',
  chamberUrl: 'https://polkcitychamber.com',
};

/* Topic filters. Keep this list short — four or five is the limit before
   people stop reading them. The "id" must match the topics used in entries. */
const TOPICS = [
  { id: 'tax', label: 'Taxes & property' },
  { id: 'workforce', label: 'Hiring & workforce' },
  { id: 'development', label: 'Development & growth' },
  { id: 'elections', label: 'Elections' },
];

/* The lookup tools row at the top of the page. */
const TOOLS = [
  {
    title: 'Find your state legislators',
    blurb: 'Enter an address or ZIP to see who represents your business at the Statehouse, with contact information.',
    url: 'https://www.legis.iowa.gov/legislators/find',
  },
  {
    title: "Every legislator's email",
    blurb: 'Full contact list for the current General Assembly. Use a personal email when you write.',
    url: 'https://www.legis.iowa.gov/legislators/informationOnLegislators/allLegislators',
  },
  {
    title: 'Register or update to vote',
    blurb: 'Register online with an Iowa license or ID, check your status, or update after a move.',
    url: 'https://www.polkcountyiowa.gov/county-auditor/election/registerupdate-registration/',
  },
  {
    title: 'Find your polling place',
    blurb: "The Secretary of State's official precinct lookup. Polls open 7 a.m. to 8 p.m.",
    url: 'https://apps.sos.iowa.gov/elections/voterreg/pollingplace/search.aspx',
  },
  {
    title: 'Precinct and district maps',
    blurb: 'Confirm which congressional and legislative districts your address falls in.',
    url: 'https://www.polkcountyiowa.gov/county-auditor/election/election-maps/',
  },
  {
    title: 'Polk County elections office',
    blurb: 'Dates, absentee requests, candidate filings, and official results.',
    url: 'https://www.polkcountyiowa.gov/county-auditor/election/',
  },
  {
    title: 'Bills that became law',
    blurb: "The Legislature's official list of enrolled bills with effective dates.",
    url: 'https://www.legis.iowa.gov/law/statutory/acts/enrolledBills',
  },
  {
    title: 'Chamber business resources',
    blurb: 'Our standing list of funding, licensing and technical assistance partners.',
    url: 'https://polkcitychamber.com/business-resources',
  },
];

/* The three groups entries fall into. */
const GROUPS = [
  {
    id: 'law',
    title: 'Already law',
    lede: 'The 2026 Iowa legislative session adjourned May 3. These took effect over the summer or are phasing in now.',
  },
  {
    id: 'ballot',
    title: 'On the ballot November 3',
    lede: 'Iowa has two open top-of-ticket races for the first time since 1968, plus a constitutional amendment with direct tax consequences. The chamber does not endorse candidates. These entries describe what each race decides and give the arguments on both sides.',
  },
  {
    id: 'local',
    title: 'Moving locally',
    lede: 'City and county decisions with direct commercial consequences. This is the section most likely to change between reviews.',
  },
];

/* ==========================================================================
   ENTRIES

   Template for a new entry — copy this, fill it in, paste it into the list:

   {
     id: 'short-unique-name',
     group: 'law',                    // law, ballot, or local
     topics: ['tax'],                 // one or more topic ids
     title: 'Headline in plain words',
     meta: 'Bill number · date · status',
     body: `<p>What happened.</p>`,
     matters: {
       heading: 'What this means in Polk City',
       html: `<p>Why a local business owner should care.</p>`,
     },
     sources: [
       { label: 'Description of the link', publisher: 'Who published it', url: 'https://…' },
     ],
   },
   ========================================================================== */

const ENTRIES = [
  {
    id: 'property-tax-sf2472',
    group: 'law',
    topics: ['tax', 'development'],
    title: 'Property tax overhaul caps local revenue growth at 2% a year',
    meta: 'Senate File 2472 · signed May 18, 2026 · in effect',
    body: `
      <p>The law is projected to cut property taxes by about $4.2 billion over six years. The provisions that matter most to a business or a city budget:</p>
      <ul>
        <li>Local government general fund revenue growth is capped at 2% a year, with carve-outs for school funding, county supplemental levies and city special revenue levies. County hospitals get 4%; DART and emergency management get 3%.</li>
        <li>Cities and counties must hold general fund reserves to 35% of budgeted expenditures.</li>
        <li>A 10% homestead exemption, up to $20,000, adjusted for inflation.</li>
        <li>Multi-residential property is reclassified on its own starting in 2027, with rollbacks phased in — roughly a 6% increase over three years.</li>
        <li>TIF districts are limited to 23 years, and increment use drops to 60% with no new debt after year 20.</li>
        <li>The Business Property Tax Credit stays at $150,000, but the $125 million state backfill is redirected into a Tax Relief Fund.</li>
      </ul>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `
        <p>Our property tax base runs roughly 90% residential to 10% commercial. The city council has named commercial development its highest priority specifically to rebalance that split and take pressure off homeowners.</p>
        <p>A 2% cap on revenue growth lands hard on a city growing much faster than 2% a year. Every new rooftop adds demand for streets, water, police and parks, but revenue can no longer scale with that growth. That shows up as service pressure, deferred projects, or new fees — all of which reach local businesses.</p>
        <p>The TIF changes are the sharper point. TIF is a primary tool a city this size uses to make a commercial site work financially. A 23-year ceiling and a step-down after year 20 narrow the runway on exactly the deals Polk City is trying to land.</p>
        <p>If you own apartments or a mixed-use building, the multi-residential reclassification is a tax increase on you, phasing in from 2027. Worth a conversation with your accountant before budget season.</p>`,
    },
    sources: [
      { label: 'Full breakdown of what the law changes', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/05/18/gov-kim-reynolds-signs-property-tax-law-projected-to-save-4-2-billion-over-6-years/' },
      { label: 'Session recap written for small business owners', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: "The governor's statement on signing", publisher: 'Office of the Governor', url: 'https://governor.iowa.gov/press-release/2026-05-19/gov-reynolds-signs-property-tax-relief-bill-other-bills-law' },
      { label: 'Coverage of the signing and the debate behind it', publisher: 'The Gazette', url: 'https://www.thegazette.com/news/state/gov-kim-reynolds-signs-iowa-property-tax-reform-bill-into-law/article_4a1970f1-0cfa-497c-8f96-b557eae835c7.html' },
    ],
  },

  {
    id: 'business-court-sf639',
    group: 'law',
    topics: ['development'],
    title: 'Iowa sets up a dedicated business court',
    meta: 'Senate File 639 · in effect',
    body: `<p>Two judges will handle complex commercial litigation involving $500,000 or more in damages — business contracts, fraud, technology and IP licensing, trade secrets and non-competes, commercial real estate disputes, and shareholder or class actions.</p>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `<p>Mostly a signal rather than a daily change. The dollar threshold puts this out of reach for most Main Street disputes. It matters if you are negotiating a large contract, a franchise agreement, or a commercial lease, because faster and more predictable resolution changes what is worth fighting over. Most relevant to members in construction, development, and larger manufacturing.</p>`,
    },
    sources: [
      { label: 'What the business court covers', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
    ],
  },

  {
    id: 'faster-filings-sf629',
    group: 'law',
    topics: ['development'],
    title: 'Faster business filings at the Secretary of State',
    meta: 'Senate File 629 · effective July 1, 2026',
    body: `<p>The law speeds up entity filings and related paperwork at the Secretary of State's office.</p>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `<p>Small and genuinely useful. If you are forming an LLC, closing on a sale, or need a certificate of good standing to satisfy a lender, you should see shorter waits. Worth knowing before you plan around a filing deadline.</p>`,
    },
    sources: [
      { label: 'New laws taking effect this summer and fall', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/a-strong-season-for-iowa-small-business/' },
      { label: 'Iowa Secretary of State business services', publisher: 'sos.iowa.gov', url: 'https://sos.iowa.gov/business-services' },
    ],
  },

  {
    id: 'child-care-hf2514',
    group: 'law',
    topics: ['workforce'],
    title: 'Child care assistance for child care workers is now permanent',
    meta: 'House File 2514 · effective July 1, 2026',
    body: `<p>A pilot running since 2023 is now permanent. Child care workers can access Iowa's Child Care Assistance program regardless of income.</p>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `<p>This is a workforce story, not a social services story. Child care capacity is a hiring constraint for every employer in a community where most people commute. Making it easier for centers to staff up expands the number of local slots, which affects whether you can fill your own shifts. If you operate or are considering a center, this changes your staffing math directly.</p>`,
    },
    sources: [
      { label: 'What passed, what failed, and what is already law', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/05/04/the-2026-legislative-session-is-over-heres-what-passed-failed-and-what-is-already-iowa-law/' },
    ],
  },

  {
    id: 'startup-investment-sf2453',
    group: 'law',
    topics: ['development'],
    title: 'Regents universities must invest 1% of endowment in Iowa startups',
    meta: 'Senate File 2453 · compliance by July 1, 2027',
    body: `<p>Iowa, Iowa State and UNI will each direct 1% of unrestricted endowment assets into state-certified Iowa Innovation Funds — an estimated $39 to $49 million into Iowa startups. A waiver exists if market conditions make compliance impractical.</p>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `<p>Watch this rather than act on it. The funds have to be certified and stood up before capital moves. If you are building something scalable, the useful thing is knowing when those funds open. We will post it here when they do.</p>`,
    },
    sources: [
      { label: 'How the venture capital requirement works', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: 'State small business and entrepreneur resources', publisher: 'Opportunity Iowa', url: 'https://opportunityiowa.gov/business/small-business-entrepreneurs/small-business-resources' },
    ],
  },

  {
    id: 'cdl-english-sf2426',
    group: 'law',
    topics: ['workforce'],
    title: "Commercial driver's license applicants must pass an English test",
    meta: 'Senate File 2426 · in effect',
    body: `<p>Applicants for a CDL now have to pass an English proficiency test to be licensed.</p>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `<p>If you hire drivers — trucking, delivery, construction, agricultural operations — this is now a licensing step for anyone you are recruiting. It narrows an already tight driver pool. Factor it into hiring timelines.</p>`,
    },
    sources: [
      { label: 'Notable bills from the 2026 session', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/05/04/the-2026-legislative-session-is-over-heres-what-passed-failed-and-what-is-already-iowa-law/' },
    ],
  },

  {
    id: 'bills-returning-2027',
    group: 'law',
    topics: ['tax', 'workforce', 'development'],
    title: 'Three bills that died and will likely return in 2027',
    meta: 'Did not pass in 2026 · your comment window is open now',
    body: `
      <ul>
        <li><strong>Right to repair</strong> — would affect equipment dealers, repair shops, and farm operations.</li>
        <li><strong>Energy omnibus</strong> — utility and energy cost legislation for employers.</li>
        <li><strong>Penny rounding</strong> — cash transaction rounding at the register.</li>
      </ul>`,
    matters: {
      heading: 'What this means in Polk City',
      html: `
        <p>Bills that die in one session usually come back in the next. If any of these would affect how you operate, the time to say so is now — before the session opens in January, not in February when the bill is already moving and your legislator's position is set.</p>
        <p>Tell the chamber, and tell your legislator directly. The lookup tools at the top of this page will get you their contact information in about a minute.</p>`,
    },
    sources: [
      { label: 'Bills that did not cross the finish line', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: 'Find and contact your legislators', publisher: 'Iowa Legislature', url: 'https://www.legis.iowa.gov/legislators/find' },
    ],
  },

  {
    id: 'income-tax-amendment-sjr11',
    group: 'ballot',
    topics: ['tax', 'elections'],
    title: 'Constitutional amendment: supermajority to raise income taxes',
    meta: 'Senate Joint Resolution 11 · voters decide November 3',
    body: `
      <p>The amendment would require a two-thirds vote of both chambers to raise individual or corporate income tax rates, replacing the current simple majority. It cleared two consecutive General Assemblies, passing the House 57 to 21 on May 3, which is what puts it in front of voters.</p>
      <p>Context worth having: Iowa's income tax is currently a 3.8% flat rate. The FY2027 budget is $9.6 billion, up 1.43%, and carries roughly a $1.2 billion gap between revenue and spending that is planned to be covered from the Taxpayer Relief Fund.</p>`,
    matters: {
      heading: 'Both arguments, plainly',
      html: `
        <p>Supporters say it locks in a predictable, low-tax environment businesses can plan around for the long term, and acts as a safeguard against future increases.</p>
        <p>Opponents say it constrains future legislatures from responding to a downturn, and point at the budget gap as evidence the constraint could bind sooner than expected.</p>
        <p>The practical question for a business owner is what happens to the revenue mix if income tax rates become very hard to change. Pressure tends to move toward sales taxes, fees, and property taxes — the last of which was just capped at the local level. Read this and the property tax law together rather than separately.</p>`,
    },
    sources: [
      { label: 'The amendment, the vote count, and the budget context', publisher: 'NFIB Iowa', url: 'https://www.nfib.com/news/news/the-iowa-legislative-session-recap/' },
      { label: 'Sample ballots and election dates', publisher: 'Polk County Auditor', url: 'https://www.polkcountyiowa.gov/county-auditor/election/' },
    ],
  },

  {
    id: 'governor-race',
    group: 'ballot',
    topics: ['elections', 'tax'],
    title: 'Governor — open seat',
    meta: 'Zach Lahn (R) and Rob Sand (D) · rated a toss-up',
    body: `<p>Gov. Kim Reynolds is not seeking a third term, making this Iowa's first open governor's race since 2006. Lahn, a businessman and farmer, won a five-way Republican primary on June 2 by less than a percentage point over U.S. Rep. Randy Feenstra, 37.8% to 37.0%. Sand, the state auditor and the only Democrat holding statewide office in Iowa, ran unopposed. The Cook Political Report rates the race a toss-up.</p>`,
    matters: {
      heading: 'What this decides for business',
      html: `
        <p>The next governor sets the 2027 tax agenda. Property tax implementation, the follow-on effects of the 2% cap, and any changes to economic development incentives all run through that office.</p>
        <p>A competitive race also means both campaigns are actively looking for local audiences between now and November. If you would like to see a candidate in front of Polk City businesses, tell the chamber.</p>`,
    },
    sources: [
      { label: 'Candidates, dates, and past results', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/Iowa_gubernatorial_and_lieutenant_gubernatorial_election,_2026' },
      { label: 'How the primary finished', publisher: 'Iowa Capital Dispatch', url: 'https://iowacapitaldispatch.com/2026/06/02/rep-randy-feenstra-concedes-to-zach-lahn-in-2026-iowa-gop-gubernatorial-primary/' },
      { label: 'Where the Republican candidates stood going in', publisher: 'Iowa Public Radio', url: 'https://www.iowapublicradio.org/political-news/2026-05-15/2026-iowa-governors-race-republican-primary-candidates' },
    ],
  },

  {
    id: 'senate-race',
    group: 'ballot',
    topics: ['elections'],
    title: 'U.S. Senate — open seat',
    meta: 'Ashley Hinson (R), Josh Turek (D), Thomas Laehn (L)',
    body: `<p>Sen. Joni Ernst is retiring after two terms. Hinson currently represents Iowa's 2nd District; Turek is a state representative. Cook moved this seat from Lean Republican to Toss-up on August 20, citing the farm economy and a difficult national environment for Republicans. A recent poll showed Hinson ahead 48 to 45.</p>`,
    matters: {
      heading: 'What this decides for business',
      html: `
        <p>Tariffs and the farm economy are the live issue. Central Iowa's ag-adjacent businesses — equipment, inputs, transport, and the retail that depends on farm income — feel those before anyone else does.</p>
        <p>A toss-up Senate race in Iowa also means unusual candidate availability for local events. That is a practical opportunity for a chamber our size.</p>`,
    },
    sources: [
      { label: 'Candidates and race overview', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/United_States_Senate_election_in_Iowa,_2026' },
      { label: 'Background on the open seat', publisher: 'Ballotpedia News', url: 'https://news.ballotpedia.org/2026/08/06/turek-hinson-running-for-open-u-s-senate-seat-in-iowa-as-ernst-retires/' },
    ],
  },

  {
    id: 'congressional-district',
    group: 'ballot',
    topics: ['elections'],
    title: 'U.S. House — confirm which district you are in',
    meta: 'Polk County is split between two districts',
    body: `
      <p>Polk County is divided between Iowa's 3rd and 4th congressional districts, so the answer is not the same for everyone in the county.</p>
      <p>The 3rd District, held by Zach Nunn (R) and challenged by state Sen. Sarah Trone Garriott (D), covers the eastern and southern portions of Polk County and is expected to be one of the most competitive House races in the country. The 4th District is an open seat, since Randy Feenstra ran for governor, with Chris McGowan as the Republican nominee.</p>`,
    matters: {
      heading: 'How to check',
      html: `<p>Use the Polk County precinct and district maps, or call the Auditor's elections office. Your district determines which congressional office handles federal casework for your business — permits, agency problems, SBA issues — so it is worth knowing for reasons that have nothing to do with voting.</p>`,
    },
    sources: [
      { label: 'Precinct and district maps for Polk County', publisher: 'Polk County Auditor', url: 'https://www.polkcountyiowa.gov/county-auditor/election/election-maps/' },
      { label: '3rd District race overview', publisher: 'Ballotpedia', url: 'https://ballotpedia.org/Iowa%27s_3rd_Congressional_District_election,_2026' },
      { label: 'Race rating and analysis', publisher: 'Cook Political Report', url: 'https://www.cookpolitical.com/house/race/483096' },
    ],
  },

  {
    id: 'economic-development-manager',
    group: 'local',
    topics: ['development'],
    title: 'Polk City now has a part-time economic development manager',
    meta: 'Greater Des Moines Partnership pilot · began July 2026',
    body: `<p>Under a pilot between the city and the Greater Des Moines Partnership, the Partnership hired Jake Smith as an Economic Development Manager, based in Polk City two days a week starting mid-July.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `
        <p>There is now a named person with metro-level business recruitment resources spending regular time in town. If you are looking to expand, relocate, find space, or connect with a prospect, this is a door that did not exist a year ago.</p>
        <p>Tell the chamber what you are looking for and we will make sure it reaches the right people.</p>`,
    },
    sources: [
      { label: 'Council packet announcing the pilot', publisher: 'City of Polk City', url: 'https://www.polkcityia.gov/sites/g/files/vyhlif5571/f/agendas/1_cc_agenda_july_13_2026_full_packet.pdf' },
      { label: 'Partnership benefits available to chamber members', publisher: 'Greater Des Moines Partnership', url: 'https://www.dsmpartnership.com/investors-and-affiliate-network/regional-chamber-members/member-benefits' },
    ],
  },

  {
    id: 'cdbg-funding',
    group: 'local',
    topics: ['development'],
    title: 'Polk County renews Community Development Block Grant funding',
    meta: 'Announced August 11, 2026',
    body: `<p>Polk County was awarded $2.5 million in federal HUD funding to continue its Community Development Block Grant program, and now qualifies for up to $987,000 each year. Polk City is one of nine participating cities, alongside Altoona, Bondurant, Clive, Grimes, Johnston, Pleasant Hill, Urbandale and Windsor Heights, plus unincorporated Polk County.</p>`,
    matters: {
      heading: 'What this means for you',
      html: `<p>Each participating city decides its own eligible activities, and those can shift year to year — sidewalks, utilities, accessibility, infrastructure. If your business sits in an area due for streetscape or accessibility work, being in that conversation early is how you influence timing and scope rather than finding out when the barriers go up.</p>`,
    },
    sources: [
      { label: 'Announcement and participating cities', publisher: 'Polk County', url: 'https://www.polkcountyiowa.gov/news-and-announcements/polk-county-announces-continuation-of-federal-community-development-block-grants-cdbg/' },
    ],
  },

  {
    id: 'commercial-residential-imbalance',
    group: 'local',
    topics: ['development', 'tax', 'workforce'],
    title: 'The commercial and residential imbalance is the through-line',
    meta: 'City comprehensive planning and council priorities',
    body: `<p>Polk City is among the fastest-growing cities in its peer group, at roughly 6,500 residents. Retail and commercial development has not kept pace with residential growth. In community input for the comprehensive plan, 74% of residents named lack of jobs a weakness, and commercial development was identified as the number one weakness overall. City leadership has described establishing more commercial development as the council's highest priority.</p>`,
    matters: {
      heading: 'Why the chamber keeps returning to this',
      html: `
        <p>Residents, the council, and the business community all want the same thing here, which is rare. That alignment is our strongest position when we speak to the city or to legislators.</p>
        <p>It also connects to housing. More than half the homes on the market have been priced at $500,000 and up, and most people working at Polk City businesses do not live in Polk City. Workforce housing is a business issue, not only a residential one. If it affects your ability to hire, tell us — that is the evidence the chamber needs to make the case.</p>`,
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
    title: 'Projects to keep an eye on',
    meta: 'Standing watchlist · status verified each review',
    body: `
      <ul>
        <li><strong>510 S. 3rd Street development</strong> — the city issued an RFP and has been reviewing developer proposals.</li>
        <li><strong>Neal Smith Trail to High Trestle Trail connection</strong> — targeted for completion by December 2026.</li>
        <li><strong>East Northside Drive intersection improvements</strong> — construction access and detours affect nearby businesses.</li>
        <li><strong>Central Iowa Water Works agreement</strong> — the council has been acting on amendments to the regional 28E water agreement. Water capacity and rates are a direct input cost for some members.</li>
        <li><strong>Highway 415 corridor</strong> — the growth corridor between Polk City and Ankeny, where much of the commercial pressure sits.</li>
      </ul>`,
    matters: {
      heading: 'The one with a date on it',
      html: `<p>The trail connection is the rare item with a specific completion target and an obvious commercial upside. If you are positioned to catch trail traffic — food, retail, rentals, services — plan for it now rather than discovering it next spring.</p>`,
    },
    sources: [
      { label: 'City agendas, minutes and project notices', publisher: 'City of Polk City', url: 'https://www.polkcityia.gov/' },
      { label: 'Mayor and city council', publisher: 'City of Polk City', url: 'https://www.polkcityia.gov/mayor-council' },
    ],
  },
];

/* Sources listed in the footer section. */
const WATCHLIST = [
  { label: 'City of Polk City', note: 'Council packets, RFPs, development items. The highest-value source on this list.', url: 'https://www.polkcityia.gov/' },
  { label: 'Polk County news and announcements', note: 'Grants, county programs, supervisor actions.', url: 'https://www.polkcountyiowa.gov/news-and-announcements/' },
  { label: 'Iowa Legislature enrolled bills', note: 'The authoritative list of what passed, with effective dates.', url: 'https://www.legis.iowa.gov/law/statutory/acts/enrolledBills' },
  { label: 'Iowa Capital Dispatch', note: 'Nonprofit statehouse coverage. Good for why something passed, not just that it did.', url: 'https://iowacapitaldispatch.com/' },
  { label: 'NFIB Iowa', note: 'Small business framing on state legislation. Advocacy-oriented, so read it as one perspective.', url: 'https://www.nfib.com/state-news/iowa' },
  { label: 'Business Record', note: 'Des Moines metro business and development reporting. Covers Polk City regularly.', url: 'https://www.businessrecord.com/' },
  { label: 'Iowa Public Radio', note: 'Statewide political and policy coverage.', url: 'https://www.iowapublicradio.org/' },
  { label: 'Ballotpedia Iowa', note: 'Neutral reference on candidates, offices, and ballot measures.', url: 'https://ballotpedia.org/Iowa' },
  { label: 'Greater Des Moines Partnership', note: 'A direct partner through the economic development pilot.', url: 'https://www.dsmpartnership.com/' },
];
