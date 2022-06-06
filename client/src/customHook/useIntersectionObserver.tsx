import { useEffect } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  target: any;
  onIntersect: IntersectionObserverCallback;
}

function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold,
  rootMargin,
}: Args) {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    if (!target) {
      return;
    }

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
}

export default useIntersectionObserver;
