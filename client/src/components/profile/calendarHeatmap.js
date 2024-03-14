import Link from 'next/link';
import {
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import CalendarHeatmap from 'react-calendar-heatmap';


export default function GenStats() {

    const currentDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 4);

    const generateRandomValues = () => {
        const values = [];
        const currentDate = new Date();

        for (let i = 0; i < 365; i++) {
            const randomCount = Math.floor(Math.random() * 3) + 1;
            const date = currentDate.toISOString().split('T')[0];
            values.push({ date, count: randomCount });
            currentDate.setDate(currentDate.getDate() - 1);
        }

        return values;
    };

    const randomValues = generateRandomValues();
    console.log(randomValues);

    return (
        <div className="flex flex-col items-center p-14 rounded-xl mt-5 bg-slate-300 shadow-xl h-auto">

            <CardTitle className="mb-8"> Submissions </CardTitle>
            <div>
                <CalendarHeatmap
                    startDate={startDate}
                    endDate={currentDate}
                    values={randomValues}
                    classForValue={(value) => {
                        if (!value) {
                            return 'color-empty';
                        }
                        return `color-scale-${value.count}`;
                    }}
                />
            </div>
        </div>
    )
}