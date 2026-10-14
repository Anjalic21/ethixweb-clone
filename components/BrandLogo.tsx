import Image from 'next/image'

interface BrandLogoProps {
  className?: string
  priority?: boolean
  width?: number
  height?: number
}

/**
 * BrandLogo — Official Ethixweb geometric logotype with three-bar stylized glyphs.
 */
export default function BrandLogo({
  className = 'h-6 w-auto',
  priority = false,
  width = 433,
  height = 64,
}: BrandLogoProps) {
  return (
    <Image
      src="/images/ethixweb-logo.png"
      alt="Ethixweb"
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`}
    />
  )
}
