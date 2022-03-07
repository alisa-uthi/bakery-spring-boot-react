interface ContactCardProps {
  Icon: any
  title: string
  detail: string
}

const ContactCard = ({ Icon, title, detail }: ContactCardProps) => {
  return (
    <div className="mb-4 rounded-lg bg-white p-6 text-center shadow-xl">
      <div className="mx-auto mb-3 w-16 text-yellow-800">{Icon}</div>
      <h1 className="mb-1 text-xl font-semibold text-yellow-800">{title}</h1>
      <p>{detail}</p>
    </div>
  )
}

export default ContactCard
