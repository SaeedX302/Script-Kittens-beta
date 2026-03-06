'use client';

import { useEffect, useRef } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SUPPORT_EMAIL } from '@/lib/constants';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-box',
        { y: 50, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-box', start: 'top 90%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.contact-card',
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.contact-cards', start: 'top 90%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-wrap relative">
      <div className="section-shell">

        {/* CTA banner */}
        <div className="cta-box relative overflow-hidden mb-12"
          style={{
            background: 'rgba(120,100,200,0.05)',
            border: '1.5px solid rgba(167,139,250,0.18)',
            borderRadius: '8px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(124,58,237,0.08), 0 0 60px rgba(124,58,237,0.05)',
            padding: '48px 56px',
          }}>

          {/* Corner brackets */}
          <div className="absolute top-3 left-3 w-5 h-5 pointer-events-none"
            style={{ borderTop: '1.5px solid rgba(167,139,250,0.40)', borderLeft: '1.5px solid rgba(167,139,250,0.40)' }} />
          <div className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
            style={{ borderTop: '1.5px solid rgba(167,139,250,0.40)', borderRight: '1.5px solid rgba(167,139,250,0.40)' }} />
          <div className="absolute bottom-3 left-3 w-5 h-5 pointer-events-none"
            style={{ borderBottom: '1.5px solid rgba(167,139,250,0.40)', borderLeft: '1.5px solid rgba(167,139,250,0.40)' }} />
          <div className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none"
            style={{ borderBottom: '1.5px solid rgba(167,139,250,0.40)', borderRight: '1.5px solid rgba(167,139,250,0.40)' }} />

          {/* Neon ambient */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 100%)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center relative z-10">
            {/* Floating icon */}
            <div className="flex items-center justify-center lg:order-none order-first">
              <div className="relative w-[160px] h-[160px] flex items-center justify-center animate-chalk-drift">
                <div className="w-20 h-20 flex items-center justify-center"
                  style={{
                    border: '1.5px solid rgba(167,139,250,0.35)',
                    borderRadius: '8px',
                    background: 'rgba(124,58,237,0.10)',
                    color: '#a78bfa',
                    boxShadow: '0 0 30px rgba(124,58,237,0.20), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}>
                  <MessageCircle className="w-9 h-9" />
                </div>
                {/* Chalk ring pulses */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[0, 0.5, 1].map((delay, i) => (
                    <div key={i} className="absolute border rounded-full opacity-0"
                      style={{
                        width: `${90 + i * 40}px`, height: `${90 + i * 40}px`,
                        borderColor: 'rgba(124,58,237,0.30)',
                        boxShadow: `0 0 8px rgba(124,58,237,0.15)`,
                        animation: `ctaRingPulse 3s ease-out ${delay}s infinite`,
                      }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Text + CTA */}
            <div className="text-center lg:text-left">
              <span className="section-chip mb-5">JOIN US</span>
              <h2 className="section-title text-[clamp(30px,5vw,46px)] mb-4">
                Ready to <span className="text-gradient">Dominate?</span>
              </h2>
              <p className="section-subtitle mb-8 max-w-[420px]">
                Join thousands of gamers who trust Script Kittens. Get access to premium tools, community support, and constant updates.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="btn-primary">
                  <MessageCircle className="w-4 h-4" /> Join Our Discord
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact cards row */}
        <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { href: 'https://discord.gg/AqkdsPMU7M', icon: MessageCircle, label: 'Discord', desc: 'Join our community', color: 'rgba(167,139,250,1)', colorMuted: 'rgba(167,139,250,0.10)' },
            { href: 'https://t.me/scriptkittens', icon: Send, label: 'Telegram', desc: 'Quick support', color: 'rgba(96,165,250,1)', colorMuted: 'rgba(96,165,250,0.10)' },
            { href: `mailto:${SUPPORT_EMAIL}`, icon: Mail, label: 'Email', desc: SUPPORT_EMAIL, color: 'rgba(251,191,36,1)', colorMuted: 'rgba(251,191,36,0.10)' },
          ].map(({ href, icon: Icon, label, desc, color, colorMuted }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              className="contact-card flex flex-col items-center text-center p-9 transition-all duration-300"
              style={{
                background: 'rgba(120,100,200,0.05)',
                border: '1.5px solid rgba(167,139,250,0.14)',
                borderRadius: '8px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(124,58,237,0.06)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = color.replace('1)', '0.35)');
                el.style.background = colorMuted;
                el.style.boxShadow = `0 16px 40px rgba(0,0,0,0.45), 0 0 30px ${colorMuted}, 0 0 0 1px ${color.replace('1)', '0.25)')}`;
                el.style.transform = 'perspective(800px) translateZ(8px) translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(167,139,250,0.14)';
                el.style.background = 'rgba(120,100,200,0.05)';
                el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(124,58,237,0.06)';
                el.style.transform = '';
              }}>
              <div className="w-12 h-12 flex items-center justify-center mb-5 transition-transform duration-300"
                style={{
                  border: `1.5px solid ${color.replace('1)', '0.28)')}`,
                  borderRadius: '6px',
                  background: colorMuted,
                  color: color,
                  boxShadow: `0 0 16px ${colorMuted}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                }}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-outfit text-[18px] font-bold mb-1.5 tracking-[-0.3px]" style={{ color: '#f0eeff' }}>{label}</h4>
              <p className="text-[13px]" style={{ color: 'rgba(224,216,255,0.52)' }}>{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
