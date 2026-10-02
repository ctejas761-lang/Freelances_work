import {
  MapPin,
  Satellite,
  Cloud,
  Wheat,
  Sprout,
  TreePine,
  Layers,
  BrainCircuit,
  SquareTerminal,
  GraduationCap,
  FileText,
  Map,
  BarChart3,
  Globe2,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Brand                                                               */
/* ------------------------------------------------------------------ */
export const BRAND = {
  name: "GeoSpatial Pro",
  tagline: "GIS • Remote Sensing • Agriculture • Forestry",
  email: "Tejaskchavan22@gmail.com",
  whatsapp: "+91 7028338510",
  hours: "Mon – Sat, 9:00 – 19:00 IST",
  response: "Replies within 24 hours",
};

/* ------------------------------------------------------------------ */
/* Hero stats                                                          */
/* ------------------------------------------------------------------ */
export const HERO_STATS = [
  { value: "15+", label: "Service Categories" },
  { value: "100%", label: "On-Time Commitment" },
  { value: "24h", label: "Response Time" },
  { value: "10+", label: "Tools & Platforms" },
];

/* ------------------------------------------------------------------ */
/* Tools marquee                                                       */
/* ------------------------------------------------------------------ */
export const TOOLS = [
  "QGIS",
  "ArcGIS",
  "Google Earth Engine",
  "ERDAS Imagine",
  "Python",
  "Google Colab",
  "GeoPandas",
  "Rasterio",
  "Scikit-learn",
  "XGBoost",
  "Matplotlib",
  "Leaflet",
  "GeoServer",
  "Sentinel-1 SAR",
  "Sentinel-2",
  "Landsat",
  "MODIS",
  "GRASS GIS",
];

/* ------------------------------------------------------------------ */
/* Services (15 categories)                                            */
/* ------------------------------------------------------------------ */
export type Service = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  items: string[];
  footer?: string;
};

