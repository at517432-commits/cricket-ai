import { motion } from "framer-motion";
import { Trophy, Activity, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const performanceData = [
  { match: "M1", runs: 45, strikeRate: 130 },
  { match: "M2", runs: 82, strikeRate: 145 },
  { match: "M3", runs: 12, strikeRate: 110 },
  { match: "M4", runs: 105, strikeRate: 160 },
  { match: "M5", runs: 67, strikeRate: 135 },
  { match: "M6", runs: 94, strikeRate: 152 },
];

export function DashboardPreview() {
  const stats = [
    { title: "Total Runs", value: "12,040", subtitle: "Career", icon: Trophy, trend: "+12.5%" },
    { title: "Batting Avg", value: "50.3", subtitle: "Last 12 Months", icon: Target, trend: "+2.1" },
    { title: "Strike Rate", value: "137.8", subtitle: "T20 Format", icon: Zap, trend: "+5.4" },
    { title: "Form Index", value: "88/100", subtitle: "AI Rating", icon: Activity, trend: "Peak" },
  ];

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-secondary/30 border-y border-border/50">
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen">
        <img
          src={`${import.meta.env.BASE_URL}images/dashboard-bg.png`}
          alt="Dashboard Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Real-time Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience data like never before with our beautifully crafted, interactive dashboards built for professionals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-card/80 backdrop-blur-md border-border shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="w-4 h-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-card/80 backdrop-blur-md border-border shadow-xl">
            <CardHeader>
              <CardTitle>Recent Form Analysis</CardTitle>
              <p className="text-sm text-muted-foreground">Runs and Strike Rate over last 6 matches</p>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRuns" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis 
                      dataKey="match" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false} 
                      dy={10} 
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false} 
                      dx={-10} 
                    />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '8px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                      }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="runs" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorRuns)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
