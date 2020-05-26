import { useEffect, useLayoutEffect } from "react";

export default function useImmediateEffect(effect, inputs) {
  if (process.browser) return useLayoutEffect(effect, inputs)
  return useEffect(effect, inputs)
}



