import { useState } from "react";
import { Button } from "./ui/button";

const ErrorTestComponent = () => {
  const [shouldError, setShouldError] = useState(false);

  // This will trigger the error boundary
  if (shouldError) {
    throw new Error("Test error for ErrorBoundary - this is intentional!");
  }

  const triggerError = () => {
    setShouldError(true);
  };

  const triggerAsyncError = () => {
    // This won't be caught by ErrorBoundary (async errors need different handling)
    setTimeout(() => {
      throw new Error("Async error - won't be caught by ErrorBoundary");
    }, 1000);
  };

  const triggerRenderError = () => {
    // Force a render error by accessing undefined property
    const obj: any = null;
    return obj.someProperty.that.doesnt.exist;
  };

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-red-100 border border-red-300 rounded-lg p-4 space-y-2">
      <p className="text-sm font-medium text-red-800">
        🧪 Error Testing (Dev Only)
      </p>
      <div className="flex flex-col gap-2">
        <Button size="sm" variant="destructive" onClick={triggerError}>
          Throw Component Error
        </Button>
        <Button size="sm" variant="outline" onClick={triggerRenderError}>
          Trigger Render Error
        </Button>
        <Button size="sm" variant="secondary" onClick={triggerAsyncError}>
          Async Error (won't catch)
        </Button>
      </div>
    </div>
  );
};

export default ErrorTestComponent;
