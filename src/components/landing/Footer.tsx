import { Logo } from '@/components/Logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const PciDssLogo = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-auto"
  >
    <circle cx="50" cy="50" r="48" stroke="#ccc" strokeWidth="2" fill="white" />
    <text
      x="50"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="12"
      fontWeight="bold"
      textAnchor="middle"
      fill="#333"
    >
      PCI DSS
    </text>
    <text
      x="50"
      y="55"
      fontFamily="Arial, sans-serif"
      fontSize="10"
      textAnchor="middle"
      fill="#333"
    >
      CERTIFIED
    </text>
    <path
      d="M30 65 L70 65 L70 80 L30 80 Z"
      fill="#528FF0"
      stroke="#fff"
      strokeWidth="1"
    />
    <text
      x="50"
      y="75"
      fontFamily="Arial, sans-serif"
      fontSize="8"
      textAnchor="middle"
      fill="white"
    >
      LEVEL 1
    </text>
  </svg>
);

const SocLogo = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-auto"
  >
    <circle cx="50" cy="50" r="48" fill="#528FF0" />
    <text
      x="50"
      y="55"
      fontFamily="Arial, sans-serif"
      fontSize="20"
      fontWeight="bold"
      textAnchor="middle"
      fill="white"
    >
      SOC
    </text>
  </svg>
);

const linkColumns = [
  {
    title: 'ACCEPT PAYMENTS',
    links: [
      { text: 'Payment Aggregator' },
      { text: 'Payment Gateway' },
      { text: 'Payment Pages' },
      { text: 'Payment Links' },
      { text: 'Razorpay POS', new: true },
      { text: 'QR Codes' },
      { text: 'Subscriptions' },
      { text: 'Smart Collect' },
      { text: 'Optimizer' },
      { text: 'Instant Settlements' },
    ],
  },
  {
    title: 'PAYROLL',
    links: [{ text: 'RazorpayX Payroll' }],
    className: 'mt-6',
  },
  {
    title: 'BECOME A PARTNER',
    links: [{ text: 'Refer and Earn' }, { text: 'Onboarding APIs' }],
    className: 'mt-6',
  },
  {
    title: 'MORE',
    links: [
      { text: 'Route' },
      { text: 'Invoices' },
      { text: 'Freelancer Payments' },
      { text: 'International Payments' },
      { text: 'Flash Checkout' },
      { text: 'UPI' },
      { text: 'ePOS' },
      { text: 'Checkout Demo' },
    ],
    className: 'mt-6',
  },
];

const linkColumns2 = [
  {
    title: 'BANKING PLUS',
    links: [
      { text: 'RazorpayX' },
      { text: 'Source to pay' },
      { text: 'Current Accounts' },
      { text: 'Payouts' },
      { text: 'Payout Links' },
      { text: 'Corporate Credit Card' },
    ],
  },
  {
    title: 'DEVELOPERS',
    links: [{ text: 'Docs' }, { text: 'Integrations' }, { text: 'API Reference' }],
    className: 'mt-6',
  },
  {
    title: 'RESOURCES',
    links: [
      { text: 'Blog' },
      { text: 'Learn' },
      { text: 'Customer Stories' },
      { text: 'Events' },
      { text: 'Chargeback Guide' },
      { text: 'Settlement Guide' },
    ],
    className: 'mt-6',
  },
];

const linkColumns3 = [
  {
    title: 'COMPANY',
    links: [
      { text: 'About Us' },
      { text: 'Careers' },
      { text: 'Terms of Use' },
      { text: 'Privacy Policy' },
      { text: 'Grievance Redressal' },
      { text: 'Responsible Disclosure' },
      { text: 'Partners' },
      { text: 'White papers' },
      { text: 'Corporate Information' },
    ],
  },
  {
    title: 'HELP & SUPPORT',
    links: [{ text: 'Support' }, { text: 'Knowledge base' }],
    className: 'mt-6',
  },
];

