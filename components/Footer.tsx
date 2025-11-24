'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { useLanguage } from '@/lib/LanguageContext';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-background-main">
      {/* Top Section - Accordion links (About services) */}
      <div className="border-b border-border">
        <div className="container-custom py-8">
          <div className="space-y-1">
            <Link
              href="/treatments/face"
              className="flex items-center justify-between py-4 text-text-primary hover:text-accent transition-colors group"
            >
              <span className="text-base">
                {language === 'zh' ? '面部疗程详情' : 'About Our Face Treatments'}
              </span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
            <div className="h-px bg-border" />
            <Link
              href="/treatments/body"
              className="flex items-center justify-between py-4 text-text-primary hover:text-accent transition-colors group"
            >
              <span className="text-base">
                {language === 'zh' ? '身体疗程详情' : 'About Our Body Treatments'}
              </span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
            <div className="h-px bg-border" />
            <Link
              href="/treatments/wellness"
              className="flex items-center justify-between py-4 text-text-primary hover:text-accent transition-colors group"
            >
              <span className="text-base">
                {language === 'zh' ? '健康服务详情' : 'About Our Wellness Services'}
              </span>
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#5B4A43]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
            {/* Left Side - Contact Info & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Contact */}
              <div className="text-white/90">
                <h4 className="text-sm font-semibold mb-4 text-white">
                  {language === 'zh' ? '联系方式' : 'Contact'}
                </h4>
                <div className="space-y-2 text-sm">
                  <p>{siteConfig.address}</p>
                  <p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="hover:text-accent transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="text-white/90">
                <h4 className="text-sm font-semibold mb-4 text-white">
                  {language === 'zh' ? '营业时间' : 'Hours'}
                </h4>
                <div className="space-y-2 text-sm">
                  <p>{language === 'zh' ? '周一至周四: 8am-7pm' : 'Monday-Thursday: 8am-7pm'}</p>
                  <p>{language === 'zh' ? '周五: 8am-5pm' : 'Friday: 8am-5pm'}</p>
                  <p>{language === 'zh' ? '周六: 10am-3pm' : 'Saturday: 10am-3pm'}</p>
                  <p>{language === 'zh' ? '周日: 休息' : 'Sunday: Closed'}</p>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
              <h3 className="text-3xl lg:text-4xl font-serif font-light text-white mb-2">
                {language === 'zh' ? '获得免费' : 'Get a Free'}
              </h3>
              <h3 className="text-3xl lg:text-4xl font-serif italic text-white mb-8">
                {language === 'zh' ? '线上咨询' : 'Virtual Consultation'}
              </h3>
              <div className="space-y-4 w-full lg:w-auto">
                <div className="h-px w-full bg-white/30" />
                <a
                  href="#treatments"
                  className="inline-block text-sm tracking-[0.2em] uppercase font-medium text-white hover:text-accent transition-colors"
                >
                  {language === 'zh' ? '疗程匹配测试' : 'TREATMENT FINDER'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Links & Copyright */}
      <div className="bg-background-main border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8 text-text-primary" />
              <span className="text-sm font-serif font-semibold text-text-primary">
                {siteConfig.name}
              </span>
            </Link>

            {/* Center - Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <Link href="/blog" className="hover:text-accent transition-colors">
                {language === 'zh' ? '博客' : 'Blog'}
              </Link>
              <Link href="/careers" className="hover:text-accent transition-colors">
                {language === 'zh' ? '招聘' : 'Careers'}
              </Link>
              <Link href="/newsletter" className="hover:text-accent transition-colors">
                {language === 'zh' ? '订阅' : 'Newsletter'}
              </Link>
            </div>

            {/* Right - Social */}
            <div className="flex gap-4 text-sm text-text-secondary">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {language === 'zh' ? '脸书' : 'Facebook'}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
            <p>© {new Date().getFullYear()} {siteConfig.name}. {language === 'zh' ? '版权所有' : 'All rights reserved'}.</p>
            <div className="flex gap-4">
              <Link href="/legal/privacy" className="hover:text-accent transition-colors">
                {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
              </Link>
              <Link href="/legal/terms" className="hover:text-accent transition-colors">
                {language === 'zh' ? '服务条款' : 'Terms'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
