module.exports = (req, res) => {
  const now = Date.now()
  console.log({ now })
  res.status(200).send({
    date: now,
  })
}
