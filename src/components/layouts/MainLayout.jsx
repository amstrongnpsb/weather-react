const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-row bg-gray-900 p-10 max-h-screen h-screen justify-center gap-5 font-poppins-reg">
      {children}
    </div>
  );
};

export default MainLayout;
