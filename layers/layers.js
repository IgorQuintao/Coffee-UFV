ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([723856.627571, 7704642.849268, 724052.561577, 7704831.904438]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Orto_Color_T3_Viv_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Orto_Color_T3_Viv<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Orto_Color_T3_Viv_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4769951.488041, -2361405.748876, -4769789.124372, -2361152.488577]
        })
    });
var lyr_Orto_Color_T1_Viv_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Orto_Color_T1_Viv<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Orto_Color_T1_Viv_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-4770114.587556, -2361534.636342, -4769956.810384, -2361291.248599]
        })
    });
var format_Plantas_CAFE_SIRGASUTM23S_3 = new ol.format.GeoJSON();
var features_Plantas_CAFE_SIRGASUTM23S_3 = format_Plantas_CAFE_SIRGASUTM23S_3.readFeatures(json_Plantas_CAFE_SIRGASUTM23S_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Plantas_CAFE_SIRGASUTM23S_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantas_CAFE_SIRGASUTM23S_3.addFeatures(features_Plantas_CAFE_SIRGASUTM23S_3);
var lyr_Plantas_CAFE_SIRGASUTM23S_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantas_CAFE_SIRGASUTM23S_3, 
                style: style_Plantas_CAFE_SIRGASUTM23S_3,
                popuplayertitle: 'Plantas_CAFE_SIRGAS-UTM-23S',
                interactive: true,
    title: 'Plantas_CAFE_SIRGAS-UTM-23S<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_0.png" /> 0<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_1.png" /> 0.015<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_2.png" /> 0.018<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_3.png" /> 0.02<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_4.png" /> 0.025<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_5.png" /> 0.03<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_6.png" /> 0.035<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_7.png" /> 0.04<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_8.png" /> 0.045<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_9.png" /> 0.05<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_10.png" /> 0.055<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_11.png" /> 0.06<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_12.png" /> 0.065<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_13.png" /> 0.07<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_14.png" /> 0.08<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_15.png" /> 0.085<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_16.png" /> 0.09<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_17.png" /> 0.1<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_18.png" /> 0.11<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_19.png" /> 0.12<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_20.png" /> 0.13<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_21.png" /> 0.14<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_22.png" /> 0.15<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_23.png" /> 0.16<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_24.png" /> 0.17<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_25.png" /> 0.18<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_26.png" /> 0.185<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_27.png" /> 0.19<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_28.png" /> 0.2<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_29.png" /> 0.21<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_30.png" /> 0.22<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_31.png" /> 0.23<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_32.png" /> 0.24<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_33.png" /> 0.25<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_34.png" /> 0.26<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_35.png" /> 0.27<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_36.png" /> 0.28<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_37.png" /> 0.29<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_38.png" /> 0.3<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_39.png" /> 0.31<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_40.png" /> 0.32<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_41.png" /> 0.33<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_42.png" /> 0.35<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_43.png" /> 0.36<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_44.png" /> 0.38<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_45.png" /> 0.39<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_46.png" /> 0.4<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_47.png" /> 0.41<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_48.png" /> 0.42<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_49.png" /> 0.44<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_50.png" /> 0.45<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_51.png" /> 0.46<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_52.png" /> 0.48<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_53.png" /> 0.49<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_54.png" /> 0.5<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_55.png" /> 0.51<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_56.png" /> 0.52<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_57.png" /> 0.53<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_58.png" /> 0.55<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_59.png" /> 0.56<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_60.png" /> 0.58<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_61.png" /> 0.59<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_62.png" /> 0.6<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_63.png" /> 0.62<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_64.png" /> 0.625<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_65.png" /> 0.65<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_66.png" /> 0.66<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_67.png" /> 0.68<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_68.png" /> 0.69<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_69.png" /> 0.7<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_70.png" /> 0.72<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_71.png" /> 0.725<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_72.png" /> 0.74<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_73.png" /> 0.75<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_74.png" /> 0.76<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_75.png" /> 0.77<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_76.png" /> 0.78<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_77.png" /> 0.79<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_78.png" /> 0.8<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_79.png" /> 0.825<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_80.png" /> 0.85<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_81.png" /> 0.88<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_82.png" /> 0.9<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_83.png" /> 0.92<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_84.png" /> 0.95<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_85.png" /> 0.98<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_86.png" /> 1.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_87.png" /> 1.020<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_88.png" /> 1.025<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_89.png" /> 1.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_90.png" /> 1.080<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_91.png" /> 1.100<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_92.png" /> 1.125<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_93.png" /> 1.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_94.png" /> 1.175<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_95.png" /> 1.180<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_96.png" /> 1.190<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_97.png" /> 1.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_98.png" /> 1.220<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_99.png" /> 1.230<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_100.png" /> 1.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_101.png" /> 1.260<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_102.png" /> 1.280<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_103.png" /> 1.290<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_104.png" /> 1.300<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_105.png" /> 1.350<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_106.png" /> 1.400<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_107.png" /> 1.450<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_108.png" /> 1.500<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_109.png" /> 1.520<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_110.png" /> 1.550<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_111.png" /> 1.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_112.png" /> 1.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_113.png" /> 1.680<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_114.png" /> 1.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_115.png" /> 1.750<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_116.png" /> 1.770<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_117.png" /> 1.780<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_118.png" /> 1.800<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_119.png" /> 1.850<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_120.png" /> 1.880<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_121.png" /> 1.900<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_122.png" /> 1.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_123.png" /> 1.980<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_124.png" /> 2.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_125.png" /> 2.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_126.png" /> 2.100<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_127.png" /> 2.125<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_128.png" /> 2.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_129.png" /> 2.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_130.png" /> 2.210<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_131.png" /> 2.220<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_132.png" /> 2.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_133.png" /> 2.280<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_134.png" /> 2.300<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_135.png" /> 2.350<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_136.png" /> 2.400<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_137.png" /> 2.450<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_138.png" /> 2.480<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_139.png" /> 2.500<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_140.png" /> 2.520<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_141.png" /> 2.550<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_142.png" /> 2.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_143.png" /> 2.625<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_144.png" /> 2.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_145.png" /> 2.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_146.png" /> 2.750<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_147.png" /> 2.780<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_148.png" /> 2.800<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_149.png" /> 2.850<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_150.png" /> 2.900<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_151.png" /> 2.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_152.png" /> 3.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_153.png" /> 3.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_154.png" /> 3.100<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_155.png" /> 3.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_156.png" /> 3.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_157.png" /> 3.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_158.png" /> 3.300<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_159.png" /> 3.325<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_160.png" /> 3.350<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_161.png" /> 3.400<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_162.png" /> 3.450<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_163.png" /> 3.500<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_164.png" /> 3.550<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_165.png" /> 3.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_166.png" /> 3.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_167.png" /> 3.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_168.png" /> 3.750<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_169.png" /> 3.800<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_170.png" /> 3.850<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_171.png" /> 3.900<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_172.png" /> 3.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_173.png" /> 3.980<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_174.png" /> 4.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_175.png" /> 4.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_176.png" /> 4.100<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_177.png" /> 4.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_178.png" /> 4.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_179.png" /> 4.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_180.png" /> 4.300<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_181.png" /> 4.350<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_182.png" /> 4.400<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_183.png" /> 4.500<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_184.png" /> 4.550<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_185.png" /> 4.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_186.png" /> 4.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_187.png" /> 4.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_188.png" /> 4.750<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_189.png" /> 4.770<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_190.png" /> 4.800<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_191.png" /> 4.850<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_192.png" /> 4.900<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_193.png" /> 4.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_194.png" /> 5.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_195.png" /> 5.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_196.png" /> 5.100<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_197.png" /> 5.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_198.png" /> 5.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_199.png" /> 5.225<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_200.png" /> 5.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_201.png" /> 5.300<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_202.png" /> 5.350<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_203.png" /> 5.400<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_204.png" /> 5.450<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_205.png" /> 5.500<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_206.png" /> 5.550<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_207.png" /> 5.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_208.png" /> 5.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_209.png" /> 5.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_210.png" /> 5.750<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_211.png" /> 5.800<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_212.png" /> 5.850<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_213.png" /> 5.900<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_214.png" /> 5.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_215.png" /> 6.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_216.png" /> 6.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_217.png" /> 6.100<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_218.png" /> 6.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_219.png" /> 6.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_220.png" /> 6.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_221.png" /> 6.300<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_222.png" /> 6.320<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_223.png" /> 6.350<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_224.png" /> 6.400<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_225.png" /> 6.500<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_226.png" /> 6.550<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_227.png" /> 6.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_228.png" /> 6.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_229.png" /> 6.750<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_230.png" /> 6.800<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_231.png" /> 6.850<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_232.png" /> 6.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_233.png" /> 7.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_234.png" /> 7.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_235.png" /> 7.125<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_236.png" /> 7.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_237.png" /> 7.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_238.png" /> 7.300<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_239.png" /> 7.400<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_240.png" /> 7.450<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_241.png" /> 7.500<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_242.png" /> 7.550<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_243.png" /> 7.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_244.png" /> 7.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_245.png" /> 7.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_246.png" /> 7.800<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_247.png" /> 7.900<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_248.png" /> 7.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_249.png" /> 8.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_250.png" /> 8.050<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_251.png" /> 8.470<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_252.png" /> 8.650<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_253.png" /> 8.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_254.png" /> 9.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_255.png" /> 9.200<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_256.png" /> 9.420<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_257.png" /> 9.900<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_258.png" /> 10.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_259.png" /> 10.250<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_260.png" /> 10.450<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_261.png" /> 10.700<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_262.png" /> 10.950<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_263.png" /> 11.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_264.png" /> 11.150<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_265.png" /> 12.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_266.png" /> 12.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_267.png" /> 15.000<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_268.png" /> 15.100<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_269.png" /> 16.600<br />\
    <img src="styles/legend/Plantas_CAFE_SIRGASUTM23S_3_270.png" /> <br />' });
