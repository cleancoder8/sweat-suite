import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Activity, CreditCard, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/80 mb-4">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Now Live: Premium Membership
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2">
          Elevate Your <br />
          Fitness Experience
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Sweat Suite offers a seamless, premium way to manage your gym membership, track progress, and access exclusive content.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/sign-up">
            <Button variant="glass" size="lg" className="group">
              Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary" size="lg">
              View Plans
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-16">
          <GlassCard className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-white/5 border border-white/10">
              <Activity className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold">Track Progress</h3>
            <p className="text-sm text-white/50">Real-time analytics and insights into your workout journey.</p>
          </GlassCard>

          <GlassCard className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-white/5 border border-white/10">
              <CreditCard className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold">Easy Payments</h3>
            <p className="text-sm text-white/50">Seamless subscription management with secure processing.</p>
          </GlassCard>

          <GlassCard className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-white/5 border border-white/10">
              <Users className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold">Community</h3>
            <p className="text-sm text-white/50">Connect with like-minded individuals and expert trainers.</p>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
