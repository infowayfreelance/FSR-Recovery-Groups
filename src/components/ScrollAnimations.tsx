"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".fade-up").forEach((element) => element.classList.add("show"));
      return;
    }

    root.classList.add("scroll-animations-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeAnimations = (scope: ParentNode) => {
      if (scope instanceof Element && scope.matches(".fade-up")) observer.observe(scope);
      scope.querySelectorAll(".fade-up:not(.show)").forEach((element) => observer.observe(element));
    };

    observeAnimations(document);

    // The component lives in the root layout, so it does not remount after a
    // client-side navigation. Observe streamed and newly navigated page content
    // as it is added instead of leaving its fade-up elements permanently hidden.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeAnimations(node);
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      root.classList.remove("scroll-animations-ready");
    };
  }, []);

  return null;
}
