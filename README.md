## The files

| File | What it does | Do you edit it? |
| --- | --- | --- |
| `content.js` | Every word on the page. Entries, sections, links, dates. | **Yes. This is the one.** |
| `index.html` | The page skeleton | Rarely |
| `styles.css` | Colors, type, layout | Only to change the look |
| `app.js` | Sections, search, share links | No |
| `assets/` | The chamber logos and the social share card | No |
| `robots.txt`, `sitemap.xml` | Tell search engines the site exists | Once, if the domain changes |

### How the page is organised

It is one file, but it behaves like five pages. Members land on a home screen with five cards and pick where to go, instead of scrolling a wall of text.

- **Home** shows the four section cards and the quick answer tools.
- **Grants**, **Ballot**, **Taxes**, **New laws**, and **Polk City** are the five sections. Each is its own screen.
- **Words and sources** holds the glossary and the source list.
- **Search** works across every section at once, from any screen.

Adding a section to the `GROUPS` list in `content.js` automatically adds a card on the home page and an item in the top menu. You do not have to touch anything else.

### The colors

Every color on the site comes out of the chamber logo, and each section is tied to one of the four seasons in the roundel.

| Section | Season | Color |
| --- | --- | --- |
| Grants | Summer sun | `#F19C30` |
| Ballot | Winter | `#68A1B8` |
| Taxes | Wordmark navy | `#002734` |
| New laws | Spring leaf | `#838E52` |
| Polk City | Autumn leaf | `#A36437` |

Navy `#002734` from the wordmark carries the text, the header, and the footer. To change any of them, edit the variables at the top of `styles.css`.

The logo files in `assets/` were rebuilt from the originals. The versions you sent were about 14 MB each, because Illustrator had packed every artboard and a large embedded image into them. These are the same artwork at roughly 40 KB, which matters on a phone.

---

## Part 1. Put it online

You need two free accounts: **GitHub** (stores the files) and **Vercel** (serves them to the public). Roughly 20 minutes the first time.

### Step 1. Create the GitHub repository

