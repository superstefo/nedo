import Link from 'next/link'
import BackButton from './BackButton';
export default function Header() {

  return (
    <header className="fixed left-0 top-0 flex w-full justify-center bord69er-b 69border-gray-300 bg-gradient-to-b from-zinc-200 pb69-1 pt69-1 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p69-2 lg:dark:bg-zinc-800/30">
      <nav>
        <p className="grid1 gap-4 mb69-4 md:grid1-cols-2 block mb69-2 tex69t-sm font-medium text-gray-900 dark:text-white fixed1 left-0 top-0 flex w-full justify-center border-b669 69border-gray-300 bg-gradient-to-b from-zinc-200 pb-1 p69t-1 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
          <BackButton />
          <Link href="/"> начало </Link>
          <Link href="#w3"> test </Link>
        </p>
      </nav>
    </header>
  );
}