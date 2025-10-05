import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (Computer Engineering)",
      institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
      period: "2025 - 2028",
      status: "Pursuing",
      description: "Focusing on advanced computer engineering concepts, algorithms, and software development.",
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Bharati Vidyapeeth's J.N.I.O.T., Pune",
      period: "2022 - 2025",
      status: "Completed",
      score: "90.34% (Distinction)",
      description: "Comprehensive study of computer fundamentals, programming, and web technologies.",
    },
    {
      degree: "SSC (10th Standard)",
      institution: "Shyamlal Highschool, Udgir",
      period: "2022",
      status: "Completed",
      score: "87.40%",
      description: "Strong foundation in science and mathematics with excellent academic performance.",
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
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and achievements that shaped my technical foundation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

          {/* Education Cards */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-primary transform -translate-x-2 md:-translate-x-1/2 top-6" />

                <Card className="glass p-6 ml-12 md:ml-0 hover:glow-primary transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === "Pursuing" 
                            ? "bg-primary/20 text-primary" 
                            : "bg-secondary/20 text-secondary"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground mb-3">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        {edu.score && (
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <Award className="w-4 h-4" />
                            {edu.score}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
