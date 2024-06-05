import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import workcarddata from "./workcarddata";

import React from "react";

const work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {workcarddata.map((val,ind)=>{
                return (
                    <WorkCard
                    key={ind}
                    imagesrc={val.imagesrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                );
            })}
        </div>
    </div>
  );
};

export default work;
