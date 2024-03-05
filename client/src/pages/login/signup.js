import SignUp from '@/components/signup';
import Layout from '@/components/layout/layout';
import Link from 'next/link'

export default function Home() {
    return (
        <Layout>
            <SignUp />
        </Layout>
    );
}