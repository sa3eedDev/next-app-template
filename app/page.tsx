import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Cards } from '@/components/Cards/Cards';

export default async function HomePage() {
  const info = await fetch("http://localhost:3000/api/allrecipes").then((res) => res.json())
  // console.log(info)
  return (
    <>
      <Cards recipes={info}/>
      <ColorSchemeToggle />

    </>
  );
}
