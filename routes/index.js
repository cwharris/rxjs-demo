
/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', { title: 'Index' });
};

exports.example = function(req, res) {
	var id = req.params.id;
  res.render('example-' + id, { title: 'Example ' + id });
};