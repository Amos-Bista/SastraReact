import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main>
      <div className='pt-10'>
        <HeroSection />
        <div className='w-[70%] flex m-auto mt-10'>
          <div className='w-[50%] border-r-2'>
            <p className='text-4xl text-right pr-[5%] font-bold'>Why choose us</p>
          </div>
          <div className='w-[35%] text-left pl-[3%]'>
            With more than a decade of experience and diverse portfolio of implemented projects, we possess required market expertise to provide you with best support and solution.
          </div>
        </div>
      </div>
    </main>
  )
}
