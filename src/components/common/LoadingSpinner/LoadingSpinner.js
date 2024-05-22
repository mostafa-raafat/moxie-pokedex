const LoadingSpinner = () => (
  <div className="mx-auto flex min-h-dvh w-4/5 flex-col items-center justify-center pt-24">
    <div
      className="h-48 w-48 animate-spin rounded-full border-2 border-t-red-500"
      role="status"
    ></div>
  </div>
);

export default LoadingSpinner;
