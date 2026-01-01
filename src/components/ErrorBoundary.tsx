import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Что-то пошло не так
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Произошла ошибка при загрузке приложения. Пожалуйста, обновите
              страницу.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-yellow-400 dark:bg-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-600 text-black dark:text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Обновить страницу
            </button>
            {this.state.error && (
              <details className="mt-4 text-left">
                <summary className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
                  Детали ошибки
                </summary>
                <pre className="mt-2 text-xs bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
