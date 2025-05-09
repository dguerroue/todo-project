export default function Button({ type, children, className }: { type?: 'button'|'submit', children: React.ReactNode, className?: string }) {
  return (
    <button
      type={type || 'button'}
      className={className}
    >
      {children}
    </button>)
}