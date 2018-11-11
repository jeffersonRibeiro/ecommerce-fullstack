import {requestData} from '../controllers/home';

const home = (req, res) => {
  res.render('home', requestData());
}

export default {
  home,
}