import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaGithub, FaGitAlt, FaBlog } from 'react-icons/fa'

const contentFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

interface MemberProps {
  avatar: string;
  name: string;
  badge: string;
  blog?: string;
  github?: string;
  gitee?: string;
}

export default function Member({ avatar, name, badge, blog, github, gitee }: MemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* 头像 */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 overflow-hidden rounded-full">
        <Image 
          src={avatar} 
          alt={`${name} avatar`} 
          fill
          className="object-cover"
        />
      </div>
      
      {/* 名称 */}
      <h3 className={`${contentFont.className} text-xl md:text-2xl font-bold text-[#3A341C] mb-1`}>
        {name}
      </h3>
      
      {/* 徽章 */}
      <div className="mb-3">
        <span className="inline-block bg-[#FFEB69] text-[#3A341C] px-3 py-1 rounded-full text-sm font-medium">
          {badge}
        </span>
      </div>
      
      {/* 社交媒体链接 */}
      <div className="flex space-x-4 text-[#3A341C]">
        {blog && (
          <a href={blog} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEB69] transition-colors">
            <FaBlog size={20} />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEB69] transition-colors">
            <FaGithub size={20} />
          </a>
        )}
        {gitee && (
          <a href={gitee} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFEB69] transition-colors">
            <FaGitAlt size={20} />
          </a>
        )}
      </div>
    </div>
  );
}