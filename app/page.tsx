import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const titleFont = localFont({
  src: "./fonts/FlowSans.woff2",
  declarations: [{ prop: 'font-feature-settings', value: "'ss01'" }]
})

const contentFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function Home() {
  return (
    <>
      {/* 导航栏 */}
      <Navbar />
      
      {/* 第一区域 - 全屏高度 */}
      <section className="flex min-h-screen flex-col items-center justify-center" style={{ backgroundColor: '#FFEB69' }}>
        <div className={`${titleFont.className} text-[#3A341C] text-center font-bold leading-none`} style={{ fontSize: 'min(10vw, 10rem)' }}>
          FLOWECHO
        </div>
      </section>

      {/* 第二区域 - 80%屏幕高度 */}
      <section className="flex h-[80vh] flex-col items-center justify-center bg-white">
        <div className={`${contentFont.className} text-[#3A341C] text-center font-semibold`} style={{ fontSize: 'min(6vw, 4rem)' }}>
          Where ideas flows
        </div>
      </section>
    </>
  );
}