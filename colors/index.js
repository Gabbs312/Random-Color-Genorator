class Color {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const allColors = [
  new Color('brightred', '#E74C3C'),
  new Color('soothingpurple', '#9B59B6'),
  new Color('skyblue', '#5DADE2'),
  new Color('leafygreen', '#48C9B0'),
  new Color('sunkissedyellow', '#F4D03F'),
  new Color('groovygray', '#D7DBDD'),
  new Color('icterinegreen', '#F2F230'),
  new Color('aquamarine', '#61F2C2'),
  new Color('tealgreen', '#C7FFDA'),
  new Color('lavender', '#E8E1EF'),
  new Color('teagreen', '#C2D8B9'),
];

exports.getRandomColor = () => {
  return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.allColors = allColors;

exports.getFav = () => {
  return allColors[10];
}

