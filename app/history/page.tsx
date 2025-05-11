import Navbar from '@/components/Navbar';

export default function AboutUs() {
  return (
    <>
      {/* 导航栏 */}
      <Navbar />

      {/* 全屏 iframe 区域 */}
      <section className="flex min-h-screen w-screen flex-col items-center justify-center bg-gray-100">
        {/* 请将 src 替换为你想要加载的页面 URL */}
        <iframe
          src="https://flowecho.org/wave/history/" // 示例 URL，请替换
          title="History Content"
          className="w-full h-screen border-none" // 使 iframe 占据父容器的全部空间
        ></iframe>
      </section>
    </>
  );
}