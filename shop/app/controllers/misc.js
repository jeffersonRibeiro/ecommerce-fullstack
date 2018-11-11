const notFoundController = (req, res) => {
  res.status(404).render('404', {
    pageTitle: 'Not found'
  });
}

export {
  notFoundController
}