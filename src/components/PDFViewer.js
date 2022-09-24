import React, { useState } from "react";
import { Document, Page, pdfjs} from "react-pdf/dist/esm/entry.webpack5";
import mypdf from "../assests/pdfs/1.pdf";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function PDFViewer({ fileurl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


  // const MyDoc = () => (
  //   <Document 
  //   file={{
  //         // url: `https://cors-anywhere.herokuapp.com/${fileurl}`,
  //         url: fileurl,
  //       }}
  //       onLoadSuccess={onDocumentLoadSuccess}
  //       onLoadError={console.error}
  //       className="border-2"
  //       >
  //     <Page className="static" width={800} pageNumber={pageNumber} />
  //   </Document>
  // )

  return (
    <div className="flex items-center justify-center flex-col">

      <div className="bg-red mb-5">
        <a className="py-2 px-4 bg-blue-500 rounded text-white" href={fileurl} target="_blank" download={true}> Download PDF</a>
      </div>
      
      <Document
        file={{
          // url: `https://cors-anywhere.herokuapp.com/${fileurl}`,
          url: fileurl,
        }}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        className="border-2"
      >
        <Page className="static" width={800} pageNumber={pageNumber} />
      </Document>
      <div className="flex gap-x-10 m-auto mt-2">
        <button
          onClick={() => {
            if (pageNumber - 1 == 0) {
              setPageNumber(numPages);
            } else {
              setPageNumber((pageNumber - 1) % numPages);
            }
          }}
        >
          <BsChevronLeft />
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={() => setPageNumber((pageNumber % numPages) + 1)}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}

export default PDFViewer;
