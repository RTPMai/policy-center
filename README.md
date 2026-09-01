# Business Policy Center

A public web page for the Polk City Area Chamber of Commerce. It explains what state law, the November ballot, and local decisions mean for businesses in the Polk City area, with every claim linked to its source.

Plain HTML, CSS and JavaScript. No build step, no framework, no database, no monthly cost.

---

## The files

| File | What it does | Do you edit it? |
| --- | --- | --- |
| `content.js` | Every word on the page. Entries, links, dates. | **Yes. This is the one.** |
| `index.html` | The page skeleton | Rarely |
| `styles.css` | Colors, type, layout | Only to change the look |
| `app.js` | Search, filters, share links | No |

The brand amber is set once, at the top of `styles.css`, as `--brand`. Change that one line and the whole page follows.

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
2. Drag in all five files: `index.html`, `styles.css`, `content.js`, `app.js`, `README.md`.
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

**Always change the date.** Near the top of `content.js`:

```js
reviewedOn: 'September 1, 2026',
```

A stale date on a page like this does more damage than no page at all. If you did not actually review it, do not change the date. But do not leave a three month old date sitting there either.

**Add a new entry.** Copy the template in the comment block above the `ENTRIES` list, fill it in, and paste it into the list. New entries go at the top of their section.

**Write the `plain` line carefully.** That one sentence is what shows on the closed card, before anyone clicks. For most readers it is the only thing they will read. Write it the way you would explain it to a member across the counter. No bill numbers, no jargon, just what changed and whether they should care.

**Add any hard words to the glossary.** If you have to use a term like TIF or rollback, add it to the `GLOSSARY` list in the same file. It renders near the bottom of the page automatically.

**Retire an old entry.** Delete it, or move it down. Anything more than a year old and no longer live should come off.

**Rewrite the "what this means" paragraphs.** Do not just copy them forward. That plain language explanation is the whole point of the page. The raw facts are on any news site.

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

Anyone opening that link lands with the entry already expanded and highlighted. Useful for social posts, member emails, and answering a specific question from a member without making them hunt.

---

## Part 4. If something goes wrong

**The page is blank or half-rendered.**
Almost always a typo in `content.js`. Usually a missing comma, an unmatched quote, or a stray backtick. Open the live page, press F12, and look at the Console tab. It will name the line. If you cannot spot it, revert: on GitHub, open `content.js`, click **History**, find the last version that worked, and restore it.

**Apostrophes.** Inside backticks (`` ` ``) apostrophes are fine. Inside single quotes they are not. Write `'the city\'s plan'` or switch that value to double quotes.

**Fonts look plain.** The page loads Fraunces and Public Sans from Google Fonts. If those are blocked it falls back to Georgia and a system sans. Everything still works, it just looks plainer.

**Nothing changed after I committed.** Open your project on Vercel and check the Deployments tab. If the newest one is red, click it to see the error. Give it a full minute, then hard-refresh with Ctrl+Shift+R or Cmd+Shift+R.

---

## Before you launch

- [ ] Confirm which congressional district Polk City is in, with the Polk County Auditor, and fill in the `congressional-district` entry properly.
- [ ] Have a board member read every "what this means" paragraph for tone and fairness.
- [ ] Decide who owns the monthly review, by name, and put it on a calendar.
- [ ] Confirm the board is comfortable with the "How the chamber handles politics" statement in `index.html`.

---

## A note on neutrality

This page reports what a law or measure does and gives the argument on both sides where there is a real dispute. It does not endorse candidates.

If the chamber adopts a position on a business issue, say so plainly and separately, as a board position. Do not let advocacy language drift into the factual entries. That separation is what keeps the page trustworthy to members across the political spectrum, and it is much easier to maintain than to repair.
