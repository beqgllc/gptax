import { useState, useEffect } from "react";

// ============================================================
// DATA
// ============================================================

const COURSE_MODULES = [
  {
    id: "m1",
    title: "What Is Prompt Taxonomy?",
    emoji: "🧬",
    lessons: [
      {
        id: "m1l1",
        title: "The Hierarchy Explained",
        type: "lesson",
        content: `
## What Is Prompt Taxonomy Hierarchy?

Prompt Taxonomy Hierarchy is a **structured system for organizing and layering different types of prompts** to get the most intentional, high-quality output from AI like ChatGPT.

Think of it like a **mixing board** in a recording studio. Every fader controls a different element — and when all the levels work together, the song hits different than when you're just winging it.

### The 7 Layers of Prompt Taxonomy (for Songwriting)

| Layer | Name | What It Controls |
|-------|------|-----------------|
| 1 | **Master Context** | Who you are, your overall project, your style DNA |
| 2 | **Theme / Concept** | What the song is *about* at its core |
| 3 | **Voice & Writing Style** | How the words sound — poetic, gritty, cinematic, sparse |
| 4 | **Rules & Constraints** | Structure, syllable limits, what you DO require |
| 5 | **Guidelines** | Soft preferences — tone, mood, feel |
| 6 | **Revision Instructions** | How to refine, sharpen, and iterate |
| 7 | **Anti-AI / Avoid List** | What to *never* use — clichés, overused words, AI-tell phrases |

### Why Hierarchy Matters

Without a hierarchy, you get **scatter-shot output** — ChatGPT guessing at what you want. With hierarchy, each layer *narrows the target* until the AI is working inside your specific creative world.

> **Key Insight:** The more layers you stack, the less "AI" the lyrics sound — and the more *you* they sound.
        `,
        quiz: [
          {
            q: "What is the PRIMARY purpose of Prompt Taxonomy Hierarchy?",
            options: [
              "To make prompts longer so ChatGPT writes more",
              "To organize and layer prompt types for more intentional, high-quality output",
              "To confuse the AI into being more creative",
              "To only use one type of prompt at a time"
            ],
            answer: 1,
            explanation: "Taxonomy Hierarchy is about structure and intentionality — stacking layers to guide AI toward your specific creative vision."
          },
          {
            q: "Which layer in the hierarchy controls WHO you are as an artist?",
            options: ["Theme / Concept", "Rules & Constraints", "Master Context", "Voice & Writing Style"],
            answer: 2,
            explanation: "Layer 1 — Master Context — establishes your identity, project, and style DNA. Everything else builds on top of it."
          },
          {
            q: "True or False: You only need ONE layer of prompting to get great song lyrics from ChatGPT.",
            options: ["True — keep it simple", "False — layering is what narrows the target and removes the AI feel", "True, if the prompt is long enough", "False — you need exactly 3 layers, no more"],
            answer: 1,
            explanation: "A single flat prompt leaves too much to interpretation. Hierarchy narrows the creative window until the output sounds like YOU."
          }
        ]
      },
      {
        id: "m1l2",
        title: "Flat Prompt vs. Layered Prompt",
        type: "lesson",
        content: `
## Flat Prompt vs. Layered Prompt

### The Flat Prompt (What most people do)

> *"Write me a sad rap verse about losing someone."*

**What you get:** Generic grief imagery. Probably mentions tears, empty rooms, looking at old photos, maybe a "hole in my heart." It sounds like every other AI-generated song.

---

### The Layered Prompt (What Taxonomy does)

**Layer 1 — Master Context:**
> *"You are writing for an independent hip-hop artist who blends street realism with poetic introspection. The aesthetic sits between early J. Cole and Kendrick's DAMN. — personal but cinematic."*

**Layer 2 — Theme:**
> *"This verse is about the specific silence that follows losing someone to addiction — not their death, but their disappearance into the drug. The grief of watching someone still alive become unreachable."*

**Layer 3 — Voice:**
> *"Conversational but literary. Specific details over generalizations. Short punchy lines mixed with longer, breathier ones. No rhyme forced — only rhymes that earn their place."*

**Layer 7 — Anti-AI:**
> *"Never use: faded, hollow, broken, empty, shattered, void, fade away, heavy heart, tears fall, can't explain, words can't describe."*

**What you get:** A verse with a specific point of view, earned imagery, and a voice that sounds like a real person — not a lyric generator.

---

### The Core Principle

> **Flat prompts produce flat lyrics. Layered prompts produce layered meaning.**

The difference between these two approaches is the difference between a stock beat and a custom-produced record. Same tool — completely different result based on how you use it.
        `,
        quiz: [
          {
            q: "A flat prompt like 'write a sad love song' will most likely produce:",
            options: [
              "Highly specific, personal lyrics unique to your style",
              "Generic imagery and AI-default phrases that sound like every other AI lyric",
              "A perfectly structured song with no clichés",
              "Exactly what you envisioned"
            ],
            answer: 1,
            explanation: "Without context, constraints, or style direction, AI defaults to the most common patterns it's been trained on — which is exactly what you DON'T want."
          },
          {
            q: "Which layer is most critical for removing 'AI tell' from lyrics?",
            options: ["Theme / Concept", "Master Context", "Anti-AI / Avoid List", "Guidelines"],
            answer: 2,
            explanation: "Layer 7 — the Anti-AI / Avoid List — directly blocks the overused words and phrases that make lyrics sound artificially generated."
          }
        ]
      }
    ]
  },
  {
    id: "m2",
    title: "Layer 1: Master Context Prompt",
    emoji: "🎛️",
    lessons: [
      {
        id: "m2l1",
        title: "Building Your Master Context",
        type: "lesson",
        content: `
## Layer 1: The Master Context Prompt

The Master Context Prompt is your **artist brief** — the foundational document you paste at the start of every ChatGPT session. It tells the AI who you are *before* you make a single creative request.

### What Goes in a Master Context?

1. **Your Artist Identity** — Who are you as an artist? What's your lane?
2. **Your Reference Points** — Artists, albums, films, books that live in your aesthetic world
3. **Your Subject Matter** — What themes do you return to? What's your obsessive territory?
4. **Your Sonic/Lyrical DNA** — Internal rhyme? Syllabic density? Sparse minimalism? Spoken word cadence?
5. **Your Tone Defaults** — Raw? Cinematic? Introspective? Combative?
6. **Your Project Context** — Is this a mixtape? An EP? A concept album? A one-off record?

---

### Master Context Template

\`\`\`
You are a co-writer working with [ARTIST NAME], an independent [GENRE] artist. 

Aesthetic DNA: [ARTIST REF 1], [ARTIST REF 2], [FILM/BOOK REF if applicable]

My subject territory: [2-3 sentence description of your themes/obsessions]

My lyrical approach: [How do you write? Dense multisyllabics? Storytelling? Abstract? Direct?]

Default tone: [Introspective / Raw / Cinematic / Aggressive / Tender / etc.]

Current project: [What are you working on? What's the overarching concept?]

Unless I tell you otherwise, always assume this context when writing with me.
\`\`\`

---

### Example: Filled-In Master Context

\`\`\`
You are a co-writer working with BOSS, an independent hip-hop artist.

Aesthetic DNA: early J. Cole, Kendrick's DAMN., Nas's Illmatic, The Wire (TV show) as a narrative reference

My subject territory: Black masculinity, loyalty as a survival mechanism, the tension between 
street life and spiritual awareness, grief that doesn't get to be public.

My lyrical approach: Conversational but literary. I use specific details over abstraction. 
I value internal rhyme and multisyllabic density but never sacrifice natural speech rhythm 
for a forced rhyme.

Default tone: Introspective with flashes of cinematic intensity.

Current project: A 7-track EP about the year after losing my best friend — 
grief, debt, and who I became without him watching.

Unless I tell you otherwise, always assume this context when writing with me.
\`\`\`

---

### Pro Tip: Save This as a Pinned Instruction

In ChatGPT, you can save your Master Context in **Custom Instructions** (Settings → Personalization → Custom Instructions) so it applies to *every* chat automatically — no copy-paste required.
        `,
        quiz: [
          {
            q: "Where in ChatGPT can you save your Master Context so it applies automatically?",
            options: [
              "In a saved message",
              "Custom Instructions (Settings → Personalization)",
              "You have to paste it every time — there's no shortcut",
              "In the system prompt tab"
            ],
            answer: 1,
            explanation: "ChatGPT's Custom Instructions feature lets you set persistent context that automatically applies to all new conversations."
          },
          {
            q: "Your Master Context should include your reference artists because:",
            options: [
              "ChatGPT will copy those artists' lyrics",
              "It gives AI a stylistic compass — calibrating tone, density, and emotional approach without having to explain each",
              "It makes ChatGPT feel more respected",
              "Reference artists don't matter for prompt context"
            ],
            answer: 1,
            explanation: "Artists serve as shorthand for complex aesthetic bundles — mentioning J. Cole vs. Drake vs. Travis Scott instantly shifts the output's entire texture."
          },
          {
            q: "Why does 'Current Project' context matter in the Master Prompt?",
            options: [
              "It doesn't — ChatGPT ignores it",
              "It locks ChatGPT into only writing about that project",
              "It keeps all generated lyrics tonally and thematically coherent with the larger body of work",
              "It helps ChatGPT write the song's title"
            ],
            answer: 2,
            explanation: "When AI knows the bigger picture — a concept EP about grief, for example — individual song requests arrive in a context that shapes every word choice."
          }
        ]
      }
    ]
  },
  {
    id: "m3",
    title: "Layer 2–3: Theme & Voice",
    emoji: "🎭",
    lessons: [
      {
        id: "m3l1",
        title: "Crafting Theme Prompts",
        type: "lesson",
        content: `
## Layer 2: Theme / Concept Prompts

A theme prompt is *not* just a topic. It's a **specific emotional territory with a point of view**.

### The Difference: Topic vs. Theme

| Topic (Weak) | Theme (Strong) |
|---|---|
| "Write about heartbreak" | "Write about the version of heartbreak that arrives weeks later, when you're at the grocery store and realize you'll never buy her favorite snack again" |
| "Write about success" | "Write about the guilt of being the one who made it out — and what 'made it' even means when the people you left behind are still there" |
| "Write about loyalty" | "Write about the specific cost of loyalty to someone who never asked you to be loyal — the sacrifice they didn't even know you made" |

> **Rule:** The more *specific* the emotional situation, the more *universal* the response it creates in listeners.

---

### Theme Prompt Formula

\`\`\`
This [verse/hook/bridge/song] is about: [SPECIFIC SITUATION]

The emotional core is: [THE FEELING UNDERNEATH THE SITUATION]

The angle/perspective: [Who is speaking? What moment in time? What's the speaker's state of mind?]

What this is NOT about (to prevent AI drift): [The cliché version of this theme to avoid]
\`\`\`

---

### Example Theme Prompts (Library Starter)

**Theme: Grief**
> This verse is about the specific silence of a childhood home that no longer has the person who made it feel like home. The emotional core is orphaned familiarity — familiar surroundings, missing center. Speaker is returning to the house for the first time after the funeral. NOT a memory-reel montage or "I remember when" list.

**Theme: Ambition / Hustle**
> This hook is about the hunger that doesn't go away after you eat — the version of ambition that looks like obsession from the outside and feels like duty from the inside. NOT about money, chains, or flexing.

**Theme: Betrayal**
> This verse is about discovering that someone's loyalty was conditional — and the strange grief of realizing the friendship was real to you but transactional to them. Perspective: the one who was used. Tone: sad more than angry. NOT a revenge fantasy.
        `,
        quiz: [
          {
            q: "What makes a Theme Prompt strong vs. weak?",
            options: [
              "Length — longer themes are always stronger",
              "Specificity of emotional situation rather than just naming a topic",
              "Using the right genre keywords",
              "Rhyming the theme description"
            ],
            answer: 1,
            explanation: "Specificity is the engine of resonance. A specific emotional situation (grocery store grief) generates more universal connection than a broad topic (heartbreak)."
          },
          {
            q: "Why include 'What this is NOT about' in your theme prompt?",
            options: [
              "To confuse the AI",
              "To prevent ChatGPT from defaulting to the cliché version of your theme",
              "It's optional filler with no impact",
              "To make the prompt shorter"
            ],
            answer: 1,
            explanation: "AI will always reach for the most common interpretation of a theme. Explicitly blocking the cliché version forces it toward your specific angle."
          }
        ]
      },
      {
        id: "m3l2",
        title: "Voice & Writing Style Prompts",
        type: "lesson",
        content: `
## Layer 3: Voice & Writing Style

Voice prompts tell ChatGPT HOW to write — the texture, rhythm, and personality of the words themselves.

### Voice Dimensions to Define

**1. Diction Register**
- Street-level vernacular vs. literary vocabulary vs. hybrid
- *Example: "Use conversational, street-inflected language but allow literary metaphors to land without apology."*

**2. Line Length / Rhythm**
- Dense multisyllabic flows vs. sparse, impact-focused lines
- *Example: "Mix short punching lines (4-6 syllables) with longer breathier stretches. Never uniform."*

**3. Rhyme Philosophy**
- Perfect rhyme vs. slant rhyme vs. internal rhyme vs. no forced rhyme
- *Example: "Prioritize internal rhyme and assonance over end rhyme. A perfect end rhyme should feel earned, not mechanical."*

**4. Imagery Type**
- Abstract/emotional vs. hyper-specific/cinematic vs. symbolic
- *Example: "Use specific, observable details — what someone is wearing, what a room smells like, the sound of something. Avoid abstract emotional statements."*

**5. Speaker Relationship to Listener**
- Confessional (to self), direct address (to a person), performance (to a crowd), narrative (storytelling)
- *Example: "Write in confessional first-person — the speaker is thinking aloud, not performing."*

---

### Voice Style Reference Library

| Style Name | Description |
|---|---|
| **Street Poet** | Vernacular-rooted, specific imagery, controlled vulnerability |
| **Cinematic Narrator** | Third-person-leaning, scene-setting, emotional distance with eruptions |
| **Confessional Minimalist** | Sparse lines, heavy silence, what's NOT said carries weight |
| **Dense Architect** | Multisyllabic, layered internal rhyme, every word earning its spot |
| **Raw Documentarian** | Plain language, true detail, no metaphor filter — just what happened |
| **Abstract Impressionist** | Feeling over fact, image over narrative, emotional texture |

---

### Voice Prompt Template

\`\`\`
Writing Style: [Style name or hybrid description]

Line construction: [Short/long/mixed. Cadence notes.]

Rhyme approach: [End rhyme priority / internal rhyme / slant rhyme / free]

Imagery rule: [Specific/observable vs. abstract/emotional]

Diction: [Register — street, literary, hybrid, conversational]

What this should sound like: [1-2 sentence feel description — 
e.g., "Like a man talking to himself in a car at 2am. Honest. 
Not performing."]
\`\`\`
        `,
        quiz: [
          {
            q: "What does 'diction register' refer to in a Voice Prompt?",
            options: [
              "How many words are in a line",
              "The vocabulary level and language texture — street vernacular vs. literary vs. hybrid",
              "The volume at which the lyrics are performed",
              "Whether the song has a chorus"
            ],
            answer: 1,
            explanation: "Diction register controls the linguistic world of the lyric — which words feel native, which feel foreign, and what that says about the speaker's world."
          },
          {
            q: "If you want lyrics that avoid forced rhymes and feel more like natural speech, which rhyme approach should you specify?",
            options: [
              "Perfect end rhyme at every line",
              "AABB rhyme scheme throughout",
              "Prioritize internal rhyme and slant rhyme — end rhymes only when earned",
              "No instructions needed — ChatGPT will figure it out"
            ],
            answer: 2,
            explanation: "Explicitly directing ChatGPT toward internal/slant rhyme and away from forced end rhyme produces lyrics that breathe and feel human."
          }
        ]
      }
    ]
  },
  {
    id: "m4",
    title: "Layer 4–5: Rules & Guidelines",
    emoji: "📐",
    lessons: [
      {
        id: "m4l1",
        title: "Rules, Constraints & Guidelines",
        type: "lesson",
        content: `
## Layer 4: Rules & Constraints

Rules are **non-negotiable structural requirements**. Unlike guidelines (which are preferences), rules are hard limits.

### Types of Rules for Songwriting Prompts

**Structural Rules**
- Verse length: "This verse must be exactly 16 bars"
- Hook rules: "The hook must be 4 lines, singable, and contain the song's title"
- Bridge rules: "The bridge shifts to second person and is 8 bars max"

**Content Rules**
- "The verse must include one specific, concrete detail or image from real life — not invented"
- "The hook must be able to stand alone without the verse context"
- "There must be a turn or shift in perspective between bar 12 and bar 16"

**Flow/Cadence Rules**
- "Write with a triplet feel in mind for bars 1-8, then pull back to half-time for bars 9-16"
- "Every other line should land on a stressed syllable at the end"

---

### Layer 5: Guidelines (Soft Preferences)

Guidelines are directional — they push without mandating. These live in the range of "lean toward" and "favor" rather than "must" and "never."

**Mood Guidelines**
- "Lean introspective rather than combative"
- "Favor melancholy over devastation — reflective sadness, not active pain"

**Energy Guidelines**
- "Should feel like a slow build — start controlled, let it crack open in the second half"
- "Conversational energy — like someone talking through a realization, not a performance"

**Production Context Guidelines**
- "This will be over a slow, piano-led beat with a lot of space. Write for space — not every syllable needs to be filled"
- "Beat is uptempo trap. Shorter punching lines will sit better than long ones"

---

### Rules vs. Guidelines Reference

| | Rules | Guidelines |
|---|---|---|
| **Weight** | Mandatory | Preferential |
| **Language** | Must, Never, Always, Exactly | Lean toward, Favor, Prefer, Aim for |
| **Example** | "16 bars exactly" | "Favor short lines over long" |
| **When violated** | Output is wrong | Output might still work |
        `,
        quiz: [
          {
            q: "What is the key difference between a Rule and a Guideline?",
            options: [
              "Rules are for structure; guidelines are for rhyme only",
              "Rules are mandatory hard limits; guidelines are directional soft preferences",
              "Guidelines are more important than rules",
              "There is no meaningful difference"
            ],
            answer: 1,
            explanation: "Rules use language like 'must/never/always' and create non-negotiable requirements. Guidelines use 'lean toward/favor/prefer' and shape direction without mandating."
          },
          {
            q: "A production context guideline like 'this beat has a lot of space' tells ChatGPT to:",
            options: [
              "Add more syllables per line to fill the space",
              "Write shorter, more spacious lines that don't overcrowd a minimalist beat",
              "Use a different rhyme scheme",
              "Write a different song structure"
            ],
            answer: 1,
            explanation: "Production context shapes lyrical density. A sparse beat needs room to breathe — overwritten lyrics will clash with the instrumental."
          }
        ]
      }
    ]
  },
  {
    id: "m5",
    title: "Layer 6–7: Revision & Anti-AI",
    emoji: "🚫",
    lessons: [
      {
        id: "m5l1",
        title: "Revision Prompts",
        type: "lesson",
        content: `
## Layer 6: Revision Instructions

Revision prompts are the **second pass** — how you guide ChatGPT to improve, sharpen, or transform output that's close but not there yet.

### Revision Prompt Types

**Line-Level Surgery**
> "Keep the structure and imagery of this verse. Sharpen every metaphor — make it more specific and less decorative. If a line is doing nothing, cut it."

**Tone Recalibration**
> "This verse is sitting too melodramatic. Pull it back — make it quieter and more matter-of-fact. The emotion should be underneath the words, not in them."

**Specificity Injection**
> "Every abstract image in this verse — replace it with something observable and concrete. What did it look like? What did it smell like? What exactly happened?"

**Voice Consistency Check**
> "Read this verse and identify any lines that break character — that sound too polished, too writerly, or too 'AI'. Flag them and rewrite each one."

**Rhyme De-forcing**
> "Identify every forced rhyme in this verse — where the word was chosen for sound over meaning. Rewrite each forced rhyme with a word that serves the line's meaning, even if the rhyme becomes imperfect."

---

### Revision Prompt Templates

\`\`\`
REVISE THIS: [paste lyrics]

What to fix: [specific problem — tone, specificity, voice, rhyme, length]

What to KEEP: [what's working — don't throw out the good]

Target: [what the revision should feel like when done right]
\`\`\`

---

### The "What's Wrong" Diagnostic Prompt

Before revising, ask ChatGPT to diagnose:

> *"Read these lyrics as a professional lyric critic. Tell me: what's working, what's not working, and what's the single biggest issue to fix first. Don't revise yet — just diagnose."*

Getting a diagnosis before a revision prevents ChatGPT from fixing the wrong things.
        `,
        quiz: [
          {
            q: "What is a 'Specificity Injection' revision?",
            options: [
              "Adding more rhymes to a verse",
              "Replacing abstract images with concrete, observable details",
              "Making the lyrics longer",
              "Changing the song's structure"
            ],
            answer: 1,
            explanation: "Specificity Injection targets vague emotional language and replaces it with sensory, observable reality — what something looked, sounded, or felt like physically."
          },
          {
            q: "Why ask ChatGPT to DIAGNOSE before REVISING?",
            options: [
              "To make the process take longer",
              "Diagnosis identifies the actual problem so the revision fixes the right thing instead of wrong things",
              "Diagnosis is the same as revision",
              "To get ChatGPT to write more content"
            ],
            answer: 1,
            explanation: "Skipping diagnosis means revisions often 'fix' surface issues while the real problem remains. Diagnosis first — revision second."
          }
        ]
      },
      {
        id: "m5l2",
        title: "The Anti-AI Prompt & Words to Avoid",
        type: "lesson",
        content: `
## Layer 7: Anti-AI Prompts & The Avoid List

This is arguably the **most important layer** for sounding human. ChatGPT has absorbed millions of average song lyrics, blog posts, and AI-generated content — and it defaults to the patterns it's seen most. Your job is to explicitly block those defaults.

---

## 🚫 The Master Anti-AI Songwriting Avoid List

### Overused Emotional Adjectives
- faded, hollow, broken, shattered, empty, numb, lost, burning, cold, dark, heavy, aching

### Overused Noun Phrases
- heavy heart, broken soul, empty chest, hollow eyes, burning tears, bleeding heart, dark night

### Cliché Lyric Constructions
- "I can't explain...", "Words can't describe...", "There are no words...", "I never thought..."
- "In a world where...", "At the end of the day...", "When push comes to shove..."
- "You were my everything", "You were my world", "Without you I'm nothing"

### AI-Tell Verbs & Verb Phrases
- fade away, drift apart, fall apart, break down, let go, hold on, move on, carry on
- "I'm trying to...", "I'm learning to...", "I'm still healing..."

### Forced Rhyme Predictors (words ChatGPT reaches for to complete a rhyme)
- When rhyming with "pain": rain, again, remain, insane, chain, vain, plain, refrain
- When rhyming with "night": light, right, fight, sight, might, flight, ignite
- When rhyming with "heart": apart, start, art, smart, dart, fall apart

### Motivational Poster Clichés (common in choruses)
- rise and fall, fight through the storm, stronger than before, light at the end
- "This is who I am", "I won't back down", "I'll find my way"

### AI Filler Lines (lines that sound good but say nothing)
- "And I don't know what to do", "But I keep pushing through"
- "It's written in the stars", "The universe had other plans"
- "Time heals all wounds", "Everything happens for a reason"

---

### The Anti-AI Prompt Template

\`\`\`
ABSOLUTE AVOID LIST — never use any of the following in these lyrics:

Words: [paste your avoid list]
Phrases: [paste your phrase list]
Constructions: [paste pattern avoids — "I can't explain", "In a world where", etc.]

If you find yourself reaching for any of these, stop and find a more specific, 
earned, original image or phrase. Default to the concrete over the abstract.
\`\`\`

---

### The "Sound Human" Test

After generating lyrics, prompt ChatGPT to self-audit:

> *"Read these lyrics and flag every word or phrase that sounds like it came from a lyric generator, a motivational poster, or a Hallmark card. Highlight them and explain why they don't earn their place. Then rewrite the flagged lines."*
        `,
        quiz: [
          {
            q: "Which of these is an example of an AI-Tell phrase?",
            options: [
              "She left her coat on the kitchen chair",
              "I'm still learning to let go",
              "The dog barked twice before the car pulled off",
              "He kept every text but deleted the contact"
            ],
            answer: 1,
            explanation: "'I'm still learning to let go' is a classic AI healing-process cliché. The other options are specific and concrete — exactly what good lyrics should sound like."
          },
          {
            q: "When ChatGPT rhymes 'pain' with 'rain' in a song lyric, this is an example of:",
            options: [
              "Creative excellence",
              "A forced rhyme predictor — AI reaching for the most statistically likely completion",
              "Internal rhyme technique",
              "A valid artistic choice always"
            ],
            answer: 1,
            explanation: "Pain/rain is one of the most overused rhyme pairs in popular music. ChatGPT defaults to high-frequency patterns — the avoid list forces it past the defaults."
          },
          {
            q: "The 'Sound Human' test asks ChatGPT to:",
            options: [
              "Write lyrics from a human's perspective",
              "Self-audit for lyric-generator phrases and rewrite flagged lines",
              "Add more emotion to lyrics",
              "Check for grammatical errors"
            ],
            answer: 1,
            explanation: "The Sound Human test is a self-critique loop — asking the AI to identify its own clichés and replace them before you receive the final output."
          }
        ]
      }
    ]
  },
  {
    id: "m6",
    title: "Pre-Made Prompt Library",
    emoji: "📚",
    lessons: [
      {
        id: "m6l1",
        title: "Full Songwriting Prompt Library",
        type: "library",
        prompts: [
          {
            category: "Master Context Prompts",
            icon: "🎛️",
            items: [
              {
                name: "Hip-Hop / Rap Master Context",
                prompt: `You are a co-writer for an independent hip-hop artist. Aesthetic DNA: [ARTIST REFS]. Subject territory: [YOUR THEMES]. Lyrical approach: conversational but literary, specific details over abstraction, internal rhyme density without sacrificing natural speech. Default tone: introspective with cinematic flashes. Current project: [PROJECT DESCRIPTION]. Apply this context to everything unless I specify otherwise.`
              },
              {
                name: "R&B / Soul Master Context",
                prompt: `You are a co-writer for an R&B/soul artist. Influences: [REFS]. My territory: love in its complicated forms — desire, loss, the space between. Voice: warm, direct, melodic phrasing that breathes. I write from the body and the feeling, not the idea. Current project: [PROJECT]. Default to sensory, emotional specificity. Never write a motivational poster.`
              },
              {
                name: "Singer-Songwriter Master Context",
                prompt: `You are a co-writer for a singer-songwriter. Influences: [REFS]. My territory: the ordinary moment that contains everything. Voice: conversational, intimate, line breaks that feel like a held breath. I favor slant rhyme and natural speech rhythm over formal structure. Avoid poetic ornamentation — I want clarity and weight, not decoration.`
              }
            ]
          },
          {
            category: "Theme Prompts",
            icon: "🎭",
            items: [
              {
                name: "Grief — The Delayed Wave",
                prompt: `This verse is about grief that arrives unexpectedly weeks after a loss — the ambush of ordinary moments (a smell, a song, a grocery store aisle). The emotional core: the grief that lives in the mundane. NOT a flashback montage. NOT "I remember when." Present tense, happening now.`
              },
              {
                name: "Loyalty as Burden",
                prompt: `This song is about the cost of loyalty to someone who never asked for it — the sacrifice they didn't know you made, and the quiet resentment that grew from never being acknowledged. Tone: not angry, sad. The speaker is processing, not accusing.`
              },
              {
                name: "Made It But Feel Nothing",
                prompt: `This verse is about arriving at the goal and feeling hollow — the success that doesn't land the way you imagined. Specific angle: the silence after the achievement, the absence of the people who should've been there to see it. NOT a flexing record. Contemplative.`
              },
              {
                name: "Digital Grief",
                prompt: `This piece is structured around a "last seen" timestamp — the grief of someone who is gone but whose digital ghost remains. The read receipts, the old voicemails, the profile still alive online. NOT sentimental. Clinical details, deep feeling underneath.`
              },
              {
                name: "The Long Goodbye (Addiction)",
                prompt: `This verse is about watching someone disappear into addiction — the grief of someone still alive but unreachable. The specific horror: their body is present, they are not. NOT a recovery narrative. The person in the verse hasn't recovered. The speaker is in the middle of it.`
              },
              {
                name: "Hunger That Won't Quit",
                prompt: `This hook is about ambition as compulsion — the drive that doesn't turn off when you reach the goal. Emotional core: the fear that the hunger is who you are, not what you want. Is this drive purpose or addiction? Don't answer the question — hold it.`
              },
              {
                name: "Forgiveness You Give But Don't Feel",
                prompt: `This bridge is about the performance of forgiveness — saying the words, going through the motions — before actually feeling it. The speaker has forgiven someone in behavior but not yet in their body. Internal conflict, not resolved.`
              },
              {
                name: "The Friend Who Became a Stranger",
                prompt: `This verse is about a friendship that faded without a fight — no incident, no argument, just the slow drift of lives moving in different directions. The strangeness of seeing them and having nothing to say. NOT nostalgic or warm. Observational, a little sad.`
              }
            ]
          },
          {
            category: "Voice & Style Prompts",
            icon: "🎤",
            items: [
              {
                name: "Street Poet",
                prompt: `Voice: Street Poet. Vernacular-rooted language with literary images that land without apology. Lines should feel like they came from a real person who happens to see the world poetically. No language that sounds like it's trying to be a poem. Specific over ornate.`
              },
              {
                name: "Confessional Minimalist",
                prompt: `Voice: Confessional Minimalist. Sparse lines. What isn't said carries as much weight as what is. Short sentences. Long silences between images. Write for space. No decorative language. The speaker is thinking aloud, not performing.`
              },
              {
                name: "Dense Architect",
                prompt: `Voice: Dense Architect. Multisyllabic rhyme density. Internal rhyme woven throughout. Every word earns its place. Rhythm should feel constructed and intentional — like a building, not a stream. Reference: Kendrick's verse on "Rigamortis" or Eminem's "Rap God" first verse.`
              },
              {
                name: "Cinematic Narrator",
                prompt: `Voice: Cinematic Narrator. The speaker is slightly outside the scene, describing with emotional distance but erupting at key moments. Scene-setting detail. Physical specificity. Write like the camera is moving through a space and landing on what matters.`
              },
              {
                name: "Raw Documentarian",
                prompt: `Voice: Raw Documentarian. Plain language. True detail. No metaphor filter — write what happened, what was said, what was in the room. The power comes from the reality, not the craft. Trust the detail.`
              }
            ]
          },
          {
            category: "Rules & Constraints Prompts",
            icon: "📐",
            items: [
              {
                name: "16-Bar Hard Rule",
                prompt: `This verse must be exactly 16 bars. Each bar is a single line. No more, no less. If a line runs long, it must still fit as one bar conceptually. Build the turn or shift between bars 12-13.`
              },
              {
                name: "No Chorus — Full Narrative Arc",
                prompt: `Write this as a single uninterrupted narrative verse with a beginning, middle, and end contained within it. No hook, no chorus reference. The verse must arc — open in one emotional place, build, and land somewhere different.`
              },
              {
                name: "One Image Per Bar",
                prompt: `Every bar must contain exactly one concrete image or detail. No two bars can contain the same category of image (no two memory images, no two sound images, etc.). Force yourself into variety.`
              },
              {
                name: "The Pivot Rule",
                prompt: `This verse must contain a single pivot moment — one line where the speaker's perspective, understanding, or emotional state shifts. Everything before the pivot faces one direction; everything after faces the opposite. The pivot line is the verse's gravitational center.`
              }
            ]
          },
          {
            category: "Revision Prompts",
            icon: "✂️",
            items: [
              {
                name: "The Diagnosis Prompt",
                prompt: `Read these lyrics as a professional lyric critic. Tell me: what's working, what's not working, and what's the single biggest issue to fix first. Don't revise yet — just diagnose. Be specific and direct.\n\n[PASTE LYRICS HERE]`
              },
              {
                name: "Specificity Surgery",
                prompt: `Revise these lyrics. Every abstract image or emotional statement — replace it with something concrete and observable. What did it look like? What was in the room? What was the exact sound? Keep the structure. Change every vague moment.\n\n[PASTE LYRICS HERE]`
              },
              {
                name: "Pull It Back",
                prompt: `These lyrics are sitting too loud / too emotional / too dramatic. Revise to pull them back. Make them quieter and more matter-of-fact. The feeling should live underneath the words, not in them. No melodrama. Trust the situation to carry the weight.\n\n[PASTE LYRICS HERE]`
              },
              {
                name: "De-Force the Rhymes",
                prompt: `Identify every forced rhyme in these lyrics — every word that was chosen for sound over meaning. List them. Then rewrite each forced rhyme with a word that serves the line's meaning first, even if it makes the rhyme imperfect.\n\n[PASTE LYRICS HERE]`
              },
              {
                name: "The Human Test",
                prompt: `Read these lyrics and flag every word, phrase, or line that sounds like it came from a lyric generator, a motivational poster, or a Hallmark card. Highlight and explain why each doesn't earn its place. Then rewrite every flagged line.\n\n[PASTE LYRICS HERE]`
              }
            ]
          },
          {
            category: "Anti-AI / Avoid List",
            icon: "🚫",
            items: [
              {
                name: "Full Songwriting Avoid List",
                prompt: `ABSOLUTE AVOID LIST — never use any of the following:\n\nWORDS: faded, hollow, broken, shattered, empty, numb, burning, cold, heavy, aching, lost, void, haunt, crumble, shiver, tremble\n\nPHRASES: heavy heart, broken soul, empty chest, bleeding heart, burning tears, hollow eyes, dark night of the soul\n\nCONSTRUCTIONS: "I can't explain...", "Words can't describe...", "There are no words...", "In a world where...", "At the end of the day...", "You were my everything", "You were my world"\n\nFILLER LINES: "And I don't know what to do", "But I keep pushing through", "It's written in the stars", "The universe had other plans", "Time heals all wounds"\n\nHEALING CLICHÉS: "I'm still learning to let go", "I'm trying to move on", "I'm healing now", "One day at a time"\n\nIf you reach for any of these, stop. Find the specific, concrete, earned alternative.`
              },
              {
                name: "Anti-Rhyme Predictor",
                prompt: `Avoid these default rhyme completions:\n— pain → do NOT reach for: rain, again, remain, insane, chain, vain, plain, refrain\n— night → do NOT reach for: light, right, fight, sight, might, flight, ignite\n— heart → do NOT reach for: apart, start, art, smart, dart, fall apart\n— love → do NOT reach for: above, stars above, push and shove\n— real → do NOT reach for: feel, heal, deal, reveal, conceal\n\nIf the rhyme word is the FIRST thing that comes to mind, it's probably wrong. Find the second or third option.`
              }
            ]
          }
        ]
      }
    ]
  }
];

