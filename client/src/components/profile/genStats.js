import Link from 'next/link';
import {
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import CalendarHeatmap from 'react-calendar-heatmap';


export default function GenStats() {
    return (
        <div>
            <div className="flex flex-col items-center p-14 rounded-xl bg-white shadow-xl ">

                <CardTitle className="mb-8"> Statistics </CardTitle>
                <div className="ml-4 flex flex-col items-center space-y-4">
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-700">Flawless: 10</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-700">1-3 Attempts: 20</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-700">4+ Attempts: 5</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-700">Languages Used: 3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}