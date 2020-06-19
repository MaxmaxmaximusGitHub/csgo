import * as React from 'react'

// declare global {
//   var React: typeof React;
//   var useRef: typeof React.useRef;
//   var useMemo: typeof React.useMemo;
//   var useState: typeof React.useState;
//   var useEffect: typeof React.useEffect;
//   var useContext: typeof React.useContext;
//   var useCallback: typeof React.useCallback;
//   var useLayoutEffect: typeof React.useLayoutEffect;
// }

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

