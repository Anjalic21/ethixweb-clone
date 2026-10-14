'use client'

import GlobeViz from './GlobeViz'

// NetworkViz forwards to GlobeViz to preserve existing imports seamlessly
export default function NetworkViz() {
  return <GlobeViz />
}
