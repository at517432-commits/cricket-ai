import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DashboardPreview } from "@/components/DashboardPreview";
import { LoginSection } from "@/components/LoginSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <Features />
        <DashboardPreview />
        <LoginSection />
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} CricAI Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
