// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"dgrid/extensions/nls/pagination":{status:"${start} - ${end} of ${total} results",gotoFirst:"Go to first page",gotoNext:"Go to next page",gotoPrev:"Go to previous page",gotoLast:"Go to last page",gotoPage:"Go to page",jumpPage:"Jump to page",rowsPerPage:"Number of rows per page",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}},"esri/dijit/analysis/nls/DataStoreSelect":{relationalDS:"Relacijski",spatialDS:"Prostorno-vremenski",agsDataStore:"ArcGIS Data Store",bdfsTemplates:"Izlazni predlo\u0161ci dijeljenja datoteka velikih podataka",
_localized:{}},"esri/dijit/analysis/nls/BrowseLayerMixin":{defaultAnaysisLayerTitle:"Izaberi sloj za analizu Living Atlasa",customAnalysisLayerTitle:"Izaberite sloj za analizu",searchPlaceholderText:"Pretra\u017ei slojeve za analizu Living Atlasa",searchCustomPlaceholderText:"Pretra\u017ei slojeve za analizu",mainActionTitle:"Odaberi",customActionName:"Odaberi i dodaj na kartu",customeSectionName:"Slojevi za analizu Living Atlasa",Categories:"Kategorije",boundaries:"Granice",places:"Mjesta",boundariesAndPlaces:"Granice i mjesta",
hexbins:"Heksbin",transportation:"Prijevoz",point:"To\u010dkasti slojevi",line:"Linijski slojevi",polygon:"Poligonski slojevi",pointFilterName:"To\u010dka",lineFilterName:"Polilinija",polygonFilterName:"Poligon",multiPointFilterName:"Vi\u0161e to\u010daka",geometryFilterName:"Geometrija",featureLayerName:"Sloj geoobjekta",tableLayerName:"Tablica",itemTypeFilterName:"Vrsta stavke",instantFilterName:"Instanca",intervalFilterName:"Interval",timeFilterName:"Vrijeme",edit:"Uredi",boundaryLayers:"Esri grani\u010dni slojevi",
customAnalysisGroupName:"Grupa za analizu organizacije",_localized:{}},"widgets/Visibility/nls/strings":{_widgetLabel:"Vidljivost",observerLocation:"Lokacija promatra\u010da",formatIconTooltip:"Format unosa",addPointToolTip:"Dodaj lokaciju promatra\u010da",fieldOfView:"Vidno polje",useMilsText:"Koristite mjernu jedinicu mil za kutove",observerHeight:"Visina promatra\u010da",minObsDistance:"Min. udaljenost koja se mo\u017ee promatrati",maxObsDistance:"Maks. udaljenost koja se mo\u017ee promatrati",
taskURLError:"Datoteka za konfiguraciju widgeta sadr\u017ei URL koji nije dostupan. Provjerite kod svog administratora sustava",taskURLInvalid:"Zadatak geoprocesiranja konfiguriran ovim widgetom nije valjan. Provjerite kod svog administratora sustava",viewshedError:"Do\u0161lo je do pogre\u0161ke pri stvaranju vidljivosti. Osigurajte da je va\u0161e mjesto promatra\u010da unutar obuhvata visine terena.\x3c/p\x3e",validationError:"\x3cp\x3eU obrascu za stvaranje vidljivosti nedostaju parametri ili nisu valjani, osigurajte sljede\u0107e:\x3c/p\x3e\x3cul\x3e\x3cli\x3ePostavljena je lokacija promatra\u010da.\x3c/li\x3e\x3cli\x3eVidno polje promatra\u010da nije 0.\x3c/li\x3e\x3cli\x3eVisina promatra\u010da sadr\u017ei valjanu vrijednost.\x3c/li\x3e\x3cli\x3eMin. i maks. udaljenosti koje se mogu promatrati sadr\u017ee valjane vrijednosti.\x3c/li\x3e\x3c/ul\x3e",
comfirmInputNotation:"Notacija potvrde unosa",notationsMatch:"bilje\u0161ke se podudaraju s va\u0161im unosom, potvrdite \u0161to biste htjeli upotrijebiti:",createBtn:"Stvori",clearBtn:"O\u010disti",setCoordFormat:"Postavi niz formata koordinata",prefixNumbers:"Dodajte prefiks \u201e+/-\u201d pozitivnim i negativnim brojevima",parseCoordinatesError:"Nije mogu\u0107e parsirati koordinate. Provjerite unos.",cancelBtn:"Odustani",applyBtn:"Primijeni",invalidMessage:"Unesite broj\u010danu vrijednost.",
observerRangeMessage:"Neva\u017ee\u0107a visina promatra\u010da",minimumRangeMessage:"Neva\u017ee\u0107i minimalni raspon koji se mo\u017ee promatrati",maximumRangeMessage:"Maksimalni raspon koji se mo\u017ee promatrati mora biti ve\u0107i od minimalnog raspona koji se mo\u017ee promatrati i ne smije biti ve\u0107i od ${limit} ${units}.",portalURLError:"URL va\u0161e organizacije za ArcGIS Online ili Portal for ArcGIS nije konfiguriran. Provjerite kod svog administratora sustava",privilegeError:'Va\u0161a korisni\u010dka uloga ne mo\u017ee izvr\u0161iti analizu. Za izvr\u0161avanje analize administrator va\u0161e organizacije treba vam dodijeliti odre\u0111ene \x3ca href\x3d"http://doc.arcgis.com/en/arcgis-online/reference/roles.htm" target\x3d"_blank"\x3eprivilegije\x3c/a\x3e.',
noServiceError:"Usluga analize visine terena nije dostupna. Provjerite svoje konfiguracije organizacije za ArcGIS Online ili Portal for ArcGIS.",pointToolTooltip:"Kliknite da biste dodali lokaciju promatra\u010da",degreesLabel:"stupnjevi",milsLabel:"mil",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Decimalni stupnjevi - geografska \u0161irina/du\u017eina",DDLongLatNotation:"Decimalni stupnjevi - geografska du\u017eina/\u0161irina",
DDMLatLongNotation:"Stupnjevi decimalne minute - geografska \u0161irina/du\u017eina",DDMLongLatNotation:"Stupnjevi decimalne minute - geografska du\u017eina/\u0161irina",DMSLatLongNotation:"Stupnjevi minute sekunde - geografska \u0161irina/du\u017eina",DMSLongLatNotation:"Stupnjevi minute sekunde - geografska du\u017eina/\u0161irina",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - slovo retka",UTMHemNotation:"UTM - hemisfera (N/S)",mainPageTitle:"Radijalno vidno polje",
resultsTitle:"Rezultati",publishBtnLabel:"Objavi",layerName:"Naziv objavljenog sloja",invalidLayerName:"Naziv sloja mora sadr\u017eavati samo alfanumeri\u010dke znakove i podvlake",missingLayerName:"Unesite naziv sloja",back:"Natrag",publishingFailedLayerExists:"Objavljivanje nije uspjelo: ve\u0107 imate uslugu geoobjekata s nazivom {0}. Odaberite drugi naziv.",checkService:"Provjeri uslugu: {0}",createService:"Stvori uslugu: {0}",unableToCreate:"Nije mogu\u0107e stvoriti: {0}",addToDefinition:"Dodaj definiciji: {0}",
successfullyPublished:"Uspje\u0161no objavljen web-sloj{0}Upravljaj web-slojem",userRole:"Nije mogu\u0107e stvoriti uslugu jer korisnik nema dopu\u0161tenja",publishToNewLayer:"Objava rezultata na novom sloju geoobjekta",missingLayerNameMessage:"Morate unijeti va\u017ee\u0107i naziv sloja prije objavljivanja",layerNameExists:"Naziv sloja ve\u0107 postoji. Izaberite drugi naziv sloja.",regionTypeLabel:"Vrsta regije",centerPointLabel:"Sredi\u0161nja to\u010dka",observationHeightLabel:"Visina promatranja",
heightUnitLabel:"Jedinica visine",minObservationDistanceLabel:"Udaljenost min. promatranja",maxObservationDistance:"Udaljenost maks. promatranja",distanceUnitLabel:"Jedinica udaljenosti",fovstartAngleLabel:"Po\u010detni kut FOV-a",fovEndAngleLabel:"Krajnji kut FOV-a",andleUnitsLabel:"Jedinice kuta",_localized:{}}});