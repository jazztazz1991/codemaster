import Login from '@/components/login';
import Layout from '@/components/layout/layout';
import Link from 'next/link'

export default function Home() {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}