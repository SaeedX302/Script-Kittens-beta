'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Crown, Cpu, Code, Server, ArrowRight, Crosshair, Eye, Camera, Tv, Zap, Infinity, Ghost, MapPin, PersonStanding, Palette, Plug, Mail, Key } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const products = [
  {
    id: 'premium-panel',
    title: 'Premium Kitty Panel',
    type: 'EXTERNAL',
    badge: 'BEST SELLER',
    icon: Crown,
    accentColor: 'rgba(167,139,250,1)',
    accentMuted: 'rgba(167,139,250,0.12)',
    accentBorder: 'rgba(167,139,250,0.28)',
    features: [
      { icon: Crosshair, text: 'Aimbot Suite (Head, Neck, Body, Drag)' },
      { icon: Eye, text: 'ESP & Chams (Box, RGB, Moco)' },
      { icon: Camera, text: 'Sniper Scope, Quick & Camera' },
      { icon: Tv, text: 'Streamer Mode' },
    ],
    prices: [
      { label: '1 MONTH', value: '$9.99' },
      { label: 'PERMANENT', value: '$14.99', featured: true },
    ],
  },
  {
    id: 'internal-panel',
    title: 'Internal Kitty Panel',
    type: 'INTERNAL',
    badge: 'ADVANCED',
    icon: Cpu,
    accentColor: 'rgba(96,165,250,1)',
    accentMuted: 'rgba(96,165,250,0.12)',
    accentBorder: 'rgba(96,165,250,0.28)',
    features: [
      { icon: Crosshair, text: 'Silent Aim & Head Rotation' },
      { icon: Zap, text: 'Teleport, Speed Hack, Fly' },
      { icon: Infinity, text: 'Unlimited Ammo, No Recoil' },
      { icon: Ghost, text: 'Full ESP & Skeleton' },
    ],
    prices: [
      { label: '1 DAY', value: '$1' },
      { label: '1 MONTH', value: '$14.99' },
      { label: 'PERMANENT', value: '$24.99', featured: true },
    ],
  },
  {
    id: 'premium-codes',
    title: 'Premium Kitty Codes',
    type: 'EXTERNAL CODES',
    badge: 'BEST VALUE',
    icon: Code,
    accentColor: 'rgba(251,191,36,1)',
    accentMuted: 'rgba(251,191,36,0.12)',
    accentBorder: 'rgba(251,191,36,0.28)',
    features: [
      { icon: Crosshair, text: 'Aimbot x64 & x86' },
      { icon: MapPin, text: 'Sniper & Ammo Location' },
      { icon: PersonStanding, text: 'Speed Hack & Fly Run' },
      { icon: Palette, text: 'All Chams Types' },
    ],
    prices: [{ label: 'PERMANENT', value: '$4.99', featured: true, large: true }],
  },
  {
    id: 'api',
    title: 'Free Fire API',
    type: 'API SERVICES',
    badge: 'DEVELOPERS',
    icon: Server,
    accentColor: 'rgba(52,211,153,1)',
    accentMuted: 'rgba(52,211,153,0.12)',
    accentBorder: 'rgba(52,211,153,0.28)',
    features: [
      { icon: Plug, text: 'Player Info & Like API' },
      { icon: Mail, text: 'Friend Request Spam API' },
      { icon: Key, text: 'JWT Token & UID Bypass' },
      { icon: Zap, text: '24/7 Uptime & Fast Response' },
    ],
    prices: [{ label: 'STARTING FROM', value: '$1', suffix: '/endpoint', featured: true, large: true }],
  },
];

