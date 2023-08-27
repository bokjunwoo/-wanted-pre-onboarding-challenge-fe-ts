import SearchForm from '@/components/search/SearchForm';
import SearchRegionButton from '@/components/search/SearchRegionButton';
import { regionNames } from '@/data/region';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import SearchBestList from '@/components/search/SearchBestList';
import SearchPosts from '@/components/search/SearchPosts';

export default function Search() {
  const searchParams = useSearchParams();

  const searchTitle = searchParams.get('title') as string;
  const region = searchParams.get('region') as string;

  return (
    <>
      <Head>
        <title>
          {region && searchTitle
            ? `${regionNames[region]} - ${searchTitle}`
            : '트립로그 - 검색하기'}
        </title>
      </Head>

      <div className="mt-5">
        <h1 className="fs-2 mt-5">
          지역 {region ? `| ${regionNames[region]}` : '| 전체'}
        </h1>
      </div>

      <SearchRegionButton />

      <SearchForm />

      <SearchPosts />

      <SearchBestList />
    </>
  );
}
