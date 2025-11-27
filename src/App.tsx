import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import { VibeStackBadge } from '@/components/vibestack-badge';
import KanbanBoard from '@/components/KanbanBoard';
import FilterTasks from '@/components/FilterTasks';

/**
 * Main App component with routing
 * Uses React Router for SPA navigation
 */
function App() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        }
      >
        <div className="p-4">
          <FilterTasks />
          <KanbanBoard />
        </div>
        <Outlet />
      </Suspense>
      <VibeStackBadge />
    </ErrorBoundary>
  );
}

export default App;
