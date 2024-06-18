import React from 'react';
import "../assets/styles/layout.css";
import Competencies from "../components/info/Competencies";
import Trajectory from '../components/info/Trajectory';
import Certs from '../components/info/Certs';

const Info = () => {
  return (
    <div className="layout-container">
      <Competencies />
      <Trajectory />
      <Certs /> 
    </div>
  )
}

export default Info