1. Sign up or sign in at [github.com](https://github.com).
2. Click **+** in the top right, then **New repository**.
3. Name it `policy-center`. Leave it **Public**. Do not check any of the "initialize" boxes.
4. Click **Create repository**.

### Step 2. Upload the files

1. On the new empty repository page, click **uploading an existing file**.
2. Drag in the five files: `index.html`, `styles.css`, `content.js`, `app.js`, `README.md`. Then click **Add file, Upload files** again and drag in the whole `assets` folder, which holds the three logos. GitHub keeps the folder structure.
3. In the box at the bottom write `Initial version`, then click **Commit changes**.

### Step 3. Connect Vercel

1. Go to [vercel.com](https://vercel.com) and choose **Continue with GitHub**.
2. Click **Add New… → Project**.
3. Find `policy-center` in the list and click **Import**.
4. Do not change any settings. Framework Preset should say *Other*. Click **Deploy**.
5. After about a minute you get a live address like `policy-center.vercel.app`.

That address is public immediately. Every time you change a file on GitHub, Vercel rebuilds the site automatically within a minute or so.

### Step 4. Link it from the chamber website

Two options, and you can do both.

**Simplest:** in the GoDaddy editor, add a nav item or a button on the Business Resources page pointing at the Vercel address. Two minutes, no technical work.

**Better looking:** point a subdomain at it, so members see `policy.polkcitychamber.com` instead of a vercel.app address. In Vercel, open the project, go to **Settings → Domains**, type the subdomain, and Vercel shows you one DNS record to add. Add that record in GoDaddy under **My Products → DNS**. It usually takes under an hour to work.

---

## Part 2. The monthly update

**You only ever open `content.js`.**

### Doing it in the browser

1. Go to your repository on GitHub and click `content.js`.
2. Click the pencil icon to edit.
3. Make your changes.
4. Scroll down, write a short note like `September review`, click **Commit changes**.
5. Wait about a minute, then reload the live site.

### What to change each month

**Always move the two dates.** Near the top of `content.js`:

```js
reviewedOn: 'September 1, 2026',
reviewedOnISO: '2026-09-01',

previousReviewISO: '',
previousReviewLabel: '',
```

Each time you review, copy the old `reviewedOnISO` into `previousReviewISO`, copy the old `reviewedOn` into `previousReviewLabel`, then set the two `reviewedOn` fields to today.

That one step is what makes the site show a green **New** badge on anything added since last time, an **Updated** badge on anything you rewrote, a "What changed" list on the home page, and a counter in the menu. Members who visited last month can see what is different in ten seconds instead of rereading everything.

On the very first launch, leave both previous fields empty. Everything is new, so badging all of it would just be noise.

A stale date on a page like this does more damage than no page at all. If you did not actually review it, do not change the date. But do not leave a three month old date sitting there either.

**Add a new entry.** Copy the template in the comment block above the `ENTRIES` list, fill it in, and paste it into the list. New entries go at the top of their section. Set `added` to today's date in `2026-10-01` form.

**Rewrote an existing entry?** Add `updated: '2026-10-01'` to it. Leave `added` alone.

**Write the `plain` line carefully.** That one sentence is what shows on the closed card, before anyone clicks. For most readers it is the only thing they will read. Write it the way you would explain it to a member across the counter. No bill numbers, no jargon, just what changed and whether they should care.

**Add any hard words to the glossary.** If you have to use a term like TIF or rollback, add it to the `GLOSSARY` list in the same file. It renders on the Words and Sources page automatically.

**Retiring an old entry? Archive it, never delete it.** Add `archived: true`. See the note in `content.js` for why this matters.

**Rewrite the "what this means" paragraphs.** Do not just copy them forward. That plain language explanation is the whole point of the page. The raw facts are on any news site.

### Put November 4 on the calendar right now

The Ballot section has an expiry date built into it:

```js
expires: '2026-11-03',
```

From November 4 onward, the site automatically shows an "Out of date" badge on the home page card, a warning dot in the menu, and a red banner across the top of the section. That stops anyone reading finished races as current information, but it is a safety net, not a fix.

Someone needs to actually rewrite that section with the results and what they mean for local business. Ideally within a week. When you do, delete the `expires` and `expiredNote` lines and change the `badge`.

### The three rules

1. Every entry needs a unique `id`, in lowercase with dashes. That `id` becomes the item's web address.
2. **Never change an `id` after it is published.** Links already shared on Facebook or by email would break.
3. Keep quotes and commas balanced. This is the only thing that will break the page.

---

## Part 3. Sharing single items

Every entry has its own link. Open an entry and click **Copy link to this item**, or just copy what is in the browser address bar. You get something like:

```
https://policy.polkcitychamber.com/#property-tax-sf2472
```

Anyone opening that link lands in the right section with the entry already expanded and highlighted. Useful for social posts, member emails, and answering a specific question without making someone hunt for it.

You can also link straight to a whole section, which is handy when you post about a topic rather than a single item:

```
https://policy.polkcitychamber.com/#/grants
https://policy.polkcitychamber.com/#/ballot
```

---

## Part 4. If something goes wrong

**The page is blank or half-rendered.**
Almost always a typo in `content.js`. Usually a missing comma, an unmatched quote, or a stray backtick. Open the live page, press F12, and look at the Console tab. It will name the line. If you cannot spot it, revert: on GitHub, open `content.js`, click **History**, find the last version that worked, and restore it.

**Apostrophes.** Inside backticks (`` ` ``) apostrophes are fine. Inside single quotes they are not. Write `'the city\'s plan'` or switch that value to double quotes.

**The logos do not show up.** Check that the `assets` folder made it into the repository with all four files inside, three SVGs and one PNG. On GitHub, the folder should appear in the file list next to `index.html`.

**Shared links show no picture on Facebook or LinkedIn.** The share card lives at `assets/social-card.png` and the address is written into `index.html` as `https://polkcitychamber.com/assets/social-card.png`. If the site ends up on a different domain, update those four lines or the picture will not load. Social platforms cache aggressively, so use Facebook's Sharing Debugger to force a refresh after a change.

**Fonts look plain.** The page loads Fraunces and Public Sans from Google Fonts. If those are blocked it falls back to Georgia and a system sans. Everything still works, it just looks plainer.

**Nothing changed after I committed.** Open your project on Vercel and check the Deployments tab. If the newest one is red, click it to see the error. Give it a full minute, then hard-refresh with Ctrl+Shift+R or Cmd+Shift+R.

---

## Before you launch

- [ ] Double check the Senate District 23 Republican nominee on a sample ballot or at polkelectionia.gov. Wes Enos defeating Mike Bousselot is well sourced but is the one primary result not confirmed against a second independent source.
- [ ] Get the property assessment protest window from the Polk County Assessor and add the dates to the Iowa tax entry. That entry currently calls it the most overlooked date on the list and then does not give the date.
- [ ] Spot check three or four of the grant programs against their source links. Deadlines and dollar amounts move every year and these were accurate as of the review date only.
- [ ] Confirm whether Polk City is a designated Main Street Iowa community. If it is, add the Open 4 Business grant, which runs $5,000 to $25,000 for businesses in designated districts.
- [ ] Open the site on a phone and walk all five sections. That is how most members will see it.
- [ ] Have a board member read every "what this means" paragraph for tone and fairness.
- [ ] Decide who owns the monthly review, by name, and put it on a calendar.
- [ ] Confirm the board is comfortable with the "Where the chamber stands on politics" statement in `index.html`.

## A note on the grants section

Grant deadlines and award amounts change annually. Treat that section as the shortest-lived content on the page and check it every time you review.

Two things it deliberately tells members that most grant lists do not. First, which programs are closed to for-profit businesses, so nobody wastes a week on an application they were never eligible for. Second, that anyone charging a fee to get you a government grant is running a scam. Both of those are worth keeping in as you edit.

---

## Two things to switch on after launch

**Analytics.** `index.html` already loads Vercel's privacy-friendly analytics. To turn it on, open your project on Vercel, go to the Analytics tab, and click Enable. No cookies, no personal data. This is also the evidence base for the impact reporting the chamber has discussed, so it is worth having running early.

**Google Search Console.** Add the site, then submit `sitemap.xml`. One honest limitation: because section addresses use a `#`, search engines only ever see the home page. Someone searching for "Polk City chamber property tax" will not land on that entry. Fixing that properly means rebuilding the addressing without hashes, which is a bigger job. Until then, treat social posts and email as the way people find specific items, and search engines as the way they find the site at all.

## A hard rule about the Taxes section

Never let that section drift into advice. It describes what changed and names the provisions to ask a professional about. It does not tell anyone what to deduct, and it must not start to.

Two reasons. A member who acts on wrong guidance from the chamber gets hurt and the chamber is the reason. And tax outcomes depend on entity type, income, and specifics nobody writing a web page can know.

If a member asks the office a specific tax question, the answer is a referral, not an answer.

While researching that section we found accounting firm blog posts contradicting each other on basic figures for the same tax year, some apparently describing repealed law. That is why the entries carry very few dollar amounts and point at IRS pages instead. Keep it that way when you update them.

## A note on neutrality

This page reports what a law or measure does and gives the argument on both sides where there is a real dispute. It does not endorse candidates.

If the chamber adopts a position on a business issue, say so plainly and separately, as a board position. Do not let advocacy language drift into the factual entries. That separation is what keeps the page trustworthy to members across the political spectrum, and it is much easier to maintain than to repair.
