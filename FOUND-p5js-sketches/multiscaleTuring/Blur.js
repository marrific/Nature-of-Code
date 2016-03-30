function blur(from, to, buffer, w, h, radius) {
  // build integral image
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var i = y * w + x;
      if (y == 0 && x == 0) {
        buffer[i] = from[i];
      } else if (y == 0) {
        buffer[i] = buffer[i - 1] + from[i];
      } else if (x == 0) {
        buffer[i] = buffer[i - w] + from[i];
      } else {
        buffer[i] = buffer[i - 1] + buffer[i - w] - buffer[i - w - 1] + from[i];
      }
    }
  }
  // do lookups
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var minx = max(0, x - radius);
      var maxx = min(x + radius, w - 1);
      var miny = max(0, y - radius);
      var maxy = min(y + radius, h - 1);
      var area = (maxx - minx) * (maxy - miny);
      
      var nw = miny * w + minx;
      var ne = miny * w + maxx;
      var sw = maxy * w + minx;
      var se = maxy * w + maxx;
      
      var i = y * w + x;
      to[i] = (buffer[se] - buffer[sw] - buffer[ne] + buffer[nw]) / area;
    }
  }
}