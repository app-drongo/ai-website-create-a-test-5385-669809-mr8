import Link from 'next/link';
import { Button } from '@/components/ui/button';
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
import {
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Cloud Infrastructure', href: '#cloud' },
        { name: 'DevOps Tools', href: '#devops' },
        { name: 'API Management', href: '/api' },
        { name: 'Security', href: '/security' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Our Story', href: '#story' },
        { name: 'Tech Blog', href: '/blog' },
        { name: 'Join Our Team', href: '/careers' },
        { name: 'Newsroom', href: '/news' },
        { name: 'Tech Partners', href: '/partners' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Developer Hub', href: '/dev' },
        { name: 'Tech Community', href: '/community' },
        { name: 'Code Labs', href: '/labs' },
        { name: 'Tech Talks', href: '/talks' },
        { name: 'Success Stories', href: '/stories' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Trust',
      links: [
        { name: 'Privacy Center', href: '/privacy' },
        { name: 'Service Terms', href: '/terms' },
        { name: 'Data Protection', href: '/data' },
        { name: 'ISO Compliance', href: '/compliance' },
        { name: 'Security Center', href: '/security' },
        { name: 'Trust Portal', href: '/trust' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/acmetech' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/acmetech' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/acmetech' },
  ];

  return (
    <footer className="bg-background border-t border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-bold text-xl">Acme Tech</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering developers with enterprise-grade cloud infrastructure and DevOps
                solutions. Trusted by over 10,000 tech companies worldwide.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">enterprise@acmetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) ACME-TECH</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Silicon Valley, CA 94025</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Developer Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="dev@company.com"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Weekly tech insights and developer resources. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-muted bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Acme Tech. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-red-500 fill-current" /> in California
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-muted">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Site Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/status"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              System Status
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Enterprise Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';

