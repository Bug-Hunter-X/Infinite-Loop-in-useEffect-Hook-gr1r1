# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug causes an infinite loop because the effect function modifies state which it directly depends upon, resulting in an endless cycle of re-renders.