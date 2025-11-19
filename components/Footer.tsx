'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-text-primary text-background-main py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">
              {siteConfig.name} Aesthetics
            </h3>
            <p className="text-sm text-background-main/80">
              {t.footer.tagline}
            </p>
          </div>

          {/* Middle - Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.address}</h4>
            <p className="text-sm text-background-main/80 mb-4">
              {siteConfig.address}
            </p>
            <p className="text-sm text-background-main/80 mb-2">
              <strong>{t.footer.phone}:</strong> {siteConfig.phone}
            </p>
            <p className="text-sm text-background-main/80">
              <strong>{t.footer.email}:</strong> {siteConfig.email}
            </p>
          </div>

          {/* Right - Social & Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.followUs}</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://xiaohongshu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                小红书
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Legal Links */}
        <div className="border-t border-background-main/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <a href="/legal/terms" className="hover:text-accent transition-colors">
                {t.footer.terms}
              </a>
              <a href="/legal/privacy" className="hover:text-accent transition-colors">
                {t.footer.privacy}
              </a>
              <a href="/legal/disclaimer" className="hover:text-accent transition-colors">
                {t.footer.medicalDisclaimer}
              </a>
            </div>
            <p className="text-sm text-background-main/60">
              © {new Date().getFullYear()} {siteConfig.name} Aesthetics. All rights reserved.
            </p>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8 text-xs text-background-main/60 max-w-3xl">
            {t.footer.disclaimerText}
          </div>
        </div>
      </div>
    </footer>
  );
}
