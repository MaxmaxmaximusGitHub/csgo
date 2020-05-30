import { useLayoutEffect } from "react";


export default function useBrowserEffect(effect, deps) {
  if (process.browser) {
    useLayoutEffect(effect, deps)
  }
}

