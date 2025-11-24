export interface TreatmentData {
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

export const faceTreatments: TreatmentData[] = [
  {
    id: 'botox',
    name: 'Botox',
    nameChinese: '肉毒杆菌',
    tagline: 'Stop the Signs of Aging',
    taglineChinese: '阻止衰老迹象',
    heroImage: "url('/images/treatments/botox-hero.jpg')",
    duration: 'Under 20 minutes',
    durationChinese: '少于20分钟',
    downtime: 'None',
    downtimeChinese: '无恢复期',
    sessions: '1 session',
    sessionsChinese: '1次疗程',

    whatItTreats: {
      title: 'What It Treats',
      titleChinese: '治疗区域',
      items: [
        'Forehead lines',
        'Frown lines (11s)',
        "Crow's feet",
        'Bunny lines',
        'Lip lines',
        'Neck bands',
      ],
      itemsChinese: [
        '额头纹',
        '眉间纹（川字纹）',
        '鱼尾纹',
        '鼻纹',
        '唇纹',
        '颈纹',
      ],
    },

    howItWorks: {
      title: 'How Does Botox Work?',
      titleChinese: '肉毒杆菌如何工作？',
      description:
        'Botox is a purified neurotoxin that temporarily blocks nerve signals to facial muscles, preventing them from contracting. This relaxation of muscles smooths out wrinkles and fine lines, creating a more youthful appearance. The effects typically last 3-4 months.',
      descriptionChinese:
        '肉毒杆菌是一种纯化的神经毒素，可暂时阻断面部肌肉的神经信号，防止其收缩。肌肉的放松可以平滑皱纹和细纹，创造更年轻的外观。效果通常持续3-4个月。',
    },

    benefits: [
      {
        title: 'Quick & Easy',
        titleChinese: '快速便捷',
        description: 'Treatment takes less than 20 minutes with no downtime required.',
        descriptionChinese: '治疗时间少于20分钟，无需恢复期。',
        icon: '⚡',
      },
      {
        title: 'Natural Results',
        titleChinese: '自然效果',
        description: 'Skilled injectors ensure natural-looking results that enhance your features.',
        descriptionChinese: '专业注射师确保自然效果，提升您的面部特征。',
        icon: '✨',
      },
      {
        title: 'Proven Safety',
        titleChinese: '安全可靠',
        description: 'FDA-approved treatment with decades of clinical research and use.',
        descriptionChinese: 'FDA批准的治疗，拥有数十年的临床研究和使用历史。',
        icon: '🛡️',
      },
    ],

    faq: [
      {
        question: 'Does Botox hurt?',
        questionChinese: '肉毒杆菌注射疼吗？',
        answer:
          'Most patients experience minimal discomfort. We use ultra-fine needles and can apply topical numbing cream if needed.',
        answerChinese: '大多数患者感受到的不适感很小。我们使用超细针头，如需要可以涂抹局部麻醉膏。',
      },
      {
        question: 'How long do results last?',
        questionChinese: '效果能持续多久？',
        answer:
          'Botox results typically last 3-4 months. With regular treatments, some patients find the effects last longer over time.',
        answerChinese: '肉毒杆菌效果通常持续3-4个月。定期治疗后，部分患者发现效果会持续更长时间。',
      },
      {
        question: 'When will I see results?',
        questionChinese: '什么时候能看到效果？',
        answer:
          'You may notice initial results within 3-5 days, with full effects visible at 10-14 days after treatment.',
        answerChinese: '您可能会在3-5天内注意到初步效果，治疗后10-14天可见完整效果。',
      },
    ],
  },

  {
    id: 'dermal-filler',
    name: 'Dermal Filler',
    nameChinese: '真皮填充剂',
    tagline: 'Plump & Rejuvenate Your Skin',
    taglineChinese: '丰盈焕活肌肤',
    heroImage: "url('/images/treatments/filler-hero.jpg')",
    duration: '20-30 minutes',
    durationChinese: '20-30分钟',
    downtime: 'None',
    downtimeChinese: '无恢复期',
    sessions: '1-2 sessions',
    sessionsChinese: '1-2次疗程',

    whatItTreats: {
      title: 'What It Treats',
      titleChinese: '治疗区域',
      items: [
        'Volume loss in cheeks',
        'Nasolabial folds',
        'Marionette lines',
        'Lip enhancement',
        "Crow's feet",
        'Under-eye hollows',
        'Jawline contouring',
        'Hand rejuvenation',
      ],
      itemsChinese: [
        '脸颊容量流失',
        '法令纹',
        '木偶纹',
        '唇部丰盈',
        '鱼尾纹',
        '眼下凹陷',
        '下颌轮廓',
        '手部年轻化',
      ],
    },

    howItWorks: {
      title: 'How Do Dermal Fillers Work?',
      titleChinese: '真皮填充剂如何工作？',
      description:
        'Dermal fillers use hyaluronic acid, a naturally occurring substance in your skin, to add volume and hydration. As we age, our skin loses collagen and hyaluronic acid, leading to wrinkles and volume loss. Fillers restore this lost volume, smooth lines, and enhance facial contours for a more youthful appearance.',
      descriptionChinese:
        '真皮填充剂使用透明质酸（皮肤中天然存在的物质）来增加容量和水分。随着年龄增长，我们的皮肤失去胶原蛋白和透明质酸，导致皱纹和容量流失。填充剂可恢复失去的容量，平滑细纹，提升面部轮廓，呈现更年轻的外观。',
    },

    benefits: [
      {
        title: 'Immediate Results',
        titleChinese: '即时效果',
        description: 'See visible improvements immediately after treatment.',
        descriptionChinese: '治疗后立即看到明显改善。',
        icon: '⚡',
      },
      {
        title: 'Long-Lasting',
        titleChinese: '持久效果',
        description: 'Results can last 6-18 months depending on the filler type and treatment area.',
        descriptionChinese: '根据填充剂类型和治疗区域，效果可持续6-18个月。',
        icon: '⏳',
      },
      {
        title: 'Natural Enhancement',
        titleChinese: '自然提升',
        description: 'Hyaluronic acid is naturally found in your body, ensuring biocompatibility.',
        descriptionChinese: '透明质酸是身体中天然存在的物质，确保生物相容性。',
        icon: '🌿',
      },
    ],

    faq: [
      {
        question: "What's the difference between Botox and fillers?",
        questionChinese: '肉毒杆菌和填充剂有什么区别？',
        answer:
          'Botox relaxes muscles to smooth dynamic wrinkles, while fillers add volume to restore lost fullness and smooth static wrinkles. They often work well together for comprehensive facial rejuvenation.',
        answerChinese:
          '肉毒杆菌放松肌肉以平滑动态皱纹，而填充剂增加容量以恢复失去的丰盈度并平滑静态皱纹。它们通常可以很好地配合使用，实现全面的面部年轻化。',
      },
      {
        question: 'How long do fillers last?',
        questionChinese: '填充剂能持续多久？',
        answer:
          'Depending on the type and area treated, fillers typically last 6-18 months. Lips may require touch-ups sooner, while cheeks often last longer.',
        answerChinese: '根据类型和治疗区域，填充剂通常持续6-18个月。唇部可能需要更早补充，而脸颊通常持续更长时间。',
      },
      {
        question: 'Is there any downtime?',
        questionChinese: '有恢复期吗？',
        answer:
          'Most patients return to normal activities immediately. Some may experience mild swelling or bruising that typically resolves within a few days.',
        answerChinese: '大多数患者可以立即恢复正常活动。部分人可能会出现轻微肿胀或瘀伤，通常在几天内消退。',
      },
    ],
  },

  {
    id: 'kybella',
    name: 'Kybella',
    nameChinese: '消脂针',
    tagline: 'Ditch Your Double Chin',
    taglineChinese: '告别双下巴',
    heroImage: "url('/images/treatments/kybella-hero.jpg')",
    duration: '45 minutes',
    durationChinese: '45分钟',
    downtime: 'None',
    downtimeChinese: '无恢复期',
    sessions: '2-6 sessions',
    sessionsChinese: '2-6次疗程',

    whatItTreats: {
      title: 'What It Treats',
      titleChinese: '治疗区域',
      items: [
        'Submental fullness (double chin)',
        'Excess fat under the chin',
        'Jawline definition',
        'Neck contour improvement',
      ],
      itemsChinese: [
        '颏下脂肪堆积（双下巴）',
        '下巴下方多余脂肪',
        '下颌线条定义',
        '颈部轮廓改善',
      ],
    },

    howItWorks: {
      title: 'How Does Kybella Work?',
      titleChinese: '消脂针如何工作？',
      description:
        'Kybella contains deoxycholic acid, a naturally occurring molecule in the body that aids in the breakdown and absorption of dietary fat. When injected into the fat beneath your chin, Kybella destroys fat cells. Once destroyed, these cells can no longer store or accumulate fat, resulting in a noticeable reduction in fullness under the chin.',
      descriptionChinese:
        '消脂针含有脱氧胆酸，这是体内天然存在的分子，有助于分解和吸收膳食脂肪。当注射到下巴下方的脂肪时，消脂针会破坏脂肪细胞。一旦被破坏，这些细胞就无法再储存或积累脂肪，从而显著减少下巴下方的丰盈度。',
    },

    benefits: [
      {
        title: 'Permanent Results',
        titleChinese: '永久效果',
        description: 'Once fat cells are destroyed, they cannot return, providing lasting results.',
        descriptionChinese: '脂肪细胞一旦被破坏，就无法再生，提供持久效果。',
        icon: '♾️',
      },
      {
        title: 'Non-Surgical',
        titleChinese: '非手术',
        description: 'No surgery, incisions, or anesthesia required for this injectable treatment.',
        descriptionChinese: '这种注射治疗无需手术、切口或麻醉。',
        icon: '💉',
      },
      {
        title: 'Natural-Looking',
        titleChinese: '自然外观',
        description: 'Gradual improvement over multiple sessions creates natural-looking contours.',
        descriptionChinese: '通过多次疗程逐渐改善，创造自然的轮廓。',
        icon: '✨',
      },
    ],

    faq: [
      {
        question: 'How many treatments will I need?',
        questionChinese: '我需要多少次治疗？',
        answer:
          'Most patients require 2-6 treatments spaced about one month apart. Your provider will create a personalized treatment plan based on your goals.',
        answerChinese: '大多数患者需要2-6次治疗，每次间隔约一个月。您的医生将根据您的目标制定个性化治疗计划。',
      },
      {
        question: 'Is Kybella painful?',
        questionChinese: '消脂针疼吗？',
        answer:
          'Most patients experience mild discomfort during injection. We use numbing agents and ice to minimize any discomfort during treatment.',
        answerChinese: '大多数患者在注射过程中会感到轻微不适。我们使用麻醉剂和冰敷来最小化治疗期间的不适感。',
      },
      {
        question: 'What can I expect after treatment?',
        questionChinese: '治疗后我能期待什么？',
        answer:
          'Swelling is common and expected after treatment, typically lasting 2-4 weeks. You may also experience numbness, redness, or bruising in the treated area.',
        answerChinese: '治疗后肿胀是常见且预期的，通常持续2-4周。您可能还会在治疗区域感到麻木、发红或瘀伤。',
      },
    ],
  },
];
