import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "路觅教育 Lumist - 计算机组师资团队",
  description:
    "汇聚行业精英，传授真才实学。路觅教育计算机组师资展示，展示专业讲师团队、真实学员评价和教学成果。",
  keywords: ["计算机教育", "编程培训", "师资展示", "Python", "Java", "前端"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="h-full min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}