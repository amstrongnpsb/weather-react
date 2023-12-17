import Sidebar from "../fragments/SideBar";
import ContentLayout from "../layouts/ContentLayout";
import MainLayout from "../layouts/MainLayout";
import WeatherInfoLayout from "../layouts/WeatherInfoLayout";

const WeatherPage = () => {
  return (
    <MainLayout>
      <Sidebar />
      <ContentLayout>
        <WeatherInfoLayout />
      </ContentLayout>
    </MainLayout>
  );
};

export default WeatherPage;
