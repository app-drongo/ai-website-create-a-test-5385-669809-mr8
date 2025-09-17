'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
import {
  Lock,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  const Features = () => {
    router.push('/get-started');
  };

  const handleFeaturesClick = () => {
    router.push('/features');
  };

  const features = [
    {
      icon: Zap,
      title: 'AI Code Generation',
      description:
        'Generate production-ready code with our advanced AI models trained on millions of repositories.',
      badge: 'Development',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC2 Type II certified platform with end-to-end encryption and role-based access control.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description:
        'Build once and deploy everywhere with native support for web, mobile and desktop platforms.',
      badge: 'Platform',
    },
    {
      icon: Globe,
      title: 'Edge Computing',
      description: 'Deploy to 190+ edge locations worldwide for sub-50ms latency to any user.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'ML Analytics',
      description: 'Real-time metrics and AI-powered insights to optimize application performance.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'Design System',
      description:
        'Customizable component library following modern design principles and accessibility.',
      badge: 'Design',
    },
    {
      icon: Code2,
      title: 'API Platform',
      description: 'Auto-generated REST/GraphQL APIs with built-in versioning and documentation.',
      badge: 'Integration',
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: '24/7 technical support with 1-hour response time SLA for critical issues.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'GDPR, CCPA, and HIPAA compliant with data residency options in 30+ regions.',
      badge: 'Compliance',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Development Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A complete suite of AI-powered development tools to build, deploy and scale applications
            with enterprise security and compliance built-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to accelerate your development?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleTrialClick}
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-accent"
              onClick={handleFeaturesClick}
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Features.displayName = 'Features';