var format_BASE_4 = new ol.format.GeoJSON();
var features_BASE_4 = format_BASE_4.readFeatures(json_BASE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_BASE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASE_4.addFeatures(features_BASE_4);
var lyr_BASE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BASE_4, 
                style: style_BASE_4,
                popuplayertitle: 'BASE',
                interactive: true,
                title: '<img src="styles/legend/BASE_4.png" /> BASE'
            });
var group_CafeUFV = new ol.layer.Group({
                                layers: [lyr_Orto_Color_T3_Viv_1,lyr_Orto_Color_T1_Viv_2,lyr_Plantas_CAFE_SIRGASUTM23S_3,lyr_BASE_4,],
                                fold: 'open',
                                title: 'Cafe-UFV'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_Orto_Color_T3_Viv_1.setVisible(true);lyr_Orto_Color_T1_Viv_2.setVisible(true);lyr_Plantas_CAFE_SIRGASUTM23S_3.setVisible(true);lyr_BASE_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_CafeUFV];
lyr_Plantas_CAFE_SIRGASUTM23S_3.set('fieldAliases', {'ID': 'ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Z': 'Z', 'ID_temp': 'ID_temp', 'ID_Talhao': 'ID_Talhao', 'Producao_L': 'Producao_L', 'Litros': 'Litros', });
lyr_BASE_4.set('fieldAliases', {'ID': 'ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Z': 'Z', 'ID_temp': 'ID_temp', 'ID_Talhao': 'ID_Talhao', 'Producao_L': 'Producao_L', 'Litros': 'Litros', });
lyr_Plantas_CAFE_SIRGASUTM23S_3.set('fieldImages', {'ID': '', 'Latitude': '', 'Longitude': '', 'Z': '', 'ID_temp': '', 'ID_Talhao': '', 'Producao_L': '', 'Litros': '', });
lyr_BASE_4.set('fieldImages', {'ID': '', 'Latitude': '', 'Longitude': '', 'Z': '', 'ID_temp': '', 'ID_Talhao': '', 'Producao_L': '', 'Litros': '', });
lyr_Plantas_CAFE_SIRGASUTM23S_3.set('fieldLabels', {'ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Z': 'no label', 'ID_temp': 'no label', 'ID_Talhao': 'no label', 'Producao_L': 'no label', 'Litros': 'header label - always visible', });
lyr_BASE_4.set('fieldLabels', {'ID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Z': 'no label', 'ID_temp': 'no label', 'ID_Talhao': 'no label', 'Producao_L': 'no label', 'Litros': 'no label', });
lyr_BASE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});