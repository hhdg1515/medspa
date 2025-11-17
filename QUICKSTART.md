# 快速开始指南 / Quick Start Guide

## 🚀 立即运行 / Run Immediately

```bash
# 1. 进入项目目录 / Navigate to project
cd medspa-website

# 2. 安装依赖 (如果还没安装) / Install dependencies (if not already done)
npm install

# 3. 启动开发服务器 / Start development server
npm run dev
```

打开浏览器访问 / Open in browser: **http://localhost:3000**

## 📋 待完成事项 / Next Steps Checklist

### 必须完成 / Must Do

- [ ] **替换诊所名称** / Replace `[Clinic Name]` throughout the codebase
  - 文件位置 / Files: `components/Header.tsx`, `components/Footer.tsx`, `app/layout.tsx`

- [ ] **更新联系信息** / Update contact information
  - 电话号码 / Phone: Replace `(XXX) XXX-XXXX`
  - 地址 / Address: Replace `[具体地址]`
  - 邮箱 / Email: Replace `contact@clinic.com`

- [ ] **添加真实图片** / Add real images
  - Hero 背景视频/图片 / Hero background video/image
  - 治疗项目图片 / Treatment images
  - 医生团队照片 / Provider photos
  - 案例对比图 / Before/after images (需授权 / requires consent)

### 推荐完成 / Recommended

- [ ] **连接预约系统** / Connect booking system
  - Calendly, Acuity, or custom booking

- [ ] **配置表单提交** / Set up form submission
  - 邮件通知 / Email notifications
  - CRM 集成 / CRM integration

- [ ] **SEO 优化** / SEO optimization
  - 更新页面标题和描述 / Update meta titles & descriptions
  - 添加 sitemap / Add sitemap

- [ ] **添加分析工具** / Add analytics
  - Google Analytics
  - Facebook Pixel (可选 / optional)

## 🎨 自定义样式 / Customize Styling

### 修改颜色 / Change Colors

编辑 `tailwind.config.ts`:

```typescript
colors: {
  background: {
    main: "#F7F3ED",    // 主背景色
    dark: "#EFE4DB",    // 深色背景
  },
  text: {
    primary: "#272221",   // 主文字色
    secondary: "#6F645E", // 次级文字
  },
  accent: "#C9A27C",      // 强调色/按钮
}
```

### 修改文案 / Edit Content

所有中英文文案在 / All bilingual content in: `lib/translations.ts`

## 📝 添加新页面 / Add New Pages

### 示例：创建"关于我们"页面 / Example: Create "About" Page

1. 创建文件 / Create file:
```bash
app/about/page.tsx
```

2. 添加内容 / Add content:
```tsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Your content here */}
      </main>
      <Footer />
    </>
  );
}
```

## 🌐 语言切换 / Language Switching

- 用户选择的语言自动保存到 localStorage
- Language preference automatically saved to localStorage
- 切换按钮在页面右上角 / Toggle button in top-right corner

## 🛠️ 常用命令 / Common Commands

```bash
# 开发模式 / Development
npm run dev

# 构建生产版本 / Build for production
npm run build

# 运行生产版本 / Run production build
npm start

# 代码检查 / Linting
npm run lint
```

## 📦 部署 / Deployment

### Vercel (推荐 / Recommended)

1. 推送代码到 GitHub / Push to GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入仓库 / Import repository
4. 自动部署 / Auto-deploy

### 其他平台 / Other Platforms

- **Netlify**: 支持 Next.js / Supports Next.js
- **AWS Amplify**: 企业级 / Enterprise-grade
- **自托管 / Self-hosted**: 使用 `npm run build` 和 `npm start`

## ⚠️ 合规提醒 / Compliance Reminder

在发布前，确保 / Before publishing, ensure:

✅ 所有案例图片已获得书面授权 / All case photos have written consent
✅ 医生执照信息准确无误 / Doctor license information is accurate
✅ 没有夸大的效果承诺 / No exaggerated claims
✅ 价格透明清晰 / Pricing is transparent
✅ 包含医疗免责声明 / Medical disclaimer included

## 🆘 需要帮助? / Need Help?

查看完整文档 / See full documentation: `README.md`

---

**祝你的医美网站取得成功！**
**Good luck with your medical aesthetics website!**
