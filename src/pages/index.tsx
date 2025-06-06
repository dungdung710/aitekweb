import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProblemSolution from '../components/ProblemSolution';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
