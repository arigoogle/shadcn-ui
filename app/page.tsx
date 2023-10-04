import Nav from '@/components/Nav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-24">
      <Nav/>
      <section className='py-12 flex flex-col gap-8 text-center'>
        <h1 className='text-4xl font-bold'>Shadcn is awesome</h1>
        <p className='text-2xl text-muted-foreground'>Great tool for software Dev</p>
      </section>
      <div className='flex gap-6 py-6 items-center text-center justify-center'>
        <Button variant={'secondary'}>Learn More</Button>
        <Button>Enroll Now</Button>
      </div>
    </main>
  )
}
