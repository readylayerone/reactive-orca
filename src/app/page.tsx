import Link from "next/link";

import { HydrateClient } from "@/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4">
            <h3 className="text-2xl font-bold text-white">Jupiter Swap Example</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white">From SOL to USDC</label>
              <label className="text-sm text-white">Amount</label>
              <input type="text" className="rounded p-2 text-black" placeholder="0.0" />
              <button className="mt-4 rounded bg-[hsl(280,100%,70%)] px-4 py-2 font-bold text-white hover:bg-[hsl(280,100%,60%)]">Swap</button>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
