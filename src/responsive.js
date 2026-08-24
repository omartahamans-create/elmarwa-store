// نظام الاستجابة — يوفّر hooks لكل شاشات المتجر عبر window.__RESP__
// (شاشات المتجر ملفات مستقلة بتقرأ من الـ globals زي React و __ELMARWA__)

export function installResponsive(React) {
  const QUERIES = {
    mobile: '(max-width: 767px)',
    narrow: '(max-width: 1023px)',
    tiny: '(max-width: 400px)'
  };

  function useMedia(query) {
    const get = () => (typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(query).matches
      : false);
    const [matches, setMatches] = React.useState(get);
    React.useEffect(() => {
      const mq = window.matchMedia(query);
      const onChange = e => setMatches(e.matches);
      setMatches(mq.matches);
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else mq.addListener(onChange);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', onChange);
        else mq.removeListener(onChange);
      };
    }, [query]);
    return matches;
  }

  // يمنع التمرير خلف الدرج/النافذة المنبثقة على الموبايل
  function useLockScroll(locked) {
    React.useEffect(() => {
      if (!locked) return;
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }, [locked]);
  }

  window.__RESP__ = {
    useMobile: () => useMedia(QUERIES.mobile),
    useNarrow: () => useMedia(QUERIES.narrow),
    useTiny: () => useMedia(QUERIES.tiny),
    useLockScroll,
    // اختصار: يرجّع قيمة الموبايل أو الديسكتوب
    pick: (isMobile, mobileValue, desktopValue) => (isMobile ? mobileValue : desktopValue)
  };
}
