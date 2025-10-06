import { motion } from "framer-motion";
import { Briefcase, Trophy, Users, Zap, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Extracurricular = () => {
  const activities = [
    {
      title: "Game Development Intern",
      organization: "Not SUS Games",
      period: "June 2024 - July 2024",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Developed 3 complete games: Tap It, Obstacle Overdrive, and Forest Rush",
        "Gained hands-on experience in Unity game engine and C# programming",
        "Implemented UI/UX design principles for enhanced user experience",
        "Optimized game performance and reduced load times by 40%",
      ],
    },
    {
      title: "Smart India Hackathon 2025",
      organization: "SIH - Smart Education Theme",
      period: "2025",
      icon: Trophy,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Developed AI-based internship recommendation engine",
        "Collaborated with team of 6 members across different domains",
        "Presented innovative solution to industry experts and judges",
        "Applied machine learning algorithms for personalized recommendations",
      ],
    },
    {
      title: "Committee Head",
      organization: "College Technical Events",
      period: "2023 - 2025",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Led team of 15+ members in organizing technical events",
        "Coordinated workshops and seminars for 500+ students",
        "Managed event logistics, budgets, and sponsor relationships",
        "Increased student participation by 60% through strategic planning",
      ],
    },
    {
      title: "Sports & Athletics",
      organization: "College Sports Committee",
      period: "2022 - 2025",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      achievements: [
        "Active participant in inter-college sports competitions",
        "Represented college in various athletic events",
        "Promoted sports culture and healthy lifestyle among students",
        "Won multiple medals in track and field events",
      ],
    },
    {
      title: "District Level Carrom Player",
      organization: "Pune District Sports Association",
      period: "2022 - 2024",
      icon: Trophy,
      color: "from-yellow-500 to-amber-500",
      achievements: [
        "Represented Pune district in state-level carrom competitions",
        "Competed against top players from across Maharashtra",
        "Demonstrated strategic thinking and precision in competitive gameplay",
        "Achieved recognition at district level tournaments",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Extracurricular</span> Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond academics: Leadership, innovation, and community engagement
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass p-8 hover:glow-primary transition-all duration-300 group overflow-hidden relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative flex flex-col md:flex-row gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} p-[2px] group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <activity.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {activity.title}
                        </h3>
                        <p className="text-muted-foreground flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4" />
                          {activity.organization}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {activity.period}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {activity.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extracurricular;
