import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import "../Styles/Breadcrumbs.css";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className='breadcrumbs'>
      {breadcrumbs.map(({ breadcrumb }, index) => (<div key={index} className={`${index == breadcrumbs.length - 1 ? 'breadcrumb-active' : ''}`}> {breadcrumb} {index == breadcrumbs.length - 1 ? '' : '/'}</div>))}
    </div>
  );
}

export default Breadcrumbs;