export function scrollToHash(hash: string) {
  const id = hash.replace("/#", "").replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -80 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}