const linkColumns4 = [
  {
    title: 'SOLUTIONS',
    links: [
      { text: 'Education' },
      { text: 'E-commerce' },
      { text: 'SaaS' },
      { text: 'BFSI' },
    ],
  },
  {
    title: 'FREE TOOLS',
    links: [
      { text: 'GST Calculator' },
      { text: 'GST Number Search' },
      { text: 'GST Search by PAN' },
      { text: 'ROI Calculator' },
      { text: 'CAGR Calculator' },
      { text: 'EBITDA Calculator' },
    ],
    className: 'mt-6',
  },
];


export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <Logo />
            <p className="text-xs text-muted-foreground mt-4">
              Razorpay is the only payments solution in India that allows
              businesses to accept, process and disburse payments with its
              product suite. It gives you access to all payment modes including
              credit card, debit card, netbanking, UPI and popular wallets
              including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money
              and PayZapp.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              RazorpayX supercharges your business banking experience, bringing
              effectiveness, efficiency, and excellence to all financial
              processes. With RazorpayX, businesses can get access to
              fully-functional current accounts, supercharge their payouts and
              automate payroll compliance.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Manage your marketplace, automate bank transfers, collect
              recurring payments, share invoices with customers and avail
              working capital loans - all from a single platform. Fast forward
              your business with Razorpay.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Disclaimer: The RazorpayX powered Current Account and VISA
              corporate credit card are provided by RBI licensed banks. Your
              RazorpayX powered current account is provided by our partner banks
              i.e, ICICI, RBL, Yes bank, in accordance with RBI regulations.
              RazorpayX itself is not a bank and doesn't hold or claim to hold a
              banking license.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <PciDssLogo />
              <SocLogo />
            </div>
          </div>
          <div className="md:col-span-2">
            {linkColumns.map((col) => (
              <div key={col.title} className={col.className}>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <Link href="#" className="text-sm text-primary hover:underline flex items-center">
                        {link.text}
                        {link.new && (
                          <span className="ml-2 text-xs bg-green-200 text-green-800 font-bold px-2 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:col-span-2">
             {linkColumns2.map((col) => (
              <div key={col.title} className={col.className}>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <Link href="#" className="text-sm text-primary hover:underline">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-6">
               <h4 className="font-semibold text-sm text-muted-foreground mb-2">FIND US ONLINE</h4>
               <div className="flex space-x-2">
                  <Link href="#" className="text-primary hover:opacity-80"><Facebook size={20} /></Link>
                  <Link href="#" className="text-primary hover:opacity-80"><Twitter size={20} /></Link>
                  <Link href="#" className="text-primary hover:opacity-80"><Instagram size={20} /></Link>
                  <Link href="#" className="text-primary hover:opacity-80"><Linkedin size={20} /></Link>
               </div>
            </div>
             <div className="mt-6">
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">REGD. OFFICE ADDRESS</h4>
                <p className="text-xs text-muted-foreground">
                  Razorpay Software Limited, 1st Floor, SJR Cyber, 22 Laskar Hosur Road, Adugodi, Bengaluru, 560030, Karnataka, India <br />
                  CIN: U72200KA2013PLC097389
                </p>
             </div>
          </div>
          <div className="md:col-span-2">
            {linkColumns3.map((col) => (
                <div key={col.title} className={col.className}>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    {col.title}
                  </h4>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.text}>
                        <Link href="#" className="text-sm text-primary hover:underline">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="md:col-span-3">
             {linkColumns4.map((col) => (
                <div key={col.title} className={col.className}>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    {col.title}
                  </h4>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.text}>
                        <Link href="#" className="text-sm text-primary hover:underline">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

        </div>
        <hr className="my-8 border-border" />
        <div className="text-center">
            <p className="text-xs text-muted-foreground">
                © Razorpay 2025 All Rights Reserved
            </p>
            <p className="text-xs text-muted-foreground mt-2">
                Razorpay Software Limited (formerly known as Razorpay Software Private Limited) is an RBI Authorised Online Payment Aggregator
            </p>
        </div>
      </div>
       <div className="border-t border-border mt-4">
        <div className="container py-3">
          <p className="text-xs text-muted-foreground text-center">
            Payment aggregation services provided by Razorpay Software Limited (formerly known as Razorpay Software Private Limited) -
          </p>
        </div>
      </div>
    </footer>
  );
}
