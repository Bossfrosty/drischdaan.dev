import { HomeTitle } from '../components/HomeTitle';
import { ScrollIndicator } from '../components/ScrollIndicator';

export default function Home() {
  return (
    <main className='content-container flex min-h-screen flex-col'>
      <section
        id='landing'
        className='relative flex h-screen select-none flex-col items-center justify-center p-24'
      >
        <HomeTitle />
      </section>
      <section className='h-screen'></section>
      <ScrollIndicator />
    </main>
  );
}