const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);

// ============================================================
// COMPONENTS
// ============================================================

function ProgressBar({ value, max, color = "#a78bfa" }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div style={{ width: "100%", background: "#1e1b2e", borderRadius: 8, height: 10, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, background: color, height: "100%", borderRadius: 8, transition: "width 0.5s ease" }} />
    </div>
  );
}

function Badge({ label, color = "#7c3aed" }) {
  return (
    <span style={{ background: color + "22", color, border: `1px solid ${color}44`, borderRadius: 20, padding: "2px 10px", fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>
      {label}
    </span>
  );
}

function ScoreCard({ completed, total, quizScores }) {
  const totalQ = Object.keys(quizScores).length;
  const correct = Object.values(quizScores).filter(Boolean).length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const grade = pct >= 90 ? "A" : pct >= 80 ? "B" : pct >= 70 ? "C" : pct >= 60 ? "D" : "F";
  const gradeColor = pct >= 80 ? "#22d3ee" : pct >= 60 ? "#a78bfa" : "#f87171";

  return (
    <div style={{ background: "#13111f", border: "1px solid #2d2a45", borderRadius: 16, padding: 24, marginBottom: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <div style={{ color: "#9ca3af", fontSize: 12, marginBottom: 4, letterSpacing: 1, textTransform: "uppercase" }}>Course Progress</div>
          <div style={{ color: "#fff", fontSize: 28, fontWeight: 800 }}>{pct}% Complete</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: gradeColor, fontSize: 48, fontWeight: 900, lineHeight: 1 }}>{grade}</div>
          <div style={{ color: "#9ca3af", fontSize: 11 }}>Grade</div>
        </div>
      </div>
      <ProgressBar value={completed} max={total} />
      <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 120 }}>
          <div style={{ color: "#9ca3af", fontSize: 11, marginBottom: 4 }}>LESSONS DONE</div>
          <div style={{ color: "#a78bfa", fontWeight: 700, fontSize: 18 }}>{completed} / {total}</div>
        </div>
        <div style={{ flex: 1, minWidth: 120 }}>
          <div style={{ color: "#9ca3af", fontSize: 11, marginBottom: 4 }}>QUIZ SCORE</div>
          <div style={{ color: "#22d3ee", fontWeight: 700, fontSize: 18 }}>{totalQ === 0 ? "—" : `${correct} / ${totalQ}`}</div>
        </div>
        <div style={{ flex: 1, minWidth: 120 }}>
          <div style={{ color: "#9ca3af", fontSize: 11, marginBottom: 4 }}>ACCURACY</div>
          <div style={{ color: "#4ade80", fontWeight: 700, fontSize: 18 }}>{totalQ === 0 ? "—" : `${Math.round((correct / totalQ) * 100)}%`}</div>
        </div>
      </div>
    </div>
  );
}

