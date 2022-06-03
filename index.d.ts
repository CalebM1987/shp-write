/// <reference types="@types/geojson" />
import { GeoJSON, Geometry } from 'geojson'

interface GeometryTypeNames {
  /** the name for the point features shapefile if applicable */
  point?: string;
  /** the name for the point features shapefile if applicable */
  pointz?: string;
  /** the name for the multipoint features shapefile if applicable */
  multipoint?: string;
  /** the name for the multipointz features shapefile if applicable */
  multipointz?: string;
  /** the name for the polygon features shapefile if applicable */
  polygon?: string;
  /** the name for the polygon features shapefile if applicable */
  polygonz?: string;
  /** the name for the line features shapefile if applicable (alias for polyline) */
  line?: string;
  /** the name for the linez features shapefile if applicable (alias for polylinez) */
  linez?: string;
  /** the name for the polylinez features shapefile if applicable */
  polyline?: string;
  /** the name for the polylinez features shapefile if applicable */
  polylinez?: string;
}

interface WriterOptions {
  /** the zipfile name for the contained shapefile */
  name?: string;
  /** the names of the shapefile for each geometry type */
  types?: GeometryTypeNames;
  /** optional subfolder within zipfile that will contain the shapefile(s) */
  folder?: string;
}

interface ShpFiles {
  shp: DataView;
  shx: DataView;
  dbf: DataView;
  prj: string;
}

type ShpWriterCallback = (err: Error, files: ShpFiles) => void;

type GeometryTypeID = 0 | 1 | 3 | 5 | 8 | 11 | 13 | 15 | 18 | 21 | 23 | 25 | 28 | 31;


export function download(gj: GeoJSON, options?: string | WriterOptions): Promise<boolean>;
export function zip<Blob>(gj: GeoJSON, options?: string | WriterOptions): Promise<Blob>;

export function write(properties: Record<string, any>, geometry_type: GeometryTypeID, geometries: Geometry[], callback: ShpWriterCallback): void;
export as namespace shpwrite;