export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const referer = req.headers.referer || ''
  const origin = req.headers.origin || ''

  const isFromSelf =
    (!origin && !referer) ||
    origin.includes('junjohnny.me') ||
    referer.includes('junjohnny.me')

  if (!isFromSelf) return res.status(403).json({ error: 'forbidden' })

  // Asia/Shanghai today, mapped to absolute UTC range
  const shanghaiOffset = 8 * 60 * 60 * 1000
  const shanghaiNow = new Date(Date.now() + shanghaiOffset)
  const shanghaiToday = shanghaiNow.toISOString().slice(0, 10) // "YYYY-MM-DD"

  const startUTC = new Date(`${shanghaiToday}T00:00:00+08:00`).toISOString()
  const endUTC = new Date(`${shanghaiToday}T23:59:59+08:00`).toISOString()

  try {
    const r = await fetch(
      `https://junjohnny.goatcounter.com/api/v0/stats/hits?start=${encodeURIComponent(startUTC)}&end=${encodeURIComponent(endUTC)}`,
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
