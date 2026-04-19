import { cn } from '@/lib/utils'

// ── Badge (pill with mauve border) ────────────────────────────
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-[11px] tracking-[1.5px] uppercase',
        'px-4 py-1.5 rounded-full border text-rose-light',
        className
      )}
      style={{
        background: 'rgba(75,0,130,0.12)',
        borderColor: 'rgba(75,0,130,0.35)',
      }}
    >
      {children}
    </span>
  )
}

// ── Tag (smaller pill for tech stack) ─────────────────────────
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center text-[10px] tracking-[1px] uppercase
                 px-2.5 py-1 rounded-full text-rose-light"
      style={{
        background: 'rgba(192,128,129,0.1)',
        border: '0.5px solid rgba(192,128,129,0.25)',
      }}
    >
      {children}
    </span>
  )
}

// ── Section Header ────────────────────────────────────────────
export function SectionHeader({
  label,
  title,
  italic,
}: {
  label: string
  title: string
  italic?: string
}) {
  return (
    <div className="mb-12">
      <p className="text-[11px] tracking-[3px] uppercase text-rose mb-3">{label}</p>
      <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-normal text-cream leading-tight">
        {title}{' '}
        {italic && <em className="italic text-rose-light">{italic}</em>}
      </h2>
    </div>
  )
}

// ── Button Primary ────────────────────────────────────────────
export function ButtonPrimary({
  href,
  children,
  download,
  target,
}: {
  href: string
  children: React.ReactNode
  download?: boolean
  target?: string
}) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 text-[12px] tracking-[2px] uppercase
                 font-semibold px-8 py-3.5 rounded-full bg-rose text-black
                 hover:bg-rose-light transition-all duration-200
                 hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}

// ── Button Outline ────────────────────────────────────────────
export function ButtonOutline({
  href,
  children,
  download,
  target,
}: {
  href: string
  children: React.ReactNode
  download?: boolean
  target?: string
}) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 text-[12px] tracking-[2px] uppercase
                 font-medium px-8 py-3.5 rounded-full text-rose
                 hover:bg-[rgba(192,128,129,0.08)] transition-all duration-200"
      style={{ border: '0.5px solid #C08081' }}
    >
      {children}
    </a>
  )
}

// ── Card ──────────────────────────────────────────────────────
export function Card({
  children,
  className,
  style,
  hover = true,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  hover?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        hover && 'hover:-translate-y-1',
        className
      )}
      style={{
        background: '#141414',
        border: '0.5px solid rgba(192,128,129,0.18)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
