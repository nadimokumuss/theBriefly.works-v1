import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/paketler", label: "Paketler" },
    { href: "/paketler#custom-builder", label: "Custom Squad Builder" },
    { href: "/nasil-calisir", label: "Nasıl Çalışır" },
    { href: "/satis-ortagi", label: "Satış Ortağı" },
  ],
  company: [
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/kariyer", label: "Kariyer" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ],
  legal: [
    { href: "/gizlilik", label: "Gizlilik Politikası" },
    { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
    { href: "/cerez-politikasi", label: "Çerez Politikası" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com/thebriefly", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/thebriefly", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/thebriefly", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                The <span className="text-accent">Briefly</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Ajans kalitesi, platform hızı. Kreatif işlerinizi dijital montaj
              hattına taşıyın.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Ürün</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Şirket</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Yasal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Briefly. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ in Istanbul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
