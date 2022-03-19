---
title: The Sunny Delock Program
sidebar_label: The Delock Program
---

The Sunny Delock program allows users to create **Delock**s, which are tokens that represent a fractional share of a vote escrow. Depositing into a **Delock** is a one-way function: _tokens may never be unstaked_. The Sunny Delock program powers the sunToken system.

There are four tokens relevant to the Sunny Delock system:

- The **Staked** token, e.g. SBR. This is a token which can be staked into a [Tribeca vote escrow locker](https://docs.tribeca.so/electorate/voting-escrow#voting-escrow-tokens).
- The **Delock** token, e.g. sunSBR. This is also commonly referred to as a "sunToken".
- The **Yi** token, e.g. yiSunSBR. [Yi tokens](https://github.com/CrateProtocol/yi) are a primitive for creating auto-compounding single token staking pools, and they are used by several protocols including [SolunaDAO](https://soluna.money) and [Tribeca SAVE](https://github.com/TribecaHQ/save).
- The **Token of Appreciation**, e.g. tapSunSBR. Tokens of Appreciation, also known as **TAPs**, are used to record whether or not someone minted a Delock within a specific time period. They may be used in the future for airdrops or some other incentivization mechanism, but this is currently not set in stone.

## Locker Refresh

A **lock refresh** allows the locker to be extended to the maximum vote escrow lockup duration. Manual refreshes are necessary because vote escrow lockup power decays linearly with respect to time.

Anyone may refresh a specific Delock vote escrow locker: calling the function is permissionless.
