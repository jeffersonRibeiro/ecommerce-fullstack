const notFoundController = (req, res) => {
  res.status(404).render('404');
}

export {
  notFoundController
}