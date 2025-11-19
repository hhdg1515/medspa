'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export function LanguageSync() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update html lang attribute when language changes
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en-US';
  }, [language]);

  return null;
}