function MarkdownRenderer({ text }) {
  const lines = text.trim().split("\n");
  const result = [];
  let i = 0;
  let tableBuffer = [];
  let inTable = false;

  const flushTable = () => {
    if (tableBuffer.length < 2) { tableBuffer = []; inTable = false; return; }
    const headers = tableBuffer[0].split("|").filter(c => c.trim()).map(c => c.trim());
    const rows = tableBuffer.slice(2).map(r => r.split("|").filter(c => c.trim()).map(c => c.trim()));
    result.push(
      <div key={`t${result.length}`} style={{ overflowX: "auto", margin: "16px 0" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
          <thead>
            <tr>{headers.map((h, j) => <th key={j} style={{ background: "#1e1b2e", color: "#a78bfa", padding: "8px 12px", textAlign: "left", borderBottom: "1px solid #2d2a45", fontWeight: 700 }}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? "transparent" : "#0f0d1a" }}>
                {row.map((cell, ci) => <td key={ci} style={{ padding: "7px 12px", color: "#d1d5db", borderBottom: "1px solid #1e1b2e", fontSize: 13 }}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = []; inTable = false;
  };

  const renderInline = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
    return parts.map((p, i) => {
      if (p.startsWith("**") && p.endsWith("**")) return <strong key={i} style={{ color: "#e2e8f0", fontWeight: 700 }}>{p.slice(2, -2)}</strong>;
      if (p.startsWith("`") && p.endsWith("`")) return <code key={i} style={{ background: "#1e1b2e", color: "#a78bfa", padding: "1px 6px", borderRadius: 4, fontSize: "0.85em" }}>{p.slice(1, -1)}</code>;
      return p;
    });
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("|")) {
      inTable = true;
      tableBuffer.push(line);
      i++;
      if (i >= lines.length || !lines[i].startsWith("|")) flushTable();
      continue;
    }
    if (inTable) { flushTable(); continue; }

    if (line.startsWith("### ")) {
      result.push(<h3 key={i} style={{ color: "#a78bfa", fontSize: 16, fontWeight: 700, margin: "20px 0 8px", letterSpacing: 0.3 }}>{line.slice(4)}</h3>);
    } else if (line.startsWith("## ")) {
      result.push(<h2 key={i} style={{ color: "#c4b5fd", fontSize: 20, fontWeight: 800, margin: "24px 0 12px", borderBottom: "1px solid #2d2a45", paddingBottom: 8 }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("> ")) {
      result.push(<blockquote key={i} style={{ borderLeft: "3px solid #7c3aed", paddingLeft: 14, margin: "12px 0", color: "#c4b5fd", fontStyle: "italic", fontSize: 14 }}>{renderInline(line.slice(2))}</blockquote>);
    } else if (line.startsWith("```")) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) { codeLines.push(lines[i]); i++; }
      result.push(<pre key={i} style={{ background: "#0f0d1a", border: "1px solid #2d2a45", borderRadius: 10, padding: 16, overflowX: "auto", fontSize: 13, color: "#a5f3fc", margin: "12px 0", lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{codeLines.join("\n")}</pre>);
    } else if (line.match(/^[-*] /)) {
      const items = [];
      while (i < lines.length && lines[i].match(/^[-*] /)) {
        items.push(<li key={i} style={{ color: "#d1d5db", marginBottom: 6, fontSize: 14, lineHeight: 1.6 }}>{renderInline(lines[i].slice(2))}</li>);
        i++;
      }
      result.push(<ul key={`ul${result.length}`} style={{ paddingLeft: 20, margin: "10px 0" }}>{items}</ul>);
      continue;
    } else if (line === "---") {
      result.push(<hr key={i} style={{ border: "none", borderTop: "1px solid #2d2a45", margin: "20px 0" }} />);
    } else if (line.trim()) {
      result.push(<p key={i} style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.75, margin: "8px 0" }}>{renderInline(line)}</p>);
    }
    i++;
  }
  return <div>{result}</div>;
}

function QuizSection({ quiz, lessonId, quizAnswers, setQuizAnswers, quizScores, setQuizScores }) {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleSelect = (qi, oi) => {
    if (submitted[qi]) return;
    setSelected(s => ({ ...s, [qi]: oi }));
  };

  const handleSubmit = (qi, q) => {
    if (selected[qi] === undefined) return;
    const isCorrect = selected[qi] === q.answer;
    setSubmitted(s => ({ ...s, [qi]: true }));
    const key = `${lessonId}-q${qi}`;
    setQuizScores(s => ({ ...s, [key]: isCorrect }));
  };

  return (
    <div style={{ marginTop: 32 }}>
      <div style={{ color: "#a78bfa", fontWeight: 800, fontSize: 16, marginBottom: 16, letterSpacing: 0.5 }}>📝 Knowledge Check</div>
      {quiz.map((q, qi) => {
        const key = `${lessonId}-q${qi}`;
        const isSubmitted = submitted[qi];
        const isCorrect = selected[qi] === q.answer;
        return (
          <div key={qi} style={{ background: "#0f0d1a", border: "1px solid #2d2a45", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 14, marginBottom: 14, lineHeight: 1.5 }}>
              Q{qi + 1}. {q.q}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {q.options.map((opt, oi) => {
                let bg = "#1e1b2e";
                let border = "#2d2a45";
                let color = "#9ca3af";
                if (selected[qi] === oi && !isSubmitted) { bg = "#2d1f5e"; border = "#7c3aed"; color = "#c4b5fd"; }
                if (isSubmitted) {
                  if (oi === q.answer) { bg = "#052e16"; border = "#22c55e"; color = "#4ade80"; }
                  else if (selected[qi] === oi && !isCorrect) { bg = "#2d1515"; border = "#ef4444"; color = "#f87171"; }
                }
                return (
                  <div key={oi} onClick={() => handleSelect(qi, oi)} style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 14px", cursor: isSubmitted ? "default" : "pointer", color, fontSize: 13, transition: "all 0.15s", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 700, opacity: 0.6 }}>{String.fromCharCode(65 + oi)}.</span> {opt}
                  </div>
                );
              })}
            </div>
            {!isSubmitted ? (
              <button onClick={() => handleSubmit(qi, q)} disabled={selected[qi] === undefined} style={{ marginTop: 12, background: selected[qi] !== undefined ? "#7c3aed" : "#1e1b2e", color: selected[qi] !== undefined ? "#fff" : "#4b5563", border: "none", borderRadius: 8, padding: "9px 20px", cursor: selected[qi] !== undefined ? "pointer" : "default", fontWeight: 700, fontSize: 13, transition: "all 0.2s" }}>
                Submit Answer
              </button>
            ) : (
              <div style={{ marginTop: 12, padding: "10px 14px", background: isCorrect ? "#052e16" : "#2d1515", borderRadius: 8, fontSize: 13 }}>
                <span style={{ color: isCorrect ? "#4ade80" : "#f87171", fontWeight: 700 }}>{isCorrect ? "✓ Correct!" : "✗ Not quite."}</span>
                <span style={{ color: "#9ca3af", marginLeft: 8 }}>{q.explanation}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function PromptLibrary({ prompts }) {
  const [copied, setCopied] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 1800);
    });
  };

  const cat = prompts[activeCategory];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {prompts.map((cat, i) => (
          <button key={i} onClick={() => setActiveCategory(i)} style={{ background: activeCategory === i ? "#7c3aed" : "#1e1b2e", color: activeCategory === i ? "#fff" : "#9ca3af", border: `1px solid ${activeCategory === i ? "#7c3aed" : "#2d2a45"}`, borderRadius: 20, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>
            {cat.icon} {cat.category}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {cat.items.map((item, i) => (
          <div key={i} style={{ background: "#0f0d1a", border: "1px solid #2d2a45", borderRadius: 12, padding: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
              <div style={{ color: "#c4b5fd", fontWeight: 700, fontSize: 14 }}>{item.name}</div>
              <button onClick={() => copyToClipboard(item.prompt, `${activeCategory}-${i}`)} style={{ background: copied === `${activeCategory}-${i}` ? "#052e16" : "#1e1b2e", color: copied === `${activeCategory}-${i}` ? "#4ade80" : "#9ca3af", border: `1px solid ${copied === `${activeCategory}-${i}` ? "#22c55e" : "#2d2a45"}`, borderRadius: 8, padding: "5px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", flexShrink: 0 }}>
                {copied === `${activeCategory}-${i}` ? "✓ Copied!" : "Copy Prompt"}
              </button>
            </div>
            <pre style={{ background: "#13111f", border: "1px solid #1e1b2e", borderRadius: 8, padding: 14, fontSize: 12, color: "#a5f3fc", whiteSpace: "pre-wrap", wordBreak: "break-word", lineHeight: 1.65, margin: 0 }}>{item.prompt}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================

export default function App() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState({});
  const [quizScores, setQuizScores] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [view, setView] = useState("home"); // home | lesson | library

  const completedCount = Object.keys(completedLessons).filter(k => completedLessons[k]).length;

  const markComplete = (lessonId) => {
    setCompletedLessons(s => ({ ...s, [lessonId]: true }));
  };

  const openLesson = (mod, lesson) => {
    setActiveModule(mod);
    setActiveLesson(lesson);
    setView(lesson.type === "library" ? "library" : "lesson");
  };

  const goHome = () => { setView("home"); setActiveModule(null); setActiveLesson(null); };

  if (view === "lesson" && activeLesson) {
    const lessonIdx = activeModule.lessons.findIndex(l => l.id === activeLesson.id);
    const nextLesson = activeModule.lessons[lessonIdx + 1];
    const isComplete = completedLessons[activeLesson.id];

    return (
      <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#0a0814", minHeight: "100vh", color: "#fff", padding: 20 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <button onClick={goHome} style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 13, marginBottom: 20, display: "flex", alignItems: "center", gap: 6, padding: 0 }}>
            ← Back to Course
          </button>
          <div style={{ marginBottom: 6 }}>
            <Badge label={activeModule.emoji + " " + activeModule.title} />
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "8px 0 24px", lineHeight: 1.2 }}>{activeLesson.title}</h1>
          <div style={{ background: "#13111f", border: "1px solid #2d2a45", borderRadius: 16, padding: 28 }}>
            <MarkdownRenderer text={activeLesson.content} />
            {activeLesson.quiz && (
              <QuizSection
                quiz={activeLesson.quiz}
                lessonId={activeLesson.id}
                quizAnswers={quizAnswers}
                setQuizAnswers={setQuizAnswers}
                quizScores={quizScores}
                setQuizScores={setQuizScores}
              />
            )}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            {!isComplete && (
              <button onClick={() => markComplete(activeLesson.id)} style={{ background: "#7c3aed", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                ✓ Mark Complete
              </button>
            )}
            {isComplete && <Badge label="✓ Completed" color="#22c55e" />}
            {nextLesson && (
              <button onClick={() => { markComplete(activeLesson.id); setActiveLesson(nextLesson); setView(nextLesson.type === "library" ? "library" : "lesson"); }} style={{ background: "#1e1b2e", color: "#c4b5fd", border: "1px solid #2d2a45", borderRadius: 10, padding: "12px 24px", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
                Next Lesson →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (view === "library" && activeLesson) {
    return (
      <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#0a0814", minHeight: "100vh", color: "#fff", padding: 20 }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <button onClick={goHome} style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer", fontSize: 13, marginBottom: 20, display: "flex", alignItems: "center", gap: 6, padding: 0 }}>
            ← Back to Course
          </button>
          <Badge label="📚 Prompt Library" />
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "#fff", margin: "8px 0 24px" }}>Full Songwriting Prompt Library</h1>
          <PromptLibrary prompts={activeLesson.prompts} />
          <button onClick={() => { markComplete(activeLesson.id); goHome(); }} style={{ marginTop: 24, background: "#7c3aed", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", cursor: "pointer", fontWeight: 700, fontSize: 14 }}>
            ✓ Mark Complete & Return
          </button>
        </div>
      </div>
    );
  }

  // HOME VIEW
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#0a0814", minHeight: "100vh", color: "#fff", padding: 20 }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", padding: "40px 0 32px" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎙️</div>
          <h1 style={{ fontSize: 30, fontWeight: 900, background: "linear-gradient(135deg, #c4b5fd, #a78bfa, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 10px", lineHeight: 1.15 }}>
            Prompt Taxonomy Hierarchy
          </h1>
          <div style={{ color: "#9ca3af", fontSize: 15, marginBottom: 6 }}>for Songwriting with ChatGPT</div>
          <div style={{ color: "#6b7280", fontSize: 13 }}>Master the 7-layer system that makes AI lyrics sound human</div>
        </div>

        {/* SCORE CARD */}
        <ScoreCard completed={completedCount} total={totalLessons} quizScores={quizScores} />

        {/* MODULES */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {COURSE_MODULES.map((mod) => {
            const modCompleted = mod.lessons.filter(l => completedLessons[l.id]).length;
            const modTotal = mod.lessons.length;
            const modPct = Math.round((modCompleted / modTotal) * 100);

            return (
              <div key={mod.id} style={{ background: "#13111f", border: "1px solid #2d2a45", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid #1e1b2e" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{mod.emoji}</span>
                      <span style={{ color: "#e2e8f0", fontWeight: 800, fontSize: 16 }}>{mod.title}</span>
                    </div>
                    <div style={{ color: "#9ca3af", fontSize: 12 }}>{modCompleted}/{modTotal} lessons</div>
                  </div>
                  <ProgressBar value={modCompleted} max={modTotal} color={modPct === 100 ? "#22d3ee" : "#7c3aed"} />
                </div>
                <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
                  {mod.lessons.map((lesson) => {
                    const done = completedLessons[lesson.id];
                    return (
                      <button key={lesson.id} onClick={() => openLesson(mod, lesson)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: done ? "#0d1f0d" : "#1e1b2e", border: `1px solid ${done ? "#166534" : "#2d2a45"}`, borderRadius: 10, padding: "11px 16px", cursor: "pointer", textAlign: "left", gap: 12, transition: "all 0.15s" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 16 }}>{lesson.type === "library" ? "📚" : done ? "✅" : "📖"}</span>
                          <span style={{ color: done ? "#86efac" : "#c4b5fd", fontWeight: 600, fontSize: 13 }}>{lesson.title}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                          {lesson.quiz && <Badge label={`${lesson.quiz.length}Q`} color="#a78bfa" />}
                          {lesson.type === "library" && <Badge label="Library" color="#22d3ee" />}
                          <span style={{ color: "#6b7280", fontSize: 14 }}>›</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: "center", padding: "36px 0 20px", color: "#4b5563", fontSize: 12 }}>
          Prompt Taxonomy Hierarchy Course · {totalLessons} Lessons · Interactive Quizzes · Full Prompt Library
        </div>
      </div>
    </div>
  );
}
