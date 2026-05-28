export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const referer = req.headers.referer || ''
  const origin = req.headers.origin || ''

  const isFromSelf =
    (!origin && !referer) ||
    origin.includes('junjohnny.me') ||
    referer.includes('junjohnny.me')

  if (!isFromSelf) return res.status(403).json({ error: 'forbidden' })

  // Asia/Shanghai (UTC+8) date range: yesterday → today
  const SHANGHAI_OFFSET_MS = 8 * 60 * 60 * 1000
  const nowShanghai = new Date(Date.now() + SHANGHAI_OFFSET_MS)
  const today = nowShanghai.toISOString().slice(0, 10)
  const yesterday = new Date(nowShanghai.getTime() - 24 * 60 * 60 * 1000)
    .toISOString().slice(0, 10)

  try {
    const r = await fetch(
      `https://junjohnny.goatcounter.com/api/v0/stats/hits?start=${yesterday}&end=${today}`,
      {
        headers: { Authorization: `Bearer ${process.env.GC_TOKEN}` },
        signal: AbortSignal.timeout(3000)
      }
    )

    if (!r.ok) return res.status(502).json({ today: 0 })

    const data = await r.json()
    const total = (data.hits ?? []).reduce((sum, p) => sum + (p.count ?? 0), 0)

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60')
    res.setHeader('Access-Control-Allow-Origin', 'https://junjohnny.me')
    res.json({ today: total })
  } catch {
    res.status(504).json({ today: 0 })
  }
}
