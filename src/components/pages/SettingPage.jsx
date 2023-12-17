import MainLayout from "../layouts/MainLayout";
import Sidebar from "../fragments/SideBar";
import ContentLayout from "../layouts/ContentLayout";
const SettingPage = () => {
  return (
    <MainLayout>
      <Sidebar />
      <ContentLayout />
    </MainLayout>
  );
};

export default SettingPage;
