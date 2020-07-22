// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Postavi tekst konfiguracije:",generalSettings:{tabTitle:"Op\u0161te postavke",measurementUnitLabel:"Jedinica za tro\u0161ak",currencyLabel:"Simbol za tro\u0161ak",roundCostLabel:"Zaokru\u017ei tro\u0161ak",projectOutputSettings:"Postavke izlaznih rezultata projekta",typeOfProjectAreaLabel:"Tip oblasti projekta",bufferDistanceLabel:"Rastojanje zone bliskosti",csvReportExportLabel:"Omogu\u0107i korisnicima da izvezu izve\u0161taje iz projekta",
editReportSettingsBtnTooltip:"Izmeni postavke izve\u0161taja",roundCostValues:{twoDecimalPoint:"Dve decimale",nearestWholeNumber:"Najbli\u017ei ceo broj",nearestTen:"Najbli\u017ea desetica",nearestHundred:"Najbli\u017ea stotina",nearestThousand:"Najbli\u017ea hiljada",nearestTenThousands:"Najbli\u017ea desetina hiljada"},reportSettings:{reportSettingsPopupTitle:"Postavke izve\u0161taja",reportNameLabel:"Naziv izve\u0161taja (opciono):",checkboxLabel:"Prika\u017ei",layerTitle:"Naslov",columnLabel:"Oznaka",
duplicateMsg:"Duplirana oznaka"},projectAreaType:{outline:"Kontura",buffer:"Zona bliskosti"},errorMessages:{currency:"Neva\u017ee\u0107a jedinica valute",bufferDistance:"Neva\u017ee\u0107e rastojanje zone bliskosti",outOfRangebufferDistance:"Vrednost treba da bude ve\u0107a od 0 i manja ili jednaka sa 100"}},projectSettings:{tabTitle:"Postavke projekta",costingGeometrySectionTitle:"Defini\u0161i geografiju tro\u0161kova (opciono)",costingGeometrySectionNote:"Napomena: konfigurisanje ovog sloja \u0107e omogu\u0107iti korisniku da postavi jedna\u010dine tro\u0161kova \u0161ablona geoobjekta na osnovu geografije.",
projectTableSectionTitle:"Mogu\u0107nost \u010cuvanja/U\u010ditavanja postavki projekta (opciono)",projectTableSectionNote:"Napomena: konfigurisanje svih tabela i slojeva \u0107e omogu\u0107iti korisnicima da sa\u010duvaju/u\u010ditaju projekte za kasnije kori\u0161\u0107enje.",costingGeometryLayerLabel:"Sloj tro\u0161kova geometrije",fieldLabelGeography:"Polje za ozna\u010davanje geografije",projectAssetsTableLabel:"Tabela resursa projekta",projectMultiplierTableLabel:"Tabela dodatnih tro\u0161kova multiplikatora projekta",
projectLayerLabel:"Sloj projekta",configureFieldsLabel:"Konfiguri\u0161i polja",fieldDescriptionHeaderTitle:"Opis polja",layerFieldsHeaderTitle:"Polje sloja",selectLabel:"Izaberite",errorMessages:{duplicateLayerSelection:"${layerName} je ve\u0107 izabran",invalidConfiguration:"Izaberite ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eSloj(evi) poligona sa slede\u0107im uslovima \u0107e biti prikazan(i): \x3cbr/\x3e \x3cli\x3e\tSloj mora da ima mogu\u0107nost Upita\u009d\x3c/li\x3e\x3cli\x3e\tSloj mora da ima GlobalID polje\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eString i numeri\u010dko polje izabranog \u00e2\u20ac\u0153Sloja tro\u0161kova geometrije\u00e2\u20ac\u009d \u0107e da bude prikazano u padaju\u0107em meniju \u00e2\u20ac\u0153Polja za ozna\u010davanje geografije\u00e2\u20ac\u009d.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eTabla(-e) sa slede\u0107im uslovima \u0107e biti prikazane: \x3cbr/\x3e \x3cli\x3eTabla mora da ima mogu\u0107nost ure\u0111ivanja, ta\u010dnije \u00e2\u20ac\u0153Kreiraj\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Obri\u0161i\u00e2\u20ac\u009d i \u00e2\u20ac\u0153A\u017euriraj\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabla mora da ima \u0161est polja sa ta\u010dnim nazivima i tipom podataka\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tGUID resursa (GUID tip polja)\x3c/li\x3e\x3cli\x3e\tJedna\u010dina tro\u0161kova (string tip polja)\x3c/li\x3e\x3cli\x3e\tScenario (string tip polja)\x3c/li\x3e\x3cli\x3e\tNaziv \u0161ablona (string tip polja)\x3c/li\x3e\x3cli\x3e    GUID geografije (GUID tip polja)\x3c/li\x3e\x3cli\x3e\tGUID projekta (GUID tip polja)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabla(-e) sa slede\u0107im uslovima \u0107e biti prikazane: \x3cbr/\x3e \x3cli\x3eTabla mora da ima mogu\u0107nost ure\u0111ivanja, ta\u010dnije \u00e2\u20ac\u0153Kreiraj\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Obri\u0161i\u00e2\u20ac\u009d i \u00e2\u20ac\u0153a\u017euriraj\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabla mora da ima pet polja sa ta\u010dnim nazivima i tipom podataka\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tOpis (string tip polja)\x3c/li\x3e\x3cli\x3e\tTip (string tip polja)\x3c/li\x3e\x3cli\x3e\tVrednost (plutaju\u0107i/dupli tip polja)\x3c/li\x3e\x3cli\x3e\tIndeks tro\u0161kova (tip polja sa celim brojem)\x3c/li\x3e\x3cli\x3e   \tGUID projekta (GUID tip polja))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eSloj(evi) poligona sa slede\u0107im uslovima \u0107e biti prikazan(i): \x3cbr/\x3e \x3cli\x3eSloj mora da ima mogu\u0107nost ure\u0111ivanja, naime opcije \u00e2\u20ac\u0153Kreiraj\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Obri\u0161i\u00e2\u20ac\u009d i \u00e2\u20ac\u0153A\u017euriraj\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eSloj mora da ima pet polja sa ta\u010dnim nazivom i tipom podataka:\x3c/li\x3e\x3cul\x3e\x3cli\x3eNaziv projekta (string tip polja)\x3c/li\x3e\x3cli\x3eOpis (string tip polja)\x3c/li\x3e\x3cli\x3eUkupan tro\u0161ak resursa (plutaju\u0107i/dupli tip polja)\x3c/li\x3e\x3cli\x3eBruto tro\u0161ak projekta (plutaju\u0107i/dupli tip polja)\x3c/li\x3e\x3cli\x3eGlobalni ID (globalni ID tip polja)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"Te\u017ei\u0161te ta\u010dkastog sloja",selectRelatedPointLayerDefaultOption:"Selektujte",pointLayerHintText:"\x3cp\x3ePrikaza\u0107e se ta\u010dkasti sloj(evi) sa slede\u0107im uslovima: \x3cbr/\x3e \x3cli\x3e\tSloj mora da ima polje 'Projectid' (GUID tip)\x3c/li\x3e\x3cli\x3e\tSloj mora da ima mogu\u0107nost ure\u0111ivanja, ta\u010dnije 'Kreiraj', 'Izbri\u0161i' i 'A\u017euriraj'\x3c/li\x3e\x3c/p\x3e"},layerSettings:{tabTitle:"Postavke sloja",layerNameHeaderTitle:"Ime sloja",
layerNameHeaderTooltip:"Lista slojeva u mapi",EditableLayerHeaderTitle:"Mo\u017ee da se izmeni",EditableLayerHeaderTooltip:"Uklju\u010di sloj i njegove \u0161ablone u vid\u017eet tro\u0161kova",SelectableLayerHeaderTitle:"Mo\u017ee da se selektuje",SelectableLayerHeaderTooltip:"Geometrija iz geoobjekta mo\u017ee da se koristi za generisanje stavke novog tro\u0161ka",fieldPickerHeaderTitle:"ID projekta (opciono)",fieldPickerHeaderTooltip:"Opciono polje (string tipa) za skladi\u0161tenje ID projekta u",
selectLabel:"Izaberite",noAssetLayersAvailable:"Nema prona\u0111enog resursa sloja u izabranoj veb mapi",disableEditableCheckboxTooltip:"Ovaj sloj nema mogu\u0107nost ure\u0111ivanja",missingCapabilitiesMsg:"Ovom sloju nedostaju slede\u0107e mogu\u0107nosti:",missingGlobalIdMsg:"Ovaj sloj nema polje GlobalId",create:"Kreiraj",update:"A\u017euriraj",deleteColumnLabel:"Izbri\u0161i",attributeSettingHeaderTitle:"Postavke atributa",addFieldLabelTitle:"Dodaj atribute",layerAttributesHeaderTitle:"Atributi sloja",
projectLayerAttributesHeaderTitle:"Atributi sloja projekta",attributeSettingsPopupTitle:"Postavke atributa sloja"},costingInfo:{tabTitle:"Informacije o tro\u0161kovima",proposedMainsLabel:"Predlo\u017eene mre\u017ee",addCostingTemplateLabel:"Dodaj \u0161ablon tro\u0161kova",manageScenariosTitle:"Upravljaj scenarijima",featureTemplateTitle:"\u0160ablon geoobjekta",costEquationTitle:"Jedna\u010dina tro\u0161kova",geographyTitle:"Geografija",scenarioTitle:"Scenario",actionTitle:"Radnje",scenarioNameLabel:"Naziv scenarija",
addBtnLabel:"Dodaj",srNoLabel:"Ne.",deleteLabel:"Izbri\u0161i",duplicateScenarioName:"Duplirano ime scenarija",hintText:"\x3cdiv\x3eSavet: koristite slede\u0107e klju\u010dne re\u010di\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: koristi ukupan broj istog tipa resursa u geografiji\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Koristi du\u017einu za resurs linije i oblast za resurs poligona\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Koristi ukupnu du\u017einu za resurs linije i ukupnu oblast za resurs poligona za isti tip u geografiji\x3c/li\x3e\x3c/ul\x3eMo\u017eete da koristite funkcije kao \u0161to su:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eIzmenite jedna\u010dinu tro\u0161kova prema zahtevima va\u0161eg projekta.",
noneValue:"Ni\u0161ta",requiredCostEquation:"Neva\u017ee\u0107a jedna\u010dina tro\u0161ka za ${layerName} : ${templateName}",duplicateTemplateMessage:"Postoji duplirani unos \u0161ablona za ${layerName} : ${templateName}",defaultEquationRequired:"Podrazumevana jedna\u010dina je obavezna za ${layerName} : ${templateName}",validCostEquationMessage:"Unesite va\u017ee\u0107u jedna\u010dinu tro\u0161ka",costEquationHelpText:"Izmenite jedna\u010dinu tro\u0161ka prema zahtevima va\u0161eg projekta",scenarioHelpText:"Izaberite scenario prema zahtevima va\u0161eg projekta",
copyRowTitle:"Kopiraj red",noTemplateAvailable:"Dodajte bar jedan \u0161ablon za ${layerName}",manageScenarioLabel:"Upravljaj scenarijem",noLayerMessage:"Unesite bar jedan sloj u ${tabName}",noEditableLayersAvailable:"Sloj(evi) treba da bude(-u) ozna\u010den(i) kao urediv(i) u kartici postavki sloja",updateProjectCostCheckboxLabel:"A\u017euriraj jedna\u010dine projekta",updateProjectCostEquationHint:"Napomena: to \u0107e omogu\u0107iti korisniku da a\u017eurira jedna\u010dine tro\u0161ka za resurse koji su ve\u0107 dodati u postoje\u0107e projekte sa novim jedna\u010dinama definisanim u nastavku na osnovu \u0161ablona geoobjekta, geografije i scenarija. Ako nije prona\u0111ena kombinacija, bi\u0107e pode\u0161ena na podrazumevanu jedna\u010dinu tro\u0161ka tj. geografija i scenario kao 'Ni\u0161ta'. U slu\u010daju uklanjanja \u0161ablona geoobjekta, tro\u0161ak \u0107e biti pode\u0161en kao 0."},
statisticsSettings:{tabTitle:"Dodatne postavke",addStatisticsLabel:"Dodaj statistiku",fieldNameTitle:"Polje",statisticsTitle:"Oznaka",addNewStatisticsText:"Dodaj novu statistiku",deleteStatisticsText:"Obri\u0161i statistiku",moveStatisticsUpText:"Pomeri statistiku na gore",moveStatisticsDownText:"Pomeri statistiku na dole",selectDeselectAllTitle:"Selektuj sve"},projectCostSettings:{addProjectCostLabel:"Dodaj dodatni tro\u0161ak projekta",additionalCostValueColumnHeader:"Vrednost",invalidProjectCostMessage:"Neva\u017ee\u0107i unos za tro\u0161ak projekta",
additionalCostLabelColumnHeader:"Oznaka",additionalCostTypeColumnHeader:"Tip"},statisticsType:{countLabel:"Broja\u010d",averageLabel:"Prose\u010dno",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Zbir",areaLabel:"Povr\u0161ina",lengthLabel:"Du\u017eina"},_localized:{}}});