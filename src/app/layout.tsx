import { SITE_ORIGIN } from '../lib/site';
import './globals.css';
import type { ReactNode } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './mascot-brand.css';
export const metadata={metadataBase:new URL(SITE_ORIGIN),title:"atos",icons:{icon:'/icon.svg?v=portrait-match-1'}};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"\n      (function () {\n        const stored = localStorage.getItem(\"theme\");\n        const prefersDark = window.matchMedia(\n          \"(prefers-color-scheme: dark)\"\n        ).matches;\n        if (stored === \"dark\" || (!stored && prefersDark)) {\n          document.documentElement.classList.add(\"dark\");\n        }\n      })();\n    "}}/></head><body className="min-h-screen font-sans"><Header/>{children}<Footer/><Analytics/><Script src="/site-runtime.js" strategy="afterInteractive"/></body></html>}
