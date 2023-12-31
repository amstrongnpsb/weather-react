const BounceLoading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center rounded-xl dark:bg-gray-200 bg-gray-900 h-full ">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 dark:bg-gray-900 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 dark:bg-gray-900 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 dark:bg-gray-900 bg-white rounded-full animate-bounce"></div>
    </div>
  );
};

export default BounceLoading;
