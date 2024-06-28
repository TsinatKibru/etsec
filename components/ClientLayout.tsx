'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return <>{children}</>;
};

export default ClientLayout;
