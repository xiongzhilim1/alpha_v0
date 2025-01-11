import Link from 'next/link'
import { UserButton } from './UserButton'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          LearnSmart
        </Link>
        <UserButton />
      </nav>
    </header>
  )
}

