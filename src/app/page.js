import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const Item = ({ title, href, info }) => {
  return (
    <div className="group rounded-lg border border-transparent px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
      <Link href={href}>  <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        {title}{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      </Link>
      <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
        {info}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-center gap-6 max-w-5xl">
          <br></br>
          <span > koooe Този сайт има за цел да подпомогне лечението на пациенти с инсулинова резистентност и други подобни метаболитни нарушения.
            Сайтът е авторски koooe Този сайт има за цел да подпомогне лечението на пациенти с инсулинова резистентност и други подобни метаболитни нарушения.
            Сайтът е авторски koooe
          </span>
        </div>
        <br></br>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-center">
          <Item href="/ir" title="Теория" info="информация, статии, материали" />
          <Item href="/ir" title="Симптоми" info="въпроси и отговори" />
          <Item href="/faq" title="Питанки" info="въпроси и отговори" />
          <Item href="/ir" title="Дневник" info="хранителен дневник" />
          <Item href="/ir" title="Анализ" info="анализ на изследвания с изкуствен интелект" />
          <Item href="/ir" title="Лекарства" info="мнения и препоръки" />
          <Item href="/ir" title="Лекари" info="мнения и препоръки" />
          <Item href="/ir" title="Контакти" info="свържете се с нас" />
        </div>
      </main>
    </div>
  )
}
