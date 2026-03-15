import { motion } from "framer-motion";
import { BarChart3, Target, Brain } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "Player Statistics Dashboard",
      description: "Deep dive into granular player metrics. Compare stats across formats, conditions, and opponents with rich visualizations.",
      icon: BarChart3,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      title: "Match Analytics",
      description: "Unpack every delivery. Analyze pitch maps, wagon wheels, and momentum shifts to understand exactly how matches were won.",
      icon: Target,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20"
    },
    {
      title: "AI Performance Prediction",
      description: "Leverage machine learning models to predict player form, match outcomes, and optimal team compositions based on historical data.",
      icon: Brain,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "border-indigo-400/20"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Powerful tools for <span className="text-primary">smart decisions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform provides everything you need to analyze, predict, and dominate the game of cricket using data.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.border} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
