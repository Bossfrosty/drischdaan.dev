import { HomeTitle } from '../components/HomeTitle';
import { Navbar } from '../components/Navbar';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { ThreeCanvas } from '../components/ThreeCanvas';

export default function Home() {
  return (
    <main className='content-container flex min-h-screen flex-col'>
      <ThreeCanvas />
      <Navbar />
      <section
        id='landing'
        className='relative flex h-screen select-none flex-col items-center justify-center p-24'
      >
        <HomeTitle />
      </section>
      <section className='flex h-screen items-center justify-center'>
        <div className=''>
          Please check back later. This website is still under construction
        </div>
      </section>
      <ScrollIndicator />
    </main>
  );
}
