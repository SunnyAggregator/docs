import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";

import { GradientText } from "../components/common/typography/GradientText";
import { RotatingNASASun } from "../components/RotatingNASASun";

function HomepageHeader() {
  return (
    <header tw="relative mx-auto min-h-[480px] bg-black w-screen overflow-hidden">
      <RotatingNASASun />
      <div tw="relative z-10">
        <div tw="flex flex-col items-center mt-20">
          <p tw="uppercase text-gray-300 text-lg">Welcome to the</p>
          <h1 tw="text-center text-5xl font-semibold">
            <GradientText>Sunny Documentation</GradientText>
          </h1>
          <p tw="text-lg text-white">Solana's composable DeFi aggregator</p>
          <Link
            className="button button--secondary button--lg"
            tw="mt-4 bg-amber-400 border-none"
            to="/docs/about/intro"
          >
            Read the Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description="The official documentation for Sunny Aggregator, Solana's composable DeFi aggregator.">
      <HomepageHeader />
    </Layout>
  );
}
