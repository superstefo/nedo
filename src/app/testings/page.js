
// import '../../styles/globals.css'

import Link from 'next/link'

export default function Page() {
  return (
    <div >
      <div>BREAKING</div>
      <div>
        <Link href="/second">navigate to second</Link>
      </div>
    </div>
  );
}