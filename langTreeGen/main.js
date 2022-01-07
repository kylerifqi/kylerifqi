// im lazy so i made a script for this

const items = require('./items.json');

let res = '<!-- Generated With Script "Language Tree Generator" By KyleRifqi -->\n'

function createTree(arr, off) {
	for (const x of arr) {
		res += `${' '.repeat(off)}- <a href='${x.url}'><img src='./media/${x.iconFile}' width='20'></a> **${x.name}** ${x.version}+ [${x.year}]\n`

		const c = x.children
		if (c) createTree(c, off+3)
	}
}

createTree(items, 0)

console.log(res);