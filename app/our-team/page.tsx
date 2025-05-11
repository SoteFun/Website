import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import Member from './components/Member'

const titleFont = localFont({
  src: "../fonts/FlowSans.woff2",
  declarations: [{ prop: 'font-feature-settings', value: "'ss01'" }]
})

export default function Team() {
  return (
    <>
      {/* 导航栏 */}
      <Navbar />
      
      {/* 标题区域 - 占页面三分之一高度 */}
      <section className="flex h-[33vh] flex-col items-center justify-center" style={{ backgroundColor: '#FFEB69' }}>
        <div className={`${titleFont.className} text-[#3A341C] text-center font-bold leading-none`} style={{ fontSize: 'min(8vw, 8rem)' }}>
          OUR TEAM
        </div>
      </section>

      {/* 团队成员区域 - 网格布局 */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Member 
              avatar="/images/our-teams/Can-1425.png"
              name="Can-1425"
              badge="Founder"
              blog="https://can1425.flowecho.org"
              github="https://github.com/Can1425"
              gitee="https://gitee.com/Can1425"
            />
            <Member 
              avatar="/images/our-teams/Gxxk.png"
              name="Gxxk"
              badge="Co-Founder"
              github="https://github.com/gxxk-dev"
            />
            <Member 
              avatar="/images/our-teams/Shinplex.png"
              name="LP_OVER"
              badge="Co-Founder"
            />
            <Member 
              avatar="/images/our-teams/emo.png"
              name="emofalling"
              badge="Member"
              github="https://github.com/emofalling"
            />
            <Member 
              avatar="/images/our-teams/我叫以赏.png"
              name="我叫以赏"
              badge="Inactive Member"
              blog="https://lovepikachu.top/"
              github="https://github.com/wojiaoyishang"
              gitee="https://gitee.com/wojiaoyishang"
            />
            <Member 
              avatar="/images/our-teams/Shinplex.png"
              name="Shinplex"
              badge="Dev"
              github="https://github.com/Shinplex"
            />
            <Member 
              avatar="/images/our-teams/HowardJoness.png"
              name="HowardJoness"
              badge="Inactive Member"
              github="https://github.com/HowardJoness"
            />
          </div>
        </div>
      </section>
    </>
  );
}