const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-red-800 justify-center items-center flex font-poppins-reg flex-col">
      <span className="text-9xl">
        <ion-icon name="warning-outline"></ion-icon>
      </span>
      <h1 className="text-6xl font-extrabold">404</h1>
      <h1 className="text-xl font-extrabold tracking-wider">Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
