import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Cards } from '@/components/Cards/Cards';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const info = await fetch(process.env.APIURL+"/api/allrecipes").then((res) => res.json())
  // console.log(info)
  return (
    <>
      <Cards recipes={info}/>
      <ColorSchemeToggle />

    </>
  );
}
