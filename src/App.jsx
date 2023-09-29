import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import "./App.css";

const App = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdfReader">
      <nav className="navbar">
        <button
          onClick={() => {
            setPageNumber(pageNumber - 1);
            console.log(pageNumber);
          }}
          disabled={pageNumber > 1 ? false : true}
        >
          Previous
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => {
            setPageNumber(pageNumber + 1);
            console.log(pageNumber);
          }}
          disabled={pageNumber < numPages ? false : true}
        >
          Next
        </button>
      </nav>
      <div className="documentViewer">
        <Document
          file="/ECX-4.0-Sponsorship-Packet.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
      <a
        href="/ECX-4.0-Sponsorship-Packet.pdf"
        download="ECX 4.0 Sponsorship Packet.pdf"
      >
        download
      </a>
    </div>
  );
};

export default App;
