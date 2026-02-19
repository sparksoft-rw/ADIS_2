import { PageTransition } from "@/components/PageTransition";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stat = ({ number, label, suffix = "" }: any) => (
  <div className="text-center p-6 glass-card rounded-xl">
    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
      <CountUp end={number} duration={2.5} suffix={suffix} enableScrollSpy scrollSpyOnce />
    </div>
    <div className="text-muted-foreground font-medium">{label}</div>
  </div>
);

const TeamMember = ({ name, role, image, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group"
  >
    <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10 duration-300" />
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
    </div>
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-primary">{role}</p>
  </motion.div>
);

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About A.D.I.S</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are a collective of visionaries, developers, and designers united by a passion for digital excellence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat number={5} suffix="+" label="Years Experience" />
            <Stat number={150} suffix="+" label="Projects Delivered" />
            <Stat number={40} suffix="+" label="Team Experts" />
            <Stat number={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At A.D.I.S, our mission is simple: to empower businesses through technology. We believe that digital transformation shouldn't be complicated or overwhelming.
                </p>
                <p>
                  Founded in 2020, we started with a small team of three developers who wanted to build better software. Today, we've grown into a full-service agency, but our core values remain the same: quality, transparency, and innovation.
                </p>
                <p>
                  We partner with our clients, treating their business as our own. Your success is our success, and we stop at nothing to ensure we deliver solutions that drive real growth.
                </p>
              </div>
            </div>
            <div className="relative">
               {/* Unsplash image for tech office detail */}
               {/* modern architecture building glass */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Our Office" 
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Meet The Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The brilliant minds behind our success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Unsplash portraits */}
            <TeamMember 
              name="Sarah Jenkins" 
              role="CEO & Founder" 
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
              delay={0}
            />
            <TeamMember 
              name="David Chen" 
              role="CTO" 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
              delay={0.1}
            />
            <TeamMember 
              name="Elena Rodriguez" 
              role="Head of Design" 
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
              delay={0.2}
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
