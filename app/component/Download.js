'use client'; // Ensures this component is a client component

import React from 'react';

export default function DownloadPdfButton() {
  const handleDownload = () => {
    const pdfPath = '/img/Professional_CV_Resume.pdf'; // Path to your PDF file

    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'company-profile.pdf'; // Name of the downloaded file
    document.body.appendChild(link);

    // Trigger download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center bg-[#1c7f8f] my-8 mx-4 sm:mx-20 rounded-lg shadow-xl" data-aos="fade-up"
    data-aos-duration="3000">
      <button
        onClick={handleDownload}
        className="px-4 py-3  text-white font-bold  transition duration-300"
      >
        Download Company Profile
      </button>
    </div>
  );
}
