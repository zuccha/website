// Modules
const fs = require('fs-extra');
const hb = require('handlebars');

// Handlebars helper
hb.registerHelper('lt', function (v1, v2, options) {
	return v1 < v2;
});

// Languages
const langs = [ 'en', 'it', 'fr' ];


// Directories
const dir_dev   = './dev';
const dir_prod  = './public_html';
const dir_css   = 'css';
const dir_docs  = 'docs';
const dir_fonts = 'fonts';
const dir_html  = 'html';
const dir_imgs  = 'imgs';
const dir_js    = 'js';
const dir_index = 'index.html';
const dirs      = [ dir_css, dir_docs, dir_fonts, dir_imgs, dir_js, dir_index ];


// Files
const home = `${dir_dev}/${dir_html}/home.html`;


// Data
const global   = require(`${dir_dev}/data/global.json`);
const about    = require(`${dir_dev}/data/about.json`);
const projects = require(`${dir_dev}/data/projects.json`);
const studies  = require(`${dir_dev}/data/studies.json`);
const work     = require(`${dir_dev}/data/work.json`);


// Setup
function make_dirs() {
	if (fs.existsSync(dir_prod)) {
		fs.removeSync(dir_prod);
	}
	fs.mkdirSync(dir_prod);
	fs.mkdirSync(`${dir_prod}/${dir_html}`);
	for (let dir of dirs) {
		fs.copySync(`${dir_dev}/${dir}`, `${dir_prod}/${dir}`);
	}
}

function make_html() {
	for (let lang of langs) {
		const data = global[lang];
		for (let i = 0; i < projects[lang].articles.length; ++i) {
			const article = projects[lang].articles[i];
			if (article.path) {
				const path = `${dir_dev}/${dir_html}/${lang}/${article.path}`;
				article.body = fs.readFileSync(path);
			} else {
				article.body = "";
			}
		}
		const file     = fs.readFileSync(home, 'utf8');
		const template = hb.compile(file, { noEscape : true });
		const context  = {
			'en'     : lang === 'en',
			'it'     : lang === 'it',
			'fr'     : lang === 'fr',
			lang     : lang,
			menu     : data.menu,
			about    : about   [lang],
			projects : projects[lang],
			studies  : studies [lang],
			work     : work    [lang]
		};
		const html = template(context);
		fs.writeFileSync(`${dir_prod}/${lang}.html`, html);
	}
}


// Code
function main() {
	make_dirs();
	make_html();
}


// Main
main();
