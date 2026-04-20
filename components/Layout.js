import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    // 2. Scroll Reveal Animation for Sections
    const revealElements = document.querySelectorAll(
      '.section, .feature-card, .spoke-card, .benefit-col'
    );

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((element) => {
      if (element.id !== 'hero') {
        scrollObserver.observe(element);
      }
    });

    return () => {
      revealElements.forEach((element) => {
        scrollObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
