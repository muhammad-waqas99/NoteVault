import React from 'react';
import '../css/Skeleton.css';

const SkeletonNote = () => {
  return (
    <div className="nv-skeleton-card">
      <div className="nv-skeleton-title"></div>
      <div className="nv-skeleton-desc"></div>
      {/* 'short' class ko yahan use karein */}
      <div className="nv-skeleton-desc short"></div> 
      <div className="nv-skeleton-footer">
        <div className="nv-skeleton-tag"></div>
        <div className="nv-skeleton-icon"></div>
      </div>
    </div>
  );
};

export default SkeletonNote;