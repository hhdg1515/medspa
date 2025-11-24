export interface WellnessTreatmentData {
  id: string;
  name: string;
  nameChinese: string;
  tagline: string;
  taglineChinese: string;
  heroImage: string;
  duration: string;
  durationChinese: string;
  downtime: string;
  downtimeChinese: string;
  sessions: string;
  sessionsChinese: string;

  whatItTreats: {
    title: string;
    titleChinese: string;
    items: string[];
    itemsChinese: string[];
  };

  howItWorks: {
    title: string;
    titleChinese: string;
    description: string;
    descriptionChinese: string;
  };

  benefits: Array<{
    title: string;
    titleChinese: string;
    description: string;
    descriptionChinese: string;
    icon: string;
  }>;

  faq: Array<{
    question: string;
    questionChinese: string;
    answer: string;
    answerChinese: string;
  }>;
}

export const wellnessTreatments: WellnessTreatmentData[] = [
  {
    id: 'iv-therapy',
    name: 'IV Therapy',
    nameChinese: '静脉注射疗法',
    tagline: 'Optimize Your Health from Within',
    taglineChinese: '由内而外优化您的健康',
    heroImage: "url('/images/treatments/iv-therapy-hero.jpg')",
    duration: '30-60 minutes',
    durationChinese: '30-60分钟',
    downtime: 'None',
    downtimeChinese: '无恢复期',
    sessions: '1-4 sessions monthly',
    sessionsChinese: '每月1-4次',

    whatItTreats: {
      title: 'What It Addresses',
      titleChinese: '适用症状',
      items: [
        'Dehydration and fatigue',
        'Nutrient deficiencies',
        'Immune system support',
        'Athletic recovery',
        'Hangover relief',
        'Mental clarity and focus',
        'Anti-aging support',
        'Energy boost',
      ],
      itemsChinese: [
        '脱水和疲劳',
        '营养缺乏',
        '免疫系统支持',
        '运动恢复',
        '宿醉缓解',
        '精神清晰和专注',
        '抗衰老支持',
        '能量提升',
      ],
    },

    howItWorks: {
      title: 'How Does IV Therapy Work?',
      titleChinese: '静脉注射疗法如何工作？',
      description:
        'IV therapy delivers essential vitamins, minerals, and nutrients directly into your bloodstream, bypassing the digestive system for 100% absorption. This allows your body to immediately utilize these nutrients for optimal cellular function, energy production, and overall wellness. Each treatment is customized to your specific health goals and needs.',
      descriptionChinese:
        '静脉注射疗法将必需的维生素、矿物质和营养物质直接输送到您的血液中，绕过消化系统实现100%吸收。这使您的身体能够立即利用这些营养物质来优化细胞功能、能量产生和整体健康。每次治疗都根据您的具体健康目标和需求进行定制。',
    },

    benefits: [
      {
        title: 'Immediate Absorption',
        titleChinese: '即时吸收',
        description: '100% bioavailability ensures maximum nutrient uptake compared to oral supplements.',
        descriptionChinese: '100%生物利用度确保营养物质最大程度吸收，优于口服补充剂。',
        icon: '⚡',
      },
      {
        title: 'Customized Formulas',
        titleChinese: '定制配方',
        description: 'Tailored IV drips designed specifically for your health goals and deficiencies.',
        descriptionChinese: '专门为您的健康目标和缺乏症设计的定制IV滴注配方。',
        icon: '🎯',
      },
      {
        title: 'Rapid Results',
        titleChinese: '快速见效',
        description: 'Feel the benefits within hours as nutrients flood your system efficiently.',
        descriptionChinese: '随着营养物质高效灌注您的系统，在数小时内感受到效果。',
        icon: '⏱️',
      },
    ],

    faq: [
      {
        question: 'Is IV therapy safe?',
        questionChinese: '静脉注射疗法安全吗？',
        answer:
          'Yes, IV therapy is very safe when administered by trained medical professionals. All our formulas are pharmaceutical-grade, and treatments are overseen by licensed healthcare providers.',
        answerChinese: '是的，由受过培训的医疗专业人员管理时，静脉注射疗法非常安全。我们所有的配方都是药品级的，治疗由持证医疗保健提供者监督。',
      },
      {
        question: 'How often should I get IV therapy?',
        questionChinese: '我应该多久接受一次静脉注射疗法？',
        answer:
          'Frequency depends on your health goals. Most patients benefit from weekly or bi-weekly sessions initially, then monthly maintenance. Your provider will create a personalized schedule.',
        answerChinese: '频率取决于您的健康目标。大多数患者最初每周或每两周一次受益，然后每月维护。您的医生会制定个性化时间表。',
      },
      {
        question: 'What can I expect during treatment?',
        questionChinese: '治疗期间我能期待什么？',
        answer:
          'You will relax in a comfortable chair while the IV drip is administered over 30-60 minutes. Most people feel relaxed and may notice increased energy and mental clarity shortly after treatment.',
        answerChinese: '您将在舒适的椅子上放松，同时在30-60分钟内进行IV滴注。大多数人感到放松，并可能在治疗后不久注意到能量增加和精神清晰。',
      },
    ],
  },

  {
    id: 'hormone-optimization',
    name: 'Hormone Optimization',
    nameChinese: '荷尔蒙优化',
    tagline: 'Balance Your Body Naturally',
    taglineChinese: '自然平衡您的身体',
    heroImage: "url('/images/treatments/hormone-hero.jpg')",
    duration: '45-60 minutes (consultation)',
    durationChinese: '45-60分钟（咨询）',
    downtime: 'None',
    downtimeChinese: '无恢复期',
    sessions: 'Ongoing with monitoring',
    sessionsChinese: '持续监测',

    whatItTreats: {
      title: 'What It Addresses',
      titleChinese: '适用症状',
      items: [
        'Low energy and fatigue',
        'Weight gain and metabolism issues',
        'Mood swings and anxiety',
        'Sleep disturbances',
        'Low libido',
        'Cognitive decline',
        'Muscle loss',
        'Hot flashes and night sweats',
      ],
      itemsChinese: [
        '低能量和疲劳',
        '体重增加和代谢问题',
        '情绪波动和焦虑',
        '睡眠障碍',
        '性欲低下',
        '认知能力下降',
        '肌肉流失',
        '潮热和盗汗',
      ],
    },

    howItWorks: {
      title: 'How Does Hormone Optimization Work?',
      titleChinese: '荷尔蒙优化如何工作？',
      description:
        "Hormone optimization uses bioidentical hormone replacement therapy (BHRT) to restore hormones to optimal levels. After comprehensive lab testing, we create a personalized treatment plan using bioidentical hormones that match your body's natural hormones. This approach addresses the root cause of symptoms rather than just masking them, promoting long-term health and vitality.",
      descriptionChinese:
        '荷尔蒙优化使用生物同质性激素替代疗法（BHRT）将激素恢复到最佳水平。在全面的实验室检测后，我们创建一个使用与您身体天然激素匹配的生物同质性激素的个性化治疗计划。这种方法解决症状的根本原因，而不仅仅是掩盖它们，促进长期健康和活力。',
    },

    benefits: [
      {
        title: 'Bioidentical Hormones',
        titleChinese: '生物同质性激素',
        description: "Molecularly identical to your body's natural hormones for optimal compatibility.",
        descriptionChinese: '分子结构与您身体的天然激素相同，实现最佳兼容性。',
        icon: '🧬',
      },
      {
        title: 'Comprehensive Testing',
        titleChinese: '全面检测',
        description: 'Detailed lab work identifies specific imbalances and deficiencies.',
        descriptionChinese: '详细的实验室检查识别特定的失衡和缺乏症。',
        icon: '🔬',
      },
      {
        title: 'Ongoing Monitoring',
        titleChinese: '持续监测',
        description: 'Regular follow-ups and adjustments ensure optimal hormone levels are maintained.',
        descriptionChinese: '定期随访和调整确保维持最佳激素水平。',
        icon: '📊',
      },
    ],

    faq: [
      {
        question: 'What is bioidentical hormone therapy?',
        questionChinese: '什么是生物同质性激素疗法？',
        answer:
          'Bioidentical hormones are compounds that have the exact same molecular structure as the hormones naturally produced by your body. This makes them safer and more effective than synthetic hormones.',
        answerChinese: '生物同质性激素是与您身体天然产生的激素具有完全相同分子结构的化合物。这使它们比合成激素更安全、更有效。',
      },
      {
        question: 'How long does it take to see results?',
        questionChinese: '多久能看到效果？',
        answer:
          'Many patients notice improvements in energy and mood within 2-4 weeks. Full optimization typically occurs over 3-6 months as hormone levels stabilize.',
        answerChinese: '许多患者在2-4周内注意到能量和情绪的改善。随着激素水平稳定，完全优化通常在3-6个月内发生。',
      },
      {
        question: 'Is hormone therapy only for older adults?',
        questionChinese: '荷尔蒙疗法只适用于老年人吗？',
        answer:
          'No, hormone imbalances can occur at any age due to stress, diet, lifestyle, or medical conditions. We treat patients in their 30s through their 70s and beyond.',
        answerChinese: '不，荷尔蒙失衡可能在任何年龄发生，由于压力、饮食、生活方式或医疗状况。我们治疗30多岁到70多岁及以上的患者。',
      },
    ],
  },

  {
    id: 'wellness-consultation',
    name: 'Wellness Consultation',
    nameChinese: '健康咨询',
    tagline: 'Your Personalized Path to Optimal Health',
    taglineChinese: '您通往最佳健康的个性化之路',
    heroImage: "url('/images/treatments/wellness-consultation-hero.jpg')",
    duration: '60-90 minutes',
    durationChinese: '60-90分钟',
    downtime: 'None',
    downtimeChinese: '无恢复期',
    sessions: 'Initial + follow-ups',
    sessionsChinese: '初诊+随访',

    whatItTreats: {
      title: 'What We Address',
      titleChinese: '我们解决的问题',
      items: [
        'Overall health assessment',
        'Nutritional deficiencies',
        'Lifestyle optimization',
        'Stress management',
        'Sleep quality',
        'Weight management',
        'Preventive care',
        'Chronic condition support',
      ],
      itemsChinese: [
        '整体健康评估',
        '营养缺乏',
        '生活方式优化',
        '压力管理',
        '睡眠质量',
        '体重管理',
        '预防护理',
        '慢性病支持',
      ],
    },

    howItWorks: {
      title: 'How Does Wellness Consultation Work?',
      titleChinese: '健康咨询如何工作？',
      description:
        'Our comprehensive wellness consultation begins with an in-depth review of your health history, lifestyle, goals, and concerns. We perform detailed assessments including lab work, body composition analysis, and functional medicine testing as needed. Based on these findings, we create a personalized wellness plan incorporating nutrition, supplementation, lifestyle modifications, and appropriate treatments to help you achieve optimal health.',
      descriptionChinese:
        '我们的综合健康咨询从深入审查您的健康史、生活方式、目标和关注点开始。我们进行详细评估，包括实验室检查、身体成分分析和功能医学测试（如需要）。根据这些发现，我们创建一个个性化的健康计划，包括营养、补充剂、生活方式调整和适当的治疗，帮助您实现最佳健康。',
    },

    benefits: [
      {
        title: 'Holistic Approach',
        titleChinese: '全人方法',
        description: 'Addresses root causes rather than just treating symptoms for lasting results.',
        descriptionChinese: '解决根本原因而不仅仅是治疗症状，实现持久效果。',
        icon: '🌿',
      },
      {
        title: 'Evidence-Based',
        titleChinese: '基于证据',
        description: 'Recommendations backed by the latest research in functional and integrative medicine.',
        descriptionChinese: '基于功能医学和整合医学最新研究的建议。',
        icon: '📚',
      },
      {
        title: 'Personalized Care',
        titleChinese: '个性化护理',
        description: 'Every plan is uniquely tailored to your specific needs, goals, and biochemistry.',
        descriptionChinese: '每个计划都根据您的具体需求、目标和生化特征进行独特定制。',
        icon: '👤',
      },
    ],

    faq: [
      {
        question: 'What should I bring to my consultation?',
        questionChinese: '我应该带什么来咨询？',
        answer:
          'Bring any recent lab results, a list of current medications and supplements, and notes about your health concerns and goals. Come prepared to discuss your medical history in detail.',
        answerChinese: '带上任何最近的实验室结果、当前药物和补充剂的清单，以及关于您健康关注和目标的笔记。准备好详细讨论您的病史。',
      },
      {
        question: 'Will I need lab testing?',
        questionChinese: '我需要实验室检测吗？',
        answer:
          "Most patients benefit from comprehensive lab testing to identify deficiencies and imbalances. We'll recommend appropriate tests based on your individual needs during the consultation.",
        answerChinese: '大多数患者从全面的实验室检测中受益，以识别缺乏和失衡。我们会根据咨询期间您的个人需求推荐适当的检测。',
      },
      {
        question: 'How often should I schedule follow-ups?',
        questionChinese: '我应该多久安排一次随访？',
        answer:
          'Follow-up frequency varies based on your health goals and treatment plan. Typically, we recommend follow-ups every 4-12 weeks initially, then quarterly for ongoing optimization.',
        answerChinese: '随访频率根据您的健康目标和治疗计划而变化。通常，我们建议最初每4-12周随访一次，然后每季度进行持续优化。',
      },
    ],
  },
];
