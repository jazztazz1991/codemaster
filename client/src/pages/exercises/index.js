import Layout from "@/components/layout/layout"
import Link from "next/link"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"


export default function Exercises({ easyExercises, mediumExercises, hardExercises }) {
    return (
        <Layout>
            <div id="exercisesPage">
                <h2 className="mt-6 text-lg leading-8 text-gray-900">Easy Exercises</h2>
                <div className="grid grid-cols-2 items center">
                    {easyExercises.map(exercise => (
                        <div key={exercise._id}>
                            <ExerciseCard exercise={exercise} />
                        </div>
                    ))}
                </div>
                <h2 className="mt-6 text-lg leading-8 text-gray-900">Medium Exercises</h2>
                <div className="grid grid-cols-2 items center">
                    {mediumExercises.map(exercise => (
                        <div key={exercise._id}>
                            <ExerciseCard exercise={exercise} />
                        </div>
                    ))}
                </div>
                <h2 className="mt-6 text-lg leading-8 text-gray-900">Hard Exercises</h2>
                <div className="grid grid-cols-2 items center">
                    {hardExercises.map(exercise => (
                        <div key={exercise._id}>
                            <ExerciseCard exercise={exercise} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/problemset")
    let exercises = await res.json()

    const easyExercises = exercises.filter(exercise => exercise.difficulty === "easy");
    const mediumExercises = exercises.filter(exercise => exercise.difficulty === "medium");
    const hardExercises = exercises.filter(exercise => exercise.difficulty === "hard");

    return { props: { easyExercises, mediumExercises, hardExercises } }
}

export function ExerciseCard({ exercise }) {
    console.log(exercise)
    return (
        <Card key={exercise._id} className="m-5">
            <div className="">
                <CardHeader>
                    <CardTitle>{exercise.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex grid grid-cols-6 items-center">
                    <div>
                        {exercise.difficulty === "easy" ? <p className="flex items-center">Difficulty: <span id="easy">{exercise.difficulty}</span></p> : null}
                        {exercise.difficulty === "medium" ? <p className="flex items-center">Difficulty: <span id="medium">{exercise.difficulty}</span></p> : null}
                        {exercise.difficulty === "hard" ? <p className="flex items-center">Difficulty: <span id="hard">{exercise.difficulty}</span></p> : null}
                    </div>
                    <div className="col-span-4">
                        <p className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">{exercise.question}</p>
                    </div>
                    <div>
                        <Link href={`/exercises/${exercise._id}`} className="text-gray-300 bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-sm font-medium flex items-center justify-center">Begin Exercise</Link>
                    </div>
                </CardContent>
            </div>

        </Card>
    )
}
