function Loading() {
  return (
    <>
      <div className="w-full flex items-center justify-start px-4 py-2 bg-white max-w-fit shadow-sm">
        <div
          className="animate-spin h-4 w-4 border-2 border-black border-l-transparent rounded-full mr-3 "
          viewBox="0 0 24 24"
        ></div>
        <p className="text-sm font-medium">
          Loading <span className="animate-pulse">....</span>
        </p>
      </div>
    </>
  );
}

export default Loading;
