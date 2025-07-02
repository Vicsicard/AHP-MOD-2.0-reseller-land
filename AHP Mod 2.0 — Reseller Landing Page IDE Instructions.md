AHP Mod 2.0 — Reseller Landing Page IDE Instructions  
Goal: Create a clean, professional landing page to attract and onboard new resellers. Emphasize ease of use, passive income, and fully managed client handling.

🔧 Tech Stack  
Frontend Framework: Next.js or plain HTML/CSS/JS (based on project setup)

Styling: TailwindCSS (recommended for brand colors) or manual CSS

Hosting: Vercel

Fonts:

Primary: Inter

Secondary: Montserrat (Google Fonts)

Assets: Use official AHP Mod 2.0 logo and illustrations consistent with AI/digital imagery theme.

🧱 Folder Structure (example)  
bash  
Copy  
Edit  
/reseller-landing  
  ├── /assets  
  │    ├── logo.svg  
  │    ├── hero-bg.jpg  
  │    └── icons/  
  ├── /components  
  │    ├── HeroSection.jsx  
  │    ├── ProblemSection.jsx  
  │    ├── SolutionSection.jsx  
  │    ├── BenefitsSection.jsx  
  │    ├── StepsSection.jsx  
  │    ├── ClientValueSection.jsx  
  │    ├── UseCasesSection.jsx  
  │    ├── FAQSection.jsx  
  │    └── FinalCTASection.jsx  
  ├── index.jsx (or .html)  
  └── styles.css (or Tailwind config)  
🎨 Brand-Based Styling Guide  
Use the following tailored classes or CSS to match brand identity:

Typography  
css  
Copy  
Edit  
/\* Headline (Hero) \*/  
font-family: 'Montserrat';  
font-size: 56px;  
font-weight: 700;  
line-height: 1.1;

/\* Subheadline \*/  
font-family: 'Inter';  
font-size: 24px;  
font-weight: 400;

/\* Body \*/  
font-family: 'Inter';  
font-size: 18px;  
font-weight: 400;

/\* Buttons \*/  
font-family: 'Montserrat';  
font-weight: 600;  
font-size: 16px;  
letter-spacing: 0.02em;  
Colors  
css  
Copy  
Edit  
\--primary: \#8b5cf6;  
\--primary-light: \#a78bfa;  
\--primary-dark: \#7c3aed;  
\--secondary: \#10b981;  
\--accent: \#f59e0b;  
\--accent-light: \#fbbf24;  
\--dark: \#0f172a;  
\--dark-light: \#1e293b;  
\--gray: \#9ca3af;  
\--light: \#f9fafb;  
Use gradients like:

css  
Copy  
Edit  
background: linear-gradient(135deg, \#a78bfa, \#7c3aed); /\* Primary \*/  
🧩 Section-by-Section Build Instructions  
1\. Hero Section  
Background: Gradient overlay with abstract AI-themed image

Headline: Large, bold Montserrat

Subheadline: Inter font, medium size

CTA Button:

Text: “Become a Reseller”

Style: Primary Gradient \+ white text

On hover: scale 1.05 and slight glow

2\. The Problem Section  
Layout: Left-align text, with AI search icons or visuals on right

Tone: Educate with calm confidence

Key Element: Pull quote or bold stat like  
“60% of users now ask AI before Google”

3\. The Solution Section  
Card layout to describe key benefits

Icons: Simple line icons for: scans, schema, reports, tracking

Background: Light gray or dark-light depending on mood

4\. Why You Should Resell This  
Two-column layout

Left: Body copy

Right: Branded “Reseller Benefits” card

Highlight:

20% lifetime commission

No fulfillment or support needed

Branded portal \+ full tracking

5\. How It Works (Steps Section)  
Use Step Cards or Horizontal Stepper

Visual: Portal → Share → Get Paid

Background: Off-white

Add: optional SVG animation or Lottie

6\. What Your Clients Get  
Use a checklist UI block or 3-column grid

Focus: Peace of mind, real results, full automation

Tagline: “Show them what AI sees — and how to fix it.”

7\. Real-World Use Cases  
Carousel or stacked blocks with examples

Include a testimonial style quote for credibility

8\. FAQ Section  
Use collapsible accordion

Suggested questions:

“Is this hard to install?”

“Do I need to support clients?”

“How and when do I get paid?”

9\. Final CTA  
Background: Primary Gradient

Headline: “Launch Your Branded Reseller Portal Today”

CTA Button:

Text: “Become a Reseller Now”

Full width on mobile

Use pulse animation on hover

✨ Animations to Add  
Hero background: gradientFlow

CTA button: pulse on hover

Icons/Illustrations: float if standalone

css  
Copy  
Edit  
@keyframes pulse {  
  0% { opacity: 0.6; }  
  50% { opacity: 1; }  
  100% { opacity: 0.6; }  
}  
✅ Final Notes  
Forms: Integrate onboarding form directly or via modal → connected to backend

Stripe Payout Info: Place under FAQs or a mini section above final CTA

Performance Reports Visual: Use fake screenshot mockup with blurred data to visualize weekly reports

