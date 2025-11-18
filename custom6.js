var container = document.getElementById('pdf_document_scroll_container');
var width = container ? Math.min(1272, false && false && window.innerWidth > 1248 ? false && window.innerWidth > 1248 ? container.offsetWidth - 56 : container.offsetWidth - 256 : false && window.innerWidth > 1248 ? container.offsetWidth - 56 : container.offsetWidth) : 1272;
var padding = window.innerWidth <= 512 || window.innerHeight <= 512 ? 16 : window.innerWidth > 1248 ? 36 : 32;
window.defaultViewWidth = width - padding;
window.docManager.setPageWidths(width - padding);
docManager.setupTestElements();