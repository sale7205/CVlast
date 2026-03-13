"use client"

import { useState, useCallback } from "react"
import { ProjectAsset } from "@/data/projects"
import { FileText, Play, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Maximize2 } from "lucide-react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Point to the bundled worker via CDN — no extra config needed
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

function PdfViewer({ path, label }: { path: string; label: string }) {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1.0)
  const [containerWidth, setContainerWidth] = useState(0)

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) setContainerWidth(node.clientWidth)
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setCurrentPage(1)
  }

  const goTo = (page: number) => setCurrentPage(Math.min(Math.max(1, page), numPages))
  const zoomIn  = () => setScale(s => Math.min(s + 0.25, 3.0))
  const zoomOut = () => setScale(s => Math.max(s - 0.25, 0.5))

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-border bg-card">

      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-border bg-card/80 backdrop-blur-sm">

        {/* Page navigation */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage <= 1}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="text-sm text-foreground tabular-nums px-2">
            <span className="font-medium">{currentPage}</span>
            <span className="text-muted-foreground"> / {numPages || "—"}</span>
          </span>

          <button
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage >= numPages}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Zoom controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut size={16} />
          </button>

          <span className="text-xs text-muted-foreground tabular-nums w-12 text-center">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={zoomIn}
            disabled={scale >= 3.0}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn size={16} />
          </button>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Open full PDF in new tab */}
          <a
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Open in full screen"
          >
            <Maximize2 size={15} />
          </a>

          {/* Download — prominent */}
          <a
            href={path}
            download
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={13} />
            Download
          </a>
        </div>
      </div>

      {/* ── PDF canvas ── */}
      <div
        ref={containerRef}
        className="overflow-auto bg-muted/30"
        style={{ maxHeight: "78vh" }}
      >
        <Document
          file={path}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
              Loading document…
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center h-64 gap-3 text-muted-foreground text-sm">
              <p>Could not load PDF in browser.</p>
              <a
                href={path}
                download
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={13} />
                Download {label}
              </a>
            </div>
          }
        >
          <Page
            pageNumber={currentPage}
            width={containerWidth ? containerWidth * scale : undefined}
            renderTextLayer
            renderAnnotationLayer
            className="mx-auto shadow-md"
          />
        </Document>
      </div>

    </div>
  )
}

export function ProjectViewer({ assets }: { assets: ProjectAsset[] }) {
  const [active, setActive] = useState(0)
  const current = assets[active]

  return (
    <div className="mt-10">

      {/* Asset tabs */}
      {assets.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {assets.map((a, i) => {
            const isActive = i === active
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm border transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary font-medium"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {a.type === "video" ? <Play size={12} /> : <FileText size={12} />}
                {a.label}
              </button>
            )
          })}
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {current.description}
      </p>

      {/* PDF viewer */}
      {current.type === "pdf" && current.path && (
        <PdfViewer path={current.path} label={current.label} />
      )}

      {/* Video embed */}
      {current.type === "video" && current.url && (
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <div className="aspect-video w-full">
            <iframe
              src={`${current.url}?rel=0&modestbranding=1`}
              className="w-full h-full"
              title={current.label}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </div>
  )
}
