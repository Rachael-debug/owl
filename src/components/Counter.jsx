import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Counter({ target, suffix = "", duration = 1000 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = target / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, [inView, target, duration]);

  return (
    <h3 ref={ref}>
      <span className="statsNo">
        {count.toLocaleString()}
      </span>
      {suffix}
    </h3>
  );
}
