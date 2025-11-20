import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, Zap, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Industry-Best Security',
      description: 'Our platform is PCI DSS compliant and uses advanced fraud detection to protect your transactions.',
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'Lightning-Fast Integration',
      description: 'Get started in minutes with our developer-friendly APIs and extensive documentation.',
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Global Reach',
      description: 'Accept payments from customers worldwide with support for over 100 currencies.',
    },
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Razor Pay?
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We provide everything you need to manage payments, so you can focus on growing your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 flex flex-col">
              <CardHeader className="flex-grow flex flex-col justify-center items-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
