import Layout from "@/components/layout/layout"
import Link from "next/link"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import { GiPlainCircle , GiPlainSquare } from "react-icons/gi";
import { IoTriangleSharp } from "react-icons/io5";
import SavedBtn from "@/components/savedBtn";

export default function Exercises({ easyExercises, mediumExercises, hardExercises, exercises }) {


    return (
        <Layout className="">
            <div className="" id="exercisesPage">
            <CardHeader className="mb-8">
                    <CardTitle className="text-center text-4xl mt-10 mb-4 font-bold"> ✨ Explore the Javascript exercises on Code Master ✨</CardTitle>

                    <h1 className="text-center text-xl">Work through each exercise to improve your skills. They’re great practice and fun to do! </h1>
            </CardHeader>
                
                <div className="flex grid grid-cols-2 items-center">
                    {easyExercises.map(exercise => (
                        <div key={exercise._id}>
                            <ExerciseCard exercise={exercise} />
                        </div>
                    ))}
                </div>

                <div className="flex grid grid-cols-2 items-center">
                    {mediumExercises.map(exercise => (
                        <div key={exercise._id}>
                            <ExerciseCard exercise={exercise} />
                        </div>
                    ))}
                </div>

                <div className=" flex grid grid-cols-2 items-center">
                    {hardExercises.map(exercise => (
                        <div key={exercise._id}>
                            <ExerciseCard exercise={exercise} />
                        </div>
                    ))}
                </div>
        
            <div className="exercises-margin" style={{ marginBottom: '100px' }}></div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/problemset")
    let exercises = await res.json()
    // console.log(exercises)
    const easyExercises = exercises.filter(exercise => exercise.difficulty.toLowerCase()  === "easy");
    const mediumExercises = exercises.filter(exercise => exercise.difficulty.toLowerCase()  === "medium");
    const hardExercises = exercises.filter(exercise => exercise.difficulty.toLowerCase()  === "hard");

    return { props: { easyExercises, mediumExercises, hardExercises, exercises } }
}

export function ExerciseCard({ exercise }) {
 
    const [ previewQuestion ] = exercise.question.split(".");
    // console.log(previewQuestion)
    
    return (
    <div className="exercise-wrapper">
        <Card key={exercise._id} className="m-5 shadow-xl exercise-card" style={{ height: '200px', borderRadius: '14px' }}>
            <div className="">
            <Link href={`/exercises/${exercise._id}`} > 
                <CardHeader>
                        <CardTitle>{exercise.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex grid-cols-6 px-14 items-center space-x-4 sm:space-x-10">
                        {exercise.difficulty === "easy" ? 
                            <p className="flex col-spa-1 items-center text-balance">
                                <span className="bg-green-100 border border-green-500 px-3 py-2 rounded-full flex items-center font-bold text-green-600 text-sm"id="easy">
                                    <GiPlainCircle className="text-green-600 mr-1.5 h-2.5 w-2.5" />  
                                    {exercise.difficulty} 
                                </span>
                            </p> : null}

                        {exercise.difficulty === "medium" ? 
                            <p className="flex col-spa-1 items-center text-balance">
                                <span className="bg-yellow-100 border border-yellow-500 px-3 py-2 rounded-full flex items-center font-bold text-yellow-600 text-sm"id="easy">
                                    <GiPlainSquare className="text-yellow-600 mr-1.5 h-2.5 w-2.5" />  
                                    {exercise.difficulty} 
                                </span>
                            </p> : null}


                        {exercise.difficulty === "hard" ? 
                            <p className="flex col-spa-1 items-center text-balance">
                                <span className="bg-red-100 border border-red-500 px-3 py-2 rounded-full flex items-center font-bold text-red-600 text-sm"id="easy">
                                    <IoTriangleSharp className="text-red-600 mr-1.5 h-3 w-3" />  
                                    {exercise.difficulty} 
                                </span>
                            </p> : null}


                    <div className="col-span-4">
                        <p className="flex items-center text-left text-zinc-600 pr-2 sm:ml-6 sm:pr-0">{previewQuestion}</p>
                    </div>
                </CardContent>
                </Link>
            </div>

            <div>
                <SavedBtn exercise={exercise} />
            </div>
        </Card>
   
    </div>
    )
}
