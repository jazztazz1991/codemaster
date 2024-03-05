import Layout from "@/components/layout/layout"
import Editor from '@/components/editor';

export default function Exercise({ exercise }) {

    return (
        <Layout>
            <div className='flex flex-wrap'>
                <div className='basis-2/3'>
                    <Editor
                        text={exercise.startCode}
                        testName={exercise.test}
                    />
                </div>

                <div className='basis-1/3 border-l border-gray-300 p-3'>
                    <h1 className='font-bold text-lg mb-3q'>Instructions</h1>
                    <p className='text-wrap'>
                        {exercise.question}
                    </p>
                </div>
            </div>

        </Layout>
    )
}

export async function getStaticPaths() {
    try{
        const res = await fetch(`http://localhost:3001/problemset/`)
        const exercises = await res.json()
        const paths = exercises.map(exercise => ({
            params: { id: exercise._id },
        }))
        return { paths, fallback: false }
    } catch(error){
        console.log("static path error:", error)
    }

}

export async function getStaticProps({ params }) {
    try{
        const res = await fetch(`http://localhost:3001/problemset/${params.id}`)
        const exercise = await res.json()
    
        return { props: { exercise } }  
    } catch(error){
        console.log(error)
    }

}