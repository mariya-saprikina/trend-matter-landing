// MDXRenderer.tsx (Server Component)
import {MDXRemote} from 'next-mdx-remote/rsc';
import styles from '@/styles/MDXContent.module.css';
import {Source_Sans_3} from 'next/font/google';
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

export default function MDXRenderer({source}: {source: string}) {
  return (
    <div className={`${styles['mdx-content']} ${sourceSans3.className}`}>
      <MDXRemote
        source={source}
        components={
          {
            // Add any custom components here
          }
        }
      />
    </div>
  );
}
