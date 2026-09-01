'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, ChevronRight, Menu, Waves, Zap } from 'lucide-react'
import { useState } from 'react'

const nav = [
  ['Home', '/'], ['Live Map', '/live-map'], ['Requests', '/requests'], ['NGOs', '/ngos'], ['Relief Centers', '/relief-centers'], ['Donations', '/donations'], ['Impact', '/impact'],
]

export function AidShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [lite, setLite] = useState(false)
  const [menu, setMenu] = useState(false)
  return <main className={lite ? 'app low-bandwidth' : 'app'}>
    <header className="topbar"><Link href="/" className="brand"><div className="brand-mark"><Waves size={19} /></div><div><strong>Community Aid Hub</strong><span>Local help. Real time.</span></div></Link><nav>{nav.map(([label, href]) => <Link className={pathname === href ? 'selected' : ''} href={href} key={href}>{label}</Link>)}</nav><div className="top-actions"><button className={`bandwidth ${lite ? 'on' : ''}`} onClick={() => setLite(!lite)}><Zap size={15} /> {lite ? 'Lite mode on' : 'Low-bandwidth'}</button><button className="icon-button notification" aria-label="Notifications"><Bell size={19} /><i /></button><button className="profile"><span>AS</span><ChevronRight size={15} /></button><button className="menu-button" aria-label="Open navigation" onClick={() => setMenu(!menu)}><Menu /></button></div></header>{menu && <div className="mobile-nav">{nav.map(([label, href]) => <Link onClick={() => setMenu(false)} href={href} key={href}>{label}</Link>)}</div>}<div className="incident"><div className="incident-main"><span className="pulse" /><span className="incident-label">ACTIVE INCIDENT</span><strong>Flood Response — Mumbai</strong></div><Link className="incident-link" href="/live-map">View live alerts <ChevronRight size={14} /></Link></div>{lite && <div className="lite-banner"><Zap size={15} /> Emergency Lite is active — prioritizing requests and alerts.</div>}{children}</main>
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p></section> }

export function ActionButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) { return <button className="primary" onClick={onClick}>{children}</button> }

export const aidRows = [
  { title: 'Drinking water needed', type: 'Water', place: 'Dharavi', people: '6 people', priority: 'Critical', tone: 'critical' },
  { title: 'Medical assistance required', type: 'Medical', place: 'Sion East', people: '2 adults', priority: 'Critical', tone: 'critical' },
  { title: 'Food for 8 people', type: 'Food', place: 'Kurla West', people: '8 people', priority: 'High', tone: 'warning' },
  { title: 'Transport to safe shelter', type: 'Transport', place: 'Mahim', people: '3 people', priority: 'High', tone: 'warning' },
]

export function Footer() { return <footer><div className="footer-brand"><div className="brand-mark"><Waves size={17} /></div><strong>Community Aid Hub</strong></div><span>Built for the moments that matter.</span><div className="footer-links"><Link href="/">Privacy</Link><Link href="/">Safety</Link><Link href="/">Contact</Link></div></footer> }
