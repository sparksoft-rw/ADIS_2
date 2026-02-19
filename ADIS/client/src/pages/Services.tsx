import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Server, Shield, Smartphone, PenTool, Database } from "lucide-react";

const ServiceDetail = ({ icon: Icon, title, description, features, image, reverse }: any) => (
  <div className={`grid md:grid-cols-2 gap-12 items-center py-20 ${reverse ? 'bg-secondary/10' : ''}`}>
    <div className={`container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center`}>
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{description}</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/10">
            Learn More
          </Button>
        </Link>
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <img 
          src={image} 
          alt={title} 
          className="rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500" 
        />
      </div>
    </div>
  </div>
);

export default function Services() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored digital solutions to elevate your brand and streamline your operations.
          </p>
        </div>
      </section>

      <div className="space-y-0">
        <ServiceDetail
          icon={Code}
          title="Web Development"
          description="We create stunning, high-performance websites that convert visitors into customers. From simple landing pages to complex web applications, we use the latest technologies like React, Next.js, and Node.js."
          features={["Responsive Design", "SEO Optimization", "E-commerce Solutions", "CMS Integration"]}
          // coding on laptop
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
          reverse={false}
        />

        <ServiceDetail
          icon={Smartphone}
          title="Mobile App Development"
          description="Reach your customers on the go with native and cross-platform mobile apps. We build intuitive, feature-rich applications for both iOS and Android platforms."
          features={["iOS & Android", "React Native", "UI/UX Design", "App Store Optimization"]}
          // mobile phone app usage
          image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
          reverse={true}
        />

        <ServiceDetail
          icon={Shield}
          title="Cyber Security"
          description="Protect your business from digital threats. Our comprehensive security services ensure your data and infrastructure remain secure against evolving cyber attacks."
          features={["Security Audits", "Penetration Testing", "Data Encryption", "Compliance Consulting"]}
          // cyber security code lock
          image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80"
          reverse={false}
        />

        <ServiceDetail
          icon={Server}
          title="Cloud Solutions"
          description="Scale your infrastructure with confidence. We help you leverage the power of the cloud to improve performance, reliability, and cost-efficiency."
          features={["AWS / Azure / GCP", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"]}
          // server room
          image="https://images.unsplash.com/photo-1558494949-ef526b01201b?w=800&q=80"
          reverse={true}
        />
      </div>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us to discuss a tailored strategy that fits your specific needs and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold h-14 px-10 rounded-xl shadow-xl">
              Talk to an Expert <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
