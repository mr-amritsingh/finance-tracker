import React, {useEffect, useState} from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from 'react-redux';

function ExpenseCategoryChart() {

    const transactions = useSelector((state) => state.transactions.allTransaction)
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        const expenseTrans = transactions.filter(d=> d.type=='expense')
        const labels = [...new Set(expenseTrans.map(d=> d.category))]
        const data = labels.map(l=> expenseTrans.filter(ex=> ex.category==l).reduce((acc, obj)=> acc+ Number(obj.amount), 0))
        
        setChartData(
            {
                labels: labels,
                datasets: [
                {
                label: "Expense Category Chart",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: data,
                },
                ],
            }
        )
    }, [transactions])
    

return (
    <div className='mt-5'>
        <h2 className='mb-3'>Expense Category Chart</h2>
        {chartData && <Bar data={chartData} />}
    </div>
)
}

export default ExpenseCategoryChart