"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { REDUCED_MOTION, SMOOTH_SCROLL_OPTIONS } from "./motion";

/** 휠 입력을 부드럽게 이어 주되, 터치와 링크 이동은 브라우저 기본 동작을 유지한다. */
export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION);
    const root = document.documentElement;
    const body = document.body;
    let lenis: Lenis | undefined;

    // 기존 메뉴(body)와 교수 상세(html)의 스크롤 잠금을 함께 따른다.
    // Lenis 자신이 붙이는 .lenis-stopped의 overflow와 혼동하지 않도록
    // 해당 컴포넌트들이 설정한 인라인 스타일만 확인한다.
    const syncLock = () => {
      const locked = [root, body].some((element) =>
        ["hidden", "clip"].includes(element.style.overflow),
      );
      if (locked) lenis?.stop();
      else lenis?.start();
    };

    const syncMotion = () => {
      lenis?.destroy();
      lenis = undefined;
      if (reducedMotion.matches) return;

      lenis = new Lenis(SMOOTH_SCROLL_OPTIONS);
      syncLock();
    };

    // 앵커/페이지 이동 시 남은 관성을 취소한다. 기본 링크 동작을 유지해
    // URL 해시, 뒤로 가기, 키보드 포커스, CSS scroll-margin이 그대로 동작한다.
    const stopInertia = () => {
      if (!lenis || lenis.isStopped) return;
      lenis.stop();
      lenis.start();
    };
    const onLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
      ) return;
      const anchor = event.composedPath().find((node) => node instanceof HTMLAnchorElement);
      if (anchor instanceof HTMLAnchorElement && anchor.hasAttribute("href")) stopInertia();
    };

    const observer = new MutationObserver(syncLock);
    observer.observe(root, { attributes: true, attributeFilter: ["style"] });
    observer.observe(body, { attributes: true, attributeFilter: ["style"] });
    reducedMotion.addEventListener("change", syncMotion);
    // Next Link가 클릭을 처리하기 전에 관성을 멈춘다.
    window.addEventListener("click", onLinkClick, true);
    window.addEventListener("popstate", stopInertia);
    syncMotion();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncMotion);
      window.removeEventListener("click", onLinkClick, true);
      window.removeEventListener("popstate", stopInertia);
      lenis?.destroy();
    };
  }, []);

  return null;
}
