import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/pdfjs';

const PDFViewer = ({ pdfUrl }) => (
  <div style={{ width: '100%', height: '500px' }}>
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${window.pdfjs.version}/build/pdf.worker.min.js`}>
      <Viewer fileUrl={pdfUrl} />
    </Worker>
  </div>
);

export default PDFViewer;
