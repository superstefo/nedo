import Link from 'next/link'
export default function Header() {
  return (
    <header>
      <nav>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-1 pt-1 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
          <Link href="/"> Go tonbpage 2    ;</Link>
          <Link href="/ir"> Go to&nbsp;ir   </Link>
          <div><code className="font-mono font-bold">Владиславче </code> </div>
        </p>
      </nav>
    </header>
  );
}