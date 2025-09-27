import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Dumbbell, 
  Book, 
  Droplets, 
  Brain, 
  Calendar,
  Flame,
  Trophy,
  TrendingUp,
  Heart
} from "lucide-react";

const mockHabits = [
  {
    id: 1,
    name: "Morning Workout",
    icon: Dumbbell,
    color: "level-4",
    todayLevel: 3,
    streak: 7,
    weekProgress: 85
  },
  {
    id: 2,
    name: "Read Books",
    icon: Book,
    color: "level-3",
    todayLevel: 2,
    streak: 12,
    weekProgress: 92
  },
  {
    id: 3,
    name: "Drink Water",
    icon: Droplets,
    color: "level-2",
    todayLevel: 4,
    streak: 5,
    weekProgress: 78
  },
  {
    id: 4,
    name: "Meditation",
    icon: Brain,
    color: "level-1",
    todayLevel: 1,
    streak: 3,
    weekProgress: 65
  }
];

const levelButtons = [1, 2, 3, 4];

export const HabitPreview = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Track Your Daily
              <span className="gradient-hero bg-clip-text text-transparent block">
                Progress
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Log your habits with our intuitive 4-level system. Each level represents 
              increasing effort and earns you more points toward your cycle goals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 level-1-bg rounded-full" />
                <span className="text-muted-foreground">Level 1: Light effort (1 point)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 level-2-bg rounded-full" />
                <span className="text-muted-foreground">Level 2: Moderate effort (2 points)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 level-3-bg rounded-full" />
                <span className="text-muted-foreground">Level 3: Strong effort (3 points)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 level-4-bg rounded-full" />
                <span className="text-muted-foreground">Level 4: Maximum effort (4 points)</span>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Try It Now
            </Button>
          </div>

          {/* Right Side - Mock Dashboard */}
          <div className="glass rounded-2xl p-6 shadow-card">
            {/* Header Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 gradient-card rounded-lg">
                <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-lg font-bold text-primary">47</div>
                <div className="text-xs text-muted-foreground">Today's Score</div>
              </div>
              <div className="text-center p-3 gradient-card rounded-lg">
                <Flame className="w-5 h-5 text-warning mx-auto mb-1" />
                <div className="text-lg font-bold text-warning">12</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
              <div className="text-center p-3 gradient-card rounded-lg">
                <Trophy className="w-5 h-5 text-success mx-auto mb-1" />
                <div className="text-lg font-bold text-success">85%</div>
                <div className="text-xs text-muted-foreground">Cycle Score</div>
              </div>
            </div>

            {/* Habits List */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Today's Habits</h3>
              
              {mockHabits.map((habit) => (
                <Card key={habit.id} className="p-4 bg-background/50 border-muted">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${habit.color}-bg rounded-lg flex items-center justify-center`}>
                        <habit.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{habit.name}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Flame className="w-3 h-3" />
                          <span>{habit.streak} day streak</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Level {habit.todayLevel}
                    </Badge>
                  </div>

                  <div className="flex gap-1 mb-2">
                    {levelButtons.map((level) => (
                      <Button
                        key={level}
                        size="sm"
                        variant={level <= habit.todayLevel ? "default" : "outline"}
                        className={`flex-1 h-6 text-xs ${
                          level <= habit.todayLevel 
                            ? `level-${level}-bg text-white` 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {level}
                      </Button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <Progress value={habit.weekProgress} className="flex-1 h-1" />
                    <span className="text-muted-foreground">{habit.weekProgress}%</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* AI Reflection */}
            <Card className="mt-4 p-4 gradient-hero">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-white mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white mb-1">
                    AI Reflection
                  </div>
                  <p className="text-xs text-white/80">
                    Great progress today! Your consistent workout streak is building amazing momentum. 
                    Keep up the excellent work! 🔥
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};