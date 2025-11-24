'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '../Button';

export function ContactForm() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    preferredLanguage: 'en',
    interestedIn: [] as string[],
    message: '',
    agreeToPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          preferredLanguage: 'en',
          interestedIn: [],
          message: '',
          agreeToPolicy: false,
        });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(value)
        ? prev.interestedIn.filter(item => item !== value)
        : [...prev.interestedIn, value],
    }));
  };

  if (submitted) {
    return (
      <section id="contact" className="section-md bg-background-main">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white/95 p-12 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
              <svg
                className="h-10 w-10 text-accent"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-4 text-h2">
              {language === 'zh' ? '感谢您的咨询！' : 'Thank you for reaching out!'}
            </h3>
            <p className="text-body text-text-secondary">
              {language === 'zh'
                ? '我们的团队将尽快与您联系。'
                : 'Our team will contact you shortly.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-md bg-background-main">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch">
          {/* Left - Large photo echoing the booking page */}
          <div className="lg:col-span-5">
            <div className="relative h-72 overflow-hidden rounded-3xl bg-background-dark sm:h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/booking-view.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-main/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right - Card with form, like the booking form on the reference site */}
          <div className="lg:col-span-7 flex items-center">
            <div className="w-full rounded-3xl bg-white/95 p-6 shadow-sm shadow-black/5 sm:p-8 lg:p-10">
              {/* Heading */}
              <div className="mb-8 space-y-3">
                <p className="text-xs tracking-[0.2em] uppercase text-accent">
                  {language === 'zh' ? '预约咨询' : 'Book appointment'}
                </p>
                <h2 className="text-h2">
                  {language === 'en' ? (
                    <>
                      {t.leadForm.title}
                      <span className="mt-2 block text-xl text-text-secondary">
                        {t.leadForm.titleChinese}
                      </span>
                    </>
                  ) : (
                    t.leadForm.title
                  )}
                </h2>
                <p className="text-body text-text-secondary">
                  {t.leadForm.subtitle}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium"
                  >
                    {language === 'zh'
                      ? t.leadForm.fullNameChinese || t.leadForm.fullName
                      : t.leadForm.fullName}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="input"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-medium"
                  >
                    {language === 'zh'
                      ? t.leadForm.mobileChinese || t.leadForm.mobile
                      : t.leadForm.mobile}
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    className="input"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t.leadForm.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Preferred Language */}
                <div>
                  <label
                    htmlFor="preferredLanguage"
                    className="mb-2 block text-sm font-medium"
                  >
                    {language === 'zh'
                      ? t.leadForm.preferredLanguageChinese ||
                        t.leadForm.preferredLanguage
                      : t.leadForm.preferredLanguage}
                  </label>
                  <select
                    id="preferredLanguage"
                    className="input"
                    value={formData.preferredLanguage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredLanguage: e.target.value,
                      })
                    }
                  >
                    <option value="en">{t.leadForm.languageEnglish}</option>
                    <option value="zh">{t.leadForm.languageChinese}</option>
                  </select>
                </div>

                {/* Interested In */}
                <div>
                  <label className="mb-3 block text-sm font-medium">
                    {language === 'zh'
                      ? t.leadForm.interestedInChinese ||
                        t.leadForm.interestedIn
                      : t.leadForm.interestedIn}
                  </label>
                  <div className="space-y-2">
                    {['face-slimming', 'weight-management', 'skin-glow', 'not-sure'].map(
                      (item) => (
                        <label key={item} className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-3 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                            checked={formData.interestedIn.includes(item)}
                            onChange={() => handleCheckboxChange(item)}
                          />
                          <span className="text-sm">
                            {item === 'face-slimming' &&
                              (language === 'zh' ? '瘦脸针' : 'Face Slimming')}
                            {item === 'weight-management' &&
                              (language === 'zh'
                                ? '体重管理'
                                : 'Weight Management')}
                            {item === 'skin-glow' &&
                              (language === 'zh'
                                ? '肌肤光泽与抗衰'
                                : 'Skin & Glow')}
                            {item === 'not-sure' &&
                              (language === 'zh' ? '还不确定' : 'Not sure yet')}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    {language === 'zh'
                      ? t.leadForm.messageChinese || t.leadForm.message
                      : t.leadForm.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Privacy Policy */}
                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      required
                      className="mr-3 mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                      checked={formData.agreeToPolicy}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeToPolicy: e.target.checked,
                        })
                      }
                    />
                    <span className="text-sm text-text-secondary">
                      {language === 'zh'
                        ? t.leadForm.privacyPolicyChinese ||
                          t.leadForm.privacyPolicy
                        : t.leadForm.privacyPolicy}
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting
                    ? language === 'zh'
                      ? '提交中...'
                      : 'Submitting...'
                    : language === 'zh'
                    ? t.leadForm.submitChinese || t.leadForm.submit
                    : t.leadForm.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
