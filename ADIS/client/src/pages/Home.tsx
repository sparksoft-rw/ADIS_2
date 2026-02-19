import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, Shield, Cloud, Smartphone, CheckCircle, Zap } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

// Components
const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300"
  >
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
      <CheckCircle className="w-4 h-4 text-primary" />
    </div>
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary-foreground/80">Leading Digital Agency</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                We Build <span className="text-gradient">Digital</span> <br />
                <span className="text-white">Excellence.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Transforming businesses with cutting-edge technology, stunning design, and robust development solutions tailored for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 h-12 px-8 rounded-xl text-base">
                    Start Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 text-white h-12 px-8 rounded-xl text-base">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Abstract decorative image */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-secondary/50 backdrop-blur-sm p-4">
                {/* Unsplash image for tech/abstract */}
                {/* technology abstract network connection */}
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                  alt="Digital Technology" 
                  className="rounded-2xl w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 bg-secondary border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Security Status</p>
                    <p className="text-sm font-bold text-white">Protected</p>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-8 bg-secondary border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Performance</p>
                    <p className="text-sm font-bold text-white">Optimized</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What We Do Best</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital solutions to help your business thrive in the modern landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Code}
              title="Web Development"
              description="Custom, high-performance websites built with the latest frameworks."
              delay={0}
            />
            <ServiceCard 
              icon={Smartphone}
              title="App Development"
              description="Native and cross-platform mobile applications for iOS and Android."
              delay={0.1}
            />
            <ServiceCard 
              icon={Cloud}
              title="Cloud Solutions"
              description="Scalable cloud infrastructure design, migration, and management."
              delay={0.2}
            />
            <ServiceCard 
              icon={Shield}
              title="Cyber Security"
              description="Enterprise-grade security audits and protection for your digital assets."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Unsplash image for office team working */}
              {/* modern office team meeting */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl border border-white/10 relative z-10"
              />
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Why Industry Leaders <br />
                <span className="text-gradient">Trust A.D.I.S</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We don't just write code; we solve business problems. Our team of experts combines technical prowess with strategic thinking to deliver results that matter.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <FeatureItem text="Agile Methodology" />
                <FeatureItem text="24/7 Support" />
                <FeatureItem text="Expert Team" />
                <FeatureItem text="Scalable Solutions" />
                <FeatureItem text="Transparent Pricing" />
                <FeatureItem text="On-Time Delivery" />
              </div>
              
              <Link href="/about">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your digital goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-background hover:bg-white/90 font-bold h-14 px-10 rounded-xl text-lg shadow-xl shadow-white/10">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
