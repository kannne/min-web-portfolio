import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * 스크롤 시 요소가 viewport에 들어올 때 애니메이션을 트리거하는 훅
 * @param once - 애니메이션을 한 번만 실행할지 여부 (기본: true)
 * @param margin - viewport와의 여유 공간 (기본: "-100px")
 * @returns ref와 isInView 상태
 */
export function useScrollAnimation(once = true, margin: string = "-100px") {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: margin as any,
  });

  return { ref, isInView };
}