const handleTilt = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget as HTMLElement;
  // Disable transform transitions while actively tracking so updates are immediate
  el.classList.add('tilting');
  const rect = el.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 12;
  const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -12;
  el.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateZ(10px)`;
};
const resetTilt = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget as HTMLElement;
  // Re-enable transitions so the reset animates smoothly
  el.classList.remove('tilting');
  el.style.transform = '';
};

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card',
        { opacity: 0, y: 50, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="section-wrap relative">
      <div className="section-shell">
        <div className="text-center mb-20">
          <span className="section-chip mb-5">OUR ARSENAL</span>
          <h2 className="section-title mb-5">
            Premium <span className="text-gradient">Products</span>
          </h2>
          <p className="section-subtitle max-w-[520px] mx-auto">
            Elite Free Fire tools designed for serious gamers who demand the best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.id} className="product-card relative flex flex-col"
              style={{
                background: 'rgba(120,100,200,0.06)',
                border: '1.5px solid rgba(167,139,250,0.14)',
                borderRadius: '10px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(124,58,237,0.06)',
                transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, transform 0.35s ease',
              }}
              onMouseMove={handleTilt}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = product.accentBorder;
                el.style.background = `rgba(120,100,200,0.10)`;
                el.style.boxShadow = `0 16px 48px rgba(0,0,0,0.50), 0 0 30px ${product.accentMuted}, 0 0 0 1px ${product.accentBorder}`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(167,139,250,0.14)';
                el.style.background = 'rgba(120,100,200,0.06)';
                el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(124,58,237,0.06)';
                resetTilt(e);
              }}>

              {/* Top neon accent */}
              <div className="h-[2px] rounded-t-[10px]" style={{ background: `linear-gradient(90deg, ${product.accentColor.replace('1)', '0.70)')}, transparent)`, boxShadow: `0 0 8px ${product.accentColor.replace('1)', '0.40)')}` }} />

              <div className="p-7 flex-1 flex flex-col relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 flex items-center justify-center"
                    style={{
                      border: `1.5px solid ${product.accentBorder}`,
                      borderRadius: '8px',
                      background: product.accentMuted,
                      color: product.accentColor,
                      boxShadow: `0 0 14px ${product.accentColor.replace('1)', '0.20)')}`,
                    }}>
                    <product.icon className="w-5 h-5" />
                  </div>
                  <span className="font-jetbrains-mono text-[9px] font-bold tracking-[1.5px] px-2.5 py-1"
                    style={{
                      border: `1px solid ${product.accentBorder}`,
                      borderRadius: '2px',
                      background: product.accentMuted,
                      color: product.accentColor,
                    }}>{product.badge}</span>
                </div>

                <h3 className="font-outfit text-[19px] font-bold mb-1 tracking-[-0.4px]" style={{ color: '#f0eeff' }}>
                  {product.title}
                </h3>
                <span className="font-jetbrains-mono text-[9px] font-bold tracking-[2.5px] mb-6 block"
                  style={{ color: product.accentColor, opacity: 0.65 }}>{product.type}</span>

                {/* Features */}
                <div className="flex flex-col gap-2 mb-8 flex-1">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2.5 transition-all duration-200"
                      style={{
                        background: 'rgba(120,100,200,0.04)',
                        border: '1px solid rgba(167,139,250,0.10)',
                        borderRadius: '6px',
                        color: 'rgba(224,216,255,0.65)',
                        fontSize: '12.5px',
                      }}>
                      <feat.icon className="w-3.5 h-3.5 shrink-0" style={{ color: product.accentColor }} />
                      <span className="font-space-grotesk font-medium">{feat.text}</span>
                    </div>
                  ))}
                </div>

                {/* Prices */}
                <div className={`flex gap-2 mt-auto ${product.prices.length === 1 ? 'justify-center' : ''}`}>
                  {product.prices.map((price, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-center p-3 transition-all duration-300"
                      style={{
                        border: `1.5px solid ${price.featured ? product.accentBorder : 'rgba(167,139,250,0.14)'}`,
                        borderRadius: '7px',
                        background: price.featured ? product.accentMuted : 'rgba(120,100,200,0.04)',
                        boxShadow: price.featured ? `0 0 16px ${product.accentColor.replace('1)', '0.15)')}` : 'none',
                      }}>
                      <span className="font-jetbrains-mono text-[9px] font-bold tracking-[1.5px] mb-1"
                        style={{ color: price.featured ? product.accentColor : 'rgba(224,216,255,0.40)' }}>
                        {price.label}
                      </span>
                      <span className="font-outfit text-[18px] font-extrabold"
                        style={{ color: price.featured ? product.accentColor : 'rgba(224,216,255,0.75)' }}>
                        {price.value}
                      </span>
                      {'suffix' in price && price.suffix && (
                        <span className="font-jetbrains-mono text-[9px]"
                          style={{ color: 'rgba(224,216,255,0.40)' }}>{price.suffix}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
