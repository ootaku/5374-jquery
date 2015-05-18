/*
 * 5374 setting
 *
*/

var SVGLabel = false; // SVGイメージを使用するときは、true。用意できない場合はfalse。

var MaxDescription = 9; // ごみの最大種類、９を超えない場合は変更の必要はありません。

var MaxMonth = 3;

var WeekShift = false; // 休止期間なら週をずらすときは、true。金沢の仕様は、true。

var FileListUrl = 'http://5374.codeforoedo.org/data/';

var Files = {
	'area.csv': 'data/area.csv',
	'center.csv': 'data/center.csv',
	'description.csv': 'data/description.csv',
	'remarks.csv': 'data/remarks.csv',
	'target.csv': 'data/target.csv',
};
