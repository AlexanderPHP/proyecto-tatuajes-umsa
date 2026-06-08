import { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function GraficoCategorias({ disenos }) {
    const [datosGrafico, setDatosGrafico] = useState(null)

    useEffect(() => {
        if (!disenos || disenos.length === 0) return
        const conteo = {}
        disenos.forEach(d => {
            conteo[d.categoria] = (conteo[d.categoria] || 0) + 1
        })

        const categorias = Object.keys(conteo)
        const cantidades = Object.values(conteo)

        const colores = [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
            '#9966FF', '#FF9F40'
        ]

        setDatosGrafico({
            labels: categorias.map(c => c.charAt(0).toUpperCase() + c.slice(1)),
            datasets: [{
                data: cantidades,
                backgroundColor: colores.slice(0, categorias.length),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        })
    }, [disenos])

    if (!datosGrafico) return <p>No hay datos para mostrar</p>

    const opciones = {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: {
                display: true,
                text: 'Distribución de Diseños por Categoría',
                font: { size: 18 }
            }
        }
    }

    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <Pie data={datosGrafico} options={opciones} />
        </div>
    )
}

export default GraficoCategorias