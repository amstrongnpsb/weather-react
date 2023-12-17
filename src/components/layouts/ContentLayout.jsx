const ContentLayout = ({ children }) => {
  return (
    <div className="flex container bg-slate-300 w-full rounded-2xl flex-row gap-4 p-4 animate-fade-in">
      {children}
    </div>
  );
};

export default ContentLayout;
