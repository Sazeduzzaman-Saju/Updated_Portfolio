import React, { useState } from "react";
import SectionContainer from "../SectionContainer";
import AboutUsForm from "./AboutUsForm";
import TestimonialForm from "./TestimonialForm";
import SkillsForm from "./SkillsForm";
import KnowledgeInterests from "./knowledgeInterestForm";
import EdicatonExperience from "./EdicatonExperience";
import Clients from "./Clients";
import Pricing from "./Pricing";
import Works from "./Works";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Technologies from "./Technologyies";
import ServiceFrom from "./ServiceFrom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Form data state for each section
  const [aboutData, setAboutData] = useState({ aboutText: "" });
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDescription: "",
  });
  const [testimonialData, setTestimonialData] = useState({
    clientName: "",
    testimonial: "",
  });

  // Input change handler
  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;

    if (formType === "about") {
      setAboutData({ ...aboutData, [name]: value });
    } else if (formType === "project") {
      setProjectData({ ...projectData, [name]: value });
    } else if (formType === "testimonial") {
      setTestimonialData({ ...testimonialData, [name]: value });
    }
  };

  // Form submit handler
  const handleSubmit = (e, formType) => {
    e.preventDefault();
    if (formType === "about") {
      console.log("About Us data submitted:", aboutData);
    } else if (formType === "project") {
      console.log("Project data submitted:", projectData);
    } else if (formType === "testimonial") {
      console.log("Testimonial data submitted:", testimonialData);
    }
  };

  return (
    <SectionContainer name={"dashboard"}>
      <div className="dashboard-content">
        {/* Tabs */}
        <div className="flex flex-col space-y-4 mb-5 tab-box">
          <button
            className={`px-5 py-2 rounded  text-start ${
              activeTab === "about"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About & Intro
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "skills"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills & language
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "knowledge"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("knowledge")}
          >
            Knowledge Experience
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "education"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education & Experience
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "testimonial"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("testimonial")}
          >
            Testimonial
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "service"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("service")}
          >
            Service
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "clients"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("clients")}
          >
            Clients
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "pricing"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("pricing")}
          >
            Pricing
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "works"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("works")}
          >
            Works
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "blogs"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("blogs")}
          >
            Blogs
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "contact"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
          <button
            className={`px-5 py-2 rounded text-start  ${
              activeTab === "technologies"
                ? "bg-blue-500 tb-active"
                : "bg-gray-200 not-active"
            }`}
            onClick={() => setActiveTab("technologies")}
          >
            Technologies
          </button>
        </div>
        {/* Tab Content */}
        <div className="p-5 border border-gray-300 rounded-lg tab-content-box">
          {/* About Us Form */}
          {activeTab === "about" && (
            <div>
              <AboutUsForm />
            </div>
          )}

          {/* Add Project Form */}
          {activeTab === "skills" && (
            <div>
              <SkillsForm />
            </div>
          )}

          {/* Add Testimonial Form */}
          {activeTab === "knowledge" && (
            <div>
              <KnowledgeInterests />
            </div>
          )}
          {activeTab === "education" && (
            <div>
              <EdicatonExperience />
            </div>
          )}
          {activeTab === "testimonial" && (
            <div>
              <TestimonialForm />
            </div>
          )}
          {activeTab === "service" && (
            <div>
              <ServiceFrom />
            </div>
          )}
          {activeTab === "clients" && (
            <div>
              <Clients />
            </div>
          )}
          {activeTab === "pricing" && (
            <div>
              <Pricing />
            </div>
          )}
          {activeTab === "works" && (
            <div>
              <Works />
            </div>
          )}
          {activeTab === "blogs" && (
            <div>
              <Blogs />
            </div>
          )}
          {activeTab === "contact" && (
            <div>
              <Contact />
            </div>
          )}
          {activeTab === "technologies" && (
            <div>
              <Technologies />
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Dashboard;
