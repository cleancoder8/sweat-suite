import { UserButton } from "@clerk/nextjs";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-white/60">Welcome back to Sweat Suite</p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Membership Status</h2>
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div>
              <p className="font-medium">Premium Plan</p>
              <p className="text-sm text-white/50">Renews on Jan 1, 2026</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">Active</span>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors text-sm">Book a Class</button>
            <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors text-sm">Update Payment</button>
            <button className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors text-sm">View History</button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
