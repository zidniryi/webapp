import React, { Fragment } from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import NavBar from '../components/NavBar'

const PdfViewer = () => {
  return (
    <Fragment>
      <NavBar />
      <div style={{ marginTop: 100 + 'px' }}>
        <PDFViewer
          document={{
            url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
          }}
        />
      </div>
    </Fragment>
  )
}

export default PdfViewer
