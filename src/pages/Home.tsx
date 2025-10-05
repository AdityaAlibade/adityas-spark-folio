import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const phrases = ["Software Developer", "Game Developer", "Android Developer", "AI Enthusiast", "Creative Technologist"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Alibade Aditya</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Engineering Student
          </p>

          <div className="h-8 mb-12">
            <p className="text-lg md:text-xl text-primary font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-primary group">
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass">
              <a href="#" download>
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Floating Avatar/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="glass rounded-2xl p-8 animate-float">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary glow-primary mb-4 flex items-center justify-center text-4xl font-bold">
                    AA
                  </div>
                  <p className="text-sm text-muted-foreground">Passionate about creating innovative solutions</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
