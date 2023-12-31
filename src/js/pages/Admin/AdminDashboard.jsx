import { useState } from "react";
import AdminJobForm from "../../components/AdminJobForm";
import AdminStudyForm from "../../components/AdminStudyForm";
import AdminBlogForm from "../../components/AdminBlogForm";
import AdminPortfolioForm from "../../components/AdminPortfolioForm";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="admin__dashboard">
      <div className="tab-buttons">
        <button
          className={activeTab === 0 ? "active-tab" : ""}
          onClick={() => handleTabChange(0)}
        >
          Job post
        </button>
        <button
          className={activeTab === 1 ? "active-tab" : ""}
          onClick={() => handleTabChange(1)}
        >
          Study post
        </button>
        <button
          className={activeTab === 2 ? "active-tab" : ""}
          onClick={() => handleTabChange(2)}
        >
          Blog post
        </button>
        <button
          className={activeTab === 3 ? "active-tab" : ""}
          onClick={() => handleTabChange(3)}
        >
          Portfolio post
        </button>
      </div>
      {activeTab === 0 && <AdminJobForm />}
      {activeTab === 1 && <AdminStudyForm />}
      {activeTab === 2 && <AdminBlogForm />}
      {activeTab === 3 && <AdminPortfolioForm />}
    </div>
  );
}

export default AdminDashboard;
