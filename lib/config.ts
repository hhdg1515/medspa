export const siteConfig = {
  name: process.env.NEXT_PUBLIC_CLINIC_NAME || '[Clinic Name]',
  phone: process.env.NEXT_PUBLIC_PHONE || '(XXX) XXX-XXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@clinic.com',
  address: process.env.NEXT_PUBLIC_ADDRESS || '[具体地址], Los Angeles, CA 90XXX',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // Social media (optional)
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || '',
    xiaohongshu: process.env.NEXT_PUBLIC_XIAOHONGSHU || '',
    wechat: process.env.NEXT_PUBLIC_WECHAT || '',
  },
};
