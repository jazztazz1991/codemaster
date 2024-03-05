import Layout from "@/components/layout/layout"
import Link from "next/link"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Exercises({ exercises }) {
    return (
        <Layout>
            {exercises.map(exercise => (
                <Card key={exercise._id}>
                    <CardHeader>
                        <Link href={`/exercises/${exercise._id}`}><CardTitle>{exercise.title}</CardTitle></Link>
                        <CardDescription>{exercise.question}</CardDescription>
                        <CardDescription>{exercise.difficulty}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/problemset")
    const exercises = await res.json()
    return { props: { exercises } }
}
