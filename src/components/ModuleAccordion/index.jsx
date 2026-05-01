import { useState } from "react";
import Title from "@/components/common/title";
import { DiarioDevMainContainer, CollapsibleContent } from "@/components/blog";

const ModuleAccordion = ({ modules }) => {
  const [visibleSections, setVisibleSections] = useState({});

  const toggleSection = (key) => {
    setVisibleSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <DiarioDevMainContainer>
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="module-container">
          {/* Título do Módulo */}
          <h1 style={{ textAlign: "center", marginBottom: "20px" }} className="h2-module-title">
            {module.moduleTitle}
          </h1>

          {/* Seções dentro do Módulo */}
          {module.sections.map((section) => (
            <div key={section.key}>
              <Title
                className={`h3Center-diarioDev ${visibleSections[section.key] ? "active" : ""}`}
                onClick={() => toggleSection(section.key)}
              >
                <span>{section.title}</span>
                <span>{visibleSections[section.key] ? "▲" : "▼"}</span>
              </Title>
              <CollapsibleContent isOpen={visibleSections[section.key]}>
                {section.component}
              </CollapsibleContent>
            </div>
          ))}
        </div>
      ))}
    </DiarioDevMainContainer>
  );
};

export default ModuleAccordion;