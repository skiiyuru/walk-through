import { Component, ReactNode, ErrorInfo } from "react"

interface ErrorBoundaryProps {
  fallback: (error: Error | null) => ReactNode
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught in ErrorBoundary:", error, errorInfo)
    this.setState({ error })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback(this.state.error)
    }

    return this.props.children
  }
}
