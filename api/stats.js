export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const referer = req.headers.referer || ''
  const origin = req.headers.origin || ''

  const isFromSelf =
    (!origin && !referer) ||
    origin.includes('junjohnny.me') ||
    referer.includes('junjohnny.me')

  if (!isFromSelf) return res.status(403).json({ error: 'forbidden' })

  const today = new Date().toISOString().slice(0, 10)

  try {
    const r = await fetch(
      `https://junjohnny.goatcounter.com/api/v0/stats/hits?start=${today}&end=${today}`,
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
