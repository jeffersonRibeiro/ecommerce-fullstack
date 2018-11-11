export default (req, res) => {
  console.log('dasd');
  res.render('home', {
    hello: ':P'
  });
} 