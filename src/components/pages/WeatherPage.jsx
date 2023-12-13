import { Fragment } from "react";
import Sidebar from "../fragments/Sidebar";
import ContentLayout from "../layouts/ContentLayout";

const WeatherPage = () => {
  return (
    <Fragment>
      <div className="flex flex-row bg-gray-900 p-10 min-h-screen justify-between gap-5">
        <Sidebar></Sidebar>
        <ContentLayout></ContentLayout>
      </div>
    </Fragment>
  );
};

export default WeatherPage;
