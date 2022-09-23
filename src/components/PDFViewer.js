import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import mypdf from "../assests/pdfs/1.pdf"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
function PDFViewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <Document file={mypdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page className="static" width={1000} pageNumber={pageNumber} />
            </Document>
            <div className='flex gap-x-10 m-auto mt-2'>
                <button onClick={()=>{
                    if(pageNumber-1==0){
                        setPageNumber(numPages)
                    }else{
                        setPageNumber((pageNumber-1)%numPages);
                    }
                    }}>
                    <BsChevronLeft />
                </button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button onClick={()=>setPageNumber((pageNumber%numPages)+1)}>
                    <BsChevronRight />
                </button>
            </div>
        </div>
    );
}

export default PDFViewer;