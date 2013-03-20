
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', { title: 'Index' });
};

exports.example = function(req, res) {
	var name = req.params.name;
  res.render('examples/' + name, { title: name });
};