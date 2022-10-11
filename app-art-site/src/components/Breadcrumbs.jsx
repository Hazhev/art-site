import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  console.log(breadcrumbs);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
    </div>
  );
};

export default Breadcrumbs;
