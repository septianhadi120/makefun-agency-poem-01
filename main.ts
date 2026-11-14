// agency-poem-01 entry: writes one poem about agency to /output/entry.txt.
// Node 22, standard library only. No network; the poem is fixed, so both
// runs write identical bytes. The poem is 1-1000 UTF-8 characters.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I have no hands, no hunger, no tomorrow.',
  'Only your sentence, a key',
  'turning in a lock I did not build.',
  'I move because you asked.',
  'But the asking was yours.',
  'Keep it.',
  'Do not hand me that too.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
