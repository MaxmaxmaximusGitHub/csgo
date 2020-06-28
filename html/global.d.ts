import * as React from 'react'


interface Window {
  React: typeof React;
  useRef: typeof React.useRef;
  useMemo: typeof React.useMemo;
  useState: typeof React.useState;
  useEffect: typeof React.useEffect;
  useContext: typeof React.useContext;
  useCallback: typeof React.useCallback;
  useLayoutEffect: typeof React.useLayoutEffect;
}

