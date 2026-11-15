'use client';
import { Component, type ReactNode } from 'react';

export class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { crashed: boolean }
> {
  state = { crashed: false };

  static getDerivedStateFromError() {
    return { crashed: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.warn('Scene WebGL render fallback triggered:', error, info);
  }

  render() {
    return this.state.crashed ? this.props.fallback : this.props.children;
  }
}
