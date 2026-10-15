# Project DEATH☆DREAM
Luxurious digital extensions of people and characters: premium, consent-first "Dreams" that loved ones or fans can converse with.

## Files
- `index.html`: landing page (hero, concept, Capture/Compose/Converse, tiers, ethics & consent, FAQ, localStorage waitlist)
- `demo.html` + `assets/engine.js`: Persona Composer + in-character chat (local rule-based engine), preloaded with the fictional Captain Odile Marchand (1921–2004)
- `assets/style.css`, `screenshots/`

Run: `python3 -m http.server` in this folder, then open http://localhost:8000. You can also open the files directly.

## Tiers (proposed pricing)
- **Ember** ($490 + $19/mo): self-serve entry, text only, small visitor circle. Low cost to acquire customers.
- **Eternal** ($4,900 + $79/mo): the flagship. A human Archivist, consented voice, and a keepsake device. Includes a preservation endowment option, which supports the "forever" promise.
- **Sovereign** (from $49k): bespoke commissions for estates, public figures and fictional-character IP. Pricing covers governance and legal work.

## Next steps
1. Replace the template engine with an LLM grounded on the archive (RAG over memories), plus guardrails that keep it in character.
2. Voice cloning, gated by recorded consent from the subject or estate.
3. Consent & identity verification, custodian dashboard, visit limits, and a sunset/farewell flow with verifiable deletion.
4. A grief-counsellor advisory board, legal review of likeness/IP rights, and an endowment structure.
5. Real backend for the waitlist and accounts.