export const SERVICES: Service[] = [
  {
    id: "gis-analysis",
    title: "GIS & Geospatial Analysis",
    tagline: "End-to-end mapping and spatial analysis",
    icon: MapPin,
    items: [
      "GIS mapping & spatial analysis",
      "Shapefile / KML / GeoJSON creation & editing",
      "Digitization of points, lines & polygons",
      "Land-use / Land-cover mapping",
      "Thematic mapping & cartographic design",
      "DEM, terrain, watershed & drainage analysis",
      "Slope, aspect & elevation analysis",
      "Buffer, proximity & overlay analysis",
      "Georeferencing & coordinate transformation",
      "Spatial database development",
      "High-quality publication maps",
    ],
    footer: "QGIS • ArcGIS • ERDAS Imagine • GRASS GIS",
  },
  {
    id: "remote-sensing",
    title: "Remote Sensing Analysis",
    tagline: "Satellite data processing & spectral analysis",
    icon: Satellite,
    items: [
      "Sentinel-1 SAR & Sentinel-2 optical processing",
      "Landsat, MODIS & DEM datasets",
      "Climate & environmental datasets",
      "NDVI, EVI, SAVI, GNDVI, NDWI, NDMI, NDBI",
      "LST, soil moisture & vegetation condition",
      "Crop, drought & soil salinity monitoring",
      "Land degradation & forest monitoring",
      "Change detection analysis",
    ],
    footer: "Sentinel • Landsat • MODIS • DEM",
  },
  {
    id: "google-earth-engine",
    title: "Google Earth Engine",
    tagline: "Complete GEE JavaScript & Python workflows",
    icon: Cloud,
    items: [
      "AOI → data acquisition → pre-processing",
      "Cloud masking & SAR preprocessing",
      "Composite & multi-temporal analysis",
      "Spectral index calculation",
      "Time-series & seasonal analysis",
      "Raster & machine-learning classification",
      "Change detection & regression modelling",
      "Export to Drive, GeoTIFF & CSV",
    ],
    footer: "GEE JS • GEE Python API",
  },
  {
    id: "agriculture",
    title: "Agricultural Remote Sensing",
    tagline: "Precision agriculture from space",
    icon: Wheat,
    items: [
      "Crop identification & classification",
      "Crop condition & growth monitoring",
      "Crop phenology tracking",
      "Crop acreage estimation",
      "Crop yield prediction",
      "Crop stress & irrigation monitoring",
      "Soil moisture & drought monitoring",
      "Crop suitability analysis",
    ],
    footer: "Wheat • Rice • Soybean • Cotton • Sugarcane • Grape • Maize • Potato",
  },
  {
    id: "phenology",
    title: "Crop Phenology & Time-Series",
    tagline: "Season-wise crop monitoring from satellite time series",
    icon: Sprout,
    items: [
      "Satellite data → cloud masking → indices",
      "Monthly composite generation",
      "Time-series vegetation analysis",
      "Phenological stage detection",
      "Vegetative growth, flowering & fruit development",
      "Maturity & harvest stage mapping",
      "Seasonal & historical crop comparison",
      "ML-based prediction maps",
    ],
  },
  {
    id: "forestry-wildlife",
    title: "Forestry & Wildlife GIS",
    tagline: "Forest & wildlife geospatial solutions",
    icon: TreePine,
    items: [
      "Forest-cover mapping & change detection",
      "Plantation & canopy monitoring",
      "Forest fragmentation & landscape analysis",
      "Habitat suitability modelling",
      "Wildlife habitat & corridor analysis",
      "Camera-trap spatial analysis",
      "Forest fire & burn-area mapping",
      "Protected-area & safari-route GIS",
      "Human–wildlife conflict mapping",
    ],
  },
  {
    id: "soil-environment",
    title: "Soil & Environmental Mapping",
    tagline: "Soil & environment insights from satellite data",
    icon: Layers,
    items: [
      "Soil salinity & EC mapping",
      "Soil pH & organic carbon (SOC)",
      "Soil moisture & health index",
      "Soil degradation & suitability",
      "Drought & heat-stress assessment",
      "LST & urban heat island mapping",
      "Land degradation assessment",
      "Environmental vulnerability analysis",
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning & AI",
    tagline: "Remote sensing + GIS + Python ML workflows",
    icon: BrainCircuit,
    items: [
      "Random Forest, SVM & XGBoost",
      "ANN, CNN & regression models",
      "Multi-output regression",
      "Crop classification & yield prediction",
      "Soil salinity & property prediction",
      "Land-use & vegetation classification",
      "R², RMSE, MAE, MAPE evaluation",
      "Accuracy, precision, recall & F1-score",
      "Confusion matrix analysis",
    ],
  },
  {
    id: "python-colab",
    title: "Python & Google Colab",
    tagline: "Automated geospatial & ML pipelines",
    icon: SquareTerminal,
    items: [
      "Python • Colab • GeoPandas • Rasterio",
      "NumPy • Pandas • Scikit-learn • XGBoost",
      "CSV, raster & shapefile processing",
      "GeoTIFF analysis & feature extraction",
      "ML modelling, evaluation & prediction",
      "Graph generation & spatial visualization",
      "Automated geospatial workflows",
    ],
  },
  {
    id: "academic-support",
    title: "Academic & Research Support",
    tagline: "From topic development to final submission",
    icon: GraduationCap,
    items: [
      "B.Sc. / B.Tech. / B.E. / M.Sc. / M.Tech. / Ph.D.",
      "Research topic & objectives formulation",
      "Methodology & workflow design",
      "GIS / RS analysis & GEE coding",
      "Python / Colab workflows & ML implementation",
      "Results, statistics, maps & figures",
      "Methodology flowcharts & paper figures",
      "Manuscript formatting & references",
      "Technical proofreading & editing",
    ],
    footer:
      "Technical assistance only — your research, interpretation & submission remain your responsibility.",
  },
  {
    id: "publication-support",
    title: "Research Paper & Publication",
    tagline: "Complete manuscript workflow support",
    icon: FileText,
    items: [
      "Research problem → literature review",
      "Objectives & data collection",
      "Methodology & analysis support",
      "Abstract, introduction & review",
      "Materials, methods, results & discussion",
      "Tables, figures, graphs & flowcharts",
      "References & journal formatting",
    ],
  },
  {
    id: "maps-visualization",
    title: "Professional Maps & Visualization",
    tagline: "Publication-quality cartographic output",
    icon: Map,
    items: [
      "Study-area & location maps",
      "LULC, NDVI & salinity maps",
      "Soil-property, crop & forest maps",
      "Change-detection & suitability maps",
      "Risk, hotspot & prediction maps",
    ],
    footer: "PNG • TIFF • GeoTIFF • PDF • SVG • Shapefile • KML • GeoJSON",
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Visualization",
    tagline: "Statistics & charts that tell the story",
    icon: BarChart3,
    items: [
      "Time-series graphs & scatter plots",
      "Correlation & seasonal comparison",
      "Model comparison & accuracy graphs",
      "Feature importance & variable contribution",
      "Spatial statistics",
      "Prediction vs observed analysis",
    ],
  },
  {
    id: "web-mapping",
    title: "Interactive GIS & Web Mapping",
    tagline: "Web GIS, dashboards & interactive maps",
    icon: Globe2,
    items: [
      "Interactive Leaflet maps",
      "Web GIS & GIS dashboards",
      "Spatial databases",
      "GeoServer-based systems",
      "Layer controls & query tools",
      "Attribute-based visualization",
    ],
  },
  {
    id: "full-package",
    title: "Complete Research Project Package",
    tagline: "From data to final result — fully handled",
    icon: PackageCheck,
    items: [
      "AOI preparation & data acquisition",
      "Pre-processing & index generation",
      "Raster processing & machine learning",
      "Prediction & accuracy assessment",
      "GIS visualization & research figures",
      "Final report / research paper",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Research workflow steps                                             */
/* ------------------------------------------------------------------ */
export const WORKFLOW_STEPS = [
  "AOI Preparation",
  "Satellite Data Acquisition",
  "Pre-processing",
  "Feature / Index Generation",
  "Raster Processing",
  "Machine Learning",
  "Prediction",
  "Accuracy Assessment",
  "GIS Visualization",
  "Research Figures & Tables",
  "Final Report / Paper",
];

/* ------------------------------------------------------------------ */
/* Software & platforms                                                */
/* ------------------------------------------------------------------ */
export const PLATFORMS = [
  { category: "GIS", tools: "QGIS, ArcGIS" },
  { category: "Remote Sensing", tools: "Google Earth Engine, ERDAS Imagine" },
  { category: "Programming", tools: "Python, JavaScript" },
  { category: "Cloud Processing", tools: "Google Colab, GEE" },
  { category: "ML / AI", tools: "Scikit-learn, XGBoost" },
  { category: "Spatial Python", tools: "GeoPandas, Rasterio" },
  { category: "Visualization", tools: "Matplotlib" },
  { category: "Web GIS", tools: "Leaflet, GeoServer" },
  { category: "Satellite Data", tools: "Sentinel-1, Sentinel-2, Landsat, MODIS, DEM" },
];

/* ------------------------------------------------------------------ */
/* Deliverables                                                        */
/* ------------------------------------------------------------------ */
export const DELIVERABLES = [
  "GEE scripts",
  "Python / Colab notebooks",
  "Processed satellite data",
  "GeoTIFF raster layers",
  "Shapefiles / KML / GeoJSON",
  "Classification maps",
  "Prediction maps",
  "Accuracy reports",
  "Statistical tables",
  "Graphs & charts",
  "Methodology flowcharts",
  "Research figures",
  "Technical reports",
  "Research-paper figures",
  "Interactive GIS maps",
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */
export const WHY_POINTS = [
  {
    title: "On-Time Delivery — Our Duty",
    description:
      "Deadlines are sacred to us. Every project is planned with milestones and buffer time, so your work is delivered when promised — every single time.",
  },
  {
    title: "End-to-End Expertise",
    description:
      "One team for the full pipeline: data acquisition, pre-processing, indices, ML, validation, mapping and final reporting. No hand-off gaps.",
  },
  {
    title: "Clear Communication",
    description:
      "Regular progress updates, quick clarifications and honest timelines. You always know exactly where your project stands.",
  },
  {
    title: "Publication-Quality Output",
    description:
      "Maps, figures and tables crafted to journal standards — ready for theses, reports and peer-reviewed publications.",
  },
];

/* ------------------------------------------------------------------ */
/* Service select options for the contact form                         */
/* ------------------------------------------------------------------ */
export const SERVICE_OPTIONS = [
  "GIS & Geospatial Analysis",
  "Remote Sensing Analysis",
  "Google Earth Engine",
  "Agricultural Remote Sensing",
  "Crop Phenology & Time-Series",
  "Forestry & Wildlife GIS",
  "Soil & Environmental Mapping",
  "Machine Learning & AI",
  "Python & Google Colab",
  "Academic & Research Support",
  "Research Paper & Publication",
  "Maps & Visualization",
  "Data Analysis & Visualization",
  "Interactive GIS & Web Mapping",
  "Complete Research Project Package",
  "Other / Not sure yet",
];
