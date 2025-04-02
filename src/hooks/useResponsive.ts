import { useEffect, useState } from 'react';

const useResponsive = (breakpoint: number = 768) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= breakpoint);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
};

export default useResponsive;
