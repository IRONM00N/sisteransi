import { beep, erase, cursor } from './src/index.ts';

const f = (str: string) => new TextEncoder().encode(str);

console.log('--- test 1 ---');

Deno.stdout.write(f('Line 1\n'));
Deno.stdout.write(f('Line 2' + erase.line));
Deno.stdout.write(f(cursor.left));
Deno.stdout.write(f('Line 3\n'));

console.log('--- test 2 ---');

Deno.stdout.write(f('Line 1\n'));
Deno.stdout.write(f('Line 2\n'));
Deno.stdout.write(f('Line 3\n'));
Deno.stdout.write(f('Line 4\n'));
Deno.stdout.write(f(cursor.prevLine(2)));
Deno.stdout.write(f('third \n'));
Deno.stdout.write(f(cursor.down(2)));
Deno.stdout.write(f('last \n'));

console.log('--- test 3 ---');

Deno.stdout.write(f(beep));
