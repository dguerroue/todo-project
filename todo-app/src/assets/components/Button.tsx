export default function Button({ type, children }: { type?: 'button'|'submit', children: React.ReactNode }) {
  return (
    <button
      type={type || 'button'}
      className="px-4 py-2 text-sm cursor-pointer font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
    >
      {children}
    </button>)
}