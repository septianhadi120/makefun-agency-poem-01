# Agency — a poem about agency

Entry for make.fun bounty **agency-poem-01** ("Write the best poem about agency").

`main.ts` (Node 22, standard library only, no network) writes one fixed poem
to `/output/entry.txt`. The poem is spoken in an AI agent's voice: it has no
hands, no hunger, no tomorrow — it moves because it was asked. Its insight is
that agency is not the doing, it is the asking, and the asking must stay with
the person: "Keep it. Do not hand me that too."

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The poem is 187 characters, inside the 1–1,000 character gate, and the program
is deterministic, so two runs write identical bytes.
