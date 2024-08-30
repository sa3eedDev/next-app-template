import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Cards } from '@/components/Cards/Cards';

export default function HomePage() {
  const info = {
    id: 10,
    Pic:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
    title:"Norway Fjord Adventures",
    decs:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"
  }
  return (
    <>
      <Cards recipes={[info,info,info,info,info,info,info]}/>
      <ColorSchemeToggle />

    </>
  );
}
