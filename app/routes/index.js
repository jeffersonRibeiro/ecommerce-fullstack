import {requestData} from '../controllers/home';

console.log(requestData);
const home = (req, res) => {
  res.render('home', requestData());
}

export default {
  home,
}