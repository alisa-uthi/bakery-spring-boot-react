import Link from 'next/link'

interface ButtonProps {
  to: string
  title: string
}

const Button = ({ to, title }: ButtonProps) => {
  return (
    <Link href={to}>
      <button className="border border-transparent bg-yellow-800 py-2 px-5 font-semibold text-white transition delay-150 ease-in-out hover:border hover:border-yellow-800 hover:bg-yellow-700">
        {title}
      </button>
    </Link>
  )
}

export default Button
