---
title: A Brief History of Sunny
sidebar_label: History
---

## The need for yield aggregators

Many DeFi projects provide token-based yield farming incentives as a mechanism for bootstrapping liquidity. With so many new Solana DeFi projects launching, it has become increasingly difficult for users to manage their yield farming positions across different interfaces.

A yield aggregator simplifies this process by offering a streamlined solution for discovering and entering farms. The aggregator can then offer additional strategies, such as automatically compounding the farmed tokens.

## Solana DeFi is meant for composability

The Solana ecosystem has seen rapid growth over the past year as more high quality projects and investors enter the scene. From March 2021, the TVL of Solana DeFi rose from $150M to $1.3B, a faster percentage increase than even Ethereum or BSC. Most of this activity can be attributed to yield farming on AMMs like Raydium and Saber.

Source: https://twitter.com/mhonkasalo/status/1420450952725807107

One of Solana’s key advantages is that transactions all happen on a single shard. Multi-sharded scalability solutions like Ethereum’s Polygon, Arbitrum, or ETH 2.0 could silo DeFi applications into separate shards. Solana’s single-sharded design feature allows for better composability between any application in the ecosystem.

## The problem with yield aggregators, a.k.a. auto dumpers

Sunny was born in September 2021 intending to become one of these _yield aggregators_, similar to Yearn. It planned on launching various pools and strategies with auto-compounding of anything, starting with [Saber](https://saber.so) built on [Quarry Protocol](https://quarry.so).

However, Yearn soon proved that this model was not optimal working with other projects: it relies on heavy yields always existing, and projects generally do not want to support projects that dump protocol tokens. The lack of ecosystem support reduces composability, and competitors to Yearn such as [Convex](https://convex.finance) quickly gained significant market share over Yearn.

Today, Yearn "harvests" Convex yields. We believe there will still be a Yearn, but Sunny will continue to be the base layer of composability for any Yearn-like project to launch on top of.

## The need for DAO aggregators

At the beginning of 2022, Saber launched their [Tribeca DAO](https://tribeca.so/gov/sbr). Tribeca follows the _veToken_ model, meaning that tokens must be locked up for a very long period of time in order to maximize their utility in governance.

In late January 2022, [Quarry](https://quarry.so) launched [Gauge](https://github.com/QuarryProtocol/gauge), which gave utility to veTokens by allowing DAOs to control the amount of tokens released to its pools. Both Saber and Sunny quickly adopted this model, as they are both built on Quarry.

With the growth of the Tribeca ecosystem, Sunny has decided to pivot into becoming an aggregator for Tribeca-based DAOs in addition to being a liquidity mining aggregation portal.

## Sunny V3: a DeFi aggregator

The newest version of Sunny has three core users:

- Liquidity Providers, which earn SUNNY and other tokens
- SBR Stakers, which stake SBR tokens to obtain sunSBR
- Sunny Stakers, which stake SUNNY for veSUNNY to earn from the Sunny DAO

These three users work together to boost each others' yields, working with the DAOs staked into (currently only Saber) in order to grow Solana's DeFi ecosystem.
