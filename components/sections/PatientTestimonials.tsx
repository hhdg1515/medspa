'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface Testimonial {
  id: string;
  name: string;
  nameChinese: string;
  location: string;
  locationChinese: string;
  rating: number;
  quote: string;
  quoteChinese: string;
  image: string;
  treatment: string;
  treatmentChinese: string;
}

export function PatientTestimonials() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      nameChinese: '陈莎拉',
      location: 'San Francisco, CA',
      locationChinese: '旧金山，加州',
      rating: 5,
      quote:
        'The face slimming treatment exceeded my expectations. The staff was professional, and the results were natural and beautiful. I feel more confident than ever!',
      quoteChinese: '瘦脸疗程超出了我的预期。工作人员专业，效果自然美观。我比以往更有自信！',
      image: "url('/images/testimonial-1.jpg')",
      treatment: 'Face Slimming',
      treatmentChinese: '瘦脸针',
    },
    {
      id: '2',
      name: 'Michael Liu',
      nameChinese: '刘迈克',
      location: 'Los Angeles, CA',
      locationChinese: '洛杉矶，加州',
      rating: 5,
      quote:
        'Outstanding experience from start to finish. The consultation was thorough, and the treatment was completely painless. Highly recommend!',
      quoteChinese: '从头到尾都是出色的体验。咨询非常全面，治疗完全无痛。强烈推荐！',
      image: "url('/images/testimonial-2.jpg')",
      treatment: 'Anti-Aging Facial',
      treatmentChinese: '抗衰老面部护理',
    },
    {
      id: '3',
      name: 'Jennifer Wang',
      nameChinese: '王珍妮',
      location: 'Seattle, WA',
      locationChinese: '西雅图，华盛顿州',
      rating: 5,
      quote:
        'I have tried many clinics, but this is by far the best. The bilingual staff made me feel comfortable, and the results speak for themselves.',
      quoteChinese: '我尝试过很多诊所，但这里绝对是最好的。双语工作人员让我感到舒适，效果不言而喻。',
      image: "url('/images/testimonial-3.jpg')",
      treatment: 'Body Contouring',
      treatmentChinese: '身体塑形',
    },
    {
      id: '4',
      name: 'David Zhang',
      nameChinese: '张大伟',
      location: 'San Diego, CA',
      locationChinese: '圣地亚哥，加州',
      rating: 5,
      quote:
        'Professional, caring, and results-driven. The team took time to understand my goals and delivered beyond what I imagined. Five stars!',
      quoteChinese: '专业、关怀且注重效果。团队花时间了解我的目标，交付的结果超出了我的想象。五星好评！',
      image: "url('/images/testimonial-4.jpg')",
      treatment: 'Wellness Consultation',
      treatmentChinese: '健康咨询',
    },
  ];

  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalTestimonials]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-md bg-background-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-4">
            {language === 'zh' ? '患者见证' : 'Patient Testimonials'}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {language === 'zh'
              ? '了解我们的患者如何通过我们的疗程改变了他们的生活。'
              : 'Discover how our patients have transformed their lives through our treatments.'}
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left - Image */}
              <div className="lg:col-span-2 relative h-64 lg:h-auto bg-background-dark">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: currentTestimonial.image }}
                />
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-serif italic text-text-primary mb-8 leading-relaxed">
                  &ldquo;{language === 'zh' ? currentTestimonial.quoteChinese : currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-text-primary">
                    {language === 'zh' ? currentTestimonial.nameChinese : currentTestimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {language === 'zh'
                      ? currentTestimonial.locationChinese
                      : currentTestimonial.location}
                  </p>
                  <p className="text-xs text-accent uppercase tracking-wider">
                    {language === 'zh'
                      ? currentTestimonial.treatmentChinese
                      : currentTestimonial.treatment}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-accent hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-accent hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
