import React from "react";
import PDFViewer from "../PDFViewer";
import { useLocation } from "react-router-dom";

const AdminView = () => {
  const location = useLocation();

  console.log(location.state.fileurl);
  return (
    <div className="justify-center">
      <PDFViewer fileurl={location.state.fileurl} />
    </div>
  );
};

export default AdminView;
