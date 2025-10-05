import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Gamepad2, Brain, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Internship Recommendation Engine",
      description: "Developed an intelligent system that recommends personalized internship opportunities using machine learning algorithms. Built for Smart India Hackathon 2025 under Smart Education theme.",
      category: "AI",
      icon: Brain,
      tags: ["Machine Learning", "Python", "React", "API"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Smart E-Water Pump",
      description: "IoT-based smart water management system for automated pump control. Final year diploma project featuring real-time monitoring and intelligent water level detection.",
      category: "IoT",
      icon: Cpu,
      tags: ["IoT", "Arduino", "Sensors", "Automation"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "eHospital System",
      description: "Advanced UI website design for comprehensive hospital management. Features patient records, appointment scheduling, and admin dashboard with modern interface.",
      category: "Web",
      icon: Code2,
      tags: ["React", "Tailwind CSS", "UI/UX", "Web Design"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Obstacle Overdrive",
      description: "Thrilling 3D racing game built with Unity featuring dynamic obstacles, smooth controls, and engaging gameplay mechanics. Published during game development internship.",
      category: "Game",
      icon: Gamepad2,
      tags: ["Unity", "C#", "3D Graphics", "Game Design"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Forest Rush",
      description: "Fast-paced endless runner game set in a mystical forest environment. Features procedural generation, power-ups, and increasing difficulty curve.",
      category: "Game",
      icon: Gamepad2,
      tags: ["Unity", "C#", "Mobile", "Game Development"],
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Tap It",
      description: "Addictive casual mobile game built with MIT App Inventor. Simple yet challenging gameplay focused on timing and reflexes.",
      category: "Game",
      icon: Gamepad2,
      tags: ["MIT App Inventor", "Mobile", "Android", "Game Design"],
      color: "from-yellow-500 to-orange-500",
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
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions, games, and creative applications I've built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass h-full p-6 hover:glow-primary transition-all duration-300 group overflow-hidden relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Category Badge */}
                  <Badge className="mb-3" variant="secondary">
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 glass">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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

export default Projects;
