import { blank, enlarge, enlargeExtent } from "../src/extent";

describe("extent", function () {
  describe("#blank", function () {
    it("creates an ext", function () {
      var ext = blank();
      expect(ext.xmin).toBeTruthy();
      expect(ext.ymin).toBeTruthy();
      expect(ext.xmax).toBeTruthy();
      expect(ext.ymax).toBeTruthy();
      expect(ext.zmin).toBeTruthy();
      expect(ext.mmin).toBeTruthy();
      expect(ext.zmax).toBeTruthy();
      expect(ext.mmax).toBeTruthy();
    });
  });

  describe("#enlarge", function () {
    it("encloses a point", function () {
      var ext = blank();
      enlarge(ext, [0, 0, 1, 2]);
      expect(ext.xmin).toEqual(0);
      expect(ext.ymin).toEqual(0);
      expect(ext.xmax).toEqual(0);
      expect(ext.ymax).toEqual(0);
      expect(ext.zmin).toEqual(1);
      expect(ext.mmin).toEqual(2);
      expect(ext.zmax).toEqual(1);
      expect(ext.mmax).toEqual(2);
    });
  });

  describe("#enlargeExtent", function () {
    it("encloses a extent", function () {
      var ext = blank(),
        extB = blank();
      enlarge(ext, [0, 0, 0, 0]);
      enlarge(ext, [10, 10, 10, 10]);
      enlargeExtent(extB, ext);
      expect(ext.xmin).toEqual(0);
      expect(ext.ymin).toEqual(0);
      expect(ext.xmax).toEqual(10);
      expect(ext.ymax).toEqual(10);
      expect(ext.zmin).toEqual(0);
      expect(ext.mmin).toEqual(0);
      expect(ext.zmax).toEqual(10);
      expect(ext.mmax).toEqual(10);
    });
  });
});
