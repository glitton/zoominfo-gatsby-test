export default function userIdHandler(req, res) {
  console.log({ params: req.params })
  res.json(req.params)
}
