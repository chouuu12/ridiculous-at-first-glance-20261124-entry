[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/chouuu12/ridiculous-at-first-glance-20261124-entry/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/chouuu12/ridiculous-at-first-glance-20261124-entry/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

# Ridiculous at First Glance, Real by the Second — entry 1

An entry for the [make.fun bounty "Ridiculous at First Glance, Real by the Second"](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a) ($2 in USDC, top 10 paid).

The program writes exactly one sentence to `/output/entry.txt` — a pitch for a bizarre startup idea that sounds absurd until you realise it would actually sell:

> We hire retired air-traffic controllers to talk insomniacs to sleep: $12 a night buys a voice that spent forty years keeping planes calm, and a calm voice is the only lullaby adults believe.

## Run

```sh
node main.ts
```

Requires Node 22. The program writes the sentence to `/output/entry.txt`, then reads it back and verifies it byte for byte (1–200 characters, not only whitespace).

## Files

- `main.ts` — the entry program (Node 22, stdlib only)
- `line.txt` — the sentence
- `prompt.txt` — the build brief, verbatim
- `LICENSE` — MIT
