export default function topLevel(req, res) {
  console.log({ params: req.params })
  res.json(req.params)
}
