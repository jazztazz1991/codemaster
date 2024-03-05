import Link from 'next/link'
import Editor from '@/components/editor';
import Layout from '@/components/layout/layout';
import Hero from '@/components/hero';
import Snapshot from '@/components/snapshot';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Snapshot />
    </Layout>
  );
}
