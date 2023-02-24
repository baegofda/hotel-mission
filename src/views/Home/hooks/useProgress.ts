const useProgress = (element: HTMLElement | null, size: number, transition = 'transform 5s linear 0s', transform?: string) => {
  const animation = (index: number) => `translateX(calc(-100% + ((100% / ${size}) * ${index})))`;

  const reset = () => {
    if (!element) return;

    element.style.transition = 'none';
    element.style.transform = `translateX(-100%)`;
  };

  const slide = (index = 1) => {
    if (!element) return;

    element.style.transition = transition;
    element.style.transform = transform ?? animation(index);
  };

  const offset = (index = 1) => {
    if (!element) return;

    element.style.transition = 'none';
    element.style.transform = transform ?? animation(index);
  };

  return { reset, slide, offset };
};

export default useProgress;
