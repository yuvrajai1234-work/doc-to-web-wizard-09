import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-12 shadow-card">
          {/* Icon */}
          <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform 
            <span className="gradient-hero bg-clip-text text-transparent block">
              Your Habits?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of users already building better habits with HabitFlow. 
            Start your journey today with our free tier and unlock your potential.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-success bg-clip-text text-transparent mb-1">
                85%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent mb-1">
                2M+
              </div>
              <div className="text-sm text-muted-foreground">Habits Tracked</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Zap className="mr-2" />
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              <Users className="mr-2" />
              Join Community
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✓ No credit card required</span>
            <span>✓ 7-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};