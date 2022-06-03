import write from "./write";
import geojson from "./geojson";
import prj from "./prj";
import { zipSync, strToU8 } from "fflate";
import { getWriteOptions } from "./utils";

export default async function (gj, options) {
  options = getWriteOptions(options);
  const arrBuff = [];
  const geoms = [
    geojson.point(gj),
    geojson.multipoint(gj),
    geojson.line(gj),
    geojson.multiline(gj),
    geojson.polygon(gj),
    geojson.pointZ(gj),
    geojson.multipointZ(gj),
    geojson.lineZ(gj),
    geojson.multilineZ(gj),
    geojson.polygonZ(gj),
  ];

  geoms.forEach(function (l) {
    if (l.geometries.length && l.geometries[0].length) {
      write(
        // field definitions
        l.properties,
        // geometry type
        l.type,
        // geometries
        l.geometries,
        function (err, files) {
          var fileName =
            options && options.types[l.type.toLowerCase()]
              ? options.types[l.type.toLowerCase()]
              : l.type;
          arrBuff.push(
            zipSync({
              [fileName + ".shp"]: new Uint8Array(files.shp.buffer),
              [fileName + ".shx"]: new Uint8Array(files.shx.buffer),
              [fileName + ".dbf"]: new Uint8Array(files.dbf.buffer),
              [fileName + ".prj"]: strToU8(options.wkt ?? prj),
            })
          );

          if (err) {
            console.warn("failed to create zip file: ", err);
          }
        }
      );
    }
  });

  // return zip file as blob
  return new Blob(arrBuff, { type: 'application/zip', filename: options.name });
}
