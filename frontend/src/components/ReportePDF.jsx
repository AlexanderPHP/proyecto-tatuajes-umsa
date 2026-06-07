import { jsPDF } from 'jspdf'

function ReportePDF({ disenos }) {
    const generarPDF = () => {
        const doc = new jsPDF()
        
        // Título
        doc.setFontSize(20)
        doc.text('AlexiStyle Studio - Catálogo de Diseños', 20, 20)
        
        // Fecha
        doc.setFontSize(12)
        doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 30)
        
        // Línea separadora
        doc.line(20, 35, 190, 35)
        
        let y = 45
        
        disenos.forEach((diseno, index) => {
            // Si se acaba la página, crear nueva
            if (y > 250) {
                doc.addPage()
                y = 20
            }
            
            doc.setFontSize(14)
            doc.text(`${index + 1}. ${diseno.nombre}`, 20, y)
            
            doc.setFontSize(11)
            doc.text(`Descripción: ${diseno.descripcion}`, 20, y + 7)
            doc.text(`Categoría: ${diseno.categoria}`, 20, y + 14)
            doc.text(`Precio: $${diseno.precioBase}`, 20, y + 21)
            doc.text(`Tiempo: ${diseno.tiempoEstimado}`, 20, y + 28)
            
            y += 40
        })
        
        // Pie de página
        const totalPaginas = doc.internal.getNumberOfPages()
        for (let i = 1; i <= totalPaginas; i++) {
            doc.setPage(i)
            doc.setFontSize(10)
            doc.text(`Página ${i} de ${totalPaginas}`, 105, 290, { align: 'center' })
        }
        
        doc.save('catalogo-alexiStyle.pdf')
    }

    return (
        <button
            onClick={generarPDF}
            style={{
                padding: '12px 24px',
                backgroundColor: '#1565c0',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                marginBottom: '20px'
            }}
        >
            📄 Descargar Reporte PDF
        </button>
    )
}

export default ReportePDF