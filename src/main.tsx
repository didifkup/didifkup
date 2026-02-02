import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(err: Error) {
    return { error: err }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: 24,
          fontFamily: 'system-ui',
          maxWidth: 560,
          margin: '40px auto',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: 12,
        }}>
          <h1 style={{ color: '#b91c1c', marginTop: 0 }}>Something went wrong</h1>
          <pre style={{ overflow: 'auto', fontSize: 13 }}>{this.state.error.message}</pre>
          <p style={{ color: '#6b7280', fontSize: 14 }}>
            Try stopping all dev servers (Ctrl+C), deleting node_modules, then: <code>npm install</code> and <code>npm run dev</code>
          </p>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
