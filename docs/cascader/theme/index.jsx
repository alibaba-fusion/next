import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import '../../../src/cascader/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import Cascader from '../../../src/cascader';

const i18nMap = {
    'en-us': {
        option: 'Option'
    },
    'zh-cn': {
        option: '选项'
    }
};

const createDataSource = (label, hasDisabled) => {
    const dataSource = [{
        "children": [{
            "value": "2974",
            "label": "西安",
            "children": [
                { "value": "2975", "label": "西安市" },
                { "value": "2976", "label": "高陵县" },
                { "value": "2977", "label": "蓝田县" },
                { "value": "2978", "label": "户县" },
                { "value": "2979", "label": "周至县" },
                { "value": "4208", "label": "灞桥区" },
                { "value": "4209", "label": "长安区" },
                { "value": "4210", "label": "莲湖区" },
                { "value": "4211", "label": "临潼区" },
                { "value": "4212", "label": "未央区" },
                { "value": "4213", "label": "新城区" },
                { "value": "4214", "label": "阎良区" },
                { "value": "4215", "label": "雁塔区" },
                { "value": "4388", "label": "碑林区" },
                { "value": "610127", "label": "其它区" }
            ]
        }, {
            "value": "2980",
            "label": "铜川",
            "children": [
                { "value": "2981", "label": "铜川市" },
                { "value": "2982", "label": "宜君县" },
                { "value": "4204", "label": "王益区" },
                { "value": "4205", "label": "耀州区" },
                { "value": "4206", "label": "印台区" },
                { "value": "610223", "label": "其它区" }
            ]
        }, {
            "value": "2983",
            "label": "宝鸡",
            "children": [
                { "value": "2984", "label": "宝鸡市" },
                { "value": "2986", "label": "岐山县" },
                { "value": "2987", "label": "凤翔县" },
                { "value": "2989", "label": "太白县" },
                { "value": "2990", "label": "麟游县" },
                { "value": "2991", "label": "扶风县" },
                { "value": "2992", "label": "千阳县" },
                { "value": "2993", "label": "眉县" },
                { "value": "2994", "label": "凤县" },
                { "value": "2988", "label": "陇县" },
                { "value": "4200", "label": "陈仓区" },
                { "value": "4201", "label": "渭滨区" },
                { "value": "4387", "label": "金台区" },
                { "value": "610332", "label": "其它区" }
            ]
        }, {
            "value": "2995",
            "label": "咸阳",
            "children": [
                { "value": "2996", "label": "咸阳市" },
                { "value": "2997", "label": "兴平市" },
                { "value": "2998", "label": "礼泉县" },
                { "value": "2999", "label": "泾阳县" },
                { "value": "3001", "label": "三原县" },
                { "value": "3002", "label": "彬县" },
                { "value": "3003", "label": "旬邑县" },
                { "value": "3004", "label": "长武县" },
                { "value": "3005", "label": "乾县" },
                { "value": "3006", "label": "武功县" },
                { "value": "3007", "label": "淳化县" },
                { "value": "3000", "label": "永寿县" },
                { "value": "4216", "label": "秦都区" },
                { "value": "4217", "label": "渭城区" },
                { "value": "4218", "label": "杨凌区" },
                { "value": "610482", "label": "其它区" }
            ]
        }, {
            "value": "3008",
            "label": "渭南",
            "children": [
                { "value": "3009", "label": "渭南市" },
                { "value": "3010", "label": "韩城市" },
                { "value": "3011", "label": "华阴市" },
                { "value": "3013", "label": "潼关县" },
                { "value": "3014", "label": "白水县" },
                { "value": "3015", "label": "澄城县" },
                { "value": "3016", "label": "华县" },
                { "value": "3017", "label": "合阳县" },
                { "value": "3018", "label": "富平县" },
                { "value": "3019", "label": "大荔县" },
                { "value": "3012", "label": "蒲城县" },
                { "value": "4207", "label": "临渭区" },
                { "value": "610583", "label": "其它区" }
            ]
        }, {
            "value": "3020",
            "label": "延安",
            "children": [
                { "value": "3021", "label": "延安市" },
                { "value": "3022", "label": "安塞县" },
                { "value": "3023", "label": "洛川县" },
                { "value": "3024", "label": "子长县" },
                { "value": "3025", "label": "黄陵县" },
                { "value": "3026", "label": "延川县" },
                { "value": "3027", "label": "富县" },
                { "value": "3028", "label": "延长县" },
                { "value": "3029", "label": "甘泉县" },
                { "value": "3030", "label": "宜川县" },
                { "value": "3031", "label": "志丹县" },
                { "value": "3032", "label": "黄龙县" },
                { "value": "3033", "label": "吴起县" },
                { "value": "4219", "label": "宝塔区" },
                { "value": "610633", "label": "其它区" }
            ]
        }, {
            "value": "3034",
            "label": "汉中",
            "children": [
                { "value": "3035", "label": "汉中市" },
                { "value": "3036", "label": "留坝县" },
                { "value": "3037", "label": "镇巴县" },
                { "value": "3038", "label": "城固县" },
                { "value": "3039", "label": "南郑县" },
                { "value": "3040", "label": "洋县" },
                { "value": "3041", "label": "宁强县" },
                { "value": "3042", "label": "佛坪县" },
                { "value": "3043", "label": "勉县" },
                { "value": "3044", "label": "西乡县" },
                { "value": "3045", "label": "略阳县" },
                { "value": "4202", "label": "汉台区" },
                { "value": "610731", "label": "其它区" }
            ]
        }, {
            "value": "3046",
            "label": "榆林",
            "children": [
                { "value": "3047", "label": "榆林市" },
                { "value": "3048", "label": "清涧县" },
                { "value": "3049", "label": "绥德县" },
                { "value": "3050", "label": "神木县" },
                { "value": "3051", "label": "佳县" },
                { "value": "3053", "label": "子洲县" },
                { "value": "3054", "label": "靖边县" },
                { "value": "3055", "label": "横山县" },
                { "value": "3056", "label": "米脂县" },
                { "value": "3057", "label": "吴堡县" },
                { "value": "3058", "label": "定边县" },
                { "value": "3052", "label": "府谷县" },
                { "value": "4220", "label": "榆阳区" },
                { "value": "610832", "label": "其它区" }
            ]
        }, {
            "value": "3059",
            "label": "安康",
            "children": [
                { "value": "3060", "label": "安康市" },
                { "value": "3061", "label": "紫阳县" },
                { "value": "3062", "label": "岚皋县" },
                { "value": "3063", "label": "旬阳县" },
                { "value": "3065", "label": "平利县" },
                { "value": "3066", "label": "石泉县" },
                { "value": "3067", "label": "宁陕县" },
                { "value": "3068", "label": "白河县" },
                { "value": "3069", "label": "汉阴县" },
                { "value": "3064", "label": "镇坪县" },
                { "value": "4199", "label": "汉滨区" },
                { "value": "610930", "label": "其它区" }
            ]
        }, {
            "value": "3070",
            "label": "商洛",
            "children": [
                { "value": "3071", "label": "商洛市" },
                { "value": "3072", "label": "镇安县" },
                { "value": "3073", "label": "山阳县" },
                { "value": "3074", "label": "洛南县" },
                { "value": "3075", "label": "商南县" },
                { "value": "3076", "label": "丹凤县" },
                { "value": "3077", "label": "柞水县" },
                { "value": "4203", "label": "商州区" },
                { "value": "611027", "label": "其它区" }
            ]
        }],
        "value": "2973",
        "label": "陕西"
    }, {
        "children": [{
            "value": "3079",
            "label": "成都",
            "children": [
                { "value": "3080", "label": "成都市" },
                { "value": "3081", "label": "都江堰市" },
                { "value": "3082", "label": "彭州市" },
                { "value": "3083", "label": "邛崃市" },
                { "value": "3084", "label": "崇州市" },
                { "value": "3085", "label": "金堂县" },
                { "value": "3086", "label": "郫县" },
                { "value": "3087", "label": "新津县" },
                { "value": "3088", "label": "双流县" },
                { "value": "3089", "label": "蒲江县" },
                { "value": "3090", "label": "大邑县" },
                { "value": "4240", "label": "成华区" },
                { "value": "4241", "label": "金牛区" },
                { "value": "4242", "label": "锦江区" },
                { "value": "4243", "label": "龙泉驿区" },
                { "value": "4244", "label": "青白江区" },
                { "value": "4245", "label": "青羊区" },
                { "value": "4246", "label": "温江区" },
                { "value": "4247", "label": "武侯区" },
                { "value": "4248", "label": "新都区" },
                { "value": "510185", "label": "其它区" }
            ]
        }, {
            "value": "3091",
            "label": "自贡",
            "children": [
                { "value": "3092", "label": "自贡市" },
                { "value": "3093", "label": "荣县" },
                { "value": "3094", "label": "富顺县" },
                { "value": "4278", "label": "大安区" },
                { "value": "4279", "label": "贡井区" },
                { "value": "4280", "label": "沿滩区" },
                { "value": "4281", "label": "自流井区" },
                { "value": "510323", "label": "其它区" }
            ]
        }, {
            "value": "3095",
            "label": "攀枝花",
            "children": [
                { "value": "3096", "label": "攀枝花市" },
                { "value": "3097", "label": "米易县" },
                { "value": "3098", "label": "盐边县" },
                { "value": "4270", "label": "东区" },
                { "value": "4271", "label": "仁和区" },
                { "value": "4272", "label": "西区" },
                { "value": "510423", "label": "其它区" }
            ]
        }, {
            "value": "3099",
            "label": "泸州",
            "children": [
                { "value": "3100", "label": "泸州市" },
                { "value": "3101", "label": "泸县" },
                { "value": "3102", "label": "合江县" },
                { "value": "3103", "label": "叙永县" },
                { "value": "3104", "label": "古蔺县" },
                { "value": "4259", "label": "江阳区" },
                { "value": "4260", "label": "龙马潭区" },
                { "value": "4261", "label": "纳溪区" },
                { "value": "510526", "label": "其它区" }
            ]
        }, {
            "value": "3105",
            "label": "德阳",
            "children": [
                { "value": "3106", "label": "德阳市" },
                { "value": "3107", "label": "广汉市" },
                { "value": "3108", "label": "什邡市" },
                { "value": "3109", "label": "绵竹市" },
                { "value": "3110", "label": "罗江县" },
                { "value": "3111", "label": "中江县" },
                { "value": "4250", "label": "旌阳区" },
                { "value": "510684", "label": "其它区" }
            ]
        }, {
            "value": "3112",
            "label": "绵阳",
            "children": [
                { "value": "3113", "label": "绵阳市" },
                { "value": "3114", "label": "江油市" },
                { "value": "3115", "label": "盐亭县" },
                { "value": "3116", "label": "三台县" },
                { "value": "3117", "label": "平武县" },
                { "value": "3118", "label": "北川羌族自治县" },
                { "value": "3119", "label": "安县" },
                { "value": "3120", "label": "梓潼县" },
                { "value": "4263", "label": "涪城区" },
                { "value": "4264", "label": "游仙区" },
                { "value": "510782", "label": "其它区" }
            ]
        }, {
            "value": "3121",
            "label": "广元",
            "children": [
                { "value": "3122", "label": "广元市" },
                { "value": "3123", "label": "青川县" },
                { "value": "3124", "label": "旺苍县" },
                { "value": "3125", "label": "剑阁县" },
                { "value": "3126", "label": "苍溪县" },
                { "value": "4252", "label": "朝天区" },
                { "value": "4253", "label": "市中区" },
                { "value": "4254", "label": "元坝区" },
                { "value": "510802", "label": "利州区" },
                { "value": "510825", "label": "其它区" }
            ]
        }, {
            "value": "3127",
            "label": "遂宁",
            "children": [
                { "value": "3128", "label": "遂宁市" },
                { "value": "3129", "label": "射洪县" },
                { "value": "3131", "label": "大英县" },
                { "value": "3130", "label": "蓬溪县" },
                { "value": "4273", "label": "安居区" },
                { "value": "4274", "label": "船山区" },
                { "value": "510924", "label": "其它区" }
            ]
        }, {
            "value": "3132",
            "label": "内江",
            "children": [
                { "value": "3133", "label": "内江市" },
                { "value": "3134", "label": "资中县" },
                { "value": "3135", "label": "隆昌县" },
                { "value": "3136", "label": "威远县" },
                { "value": "4265", "label": "东兴区" },
                { "value": "4266", "label": "市中区" },
                { "value": "511029", "label": "其它区" }
            ]
        }, {
            "value": "3137",
            "label": "乐山",
            "children": [
                { "value": "3138", "label": "乐山市" },
                { "value": "3139", "label": "峨眉山市" },
                { "value": "3140", "label": "夹江县" },
                { "value": "3141", "label": "井研县" },
                { "value": "3142", "label": "犍为县" },
                { "value": "3144", "label": "马边彝族自治县" },
                { "value": "3145", "label": "峨边彝族自治县" },
                { "value": "3143", "label": "沐川县" },
                { "value": "4255", "label": "金口河区" },
                { "value": "4256", "label": "沙湾区" },
                { "value": "4257", "label": "市中区" },
                { "value": "4258", "label": "五通桥区" },
                { "value": "511182", "label": "其它区" }
            ]
        }, {
            "value": "3146",
            "label": "南充",
            "children": [
                { "value": "3147", "label": "南充市" },
                { "value": "3148", "label": "阆中市" },
                { "value": "3149", "label": "营山县" },
                { "value": "3150", "label": "蓬安县" },
                { "value": "3151", "label": "仪陇县" },
                { "value": "3152", "label": "南部县" },
                { "value": "3153", "label": "西充县" },
                { "value": "4267", "label": "高坪区" },
                { "value": "4268", "label": "嘉陵区" },
                { "value": "4269", "label": "顺庆区" },
                { "value": "511382", "label": "其它区" }
            ]
        }, {
            "value": "3154",
            "label": "宜宾",
            "children": [
                { "value": "3155", "label": "宜宾市" },
                { "value": "3156", "label": "宜宾县" },
                { "value": "3157", "label": "兴文县" },
                { "value": "3158", "label": "南溪县" },
                { "value": "3159", "label": "珙县" },
                { "value": "3160", "label": "长宁县" },
                { "value": "3161", "label": "高县" },
                { "value": "3162", "label": "江安县" },
                { "value": "3163", "label": "筠连县" },
                { "value": "3164", "label": "屏山县" },
                { "value": "4276", "label": "翠屏区" },
                { "value": "511530", "label": "其它区" }
            ]
        }, {
            "value": "3165",
            "label": "广安",
            "children": [
                { "value": "3166", "label": "广安市" },
                { "value": "3167", "label": "华蓥市" },
                { "value": "3168", "label": "岳池县" },
                { "value": "3169", "label": "邻水县" },
                { "value": "3170", "label": "武胜县" },
                { "value": "4251", "label": "广安区" },
                { "value": "511682", "label": "市辖区" },
                { "value": "511683", "label": "其它区" }
            ]
        }, {
            "value": "3171",
            "label": "达州",
            "children": [
                { "value": "3172", "label": "达州市" },
                { "value": "3173", "label": "万源市" },
                { "value": "3174", "label": "达县" },
                { "value": "3175", "label": "渠县" },
                { "value": "3176", "label": "宣汉县" },
                { "value": "3177", "label": "开江县" },
                { "value": "3178", "label": "大竹县" },
                { "value": "4249", "label": "通川区" },
                { "value": "511782", "label": "其它区" }
            ]
        }, {
            "value": "3179",
            "label": "巴中",
            "children": [
                { "value": "3180", "label": "巴中市" },
                { "value": "3181", "label": "南江县" },
                { "value": "3182", "label": "平昌县" },
                { "value": "3183", "label": "通江县" },
                { "value": "4239", "label": "巴州区" },
                { "value": "511924", "label": "其它区" }
            ]
        }, {
            "value": "3184",
            "label": "雅安",
            "children": [
                { "value": "3185", "label": "雅安市" },
                { "value": "3186", "label": "芦山县" },
                { "value": "3187", "label": "石棉县" },
                { "value": "3188", "label": "名山县" },
                { "value": "3189", "label": "天全县" },
                { "value": "3190", "label": "荥经县" },
                { "value": "3191", "label": "宝兴县" },
                { "value": "3192", "label": "汉源县" },
                { "value": "4275", "label": "雨城区" },
                { "value": "511828", "label": "其它区" }
            ]
        }, {
            "value": "3193",
            "label": "眉山",
            "children": [
                { "value": "3194", "label": "眉山市" },
                { "value": "3195", "label": "仁寿县" },
                { "value": "3197", "label": "洪雅县" },
                { "value": "3198", "label": "丹棱县" },
                { "value": "3199", "label": "青神县" },
                { "value": "3196", "label": "彭山县" },
                { "value": "4262", "label": "东坡区" },
                { "value": "511426", "label": "其它区" }
            ]
        }, {
            "value": "3200",
            "label": "资阳",
            "children": [
                { "value": "3201", "label": "资阳市" },
                { "value": "3202", "label": "简阳市" },
                { "value": "3203", "label": "安岳县" },
                { "value": "3204", "label": "乐至县" },
                { "value": "4277", "label": "雁江区" },
                { "value": "512082", "label": "其它区" }
            ]
        }, {
            "value": "3205",
            "label": "阿坝藏族羌族自治州",
            "children": [
                { "value": "3206", "label": "马尔康县" },
                { "value": "3207", "label": "九寨沟县" },
                { "value": "3208", "label": "红原县" },
                { "value": "3209", "label": "汶川县" },
                { "value": "3211", "label": "理县" },
                { "value": "3212", "label": "若尔盖县" },
                { "value": "3213", "label": "小金县" },
                { "value": "3214", "label": "黑水县" },
                { "value": "3215", "label": "金川县" },
                { "value": "3216", "label": "松潘县" },
                { "value": "3217", "label": "壤塘县" },
                { "value": "3218", "label": "茂县" },
                { "value": "3210", "label": "阿坝县" }
            ]
        }, {
            "value": "3219",
            "label": "甘孜藏族自治州",
            "children": [
                { "value": "3220", "label": "康定县" },
                { "value": "3221", "label": "丹巴县" },
                { "value": "3222", "label": "炉霍县" },
                { "value": "3223", "label": "九龙县" },
                { "value": "3224", "label": "甘孜县" },
                { "value": "3225", "label": "雅江县" },
                { "value": "3226", "label": "新龙县" },
                { "value": "3227", "label": "道孚县" },
                { "value": "3228", "label": "白玉县" },
                { "value": "3229", "label": "理塘县" },
                { "value": "3230", "label": "德格县" },
                { "value": "3231", "label": "乡城县" },
                { "value": "3232", "label": "石渠县" },
                { "value": "3233", "label": "稻城县" },
                { "value": "3234", "label": "色达县" },
                { "value": "3235", "label": "巴塘县" },
                { "value": "3236", "label": "泸定县" },
                { "value": "3237", "label": "得荣县" }
            ]
        }, {
            "value": "3238",
            "label": "凉山彝族自治州",
            "children": [
                { "value": "3239", "label": "西昌市" },
                { "value": "3240", "label": "美姑县" },
                { "value": "3241", "label": "昭觉县" },
                { "value": "3242", "label": "金阳县" },
                { "value": "3243", "label": "甘洛县" },
                { "value": "3244", "label": "布拖县" },
                { "value": "3245", "label": "雷波县" },
                { "value": "3246", "label": "普格县" },
                { "value": "3247", "label": "宁南县" },
                { "value": "3248", "label": "喜德县" },
                { "value": "3249", "label": "会东县" },
                { "value": "3250", "label": "越西县" },
                { "value": "3251", "label": "会理县" },
                { "value": "3252", "label": "盐源县" },
                { "value": "3253", "label": "德昌县" },
                { "value": "3254", "label": "冕宁县" },
                { "value": "3255", "label": "木里藏族自治县" }
            ]
        }],
        "value": "3078",
        "label": "四川"
    }, {
        "children": [{
            "value": "3257",
            "label": "天津",
            "children": [
                { "value": "3258", "label": "天津市" },
                { "value": "3259", "label": "静海县" },
                { "value": "3260", "label": "宁河县" },
                { "value": "3261", "label": "蓟县" },
                { "value": "4282", "label": "宝坻区" },
                { "value": "4283", "label": "北辰区" },
                { "value": "4284", "label": "大港区" },
                { "value": "4285", "label": "东丽区" },
                { "value": "4286", "label": "汉沽区" },
                { "value": "4287", "label": "和平区" },
                { "value": "4288", "label": "河北区" },
                { "value": "4289", "label": "河东区" },
                { "value": "4290", "label": "河西区" },
                { "value": "4291", "label": "红桥区" },
                { "value": "4292", "label": "津南区" },
                { "value": "4293", "label": "南开区" },
                { "value": "4294", "label": "塘沽区" },
                { "value": "4295", "label": "武清区" },
                { "value": "4296", "label": "西青区" },
                { "value": "10005", "label": "滨海新区" },
                { "value": "120226", "label": "其它区" }
            ]
        }],
        "value": "3256",
        "label": "天津"
    }, {
        "children": [{
            "value": "3291",
            "label": "拉萨",
            "children": [
                { "value": "3292", "label": "拉萨市" },
                { "value": "3293", "label": "林周县" },
                { "value": "3294", "label": "达孜县" },
                { "value": "3295", "label": "尼木县" },
                { "value": "3296", "label": "当雄县" },
                { "value": "3297", "label": "曲水县" },
                { "value": "3298", "label": "墨竹工卡县" },
                { "value": "3299", "label": "堆龙德庆县" },
                { "value": "4297", "label": "城关区" },
                { "value": "540128", "label": "其它区" }
            ]
        }, {
            "value": "3300",
            "label": "那曲",
            "children": [
                { "value": "3301", "label": "那曲县" },
                { "value": "3302", "label": "嘉黎县" },
                { "value": "3303", "label": "申扎县" },
                { "value": "3304", "label": "巴青县" },
                { "value": "3305", "label": "聂荣县" },
                { "value": "3306", "label": "尼玛县" },
                { "value": "3307", "label": "比如县" },
                { "value": "3308", "label": "索县" },
                { "value": "3309", "label": "班戈县" },
                { "value": "3310", "label": "安多县" }
            ]
        }, {
            "value": "3311",
            "label": "昌都",
            "children": [
                { "value": "3312", "label": "昌都县" },
                { "value": "3313", "label": "芒康县" },
                { "value": "3314", "label": "贡觉县" },
                { "value": "3315", "label": "八宿县" },
                { "value": "3316", "label": "左贡县" },
                { "value": "3317", "label": "边坝县" },
                { "value": "3318", "label": "洛隆县" },
                { "value": "3319", "label": "江达县" },
                { "value": "3320", "label": "类乌齐县" },
                { "value": "3321", "label": "丁青县" },
                { "value": "3322", "label": "察雅县" }
            ]
        }, {
            "value": "3323",
            "label": "山南",
            "children": [
                { "value": "3324", "label": "乃东县" },
                { "value": "3325", "label": "琼结县" },
                { "value": "3326", "label": "措美县" },
                { "value": "3327", "label": "加查县" },
                { "value": "3328", "label": "贡嘎县" },
                { "value": "3329", "label": "洛扎县" },
                { "value": "3330", "label": "曲松县" },
                { "value": "3331", "label": "桑日县" },
                { "value": "3332", "label": "扎囊县" },
                { "value": "3333", "label": "错那县" },
                { "value": "3335", "label": "浪卡子县" },
                { "value": "3334", "label": "隆子县" }
            ]
        }, {
            "value": "3336",
            "label": "日喀则",
            "children": [
                { "value": "3337", "label": "日喀则市" },
                { "value": "3338", "label": "定结县" },
                { "value": "3339", "label": "萨迦县" },
                { "value": "3340", "label": "江孜县" },
                { "value": "3341", "label": "拉孜县" },
                { "value": "3342", "label": "定日县" },
                { "value": "3343", "label": "康马县" },
                { "value": "3344", "label": "聂拉木县" },
                { "value": "3345", "label": "吉隆县" },
                { "value": "3347", "label": "谢通门县" },
                { "value": "3348", "label": "昂仁县" },
                { "value": "3349", "label": "岗巴县" },
                { "value": "3350", "label": "仲巴县" },
                { "value": "3351", "label": "萨嘎县" },
                { "value": "3352", "label": "仁布县" },
                { "value": "3353", "label": "白朗县" },
                { "value": "3354", "label": "南木林县" },
                { "value": "3346", "label": "亚东县" }
            ]
        }, {
            "value": "3355",
            "label": "阿里",
            "children": [
                { "value": "3356", "label": "噶尔县" },
                { "value": "3357", "label": "措勤县" },
                { "value": "3358", "label": "普兰县" },
                { "value": "3359", "label": "革吉县" },
                { "value": "3360", "label": "日土县" },
                { "value": "3361", "label": "札达县" },
                { "value": "3362", "label": "改则县" }
            ]
        }, {
            "value": "3363",
            "label": "林芝",
            "children": [
                { "value": "3364", "label": "林芝县" },
                { "value": "3365", "label": "墨脱县" },
                { "value": "3366", "label": "朗县" },
                { "value": "3367", "label": "米林县" },
                { "value": "3368", "label": "察隅县" },
                { "value": "3369", "label": "波密县" },
                { "value": "3370", "label": "工布江达县" }
            ]
        }],
        "value": "3290",
        "label": "西藏"
    }, {
        "children": [{
            "value": "3372",
            "label": "乌鲁木齐",
            "children": [
                { "value": "3373", "label": "乌鲁木齐市" },
                { "value": "3374", "label": "乌鲁木齐县" },
                { "value": "4302", "label": "达坂城区" },
                { "value": "4303", "label": "东山区" },
                { "value": "4304", "label": "沙依巴克区" },
                { "value": "4305", "label": "水磨沟区" },
                { "value": "4306", "label": "天山区" },
                { "value": "4307", "label": "头屯河区" },
                { "value": "4308", "label": "新市区" },
                { "value": "650109", "label": "米东区" },
                { "value": "650122", "label": "其它区" }
            ]
        }, {
            "value": "3375",
            "label": "克拉玛依",
            "children": [
                { "value": "3376", "label": "克拉玛依市" },
                { "value": "4298", "label": "白碱滩区" },
                { "value": "4299", "label": "独山子区" },
                { "value": "4300", "label": "克拉玛依区" },
                { "value": "4301", "label": "乌尔禾区" },
                { "value": "650206", "label": "其它区" }
            ]
        }, {
            "value": "3377",
            "label": "石河子",
            "children": [
                { "value": "3378", "label": "石河子市" }
            ]
        }, {
            "value": "3379",
            "label": "阿拉尔",
            "children": [
                { "value": "3380", "label": "阿拉尔市" }
            ]
        }, {
            "value": "3381",
            "label": "图木舒克",
            "children": [
                { "value": "3382", "label": "图木舒克市" }
            ]
        }, {
            "value": "3383",
            "label": "五家渠",
            "children": [
                { "value": "3384", "label": "五家渠市" }
            ]
        }, {
            "value": "3385",
            "label": "吐鲁番",
            "children": [
                { "value": "3386", "label": "吐鲁番市" },
                { "value": "3387", "label": "托克逊县" },
                { "value": "3388", "label": "鄯善县" }
            ]
        }, {
            "value": "3389",
            "label": "哈密",
            "children": [
                { "value": "3390", "label": "哈密市" },
                { "value": "3391", "label": "伊吾县" },
                { "value": "3392", "label": "巴里坤哈萨克自治县" }
            ]
        }, {
            "value": "3393",
            "label": "和田",
            "children": [
                { "value": "3394", "label": "和田市" },
                { "value": "3395", "label": "和田县" },
                { "value": "3396", "label": "洛浦县" },
                { "value": "3397", "label": "民丰县" },
                { "value": "3398", "label": "皮山县" },
                { "value": "3399", "label": "策勒县" },
                { "value": "3401", "label": "墨玉县" },
                { "value": "3400", "label": "于田县" }
            ]
        }, {
            "value": "3402",
            "label": "阿克苏",
            "children": [
                { "value": "3403", "label": "阿克苏市" },
                { "value": "3404", "label": "温宿县" },
                { "value": "3405", "label": "沙雅县" },
                { "value": "3406", "label": "拜城县" },
                { "value": "3407", "label": "阿瓦提县" },
                { "value": "3408", "label": "库车县" },
                { "value": "3409", "label": "柯坪县" },
                { "value": "3410", "label": "新和县" },
                { "value": "3411", "label": "乌什县" }
            ]
        }, {
            "value": "3412",
            "label": "喀什",
            "children": [
                { "value": "3413", "label": "喀什市" },
                { "value": "3414", "label": "巴楚县" },
                { "value": "3415", "label": "泽普县" },
                { "value": "3416", "label": "伽师县" },
                { "value": "3417", "label": "叶城县" },
                { "value": "3418", "label": "岳普湖县" },
                { "value": "3419", "label": "疏勒县" },
                { "value": "3420", "label": "麦盖提县" },
                { "value": "3421", "label": "英吉沙县" },
                { "value": "3422", "label": "莎车县" },
                { "value": "3423", "label": "疏附县" },
                { "value": "3424", "label": "塔什库尔干塔吉克自治县" }
            ]
        }, {
            "value": "3425",
            "label": "克孜勒苏柯尔克孜自治州",
            "children": [
                { "value": "3426", "label": "阿图什市" },
                { "value": "3427", "label": "阿合奇县" },
                { "value": "3428", "label": "乌恰县" },
                { "value": "3429", "label": "阿克陶县" }
            ]
        }, {
            "value": "3430",
            "label": "巴音郭楞蒙古自治州",
            "children": [
                { "value": "3431", "label": "库尔勒市" },
                { "value": "3432", "label": "和静县" },
                { "value": "3433", "label": "尉犁县" },
                { "value": "3434", "label": "和硕县" },
                { "value": "3435", "label": "且末县" },
                { "value": "3436", "label": "博湖县" },
                { "value": "3437", "label": "轮台县" },
                { "value": "3438", "label": "若羌县" },
                { "value": "3439", "label": "焉耆回族自治县" }
            ]
        }, {
            "value": "3440",
            "label": "昌吉回族自治州",
            "children": [
                { "value": "3441", "label": "昌吉市" },
                { "value": "3442", "label": "阜康市" },
                { "value": "3443", "label": "米泉市" },
                { "value": "3444", "label": "奇台县" },
                { "value": "3445", "label": "玛纳斯县" },
                { "value": "3446", "label": "吉木萨尔县" },
                { "value": "3447", "label": "呼图壁县" },
                { "value": "3448", "label": "木垒哈萨克自治县" }
            ]
        }, {
            "value": "3449",
            "label": "博尔塔拉蒙古自治州",
            "children": [
                { "value": "3450", "label": "博乐市" },
                { "value": "3451", "label": "精河县" },
                { "value": "3452", "label": "温泉县" }
            ]
        }, {
            "value": "3453",
            "label": "伊犁哈萨克自治州",
            "children": [
                { "value": "3455", "label": "奎屯市" },
                { "value": "3456", "label": "伊宁县" },
                { "value": "3457", "label": "特克斯县" },
                { "value": "3458", "label": "尼勒克县" },
                { "value": "3459", "label": "昭苏县" },
                { "value": "3460", "label": "新源县" },
                { "value": "3461", "label": "霍城县" },
                { "value": "3462", "label": "巩留县" },
                { "value": "3463", "label": "察布查尔锡伯自治县" },
                { "value": "3454", "label": "伊宁市" }
            ]
        }, {
            "value": "3781",
            "label": "阿勒泰地区",
            "children": [
                { "value": "3471", "label": "阿勒泰市" },
                { "value": "3472", "label": "青河县" },
                { "value": "3473", "label": "吉木乃县" },
                { "value": "3474", "label": "富蕴县" },
                { "value": "3475", "label": "布尔津县" },
                { "value": "3476", "label": "福海县" },
                { "value": "3477", "label": "哈巴河县" }
            ]
        }, {
            "value": "3782",
            "label": "塔城地区",
            "children": [
                { "value": "3464", "label": "塔城市" },
                { "value": "3465", "label": "乌苏市" },
                { "value": "3466", "label": "额敏县" },
                { "value": "3468", "label": "沙湾县" },
                { "value": "3469", "label": "托里县" },
                { "value": "3470", "label": "和布克赛尔蒙古自治县" },
                { "value": "3467", "label": "裕民县" }
            ]
        }],
        "value": "3371",
        "label": "新疆"
    }, {
        "children": [{
            "value": "3479",
            "label": "杭州",
            "children": [
                { "value": "3480", "label": "杭州市" },
                { "value": "3481", "label": "建德市" },
                { "value": "3482", "label": "富阳市" },
                { "value": "3483", "label": "临安市" },
                { "value": "3484", "label": "桐庐县" },
                { "value": "3485", "label": "淳安县" },
                { "value": "4319", "label": "滨江区" },
                { "value": "4320", "label": "拱墅区" },
                { "value": "4321", "label": "江干区" },
                { "value": "4322", "label": "上城区" },
                { "value": "4323", "label": "西湖区" },
                { "value": "4324", "label": "下城区" },
                { "value": "4325", "label": "萧山区" },
                { "value": "4326", "label": "余杭区" },
                { "value": "330186", "label": "其它区" }
            ]
        }, {
            "value": "3486",
            "label": "宁波",
            "children": [
                { "value": "3487", "label": "宁波市" },
                { "value": "3488", "label": "余姚市" },
                { "value": "3489", "label": "慈溪市" },
                { "value": "3490", "label": "奉化市" },
                { "value": "3491", "label": "宁海县" },
                { "value": "3492", "label": "象山县" },
                { "value": "4334", "label": "北仑区" },
                { "value": "4335", "label": "海曙区" },
                { "value": "4336", "label": "江北区" },
                { "value": "4337", "label": "江东区" },
                { "value": "4338", "label": "鄞州区" },
                { "value": "4339", "label": "镇海区" },
                { "value": "330284", "label": "其它区" }
            ]
        }, {
            "value": "3493",
            "label": "温州",
            "children": [
                { "value": "3494", "label": "温州市" },
                { "value": "3495", "label": "瑞安市" },
                { "value": "3496", "label": "乐清市" },
                { "value": "3497", "label": "永嘉县" },
                { "value": "3498", "label": "洞头县" },
                { "value": "3499", "label": "平阳县" },
                { "value": "3500", "label": "苍南县" },
                { "value": "3501", "label": "文成县" },
                { "value": "3502", "label": "泰顺县" },
                { "value": "4346", "label": "龙湾区" },
                { "value": "4347", "label": "鹿城区" },
                { "value": "4348", "label": "瓯海区" },
                { "value": "330383", "label": "其它区" }
            ]
        }, {
            "value": "3503",
            "label": "嘉兴",
            "children": [
                { "value": "3504", "label": "嘉兴市" },
                { "value": "3505", "label": "海宁市" },
                { "value": "3506", "label": "平湖市" },
                { "value": "3507", "label": "桐乡市" },
                { "value": "3508", "label": "嘉善县" },
                { "value": "3509", "label": "海盐县" },
                { "value": "4329", "label": "秀城区" },
                { "value": "4330", "label": "秀洲区" },
                { "value": "330402", "label": "南湖区" },
                { "value": "330484", "label": "其它区" }
            ]
        }, {
            "value": "3510",
            "label": "湖州",
            "children": [
                { "value": "3511", "label": "湖州市" },
                { "value": "3512", "label": "长兴县" },
                { "value": "3513", "label": "德清县" },
                { "value": "3514", "label": "安吉县" },
                { "value": "4327", "label": "南浔区" },
                { "value": "4328", "label": "吴兴区" },
                { "value": "330524", "label": "其它区" }
            ]
        }, {
            "value": "3515",
            "label": "绍兴",
            "children": [
                { "value": "3516", "label": "绍兴市" },
                { "value": "3517", "label": "诸暨市" },
                { "value": "3519", "label": "嵊州市" },
                { "value": "3520", "label": "绍兴县" },
                { "value": "3521", "label": "新昌县" },
                { "value": "3518", "label": "上虞市" },
                { "value": "4342", "label": "越城区" },
                { "value": "330684", "label": "其它区" }
            ]
        }, {
            "value": "3522",
            "label": "金华",
            "children": [
                { "value": "3523", "label": "金华市" },
                { "value": "3524", "label": "兰溪市" },
                { "value": "3525", "label": "义乌市" },
                { "value": "3526", "label": "东阳市" },
                { "value": "3527", "label": "永康市" },
                { "value": "3528", "label": "武义县" },
                { "value": "3529", "label": "浦江县" },
                { "value": "3530", "label": "磐安县" },
                { "value": "4331", "label": "金东区" },
                { "value": "4332", "label": "婺城区" },
                { "value": "330785", "label": "其它区" }
            ]
        }, {
            "value": "3531",
            "label": "衢州",
            "children": [
                { "value": "3532", "label": "衢州市" },
                { "value": "3533", "label": "江山市" },
                { "value": "3534", "label": "龙游县" },
                { "value": "3535", "label": "常山县" },
                { "value": "3536", "label": "开化县" },
                { "value": "4340", "label": "柯城区" },
                { "value": "4341", "label": "衢江区" },
                { "value": "330882", "label": "其它区" }
            ]
        }, {
            "value": "3537",
            "label": "舟山",
            "children": [
                { "value": "3538", "label": "舟山市" },
                { "value": "3539", "label": "岱山县" },
                { "value": "3540", "label": "嵊泗县" },
                { "value": "4349", "label": "定海区" },
                { "value": "4350", "label": "普陀区" },
                { "value": "330923", "label": "其它区" }
            ]
        }, {
            "value": "3541",
            "label": "台州",
            "children": [
                { "value": "3542", "label": "台州市" },
                { "value": "3544", "label": "温岭市" },
                { "value": "3545", "label": "玉环县" },
                { "value": "3546", "label": "天台县" },
                { "value": "3547", "label": "仙居县" },
                { "value": "3548", "label": "三门县" },
                { "value": "3543", "label": "临海市" },
                { "value": "4343", "label": "黄岩区" },
                { "value": "4344", "label": "椒江区" },
                { "value": "4345", "label": "路桥区" },
                { "value": "331083", "label": "其它区" }
            ]
        }, {
            "value": "3549",
            "label": "丽水",
            "children": [
                { "value": "3550", "label": "丽水市" },
                { "value": "3551", "label": "龙泉市" },
                { "value": "3552", "label": "缙云县" },
                { "value": "3553", "label": "青田县" },
                { "value": "3554", "label": "云和县" },
                { "value": "3555", "label": "遂昌县" },
                { "value": "3556", "label": "松阳县" },
                { "value": "3557", "label": "庆元县" },
                { "value": "3558", "label": "景宁畲族自治县" },
                { "value": "4333", "label": "莲都区" },
                { "value": "331182", "label": "其它区" }
            ]
        }],
        "value": "3478",
        "label": "浙江"
    }, {
        "children": [{
            "value": "3560",
            "label": "昆明",
            "children": [
                { "value": "3561", "label": "昆明市" },
                { "value": "3562", "label": "安宁市" },
                { "value": "3563", "label": "富民县" },
                { "value": "3564", "label": "嵩明县" },
                { "value": "3565", "label": "呈贡县" },
                { "value": "3566", "label": "晋宁县" },
                { "value": "3567", "label": "宜良县" },
                { "value": "3568", "label": "禄劝彝族苗族自治县" },
                { "value": "3569", "label": "石林彝族自治县" },
                { "value": "3570", "label": "寻甸回族自治县" },
                { "value": "4310", "label": "东川区" },
                { "value": "4311", "label": "官渡区" },
                { "value": "4312", "label": "盘龙区" },
                { "value": "4313", "label": "五华区" },
                { "value": "4314", "label": "西山区" },
                { "value": "530129", "label": "寻甸回族彝族自治县" },
                { "value": "530182", "label": "其它区" }
            ]
        }, {
            "value": "3571",
            "label": "曲靖",
            "children": [
                { "value": "3572", "label": "曲靖市" },
                { "value": "3573", "label": "宣威市" },
                { "value": "3574", "label": "陆良县" },
                { "value": "3575", "label": "会泽县" },
                { "value": "3576", "label": "富源县" },
                { "value": "3577", "label": "罗平县" },
                { "value": "3578", "label": "马龙县" },
                { "value": "3579", "label": "师宗县" },
                { "value": "3580", "label": "沾益县" },
                { "value": "4316", "label": "麒麟区" },
                { "value": "530382", "label": "其它区" }
            ]
        }, {
            "value": "3581",
            "label": "玉溪",
            "children": [
                { "value": "3582", "label": "玉溪市" },
                { "value": "3583", "label": "华宁县" },
                { "value": "3584", "label": "澄江县" },
                { "value": "3585", "label": "易门县" },
                { "value": "3586", "label": "通海县" },
                { "value": "3587", "label": "江川县" },
                { "value": "3588", "label": "元江哈尼族彝族傣族自治县" },
                { "value": "3589", "label": "新平彝族傣族自治县" },
                { "value": "3590", "label": "峨山彝族自治县" },
                { "value": "4317", "label": "红塔区" },
                { "value": "530429", "label": "其它区" }
            ]
        }, {
            "value": "3591",
            "label": "保山",
            "children": [
                { "value": "3592", "label": "保山市" },
                { "value": "3593", "label": "施甸县" },
                { "value": "3595", "label": "龙陵县" },
                { "value": "3596", "label": "腾冲县" },
                { "value": "3594", "label": "昌宁县" },
                { "value": "4309", "label": "隆阳区" },
                { "value": "530525", "label": "其它区" }
            ]
        }, {
            "value": "3597",
            "label": "昭通",
            "children": [
                { "value": "3598", "label": "昭通市" },
                { "value": "3599", "label": "永善县" },
                { "value": "3600", "label": "绥江县" },
                { "value": "3601", "label": "镇雄县" },
                { "value": "3602", "label": "大关县" },
                { "value": "3603", "label": "盐津县" },
                { "value": "3604", "label": "巧家县" },
                { "value": "3605", "label": "彝良县" },
                { "value": "3607", "label": "水富县" },
                { "value": "3608", "label": "鲁甸县" },
                { "value": "3606", "label": "威信县" },
                { "value": "4318", "label": "昭阳区" },
                { "value": "530631", "label": "其它区" }
            ]
        }, {
            "value": "3609",
            "label": "普洱",
            "children": [
                { "value": "3610", "label": "普洱市" },
                { "value": "3611", "label": "宁洱哈尼族彝族自治县" },
                { "value": "3612", "label": "景东彝族自治县" },
                { "value": "3613", "label": "镇沅彝族哈尼族拉祜族自治县" },
                { "value": "3614", "label": "景谷傣族彝族自治县" },
                { "value": "3615", "label": "墨江哈尼族自治县" },
                { "value": "3616", "label": "澜沧拉祜族自治县" },
                { "value": "3617", "label": "西盟佤族自治县" },
                { "value": "3618", "label": "江城哈尼族彝族自治县" },
                { "value": "3619", "label": "孟连傣族拉祜族佤族自治县" },
                { "value": "4845", "label": "思茅区" },
                { "value": "530830", "label": "其它区" }
            ]
        }, {
            "value": "3620",
            "label": "临沧",
            "children": [
                { "value": "3622", "label": "镇康县" },
                { "value": "3623", "label": "凤庆县" },
                { "value": "3624", "label": "云县" },
                { "value": "3625", "label": "永德县" },
                { "value": "3626", "label": "双江拉祜族佤族布朗族傣族自治县" },
                { "value": "3627", "label": "沧源佤族自治县" },
                { "value": "3628", "label": "耿马傣族佤族自治县" },
                { "value": "3783", "label": "临沧市" },
                { "value": "3621", "label": "临翔区" },
                { "value": "530928", "label": "其它区" }
            ]
        }, {
            "value": "3629",
            "label": "丽江",
            "children": [
                { "value": "3630", "label": "丽江市" },
                { "value": "3631", "label": "玉龙纳西族自治县" },
                { "value": "3632", "label": "华坪县" },
                { "value": "3633", "label": "永胜县" },
                { "value": "3634", "label": "宁蒗彝族自治县" },
                { "value": "4315", "label": "古城区" },
                { "value": "530725", "label": "其它区" }
            ]
        }, {
            "value": "3635",
            "label": "文山壮族苗族自治州",
            "children": [
                { "value": "3636", "label": "文山县" },
                { "value": "3637", "label": "麻栗坡县" },
                { "value": "3638", "label": "砚山县" },
                { "value": "3639", "label": "广南县" },
                { "value": "3640", "label": "马关县" },
                { "value": "3641", "label": "富宁县" },
                { "value": "3642", "label": "西畴县" },
                { "value": "3643", "label": "丘北县" }
            ]
        }, {
            "value": "3644",
            "label": "红河哈尼族彝族自治州",
            "children": [
                { "value": "3645", "label": "个旧市" },
                { "value": "3646", "label": "开远市" },
                { "value": "3647", "label": "弥勒县" },
                { "value": "3648", "label": "红河县" },
                { "value": "3649", "label": "绿春县" },
                { "value": "3650", "label": "蒙自县" },
                { "value": "3651", "label": "泸西县" },
                { "value": "3652", "label": "建水县" },
                { "value": "3653", "label": "元阳县" },
                { "value": "3654", "label": "石屏县" },
                { "value": "3656", "label": "河口瑶族自治县" },
                { "value": "3657", "label": "屏边苗族自治县" },
                { "value": "3655", "label": "金平苗族瑶族傣族自治县" }
            ]
        }, {
            "value": "3658",
            "label": "西双版纳傣族自治州",
            "children": [
                { "value": "3659", "label": "景洪市" },
                { "value": "3660", "label": "勐海县" },
                { "value": "3661", "label": "勐腊县" }
            ]
        }, {
            "value": "3662",
            "label": "楚雄彝族自治州",
            "children": [
                { "value": "3663", "label": "楚雄市" },
                { "value": "3664", "label": "元谋县" },
                { "value": "3665", "label": "南华县" },
                { "value": "3666", "label": "牟定县" },
                { "value": "3667", "label": "武定县" },
                { "value": "3668", "label": "大姚县" },
                { "value": "3669", "label": "双柏县" },
                { "value": "3670", "label": "禄丰县" },
                { "value": "3671", "label": "永仁县" },
                { "value": "3672", "label": "姚安县" }
            ]
        }, {
            "value": "3673",
            "label": "大理白族自治州",
            "children": [
                { "value": "3674", "label": "大理市" },
                { "value": "3675", "label": "剑川县" },
                { "value": "3676", "label": "弥渡县" },
                { "value": "3677", "label": "云龙县" },
                { "value": "3678", "label": "洱源县" },
                { "value": "3679", "label": "鹤庆县" },
                { "value": "3680", "label": "祥云县" },
                { "value": "3681", "label": "宾川县" },
                { "value": "3682", "label": "永平县" },
                { "value": "3683", "label": "漾濞彝族自治县" },
                { "value": "3684", "label": "巍山彝族回族自治县" },
                { "value": "3685", "label": "南涧彝族自治县" }
            ]
        }, {
            "value": "3686",
            "label": "德宏傣族景颇族自治州",
            "children": [
                { "value": "3687", "label": "潞西市" },
                { "value": "3688", "label": "瑞丽市" },
                { "value": "3689", "label": "盈江县" },
                { "value": "3690", "label": "梁河县" },
                { "value": "3691", "label": "陇川县" }
            ]
        }, {
            "value": "3692",
            "label": "怒江傈傈族自治州",
            "children": [
                { "value": "3693", "label": "泸水县" },
                { "value": "3694", "label": "福贡县" },
                { "value": "3695", "label": "兰坪白族普米族自治县" },
                { "value": "3696", "label": "贡山独龙族怒族自治县" }
            ]
        }, {
            "value": "3697",
            "label": "迪庆藏族自治州",
            "children": [
                { "value": "3698", "label": "香格里拉县" },
                { "value": "3699", "label": "德钦县" },
                { "value": "3700", "label": "维西傈僳族自治县" }
            ]
        }],
        "value": "3559",
        "label": "云南"
    }, {
        "children": [{
            "value": "1909",
            "label": "武汉",
            "children": [
                { "value": "1910", "label": "武汉市" },
                { "value": "4423", "label": "江岸区" },
                { "value": "4769", "label": "蔡甸区" },
                { "value": "4770", "label": "东西湖区" },
                { "value": "4771", "label": "汉南区" },
                { "value": "4772", "label": "汉阳区" },
                { "value": "4773", "label": "洪山区" },
                { "value": "4774", "label": "黄陂区" },
                { "value": "4775", "label": "江汉区" },
                { "value": "4776", "label": "江夏区" },
                { "value": "4777", "label": "硚口区" },
                { "value": "4778", "label": "青山区" },
                { "value": "4779", "label": "武昌区" },
                { "value": "4780", "label": "新洲区" },
                { "value": "420118", "label": "其它区" }
            ]
        }, {
            "value": "1911",
            "label": "黄石",
            "children": [
                { "value": "1912", "label": "黄石市" },
                { "value": "1913", "label": "大冶市" },
                { "value": "1914", "label": "阳新县" },
                { "value": "4421", "label": "铁山区" },
                { "value": "4759", "label": "黄石港区" },
                { "value": "4760", "label": "西塞山区" },
                { "value": "4761", "label": "下陆区" },
                { "value": "420282", "label": "其它区" }
            ]
        }, {
            "value": "1915",
            "label": "襄樊",
            "children": [
                { "value": "1920", "label": "南漳县" },
                { "value": "1916", "label": "襄樊市" },
                { "value": "1917", "label": "老河口市" },
                { "value": "1918", "label": "枣阳市" },
                { "value": "1919", "label": "宜城市" },
                { "value": "1921", "label": "谷城县" },
                { "value": "1922", "label": "保康县" },
                { "value": "4424", "label": "樊城区" },
                { "value": "4782", "label": "襄城区" },
                { "value": "4783", "label": "襄阳区" }
            ]
        }, {
            "value": "1923",
            "label": "十堰",
            "children": [
                { "value": "1924", "label": "十堰市" },
                { "value": "1925", "label": "丹江口市" },
                { "value": "1926", "label": "郧县" },
                { "value": "1927", "label": "竹山县" },
                { "value": "1928", "label": "房县" },
                { "value": "1929", "label": "郧西县" },
                { "value": "1930", "label": "竹溪县" },
                { "value": "4422", "label": "张湾区" },
                { "value": "4767", "label": "茅箭区" },
                { "value": "420383", "label": "其它区" }
            ]
        }, {
            "value": "1931",
            "label": "荆州",
            "children": [
                { "value": "1933", "label": "洪湖市" },
                { "value": "1932", "label": "荆州市" },
                { "value": "1934", "label": "石首市" },
                { "value": "1935", "label": "松滋市" },
                { "value": "1936", "label": "监利县" },
                { "value": "1937", "label": "公安县" },
                { "value": "1938", "label": "江陵县" },
                { "value": "4764", "label": "荆州区" },
                { "value": "4765", "label": "沙市区" },
                { "value": "421088", "label": "其它区" }
            ]
        }, {
            "value": "1939",
            "label": "宜昌",
            "children": [
                { "value": "1940", "label": "宜昌市" },
                { "value": "1941", "label": "宜都市" },
                { "value": "1942", "label": "当阳市" },
                { "value": "1943", "label": "枝江市" },
                { "value": "1944", "label": "秭归县" },
                { "value": "1945", "label": "远安县" },
                { "value": "1946", "label": "兴山县" },
                { "value": "1947", "label": "五峰土家族自治县" },
                { "value": "1948", "label": "长阳土家族自治县" },
                { "value": "4785", "label": "点军区" },
                { "value": "4786", "label": "伍家岗区" },
                { "value": "4787", "label": "西陵区" },
                { "value": "4788", "label": "猇亭区" },
                { "value": "4789", "label": "夷陵区" },
                { "value": "420551", "label": "葛洲坝区" },
                { "value": "420584", "label": "其它区" }
            ]
        }, {
            "value": "1949",
            "label": "荆门",
            "children": [
                { "value": "1950", "label": "荆门市" },
                { "value": "1951", "label": "钟祥市" },
                { "value": "1952", "label": "京山县" },
                { "value": "1953", "label": "沙洋县" },
                { "value": "4762", "label": "东宝区" },
                { "value": "4763", "label": "掇刀区" },
                { "value": "420882", "label": "其它区" }
            ]
        }, {
            "value": "1954",
            "label": "鄂州",
            "children": [
                { "value": "1955", "label": "鄂州市" },
                { "value": "4755", "label": "鄂城区" },
                { "value": "4756", "label": "华容区" },
                { "value": "4757", "label": "梁子湖区" },
                { "value": "420705", "label": "其它区" }
            ]
        }, {
            "value": "1956",
            "label": "孝感",
            "children": [
                { "value": "1957", "label": "孝感市" },
                { "value": "1958", "label": "应城市" },
                { "value": "1959", "label": "安陆市" },
                { "value": "1960", "label": "汉川市" },
                { "value": "1961", "label": "云梦县" },
                { "value": "1962", "label": "大悟县" },
                { "value": "1963", "label": "孝昌县" },
                { "value": "4784", "label": "孝南区" },
                { "value": "420985", "label": "其它区" }
            ]
        }, {
            "value": "1964",
            "label": "黄冈",
            "children": [
                { "value": "1965", "label": "黄冈市" },
                { "value": "1966", "label": "麻城市" },
                { "value": "1967", "label": "武穴市" },
                { "value": "1968", "label": "红安县" },
                { "value": "1969", "label": "罗田县" },
                { "value": "1970", "label": "浠水县" },
                { "value": "1971", "label": "蕲春县" },
                { "value": "1972", "label": "黄梅县" },
                { "value": "1973", "label": "英山县" },
                { "value": "1974", "label": "团风县" },
                { "value": "4758", "label": "黄州区" },
                { "value": "421183", "label": "其它区" }
            ]
        }, {
            "value": "1975",
            "label": "咸宁",
            "children": [
                { "value": "1976", "label": "咸宁市" },
                { "value": "1977", "label": "赤壁市" },
                { "value": "1978", "label": "嘉鱼县" },
                { "value": "1979", "label": "通山县" },
                { "value": "1980", "label": "崇阳县" },
                { "value": "1981", "label": "通城县" },
                { "value": "4781", "label": "咸安区" },
                { "value": "421282", "label": "温泉城区" },
                { "value": "421283", "label": "其它区" }
            ]
        }, {
            "value": "1982",
            "label": "随州",
            "children": [
                { "value": "1983", "label": "随州市" },
                { "value": "1984", "label": "广水市" },
                { "value": "4768", "label": "曾都区" },
                { "value": "421321", "label": "随县" },
                { "value": "421382", "label": "其它区" }
            ]
        }, {
            "value": "1985",
            "label": "仙桃",
            "children": [
                { "value": "1986", "label": "仙桃市" }
            ]
        }, {
            "value": "1987",
            "label": "天门",
            "children": [
                { "value": "1988", "label": "天门市" }
            ]
        }, {
            "value": "1989",
            "label": "潜江",
            "children": [
                { "value": "1990", "label": "潜江市" }
            ]
        }, {
            "value": "1991",
            "label": "神农架林区",
            "children": [
                { "value": "1992", "label": "神农架林区" },
                { "value": "4766", "label": "神农架林区" }
            ]
        }, {
            "value": "1993",
            "label": "恩施土家族苗族自治州",
            "children": [
                { "value": "1996", "label": "建始县" },
                { "value": "1994", "label": "恩施市" },
                { "value": "1995", "label": "利川市" },
                { "value": "1997", "label": "来凤县" },
                { "value": "1998", "label": "巴东县" },
                { "value": "1999", "label": "鹤峰县" },
                { "value": "2000", "label": "宣恩县" },
                { "value": "2001", "label": "咸丰县" }
            ]
        }],
        "value": "1908",
        "label": "湖北"
    }, {
        "children": [{
            "value": "2259",
            "label": "南昌",
            "children": [
                { "value": "2260", "label": "南昌市" },
                { "value": "2261", "label": "新建县" },
                { "value": "2262", "label": "南昌县" },
                { "value": "2263", "label": "进贤县" },
                { "value": "2264", "label": "安义县" },
                { "value": "4047", "label": "东湖区" },
                { "value": "4048", "label": "青山湖区" },
                { "value": "4049", "label": "青云谱区" },
                { "value": "4050", "label": "湾里区" },
                { "value": "4051", "label": "西湖区" },
                { "value": "360125", "label": "红谷滩新区" },
                { "value": "360127", "label": "昌北区" },
                { "value": "360128", "label": "其它区" }
            ]
        }, {
            "value": "2265",
            "label": "景德镇",
            "children": [
                { "value": "2266", "label": "景德镇市" },
                { "value": "2267", "label": "乐平市" },
                { "value": "2268", "label": "浮梁县" },
                { "value": "4044", "label": "昌江区" },
                { "value": "4045", "label": "珠山区" },
                { "value": "360282", "label": "其它区" }
            ]
        }, {
            "value": "2269",
            "label": "萍乡",
            "children": [
                { "value": "2271", "label": "莲花县" },
                { "value": "2270", "label": "萍乡市" },
                { "value": "2272", "label": "上栗县" },
                { "value": "2273", "label": "芦溪县" },
                { "value": "4052", "label": "安源区" },
                { "value": "4369", "label": "湘东区" },
                { "value": "360324", "label": "其它区" }
            ]
        }, {
            "value": "2274",
            "label": "新余",
            "children": [
                { "value": "2275", "label": "新余市" },
                { "value": "2276", "label": "分宜县" },
                { "value": "4054", "label": "渝水区" },
                { "value": "360522", "label": "其它区" }
            ]
        }, {
            "value": "2277",
            "label": "九江",
            "children": [
                { "value": "2278", "label": "九江市" },
                { "value": "2279", "label": "瑞昌市" },
                { "value": "2280", "label": "九江县" },
                { "value": "2281", "label": "星子县" },
                { "value": "2282", "label": "武宁县" },
                { "value": "2283", "label": "彭泽县" },
                { "value": "2284", "label": "永修县" },
                { "value": "2285", "label": "修水县" },
                { "value": "2286", "label": "湖口县" },
                { "value": "2287", "label": "德安县" },
                { "value": "2288", "label": "都昌县" },
                { "value": "4046", "label": "浔阳区" },
                { "value": "4368", "label": "庐山区" },
                { "value": "360482", "label": "其它区" }
            ]
        }, {
            "value": "2289",
            "label": "鹰潭",
            "children": [
                { "value": "2290", "label": "鹰潭市" },
                { "value": "2291", "label": "贵溪市" },
                { "value": "2292", "label": "余江县" },
                { "value": "4056", "label": "月湖区" },
                { "value": "360682", "label": "其它区" }
            ]
        }, {
            "value": "2293",
            "label": "赣州",
            "children": [
                { "value": "2294", "label": "赣州市" },
                { "value": "2295", "label": "瑞金市" },
                { "value": "2296", "label": "南康市" },
                { "value": "2297", "label": "石城县" },
                { "value": "2298", "label": "安远县" },
                { "value": "2299", "label": "赣县" },
                { "value": "2300", "label": "宁都县" },
                { "value": "2301", "label": "寻乌县" },
                { "value": "2302", "label": "兴国县" },
                { "value": "2303", "label": "定南县" },
                { "value": "2304", "label": "上犹县" },
                { "value": "2305", "label": "于都县" },
                { "value": "2306", "label": "龙南县" },
                { "value": "2307", "label": "崇义县" },
                { "value": "2308", "label": "信丰县" },
                { "value": "2309", "label": "全南县" },
                { "value": "2310", "label": "大余县" },
                { "value": "2311", "label": "会昌县" },
                { "value": "4041", "label": "章贡区" },
                { "value": "360751", "label": "黄金区" },
                { "value": "360783", "label": "其它区" }
            ]
        }, {
            "value": "2312",
            "label": "吉安",
            "children": [
                { "value": "2314", "label": "井冈山市" },
                { "value": "2313", "label": "吉安市" },
                { "value": "2315", "label": "吉安县" },
                { "value": "2316", "label": "永丰县" },
                { "value": "2317", "label": "永新县" },
                { "value": "2318", "label": "新干县" },
                { "value": "2319", "label": "泰和县" },
                { "value": "2320", "label": "峡江县" },
                { "value": "2321", "label": "遂川县" },
                { "value": "2322", "label": "安福县" },
                { "value": "2323", "label": "吉水县" },
                { "value": "2324", "label": "万安县" },
                { "value": "4042", "label": "吉州区" },
                { "value": "4043", "label": "青原区" },
                { "value": "360882", "label": "其它区" }
            ]
        }, {
            "value": "2325",
            "label": "宜春",
            "children": [
                { "value": "2327", "label": "丰城市" },
                { "value": "2326", "label": "宜春市" },
                { "value": "2328", "label": "樟树市" },
                { "value": "2329", "label": "高安市" },
                { "value": "2330", "label": "铜鼓县" },
                { "value": "2331", "label": "靖安县" },
                { "value": "2332", "label": "宜丰县" },
                { "value": "2333", "label": "奉新县" },
                { "value": "2334", "label": "万载县" },
                { "value": "2335", "label": "上高县" },
                { "value": "4055", "label": "袁州区" },
                { "value": "360984", "label": "其它区" }
            ]
        }, {
            "value": "2336",
            "label": "抚州",
            "children": [
                { "value": "2340", "label": "金溪县" },
                { "value": "2337", "label": "抚州市" },
                { "value": "2338", "label": "南丰县" },
                { "value": "2339", "label": "乐安县" },
                { "value": "2341", "label": "南城县" },
                { "value": "2342", "label": "东乡县" },
                { "value": "2343", "label": "资溪县" },
                { "value": "2344", "label": "宜黄县" },
                { "value": "2345", "label": "广昌县" },
                { "value": "2346", "label": "黎川县" },
                { "value": "2347", "label": "崇仁县" },
                { "value": "4040", "label": "临川区" },
                { "value": "361031", "label": "其它区" }
            ]
        }, {
            "value": "2348",
            "label": "上饶",
            "children": [
                { "value": "2349", "label": "上饶市" },
                { "value": "2350", "label": "德兴市" },
                { "value": "2351", "label": "上饶县" },
                { "value": "2352", "label": "广丰县" },
                { "value": "2353", "label": "鄱阳县" },
                { "value": "2354", "label": "婺源县" },
                { "value": "2355", "label": "铅山县" },
                { "value": "2356", "label": "余干县" },
                { "value": "2357", "label": "横峰县" },
                { "value": "2358", "label": "弋阳县" },
                { "value": "2359", "label": "玉山县" },
                { "value": "2360", "label": "万年县" },
                { "value": "4053", "label": "信州区" },
                { "value": "361182", "label": "其它区" }
            ]
        }],
        "value": "2258",
        "label": "江西"
    }, {
        "children": [{
            "value": "3263",
            "label": "重庆",
            "children": [
                { "value": "3264", "label": "重庆市" },
                { "value": "3269", "label": "綦江县" },
                { "value": "3270", "label": "潼南县" },
                { "value": "3271", "label": "荣昌县" },
                { "value": "3272", "label": "璧山县" },
                { "value": "3273", "label": "大足县" },
                { "value": "3275", "label": "梁平县" },
                { "value": "3276", "label": "城口县" },
                { "value": "3277", "label": "垫江县" },
                { "value": "3278", "label": "武隆县" },
                { "value": "3279", "label": "丰都县" },
                { "value": "3280", "label": "奉节县" },
                { "value": "3281", "label": "开县" },
                { "value": "3282", "label": "云阳县" },
                { "value": "3283", "label": "忠县" },
                { "value": "3284", "label": "巫溪县" },
                { "value": "3285", "label": "巫山县" },
                { "value": "3286", "label": "石柱土家族自治县" },
                { "value": "3287", "label": "秀山土家族苗族自治县" },
                { "value": "3288", "label": "酉阳土家族苗族自治县" },
                { "value": "3289", "label": "彭水苗族土家族自治县" },
                { "value": "3274", "label": "铜梁县" },
                { "value": "3265", "label": "永川区" },
                { "value": "3266", "label": "合川区" },
                { "value": "3267", "label": "江津区" },
                { "value": "3268", "label": "南川区" },
                { "value": "4351", "label": "巴南区" },
                { "value": "4352", "label": "北碚区" },
                { "value": "4353", "label": "长寿区" },
                { "value": "4354", "label": "大渡口区" },
                { "value": "4355", "label": "涪陵区" },
                { "value": "4356", "label": "江北区" },
                { "value": "4357", "label": "九龙坡区" },
                { "value": "4358", "label": "南岸区" },
                { "value": "4359", "label": "黔江区" },
                { "value": "4360", "label": "沙坪坝区" },
                { "value": "4361", "label": "双桥区" },
                { "value": "4362", "label": "万盛区" },
                { "value": "4363", "label": "万州区" },
                { "value": "4364", "label": "渝北区" },
                { "value": "4365", "label": "渝中区" },
                { "value": "10002", "label": "高新区" },
                { "value": "10003", "label": "北部新区" },
                { "value": "10004", "label": "经济技术开发区" },
                { "value": "500385", "label": "其它区" }
            ]
        }],
        "value": "3262",
        "label": "重庆"
    }, {
        "children": [{
            "value": "2537",
            "label": "银川",
            "children": [
                { "value": "2538", "label": "银川市" },
                { "value": "2539", "label": "永宁县" },
                { "value": "2540", "label": "贺兰县" },
                { "value": "2541", "label": "灵武市" },
                { "value": "4128", "label": "金凤区" },
                { "value": "4129", "label": "西夏区" },
                { "value": "4130", "label": "兴庆区" },
                { "value": "640182", "label": "其它区" }
            ]
        }, {
            "value": "2542",
            "label": "石嘴山",
            "children": [
                { "value": "2543", "label": "石嘴山市" },
                { "value": "2544", "label": "平罗县" },
                { "value": "2546", "label": "惠农区" },
                { "value": "4126", "label": "大武口区" },
                { "value": "640222", "label": "其它区" }
            ]
        }, {
            "value": "2547",
            "label": "吴忠",
            "children": [
                { "value": "2548", "label": "吴忠市" },
                { "value": "2549", "label": "青铜峡市" },
                { "value": "2550", "label": "同心县" },
                { "value": "2551", "label": "盐池县" },
                { "value": "4127", "label": "利通区" },
                { "value": "640303", "label": "红寺堡区" },
                { "value": "640382", "label": "其它区" }
            ]
        }, {
            "value": "2552",
            "label": "中卫",
            "children": [
                { "value": "3702", "label": "中卫市" },
                { "value": "2553", "label": "中宁县" },
                { "value": "2556", "label": "海原县" },
                { "value": "4131", "label": "沙坡头区" },
                { "value": "640523", "label": "其它区" }
            ]
        }, {
            "value": "2554",
            "label": "固原",
            "children": [
                { "value": "2555", "label": "固原市" },
                { "value": "2557", "label": "西吉县" },
                { "value": "2558", "label": "隆德县" },
                { "value": "2559", "label": "泾源县" },
                { "value": "2560", "label": "彭阳县" },
                { "value": "4125", "label": "原州区" },
                { "value": "640426", "label": "其它区" }
            ]
        }],
        "value": "2536",
        "label": "宁夏"
    }, {
        "children": [{
            "value": "2562",
            "label": "西宁",
            "children": [
                { "value": "2563", "label": "西宁市" },
                { "value": "2564", "label": "湟源县" },
                { "value": "2565", "label": "湟中县" },
                { "value": "2566", "label": "大通回族土族自治县" },
                { "value": "4132", "label": "城北区" },
                { "value": "4133", "label": "城东区" },
                { "value": "4134", "label": "城西区" },
                { "value": "4378", "label": "城中区" },
                { "value": "630124", "label": "其它区" }
            ]
        }, {
            "value": "2567",
            "label": "海东",
            "children": [
                { "value": "2568", "label": "平安县" },
                { "value": "2569", "label": "乐都县" },
                { "value": "2570", "label": "民和回族土族自治县" },
                { "value": "2571", "label": "互助土族自治县" },
                { "value": "2572", "label": "化隆回族自治县" },
                { "value": "2573", "label": "循化撒拉族自治县" }
            ]
        }, {
            "value": "2574",
            "label": "海北藏族自治州",
            "children": [
                { "value": "2575", "label": "海晏县" },
                { "value": "2576", "label": "祁连县" },
                { "value": "2577", "label": "刚察县" },
                { "value": "2578", "label": "门源回族自治县" }
            ]
        }, {
            "value": "2579",
            "label": "黄南藏族自治州",
            "children": [
                { "value": "2580", "label": "同仁县" },
                { "value": "2581", "label": "泽库县" },
                { "value": "2582", "label": "尖扎县" },
                { "value": "2583", "label": "河南蒙古族自治县" }
            ]
        }, {
            "value": "2584",
            "label": "海南藏族自治州",
            "children": [
                { "value": "2587", "label": "贵德县" },
                { "value": "2585", "label": "共和县" },
                { "value": "2586", "label": "同德县" },
                { "value": "2588", "label": "兴海县" },
                { "value": "2589", "label": "贵南县" }
            ]
        }, {
            "value": "2590",
            "label": "果洛藏族自治州",
            "children": [
                { "value": "2591", "label": "玛沁县" },
                { "value": "2592", "label": "班玛县" },
                { "value": "2593", "label": "甘德县" },
                { "value": "2594", "label": "达日县" },
                { "value": "2595", "label": "久治县" },
                { "value": "2596", "label": "玛多县" }
            ]
        }, {
            "value": "2597",
            "label": "玉树藏族自治州",
            "children": [
                { "value": "2599", "label": "杂多县" },
                { "value": "2598", "label": "玉树县" },
                { "value": "2600", "label": "称多县" },
                { "value": "2601", "label": "治多县" },
                { "value": "2602", "label": "囊谦县" },
                { "value": "2603", "label": "曲麻莱县" }
            ]
        }, {
            "value": "2604",
            "label": "海西蒙古族藏族自治州",
            "children": [
                { "value": "2605", "label": "德令哈市" },
                { "value": "2606", "label": "格尔木市" },
                { "value": "2607", "label": "乌兰县" },
                { "value": "2608", "label": "天峻县" },
                { "value": "2609", "label": "都兰县" }
            ]
        }],
        "value": "2561",
        "label": "青海"
    }, {
        "children": [{
            "value": "2611",
            "label": "上海",
            "children": [
                { "value": "2612", "label": "上海市" },
                { "value": "2613", "label": "崇明县" },
                { "value": "4221", "label": "宝山区" },
                { "value": "4222", "label": "长宁区" },
                { "value": "4223", "label": "奉贤区" },
                { "value": "4224", "label": "虹口区" },
                { "value": "4225", "label": "黄浦区" },
                { "value": "4226", "label": "嘉定区" },
                { "value": "4227", "label": "金山区" },
                { "value": "4228", "label": "静安区" },
                { "value": "4229", "label": "卢湾区" },
                { "value": "4230", "label": "闵行区" },
                { "value": "4231", "label": "南汇区" },
                { "value": "4232", "label": "浦东新区" },
                { "value": "4233", "label": "普陀区" },
                { "value": "4234", "label": "青浦区" },
                { "value": "4235", "label": "松江区" },
                { "value": "4236", "label": "徐汇区" },
                { "value": "4237", "label": "杨浦区" },
                { "value": "4238", "label": "闸北区" },
                { "value": "310152", "label": "川沙区" },
                { "value": "310231", "label": "其它区" }
            ]
        }],
        "value": "2610",
        "label": "上海"
    }, {
        "children": [{
            "value": "2615",
            "label": "广州",
            "children": [
                { "value": "2616", "label": "广州市" },
                { "value": "2617", "label": "从化市" },
                { "value": "2618", "label": "增城市" },
                { "value": "4398", "label": "海珠区" },
                { "value": "4532", "label": "白云区" },
                { "value": "4533", "label": "番禺区" },
                { "value": "4534", "label": "花都区" },
                { "value": "4535", "label": "黄埔区" },
                { "value": "4536", "label": "荔湾区" },
                { "value": "4537", "label": "萝岗区" },
                { "value": "4538", "label": "南沙区" },
                { "value": "4539", "label": "天河区" },
                { "value": "4540", "label": "越秀区" },
                { "value": "440189", "label": "其它区" }
            ]
        }, {
            "value": "2619",
            "label": "深圳",
            "children": [
                { "value": "2620", "label": "深圳市" },
                { "value": "4402", "label": "南山区" },
                { "value": "4558", "label": "宝安区" },
                { "value": "4559", "label": "福田区" },
                { "value": "4560", "label": "龙岗区" },
                { "value": "4561", "label": "罗湖区" },
                { "value": "4562", "label": "盐田区" },
                { "value": "440309", "label": "其它区" }
            ]
        }, {
            "value": "2621",
            "label": "珠海",
            "children": [
                { "value": "2622", "label": "珠海市" },
                { "value": "4570", "label": "斗门区" },
                { "value": "4571", "label": "金湾区" },
                { "value": "4572", "label": "香洲区" },
                { "value": "440486", "label": "金唐区" },
                { "value": "440487", "label": "南湾区" },
                { "value": "440488", "label": "其它区" }
            ]
        }, {
            "value": "2623",
            "label": "汕头",
            "children": [
                { "value": "2624", "label": "汕头市" },
                { "value": "2627", "label": "南澳县" },
                { "value": "4550", "label": "潮南区" },
                { "value": "4551", "label": "潮阳区" },
                { "value": "4552", "label": "澄海区" },
                { "value": "4553", "label": "濠江区" },
                { "value": "4554", "label": "金平区" },
                { "value": "4555", "label": "龙湖区" },
                { "value": "440524", "label": "其它区" }
            ]
        }, {
            "value": "2628",
            "label": "韶关",
            "children": [
                { "value": "2629", "label": "韶关市" },
                { "value": "2630", "label": "乐昌市" },
                { "value": "2631", "label": "南雄市" },
                { "value": "2632", "label": "仁化县" },
                { "value": "2633", "label": "始兴县" },
                { "value": "2634", "label": "翁源县" },
                { "value": "2636", "label": "新丰县" },
                { "value": "2637", "label": "乳源瑶族自治县" },
                { "value": "2635", "label": "曲江区" },
                { "value": "4556", "label": "武江区" },
                { "value": "4557", "label": "浈江区" },
                { "value": "440283", "label": "其它区" }
            ]
        }, {
            "value": "2638",
            "label": "河源",
            "children": [
                { "value": "2643", "label": "连平县" },
                { "value": "2639", "label": "河源市" },
                { "value": "2640", "label": "和平县" },
                { "value": "2641", "label": "龙川县" },
                { "value": "2642", "label": "紫金县" },
                { "value": "2644", "label": "东源县" },
                { "value": "4541", "label": "源城区" },
                { "value": "441626", "label": "其它区" }
            ]
        }, {
            "value": "2645",
            "label": "梅州",
            "children": [
                { "value": "2646", "label": "梅州市" },
                { "value": "2647", "label": "兴宁市" },
                { "value": "2648", "label": "梅县" },
                { "value": "2649", "label": "蕉岭县" },
                { "value": "2650", "label": "大埔县" },
                { "value": "2651", "label": "丰顺县" },
                { "value": "2652", "label": "五华县" },
                { "value": "2653", "label": "平远县" },
                { "value": "4400", "label": "梅江区" },
                { "value": "441482", "label": "其它区" }
            ]
        }, {
            "value": "2654",
            "label": "惠州",
            "children": [
                { "value": "2655", "label": "惠州市" },
                { "value": "2657", "label": "惠东县" },
                { "value": "2658", "label": "博罗县" },
                { "value": "2659", "label": "龙门县" },
                { "value": "4399", "label": "惠城区" },
                { "value": "4542", "label": "惠阳区" },
                { "value": "441325", "label": "其它区" }
            ]
        }, {
            "value": "2660",
            "label": "汕尾",
            "children": [
                { "value": "2661", "label": "汕尾市" },
                { "value": "2662", "label": "陆丰市" },
                { "value": "2663", "label": "海丰县" },
                { "value": "2664", "label": "陆河县" },
                { "value": "4401", "label": "城区" },
                { "value": "441582", "label": "其它区" }
            ]
        }, {
            "value": "2665",
            "label": "东莞",
            "children": [
                { "value": "2666", "label": "东莞市" }
            ]
        }, {
            "value": "2667",
            "label": "中山",
            "children": [
                { "value": "2668", "label": "中山市" }
            ]
        }, {
            "value": "2669",
            "label": "江门",
            "children": [
                { "value": "2670", "label": "江门市" },
                { "value": "2671", "label": "台山市" },
                { "value": "2672", "label": "开平市" },
                { "value": "2673", "label": "鹤山市" },
                { "value": "2674", "label": "恩平市" },
                { "value": "4543", "label": "江海区" },
                { "value": "4544", "label": "蓬江区" },
                { "value": "4545", "label": "新会区" },
                { "value": "440786", "label": "其它区" }
            ]
        }, {
            "value": "2675",
            "label": "佛山",
            "children": [
                { "value": "2676", "label": "佛山市" },
                { "value": "4527", "label": "禅城区" },
                { "value": "4528", "label": "高明区" },
                { "value": "4529", "label": "南海区" },
                { "value": "4530", "label": "三水区" },
                { "value": "4531", "label": "顺德区" },
                { "value": "440609", "label": "其它区" }
            ]
        }, {
            "value": "2677",
            "label": "阳江",
            "children": [
                { "value": "2678", "label": "阳江市" },
                { "value": "2679", "label": "阳春市" },
                { "value": "2680", "label": "阳西县" },
                { "value": "2681", "label": "阳东县" },
                { "value": "4563", "label": "江城区" },
                { "value": "441782", "label": "其它区" }
            ]
        }, {
            "value": "2682",
            "label": "湛江",
            "children": [
                { "value": "2683", "label": "湛江市" },
                { "value": "2684", "label": "廉江市" },
                { "value": "2685", "label": "雷州市" },
                { "value": "2686", "label": "吴川市" },
                { "value": "2687", "label": "遂溪县" },
                { "value": "2688", "label": "徐闻县" },
                { "value": "4565", "label": "赤坎区" },
                { "value": "4566", "label": "麻章区" },
                { "value": "4567", "label": "坡头区" },
                { "value": "4568", "label": "霞山区" },
                { "value": "440884", "label": "其它区" }
            ]
        }, {
            "value": "2689",
            "label": "茂名",
            "children": [
                { "value": "2690", "label": "茂名市" },
                { "value": "2691", "label": "高州市" },
                { "value": "2692", "label": "化州市" },
                { "value": "2693", "label": "信宜市" },
                { "value": "2694", "label": "电白县" },
                { "value": "4547", "label": "茂港区" },
                { "value": "4548", "label": "茂南区" },
                { "value": "440984", "label": "其它区" }
            ]
        }, {
            "value": "2695",
            "label": "肇庆",
            "children": [
                { "value": "2696", "label": "肇庆市" },
                { "value": "2697", "label": "高要市" },
                { "value": "2698", "label": "四会市" },
                { "value": "2699", "label": "广宁县" },
                { "value": "2700", "label": "德庆县" },
                { "value": "2701", "label": "封开县" },
                { "value": "2702", "label": "怀集县" },
                { "value": "4403", "label": "鼎湖区" },
                { "value": "4569", "label": "端州区" },
                { "value": "441285", "label": "其它区" }
            ]
        }, {
            "value": "2703",
            "label": "清远",
            "children": [
                { "value": "2704", "label": "清远市" },
                { "value": "2705", "label": "英德市" },
                { "value": "2706", "label": "连州市" },
                { "value": "2707", "label": "佛冈县" },
                { "value": "2708", "label": "阳山县" },
                { "value": "2709", "label": "清新县" },
                { "value": "2710", "label": "连山壮族瑶族自治县" },
                { "value": "2711", "label": "连南瑶族自治县" },
                { "value": "4549", "label": "清城区" },
                { "value": "441883", "label": "其它区" }
            ]
        }, {
            "value": "2712",
            "label": "潮州",
            "children": [
                { "value": "2713", "label": "潮州市" },
                { "value": "2714", "label": "潮安县" },
                { "value": "2715", "label": "饶平县" },
                { "value": "4397", "label": "湘桥区" },
                { "value": "445185", "label": "枫溪区" },
                { "value": "445186", "label": "其它区" }
            ]
        }, {
            "value": "2716",
            "label": "揭阳",
            "children": [
                { "value": "2717", "label": "揭阳市" },
                { "value": "2718", "label": "普宁市" },
                { "value": "2719", "label": "揭东县" },
                { "value": "2720", "label": "揭西县" },
                { "value": "2721", "label": "惠来县" },
                { "value": "4546", "label": "榕城区" },
                { "value": "445285", "label": "其它区" }
            ]
        }, {
            "value": "2722",
            "label": "云浮",
            "children": [
                { "value": "2723", "label": "云浮市" },
                { "value": "2724", "label": "罗定市" },
                { "value": "2725", "label": "云安县" },
                { "value": "2726", "label": "新兴县" },
                { "value": "2727", "label": "郁南县" },
                { "value": "4564", "label": "云城区" },
                { "value": "445382", "label": "其它区" }
            ]
        }],
        "value": "2614",
        "label": "广东"
    }, {
        "children": [{
            "value": "2729",
            "label": "太原",
            "children": [
                { "value": "2734", "label": "娄烦县" },
                { "value": "2730", "label": "太原市" },
                { "value": "2731", "label": "古交市" },
                { "value": "2732", "label": "阳曲县" },
                { "value": "2733", "label": "清徐县" },
                { "value": "4189", "label": "尖草坪区" },
                { "value": "4190", "label": "晋源区" },
                { "value": "4191", "label": "万柏林区" },
                { "value": "4192", "label": "小店区" },
                { "value": "4193", "label": "杏花岭区" },
                { "value": "4386", "label": "迎泽区" },
                { "value": "140182", "label": "其它区" }
            ]
        }, {
            "value": "2735",
            "label": "大同",
            "children": [
                { "value": "2736", "label": "大同市" },
                { "value": "2737", "label": "大同县" },
                { "value": "2738", "label": "天镇县" },
                { "value": "2739", "label": "灵丘县" },
                { "value": "2740", "label": "阳高县" },
                { "value": "2741", "label": "左云县" },
                { "value": "2742", "label": "广灵县" },
                { "value": "2743", "label": "浑源县" },
                { "value": "4180", "label": "城区" },
                { "value": "4181", "label": "矿区" },
                { "value": "4182", "label": "南郊区" },
                { "value": "4183", "label": "新荣区" },
                { "value": "140228", "label": "其它区" }
            ]
        }, {
            "value": "2744",
            "label": "阳泉",
            "children": [
                { "value": "2745", "label": "阳泉市" },
                { "value": "2746", "label": "平定县" },
                { "value": "2747", "label": "盂县" },
                { "value": "4195", "label": "城区" },
                { "value": "4196", "label": "郊区" },
                { "value": "4197", "label": "矿区" },
                { "value": "140323", "label": "其它区" }
            ]
        }, {
            "value": "2748",
            "label": "长治",
            "children": [
                { "value": "2749", "label": "长治市" },
                { "value": "2750", "label": "潞城市" },
                { "value": "2751", "label": "长治县" },
                { "value": "2752", "label": "长子县" },
                { "value": "2753", "label": "平顺县" },
                { "value": "2754", "label": "襄垣县" },
                { "value": "2755", "label": "沁源县" },
                { "value": "2756", "label": "屯留县" },
                { "value": "2757", "label": "黎城县" },
                { "value": "2758", "label": "武乡县" },
                { "value": "2759", "label": "沁县" },
                { "value": "2760", "label": "壶关县" },
                { "value": "4179", "label": "城区" },
                { "value": "4384", "label": "郊区" },
                { "value": "140485", "label": "其它区" }
            ]
        }, {
            "value": "2761",
            "label": "晋城",
            "children": [
                { "value": "2762", "label": "晋城市" },
                { "value": "2763", "label": "高平市" },
                { "value": "2764", "label": "泽州县" },
                { "value": "2765", "label": "陵川县" },
                { "value": "2766", "label": "阳城县" },
                { "value": "2767", "label": "沁水县" },
                { "value": "4184", "label": "城区" },
                { "value": "140582", "label": "其它区" }
            ]
        }, {
            "value": "2768",
            "label": "朔州",
            "children": [
                { "value": "2769", "label": "朔州市" },
                { "value": "2770", "label": "山阴县" },
                { "value": "2771", "label": "右玉县" },
                { "value": "2772", "label": "应县" },
                { "value": "2773", "label": "怀仁县" },
                { "value": "4187", "label": "平鲁区" },
                { "value": "4188", "label": "朔城区" },
                { "value": "140625", "label": "其它区" }
            ]
        }, {
            "value": "2774",
            "label": "晋中",
            "children": [
                { "value": "2783", "label": "和顺县" },
                { "value": "2775", "label": "晋中市" },
                { "value": "2776", "label": "介休市" },
                { "value": "2777", "label": "昔阳县" },
                { "value": "2778", "label": "灵石县" },
                { "value": "2779", "label": "祁县" },
                { "value": "2780", "label": "左权县" },
                { "value": "2781", "label": "寿阳县" },
                { "value": "2782", "label": "太谷县" },
                { "value": "2784", "label": "平遥县" },
                { "value": "2785", "label": "榆社县" },
                { "value": "4185", "label": "榆次区" },
                { "value": "140782", "label": "其它区" }
            ]
        }, {
            "value": "2786",
            "label": "忻州",
            "children": [
                { "value": "2795", "label": "静乐县" },
                { "value": "2787", "label": "忻州市" },
                { "value": "2788", "label": "原平市" },
                { "value": "2789", "label": "代县" },
                { "value": "2790", "label": "神池县" },
                { "value": "2791", "label": "五寨县" },
                { "value": "2792", "label": "五台县" },
                { "value": "2793", "label": "偏关县" },
                { "value": "2794", "label": "宁武县" },
                { "value": "2796", "label": "繁峙县" },
                { "value": "2797", "label": "河曲县" },
                { "value": "2798", "label": "保德县" },
                { "value": "2799", "label": "定襄县" },
                { "value": "2800", "label": "岢岚县" },
                { "value": "4194", "label": "忻府区" },
                { "value": "140982", "label": "其它区" }
            ]
        }, {
            "value": "2801",
            "label": "临汾",
            "children": [
                { "value": "2808", "label": "大宁县" },
                { "value": "2802", "label": "临汾市" },
                { "value": "2803", "label": "侯马市" },
                { "value": "2804", "label": "霍州市" },
                { "value": "2805", "label": "汾西县" },
                { "value": "2806", "label": "吉县" },
                { "value": "2807", "label": "安泽县" },
                { "value": "2809", "label": "浮山县" },
                { "value": "2810", "label": "古县" },
                { "value": "2811", "label": "隰县" },
                { "value": "2812", "label": "襄汾县" },
                { "value": "2813", "label": "翼城县" },
                { "value": "2814", "label": "永和县" },
                { "value": "2815", "label": "乡宁县" },
                { "value": "2816", "label": "曲沃县" },
                { "value": "2817", "label": "洪洞县" },
                { "value": "2818", "label": "蒲县" },
                { "value": "4186", "label": "尧都区" },
                { "value": "141083", "label": "其它区" }
            ]
        }, {
            "value": "2819",
            "label": "运城",
            "children": [
                { "value": "2820", "label": "运城市" },
                { "value": "2821", "label": "河津市" },
                { "value": "2822", "label": "永济市" },
                { "value": "2823", "label": "闻喜县" },
                { "value": "2824", "label": "新绛县" },
                { "value": "2825", "label": "平陆县" },
                { "value": "2826", "label": "垣曲县" },
                { "value": "2827", "label": "绛县" },
                { "value": "2828", "label": "稷山县" },
                { "value": "2829", "label": "芮城县" },
                { "value": "2830", "label": "夏县" },
                { "value": "2831", "label": "万荣县" },
                { "value": "2832", "label": "临猗县" },
                { "value": "4198", "label": "盐湖区" },
                { "value": "140883", "label": "其它区" }
            ]
        }, {
            "value": "2833",
            "label": "吕梁",
            "children": [
                { "value": "3701", "label": "吕梁市" },
                { "value": "2835", "label": "孝义市" },
                { "value": "2836", "label": "汾阳市" },
                { "value": "2837", "label": "文水县" },
                { "value": "2838", "label": "中阳县" },
                { "value": "2839", "label": "兴县" },
                { "value": "2840", "label": "临县" },
                { "value": "2841", "label": "方山县" },
                { "value": "2842", "label": "柳林县" },
                { "value": "2843", "label": "岚县" },
                { "value": "2844", "label": "交口县" },
                { "value": "2845", "label": "交城县" },
                { "value": "2846", "label": "石楼县" },
                { "value": "4385", "label": "离石区" },
                { "value": "141183", "label": "其它区" }
            ]
        }],
        "value": "2728",
        "label": "山西"
    }, {
        "children": [{
            "value": "2848",
            "label": "济南",
            "children": [
                { "value": "2849", "label": "济南市" },
                { "value": "2850", "label": "章丘市" },
                { "value": "2851", "label": "平阴县" },
                { "value": "2852", "label": "济阳县" },
                { "value": "2853", "label": "商河县" },
                { "value": "4140", "label": "长清区" },
                { "value": "4141", "label": "槐荫区" },
                { "value": "4142", "label": "历城区" },
                { "value": "4143", "label": "市中区" },
                { "value": "4144", "label": "天桥区" },
                { "value": "4379", "label": "历下区" },
                { "value": "370182", "label": "其它区" }
            ]
        }, {
            "value": "2854",
            "label": "青岛",
            "children": [
                { "value": "2855", "label": "青岛市" },
                { "value": "2856", "label": "胶南市" },
                { "value": "2857", "label": "胶州市" },
                { "value": "2858", "label": "平度市" },
                { "value": "2859", "label": "莱西市" },
                { "value": "2860", "label": "即墨市" },
                { "value": "4152", "label": "城阳区" },
                { "value": "4153", "label": "黄岛区" },
                { "value": "4154", "label": "崂山区" },
                { "value": "4155", "label": "李沧区" },
                { "value": "4156", "label": "市北区" },
                { "value": "4157", "label": "四方区" },
                { "value": "4381", "label": "市南区" },
                { "value": "370286", "label": "其它区" }
            ]
        }, {
            "value": "2861",
            "label": "淄博",
            "children": [
                { "value": "2862", "label": "淄博市" },
                { "value": "2863", "label": "桓台县" },
                { "value": "2864", "label": "高青县" },
                { "value": "2865", "label": "沂源县" },
                { "value": "4174", "label": "博山区" },
                { "value": "4175", "label": "临淄区" },
                { "value": "4176", "label": "张店区" },
                { "value": "4177", "label": "周村区" },
                { "value": "4178", "label": "淄川区" },
                { "value": "370324", "label": "其它区" }
            ]
        }, {
            "value": "2866",
            "label": "枣庄",
            "children": [
                { "value": "2867", "label": "枣庄市" },
                { "value": "2868", "label": "滕州市" },
                { "value": "4170", "label": "山亭区" },
                { "value": "4171", "label": "市中区" },
                { "value": "4172", "label": "薛城区" },
                { "value": "4173", "label": "峄城区" },
                { "value": "4383", "label": "台儿庄区" },
                { "value": "370482", "label": "其它区" }
            ]
        }, {
            "value": "2869",
            "label": "东营",
            "children": [
                { "value": "2870", "label": "东营市" },
                { "value": "2871", "label": "垦利县" },
                { "value": "2872", "label": "广饶县" },
                { "value": "2873", "label": "利津县" },
                { "value": "4137", "label": "东营区" },
                { "value": "4138", "label": "河口区" },
                { "value": "370591", "label": "其它区" }
            ]
        }, {
            "value": "2874",
            "label": "潍坊",
            "children": [
                { "value": "2875", "label": "潍坊市" },
                { "value": "2876", "label": "青州市" },
                { "value": "2877", "label": "诸城市" },
                { "value": "2878", "label": "寿光市" },
                { "value": "2879", "label": "安丘市" },
                { "value": "2880", "label": "高密市" },
                { "value": "2881", "label": "昌邑市" },
                { "value": "2882", "label": "昌乐县" },
                { "value": "2883", "label": "临朐县" },
                { "value": "4163", "label": "坊子区" },
                { "value": "4164", "label": "寒亭区" },
                { "value": "4165", "label": "潍城区" },
                { "value": "4382", "label": "奎文区" },
                { "value": "10011", "label": "开发区" },
                { "value": "370787", "label": "其它区" }
            ]
        }, {
            "value": "2884",
            "label": "烟台",
            "children": [
                { "value": "2885", "label": "烟台市" },
                { "value": "2886", "label": "龙口市" },
                { "value": "2887", "label": "莱阳市" },
                { "value": "2888", "label": "莱州市" },
                { "value": "2889", "label": "招远市" },
                { "value": "2890", "label": "蓬莱市" },
                { "value": "2891", "label": "栖霞市" },
                { "value": "2892", "label": "海阳市" },
                { "value": "2893", "label": "长岛县" },
                { "value": "4166", "label": "福山区" },
                { "value": "4167", "label": "莱山区" },
                { "value": "4168", "label": "牟平区" },
                { "value": "4169", "label": "芝罘区" },
                { "value": "370688", "label": "其它区" }
            ]
        }, {
            "value": "2894",
            "label": "威海",
            "children": [
                { "value": "2895", "label": "威海市" },
                { "value": "2896", "label": "乳山市" },
                { "value": "2897", "label": "文登市" },
                { "value": "2898", "label": "荣成市" },
                { "value": "4162", "label": "环翠区" },
                { "value": "371084", "label": "其它区" }
            ]
        }, {
            "value": "2899",
            "label": "济宁",
            "children": [
                { "value": "2900", "label": "济宁市" },
                { "value": "2901", "label": "曲阜市" },
                { "value": "2902", "label": "兖州市" },
                { "value": "2903", "label": "邹城市" },
                { "value": "2904", "label": "鱼台县" },
                { "value": "2905", "label": "金乡县" },
                { "value": "2906", "label": "嘉祥县" },
                { "value": "2907", "label": "微山县" },
                { "value": "2908", "label": "汶上县" },
                { "value": "2909", "label": "泗水县" },
                { "value": "2910", "label": "梁山县" },
                { "value": "4145", "label": "任城区" },
                { "value": "4146", "label": "市中区" },
                { "value": "370884", "label": "其它区" }
            ]
        }, {
            "value": "2911",
            "label": "泰安",
            "children": [
                { "value": "2912", "label": "泰安市" },
                { "value": "2913", "label": "新泰市" },
                { "value": "2914", "label": "肥城市" },
                { "value": "2915", "label": "宁阳县" },
                { "value": "2916", "label": "东平县" },
                { "value": "4160", "label": "岱岳区" },
                { "value": "4161", "label": "泰山区" },
                { "value": "370984", "label": "其它区" }
            ]
        }, {
            "value": "2917",
            "label": "日照",
            "children": [
                { "value": "2918", "label": "日照市" },
                { "value": "2919", "label": "五莲县" },
                { "value": "2920", "label": "莒县" },
                { "value": "4158", "label": "东港区" },
                { "value": "4159", "label": "岚山区" },
                { "value": "371123", "label": "其它区" }
            ]
        }, {
            "value": "2921",
            "label": "莱芜",
            "children": [
                { "value": "2922", "label": "莱芜市" },
                { "value": "4147", "label": "钢城区" },
                { "value": "4148", "label": "莱城区" },
                { "value": "371204", "label": "其它区" }
            ]
        }, {
            "value": "2923",
            "label": "德州",
            "children": [
                { "value": "2929", "label": "齐河县" },
                { "value": "2924", "label": "德州市" },
                { "value": "2925", "label": "乐陵市" },
                { "value": "2926", "label": "禹城市" },
                { "value": "2927", "label": "陵县" },
                { "value": "2928", "label": "宁津县" },
                { "value": "2930", "label": "武城县" },
                { "value": "2931", "label": "庆云县" },
                { "value": "2932", "label": "平原县" },
                { "value": "2933", "label": "夏津县" },
                { "value": "2934", "label": "临邑县" },
                { "value": "4136", "label": "德城区" },
                { "value": "371483", "label": "其它区" }
            ]
        }, {
            "value": "2935",
            "label": "临沂",
            "children": [
                { "value": "2939", "label": "沂水县" },
                { "value": "2940", "label": "苍山县" },
                { "value": "2942", "label": "平邑县" },
                { "value": "2943", "label": "莒南县" },
                { "value": "2944", "label": "蒙阴县" },
                { "value": "2945", "label": "临沭县" },
                { "value": "2941", "label": "费县" },
                { "value": "2936", "label": "临沂市" },
                { "value": "2937", "label": "沂南县" },
                { "value": "2938", "label": "郯城县" },
                { "value": "4150", "label": "兰山区" },
                { "value": "4151", "label": "罗庄区" },
                { "value": "4380", "label": "河东区" },
                { "value": "371330", "label": "其它区" }
            ]
        }, {
            "value": "2946",
            "label": "聊城",
            "children": [
                { "value": "2947", "label": "聊城市" },
                { "value": "2948", "label": "临清市" },
                { "value": "2949", "label": "高唐县" },
                { "value": "2950", "label": "阳谷县" },
                { "value": "2951", "label": "茌平县" },
                { "value": "2952", "label": "莘县" },
                { "value": "2953", "label": "东阿县" },
                { "value": "2954", "label": "冠县" },
                { "value": "4149", "label": "东昌府区" },
                { "value": "371582", "label": "其它区" }
            ]
        }, {
            "value": "2955",
            "label": "滨州",
            "children": [
                { "value": "2956", "label": "滨州市" },
                { "value": "2957", "label": "邹平县" },
                { "value": "2958", "label": "沾化县" },
                { "value": "2959", "label": "惠民县" },
                { "value": "2960", "label": "博兴县" },
                { "value": "2961", "label": "阳信县" },
                { "value": "2962", "label": "无棣县" },
                { "value": "4135", "label": "滨城区" },
                { "value": "10012", "label": "经济开发区" },
                { "value": "371627", "label": "其它区" }
            ]
        }, {
            "value": "2963",
            "label": "菏泽",
            "children": [
                { "value": "2964", "label": "菏泽市" },
                { "value": "2965", "label": "鄄城县" },
                { "value": "2966", "label": "单县" },
                { "value": "2967", "label": "郓城县" },
                { "value": "2968", "label": "曹县" },
                { "value": "2969", "label": "定陶县" },
                { "value": "2970", "label": "巨野县" },
                { "value": "2971", "label": "东明县" },
                { "value": "2972", "label": "成武县" },
                { "value": "4139", "label": "牡丹区" },
                { "value": "371729", "label": "其它区" }
            ]
        }],
        "value": "2847",
        "label": "山东"
    }, {
        "children": [{
            "value": "1003",
            "label": "合肥",
            "children": [
                { "value": "1004", "label": "合肥市" },
                { "value": "1005", "label": "长丰县" },
                { "value": "1006", "label": "肥东县" },
                { "value": "1007", "label": "肥西县" },
                { "value": "4448", "label": "包河区" },
                { "value": "4449", "label": "庐阳区" },
                { "value": "4450", "label": "蜀山区" },
                { "value": "4451", "label": "瑶海区" },
                { "value": "340191", "label": "中区" },
                { "value": "340192", "label": "其它区" }
            ]
        }, {
            "value": "1008",
            "label": "芜湖",
            "children": [
                { "value": "1009", "label": "芜湖市" },
                { "value": "1010", "label": "芜湖县" },
                { "value": "1011", "label": "南陵县" },
                { "value": "1012", "label": "繁昌县" },
                { "value": "4471", "label": "镜湖区" },
                { "value": "4472", "label": "鸠江区" },
                { "value": "4473", "label": "三山区" },
                { "value": "4474", "label": "弋江区" },
                { "value": "340224", "label": "其它区" }
            ]
        }, {
            "value": "1013",
            "label": "蚌埠",
            "children": [
                { "value": "1014", "label": "蚌埠市" },
                { "value": "1015", "label": "怀远县" },
                { "value": "1016", "label": "固镇县" },
                { "value": "1017", "label": "五河县" },
                { "value": "4436", "label": "蚌山区" },
                { "value": "4437", "label": "淮上区" },
                { "value": "4438", "label": "龙子湖区" },
                { "value": "4439", "label": "禹会区" },
                { "value": "340324", "label": "其它区" }
            ]
        }, {
            "value": "1018",
            "label": "淮南",
            "children": [
                { "value": "1019", "label": "淮南市" },
                { "value": "1020", "label": "凤台县" },
                { "value": "4455", "label": "八公山区" },
                { "value": "4456", "label": "大通区" },
                { "value": "4457", "label": "潘集区" },
                { "value": "4458", "label": "田家庵区" },
                { "value": "4459", "label": "谢家集区" },
                { "value": "340422", "label": "其它区" }
            ]
        }, {
            "value": "1021",
            "label": "马鞍山",
            "children": [
                { "value": "1022", "label": "马鞍山市" },
                { "value": "1023", "label": "当涂县" },
                { "value": "4389", "label": "雨山区" },
                { "value": "4465", "label": "花山区" },
                { "value": "4466", "label": "金家庄区" },
                { "value": "340522", "label": "其它区" }
            ]
        }, {
            "value": "1024",
            "label": "淮北",
            "children": [
                { "value": "1025", "label": "淮北市" },
                { "value": "1026", "label": "濉溪县" },
                { "value": "4452", "label": "杜集区" },
                { "value": "4453", "label": "烈山区" },
                { "value": "4454", "label": "相山区" },
                { "value": "340622", "label": "其它区" }
            ]
        }, {
            "value": "1027",
            "label": "铜陵",
            "children": [
                { "value": "1028", "label": "铜陵市" },
                { "value": "1029", "label": "铜陵县" },
                { "value": "4468", "label": "郊区" },
                { "value": "4469", "label": "狮子山区" },
                { "value": "4470", "label": "铜官山区" },
                { "value": "340722", "label": "其它区" }
            ]
        }, {
            "value": "1030",
            "label": "安庆",
            "children": [
                { "value": "1031", "label": "安庆市" },
                { "value": "1032", "label": "桐城市" },
                { "value": "1033", "label": "宿松县" },
                { "value": "1034", "label": "枞阳县" },
                { "value": "1035", "label": "太湖县" },
                { "value": "1036", "label": "怀宁县" },
                { "value": "1037", "label": "岳西县" },
                { "value": "1038", "label": "望江县" },
                { "value": "1039", "label": "潜山县" },
                { "value": "4433", "label": "大观区" },
                { "value": "4434", "label": "宜秀区" },
                { "value": "4435", "label": "迎江区" },
                { "value": "340882", "label": "其它区" }
            ]
        }, {
            "value": "1040",
            "label": "黄山",
            "children": [
                { "value": "1043", "label": "歙县" },
                { "value": "1041", "label": "黄山市" },
                { "value": "1042", "label": "休宁县" },
                { "value": "1044", "label": "祁门县" },
                { "value": "1045", "label": "黟县" },
                { "value": "4460", "label": "黄山区" },
                { "value": "4461", "label": "徽州区" },
                { "value": "4462", "label": "屯溪区" },
                { "value": "341025", "label": "其它区" }
            ]
        }, {
            "value": "1046",
            "label": "滁州",
            "children": [
                { "value": "1047", "label": "滁州市" },
                { "value": "1048", "label": "天长市" },
                { "value": "1049", "label": "明光市" },
                { "value": "1050", "label": "全椒县" },
                { "value": "1051", "label": "来安县" },
                { "value": "1052", "label": "定远县" },
                { "value": "1053", "label": "凤阳县" },
                { "value": "4443", "label": "琅琊区" },
                { "value": "4444", "label": "南谯区" },
                { "value": "341183", "label": "其它区" }
            ]
        }, {
            "value": "1054",
            "label": "阜阳",
            "children": [
                { "value": "1055", "label": "阜阳市" },
                { "value": "1056", "label": "界首市" },
                { "value": "1057", "label": "临泉县" },
                { "value": "1058", "label": "颍上县" },
                { "value": "1059", "label": "阜南县" },
                { "value": "1060", "label": "太和县" },
                { "value": "4445", "label": "颍东区" },
                { "value": "4446", "label": "颍泉区" },
                { "value": "4447", "label": "颍州区" },
                { "value": "341283", "label": "其它区" }
            ]
        }, {
            "value": "1061",
            "label": "宿州",
            "children": [
                { "value": "1066", "label": "灵璧县" },
                { "value": "1062", "label": "宿州市" },
                { "value": "1063", "label": "萧县" },
                { "value": "1064", "label": "泗县" },
                { "value": "1065", "label": "砀山县" },
                { "value": "4467", "label": "埇桥区" },
                { "value": "341325", "label": "其它区" }
            ]
        }, {
            "value": "1067",
            "label": "巢湖",
            "children": [
                { "value": "1068", "label": "巢湖市" },
                { "value": "1069", "label": "含山县" },
                { "value": "1070", "label": "无为县" },
                { "value": "1071", "label": "庐江县" },
                { "value": "1072", "label": "和县" },
                { "value": "4441", "label": "居巢区" }
            ]
        }, {
            "value": "1073",
            "label": "六安",
            "children": [
                { "value": "1074", "label": "六安市" },
                { "value": "1075", "label": "寿县" },
                { "value": "1076", "label": "霍山县" },
                { "value": "1077", "label": "霍邱县" },
                { "value": "1078", "label": "舒城县" },
                { "value": "1079", "label": "金寨县" },
                { "value": "4463", "label": "金安区" },
                { "value": "4464", "label": "裕安区" },
                { "value": "341526", "label": "其它区" }
            ]
        }, {
            "value": "1080",
            "label": "亳州",
            "children": [
                { "value": "1081", "label": "亳州市" },
                { "value": "1082", "label": "利辛县" },
                { "value": "1083", "label": "涡阳县" },
                { "value": "1084", "label": "蒙城县" },
                { "value": "4440", "label": "谯城区" },
                { "value": "341624", "label": "其它区" }
            ]
        }, {
            "value": "1085",
            "label": "池州",
            "children": [
                { "value": "1086", "label": "池州市" },
                { "value": "1087", "label": "东至县" },
                { "value": "1088", "label": "石台县" },
                { "value": "1089", "label": "青阳县" },
                { "value": "4442", "label": "贵池区" },
                { "value": "341724", "label": "其它区" }
            ]
        }, {
            "value": "1090",
            "label": "宣城",
            "children": [
                { "value": "1091", "label": "宣城市" },
                { "value": "1092", "label": "宁国市" },
                { "value": "1093", "label": "广德县" },
                { "value": "1094", "label": "郎溪县" },
                { "value": "1095", "label": "泾县" },
                { "value": "1096", "label": "旌德县" },
                { "value": "1097", "label": "绩溪县" },
                { "value": "4475", "label": "宣州区" },
                { "value": "341882", "label": "其它区" }
            ]
        }],
        "value": "1002",
        "label": "安徽"
    }, {
        "children": [{
            "value": "1099",
            "label": "北京",
            "children": [
                { "value": "1100", "label": "北京市" },
                { "value": "1101", "label": "密云县" },
                { "value": "1102", "label": "延庆县" },
                { "value": "4390", "label": "昌平区" },
                { "value": "4391", "label": "怀柔区" },
                { "value": "4476", "label": "朝阳区" },
                { "value": "4477", "label": "崇文区" },
                { "value": "4478", "label": "大兴区" },
                { "value": "4479", "label": "东城区" },
                { "value": "4480", "label": "房山区" },
                { "value": "4481", "label": "丰台区" },
                { "value": "4482", "label": "海淀区" },
                { "value": "4483", "label": "门头沟区" },
                { "value": "4484", "label": "平谷区" },
                { "value": "4485", "label": "石景山区" },
                { "value": "4486", "label": "顺义区" },
                { "value": "4487", "label": "通州区" },
                { "value": "4488", "label": "西城区" },
                { "value": "4489", "label": "宣武区" },
                { "value": "110230", "label": "其它区" }
            ]
        }],
        "value": "1098",
        "label": "北京"
    }, {
        "children": [{
            "value": "1104",
            "label": "福州",
            "children": [
                { "value": "1107", "label": "长乐市" },
                { "value": "1105", "label": "福州市" },
                { "value": "1106", "label": "福清市" },
                { "value": "1108", "label": "闽侯县" },
                { "value": "1109", "label": "闽清县" },
                { "value": "1110", "label": "永泰县" },
                { "value": "1111", "label": "连江县" },
                { "value": "1112", "label": "罗源县" },
                { "value": "1113", "label": "平潭县" },
                { "value": "4392", "label": "鼓楼区" },
                { "value": "4490", "label": "仓山区" },
                { "value": "4491", "label": "晋安区" },
                { "value": "4492", "label": "马尾区" },
                { "value": "4493", "label": "台江区" },
                { "value": "350183", "label": "其它区" }
            ]
        }, {
            "value": "1114",
            "label": "厦门",
            "children": [
                { "value": "1115", "label": "厦门市" },
                { "value": "4505", "label": "海沧区" },
                { "value": "4506", "label": "湖里区" },
                { "value": "4507", "label": "集美区" },
                { "value": "4508", "label": "思明区" },
                { "value": "4509", "label": "同安区" },
                { "value": "4510", "label": "翔安区" },
                { "value": "350214", "label": "其它区" }
            ]
        }, {
            "value": "1116",
            "label": "三明",
            "children": [
                { "value": "1120", "label": "将乐县" },
                { "value": "1117", "label": "三明市" },
                { "value": "1118", "label": "永安市" },
                { "value": "1119", "label": "明溪县" },
                { "value": "1121", "label": "大田县" },
                { "value": "1122", "label": "宁化县" },
                { "value": "1123", "label": "建宁县" },
                { "value": "1124", "label": "沙县" },
                { "value": "1125", "label": "尤溪县" },
                { "value": "1126", "label": "清流县" },
                { "value": "1127", "label": "泰宁县" },
                { "value": "4394", "label": "三元区" },
                { "value": "4504", "label": "梅列区" },
                { "value": "350482", "label": "其它区" }
            ]
        }, {
            "value": "1128",
            "label": "莆田",
            "children": [
                { "value": "1129", "label": "莆田市" },
                { "value": "1130", "label": "仙游县" },
                { "value": "4393", "label": "涵江区" },
                { "value": "4497", "label": "城厢区" },
                { "value": "4498", "label": "荔城区" },
                { "value": "4499", "label": "秀屿区" },
                { "value": "350323", "label": "其它区" }
            ]
        }, {
            "value": "1131",
            "label": "泉州",
            "children": [
                { "value": "1132", "label": "泉州市" },
                { "value": "1133", "label": "石狮市" },
                { "value": "1134", "label": "晋江市" },
                { "value": "1135", "label": "南安市" },
                { "value": "1136", "label": "惠安县" },
                { "value": "1137", "label": "永春县" },
                { "value": "1138", "label": "安溪县" },
                { "value": "1139", "label": "德化县" },
                { "value": "1140", "label": "金门县" },
                { "value": "4500", "label": "丰泽区" },
                { "value": "4501", "label": "鲤城区" },
                { "value": "4502", "label": "洛江区" },
                { "value": "4503", "label": "泉港区" },
                { "value": "350584", "label": "其它区" }
            ]
        }, {
            "value": "1141",
            "label": "漳州",
            "children": [
                { "value": "1142", "label": "漳州市" },
                { "value": "1143", "label": "龙海市" },
                { "value": "1144", "label": "平和县" },
                { "value": "1145", "label": "南靖县" },
                { "value": "1146", "label": "诏安县" },
                { "value": "1147", "label": "漳浦县" },
                { "value": "1148", "label": "华安县" },
                { "value": "1149", "label": "东山县" },
                { "value": "1150", "label": "长泰县" },
                { "value": "1151", "label": "云霄县" },
                { "value": "4511", "label": "龙文区" },
                { "value": "4512", "label": "芗城区" },
                { "value": "350682", "label": "其它区" }
            ]
        }, {
            "value": "1152",
            "label": "南平",
            "children": [
                { "value": "1153", "label": "南平市" },
                { "value": "1154", "label": "建瓯市" },
                { "value": "1155", "label": "邵武市" },
                { "value": "1156", "label": "武夷山市" },
                { "value": "1157", "label": "建阳市" },
                { "value": "1158", "label": "松溪县" },
                { "value": "1159", "label": "光泽县" },
                { "value": "1160", "label": "顺昌县" },
                { "value": "1161", "label": "浦城县" },
                { "value": "1162", "label": "政和县" },
                { "value": "4495", "label": "延平区" },
                { "value": "350785", "label": "其它区" }
            ]
        }, {
            "value": "1163",
            "label": "龙岩",
            "children": [
                { "value": "1164", "label": "龙岩市" },
                { "value": "1165", "label": "漳平市" },
                { "value": "1166", "label": "长汀县" },
                { "value": "1167", "label": "武平县" },
                { "value": "1168", "label": "上杭县" },
                { "value": "1169", "label": "永定县" },
                { "value": "1170", "label": "连城县" },
                { "value": "4494", "label": "新罗区" },
                { "value": "350882", "label": "其它区" }
            ]
        }, {
            "value": "1171",
            "label": "宁德",
            "children": [
                { "value": "1173", "label": "福安市" },
                { "value": "1172", "label": "宁德市" },
                { "value": "1174", "label": "福鼎市" },
                { "value": "1175", "label": "寿宁县" },
                { "value": "1176", "label": "霞浦县" },
                { "value": "1177", "label": "柘荣县" },
                { "value": "1178", "label": "屏南县" },
                { "value": "1179", "label": "古田县" },
                { "value": "1180", "label": "周宁县" },
                { "value": "4496", "label": "蕉城区" },
                { "value": "350983", "label": "其它区" }
            ]
        }],
        "value": "1103",
        "label": "福建"
    }, {
        "children": [{
            "value": "1182",
            "label": "兰州",
            "children": [
                { "value": "1186", "label": "皋兰县" },
                { "value": "1183", "label": "兰州市" },
                { "value": "1184", "label": "永登县" },
                { "value": "1185", "label": "榆中县" },
                { "value": "4396", "label": "七里河区" },
                { "value": "4517", "label": "安宁区" },
                { "value": "4518", "label": "城关区" },
                { "value": "4519", "label": "红古区" },
                { "value": "4520", "label": "西固区" },
                { "value": "620124", "label": "其它区" }
            ]
        }, {
            "value": "1187",
            "label": "金昌",
            "children": [
                { "value": "1188", "label": "金昌市" },
                { "value": "1189", "label": "永昌县" },
                { "value": "4515", "label": "金川区" },
                { "value": "620322", "label": "其它区" }
            ]
        }, {
            "value": "1190",
            "label": "白银",
            "children": [
                { "value": "1191", "label": "白银市" },
                { "value": "1192", "label": "靖远县" },
                { "value": "1193", "label": "景泰县" },
                { "value": "1194", "label": "会宁县" },
                { "value": "4395", "label": "白银区" },
                { "value": "4513", "label": "平川区" },
                { "value": "620424", "label": "其它区" }
            ]
        }, {
            "value": "1195",
            "label": "天水",
            "children": [
                { "value": "1198", "label": "甘谷县" },
                { "value": "1196", "label": "天水市" },
                { "value": "1197", "label": "武山县" },
                { "value": "1199", "label": "清水县" },
                { "value": "1200", "label": "秦安县" },
                { "value": "1201", "label": "张家川回族自治县" },
                { "value": "4523", "label": "北道区" },
                { "value": "4524", "label": "秦城区" },
                { "value": "620502", "label": "秦州区" },
                { "value": "620503", "label": "麦积区" },
                { "value": "620526", "label": "其它区" }
            ]
        }, {
            "value": "1202",
            "label": "嘉峪关",
            "children": [
                { "value": "1203", "label": "嘉峪关市" }
            ]
        }, {
            "value": "1204",
            "label": "武威",
            "children": [
                { "value": "1205", "label": "武威市" },
                { "value": "1206", "label": "民勤县" },
                { "value": "1207", "label": "古浪县" },
                { "value": "1208", "label": "天祝藏族自治县" },
                { "value": "4525", "label": "凉州区" },
                { "value": "620624", "label": "其它区" }
            ]
        }, {
            "value": "1209",
            "label": "张掖",
            "children": [
                { "value": "1210", "label": "张掖市" },
                { "value": "1211", "label": "民乐县" },
                { "value": "1212", "label": "山丹县" },
                { "value": "1213", "label": "临泽县" },
                { "value": "1214", "label": "高台县" },
                { "value": "1215", "label": "肃南裕固族自治县" },
                { "value": "4526", "label": "甘州区" },
                { "value": "620726", "label": "其它区" }
            ]
        }, {
            "value": "1216",
            "label": "平凉",
            "children": [
                { "value": "1217", "label": "平凉市" },
                { "value": "1218", "label": "灵台县" },
                { "value": "1219", "label": "静宁县" },
                { "value": "1220", "label": "崇信县" },
                { "value": "1221", "label": "华亭县" },
                { "value": "1222", "label": "泾川县" },
                { "value": "1223", "label": "庄浪县" },
                { "value": "4521", "label": "崆峒区" },
                { "value": "620827", "label": "其它区" }
            ]
        }, {
            "value": "1224",
            "label": "酒泉",
            "children": [
                { "value": "1225", "label": "酒泉市" },
                { "value": "1226", "label": "玉门市" },
                { "value": "1227", "label": "敦煌市" },
                { "value": "1228", "label": "瓜州县" },
                { "value": "1229", "label": "金塔县" },
                { "value": "1230", "label": "阿克塞哈萨克族自治县" },
                { "value": "1231", "label": "肃北蒙古族自治县" },
                { "value": "4516", "label": "肃州区" },
                { "value": "620922", "label": "安西县" },
                { "value": "620983", "label": "其它区" }
            ]
        }, {
            "value": "1232",
            "label": "庆阳",
            "children": [
                { "value": "1233", "label": "庆阳市" },
                { "value": "1234", "label": "庆城县" },
                { "value": "1235", "label": "镇原县" },
                { "value": "1236", "label": "合水县" },
                { "value": "1237", "label": "华池县" },
                { "value": "1238", "label": "环县" },
                { "value": "1239", "label": "宁县" },
                { "value": "1240", "label": "正宁县" },
                { "value": "4522", "label": "西峰区" },
                { "value": "621028", "label": "其它区" }
            ]
        }, {
            "value": "1241",
            "label": "定西",
            "children": [
                { "value": "1247", "label": "漳县" },
                { "value": "1242", "label": "定西市" },
                { "value": "1243", "label": "岷县" },
                { "value": "1244", "label": "渭源县" },
                { "value": "1245", "label": "陇西县" },
                { "value": "1246", "label": "通渭县" },
                { "value": "1248", "label": "临洮县" },
                { "value": "4514", "label": "安定区" },
                { "value": "621127", "label": "其它区" }
            ]
        }, {
            "value": "1249",
            "label": "陇南",
            "children": [
                { "value": "1253", "label": "武都区" },
                { "value": "3784", "label": "陇南市" },
                { "value": "1250", "label": "成县" },
                { "value": "1251", "label": "礼县" },
                { "value": "1252", "label": "康县" },
                { "value": "1254", "label": "文县" },
                { "value": "1255", "label": "两当县" },
                { "value": "1256", "label": "徽县" },
                { "value": "1257", "label": "宕昌县" },
                { "value": "1258", "label": "西和县" },
                { "value": "621229", "label": "其它区" }
            ]
        }, {
            "value": "1259",
            "label": "甘南藏族自治州",
            "children": [
                { "value": "1260", "label": "合作市" },
                { "value": "1261", "label": "临潭县" },
                { "value": "1262", "label": "卓尼县" },
                { "value": "1263", "label": "舟曲县" },
                { "value": "1264", "label": "迭部县" },
                { "value": "1265", "label": "玛曲县" },
                { "value": "1266", "label": "碌曲县" },
                { "value": "1267", "label": "夏河县" }
            ]
        }, {
            "value": "1268",
            "label": "临夏回族自治州",
            "children": [
                { "value": "1273", "label": "广河县" },
                { "value": "1269", "label": "临夏市" },
                { "value": "1270", "label": "临夏县" },
                { "value": "1271", "label": "康乐县" },
                { "value": "1272", "label": "永靖县" },
                { "value": "1274", "label": "和政县" },
                { "value": "1275", "label": "东乡族自治县" },
                { "value": "1276", "label": "积石山保安族东乡族撒拉族自治县" }
            ]
        }],
        "value": "1181",
        "label": "甘肃"
    }, {
        "children": [{
            "value": "1278",
            "label": "南宁",
            "children": [
                { "value": "1280", "label": "邕宁区" },
                { "value": "1279", "label": "南宁市" },
                { "value": "1281", "label": "武鸣县" },
                { "value": "1282", "label": "隆安县" },
                { "value": "1283", "label": "马山县" },
                { "value": "1284", "label": "上林县" },
                { "value": "1285", "label": "宾阳县" },
                { "value": "1286", "label": "横县" },
                { "value": "4407", "label": "钦南区" },
                { "value": "4592", "label": "江南区" },
                { "value": "4593", "label": "良庆区" },
                { "value": "4594", "label": "青秀区" },
                { "value": "4595", "label": "西乡塘区" },
                { "value": "4596", "label": "兴宁区" },
                { "value": "4597", "label": "钦北区" },
                { "value": "4598", "label": "长洲区" },
                { "value": "4599", "label": "蝶山区" },
                { "value": "4600", "label": "万秀区" },
                { "value": "4601", "label": "玉州区" },
                { "value": "450128", "label": "其它区" }
            ]
        }, {
            "value": "1287",
            "label": "柳州",
            "children": [
                { "value": "1288", "label": "柳州市" },
                { "value": "1289", "label": "柳江县" },
                { "value": "1290", "label": "柳城县" },
                { "value": "1291", "label": "鹿寨县" },
                { "value": "1292", "label": "融安县" },
                { "value": "1293", "label": "融水苗族自治县" },
                { "value": "1294", "label": "三江侗族自治县" },
                { "value": "4406", "label": "柳南区" },
                { "value": "4589", "label": "城中区" },
                { "value": "4590", "label": "柳北区" },
                { "value": "4591", "label": "鱼峰区" },
                { "value": "450227", "label": "其它区" }
            ]
        }, {
            "value": "1295",
            "label": "桂林",
            "children": [
                { "value": "1296", "label": "桂林市" },
                { "value": "1297", "label": "阳朔县" },
                { "value": "1298", "label": "临桂县" },
                { "value": "1299", "label": "灵川县" },
                { "value": "1300", "label": "全州县" },
                { "value": "1301", "label": "平乐县" },
                { "value": "1302", "label": "兴安县" },
                { "value": "1303", "label": "灌阳县" },
                { "value": "1304", "label": "荔蒲县" },
                { "value": "1305", "label": "资源县" },
                { "value": "1306", "label": "永福县" },
                { "value": "1307", "label": "龙胜各族自治县" },
                { "value": "1308", "label": "恭城瑶族自治县" },
                { "value": "4405", "label": "象山区" },
                { "value": "4582", "label": "叠彩区" },
                { "value": "4583", "label": "七星区" },
                { "value": "4584", "label": "秀峰区" },
                { "value": "4585", "label": "雁山区" },
                { "value": "450331", "label": "荔浦县" },
                { "value": "450333", "label": "其它区" }
            ]
        }, {
            "value": "1309",
            "label": "梧州",
            "children": [
                { "value": "1313", "label": "藤县" },
                { "value": "1310", "label": "梧州市" },
                { "value": "1311", "label": "岑溪市" },
                { "value": "1312", "label": "苍梧县" },
                { "value": "1314", "label": "蒙山县" },
                { "value": "450482", "label": "其它区" }
            ]
        }, {
            "value": "1315",
            "label": "北海",
            "children": [
                { "value": "1316", "label": "北海市" },
                { "value": "1317", "label": "合浦县" },
                { "value": "4574", "label": "海城区" },
                { "value": "4575", "label": "铁山港区" },
                { "value": "4576", "label": "银海区" },
                { "value": "450522", "label": "其它区" }
            ]
        }, {
            "value": "1318",
            "label": "防城港",
            "children": [
                { "value": "1319", "label": "防城港市" },
                { "value": "1320", "label": "东兴市" },
                { "value": "1321", "label": "上思县" },
                { "value": "4577", "label": "防城区" },
                { "value": "4578", "label": "港口区" },
                { "value": "450682", "label": "其它区" }
            ]
        }, {
            "value": "1322",
            "label": "钦州",
            "children": [
                { "value": "1325", "label": "浦北县" },
                { "value": "1323", "label": "钦州市" },
                { "value": "1324", "label": "灵山县" },
                { "value": "450723", "label": "其它区" }
            ]
        }, {
            "value": "1326",
            "label": "贵港",
            "children": [
                { "value": "1327", "label": "贵港市" },
                { "value": "1328", "label": "桂平市" },
                { "value": "1329", "label": "平南县" },
                { "value": "4579", "label": "港北区" },
                { "value": "4580", "label": "港南区" },
                { "value": "4581", "label": "覃塘区" },
                { "value": "450882", "label": "其它区" }
            ]
        }, {
            "value": "1330",
            "label": "玉林",
            "children": [
                { "value": "1331", "label": "玉林市" },
                { "value": "1332", "label": "北流市" },
                { "value": "1333", "label": "容县" },
                { "value": "1334", "label": "陆川县" },
                { "value": "1335", "label": "博白县" },
                { "value": "1336", "label": "兴业县" },
                { "value": "450982", "label": "其它区" }
            ]
        }, {
            "value": "1337",
            "label": "百色",
            "children": [
                { "value": "1338", "label": "百色市" },
                { "value": "1339", "label": "凌云县" },
                { "value": "1340", "label": "平果县" },
                { "value": "1341", "label": "西林县" },
                { "value": "1342", "label": "乐业县" },
                { "value": "1343", "label": "德保县" },
                { "value": "1344", "label": "田林县" },
                { "value": "1345", "label": "田阳县" },
                { "value": "1346", "label": "靖西县" },
                { "value": "1347", "label": "田东县" },
                { "value": "1348", "label": "那坡县" },
                { "value": "1349", "label": "隆林各族自治县" },
                { "value": "4573", "label": "右江区" },
                { "value": "451032", "label": "其它区" }
            ]
        }, {
            "value": "1350",
            "label": "贺州",
            "children": [
                { "value": "1351", "label": "贺州市" },
                { "value": "1352", "label": "钟山县" },
                { "value": "1353", "label": "昭平县" },
                { "value": "1354", "label": "富川瑶族自治县" },
                { "value": "4587", "label": "八步区" },
                { "value": "451124", "label": "其它区" }
            ]
        }, {
            "value": "1355",
            "label": "河池",
            "children": [
                { "value": "1356", "label": "河池市" },
                { "value": "1357", "label": "宜州市" },
                { "value": "1358", "label": "天峨县" },
                { "value": "1359", "label": "凤山县" },
                { "value": "1360", "label": "南丹县" },
                { "value": "1361", "label": "东兰县" },
                { "value": "1362", "label": "都安瑶族自治县" },
                { "value": "1363", "label": "罗城仫佬族自治县" },
                { "value": "1364", "label": "巴马瑶族自治县" },
                { "value": "1365", "label": "环江毛南族自治县" },
                { "value": "1366", "label": "大化瑶族自治县" },
                { "value": "4586", "label": "金城江区" },
                { "value": "451282", "label": "其它区" }
            ]
        }, {
            "value": "1367",
            "label": "来宾",
            "children": [
                { "value": "1368", "label": "来宾市" },
                { "value": "1369", "label": "合山市" },
                { "value": "1370", "label": "象州县" },
                { "value": "1371", "label": "武宣县" },
                { "value": "1372", "label": "忻城县" },
                { "value": "1373", "label": "金秀瑶族自治县" },
                { "value": "4588", "label": "兴宾区" },
                { "value": "451382", "label": "其它区" }
            ]
        }, {
            "value": "1374",
            "label": "崇左",
            "children": [
                { "value": "1375", "label": "崇左市" },
                { "value": "1376", "label": "凭祥市" },
                { "value": "1377", "label": "扶绥县" },
                { "value": "1378", "label": "大新县" },
                { "value": "1379", "label": "天等县" },
                { "value": "1380", "label": "宁明县" },
                { "value": "1381", "label": "龙州县" },
                { "value": "4404", "label": "江洲区" },
                { "value": "451402", "label": "江州区" },
                { "value": "451482", "label": "其它区" }
            ]
        }],
        "value": "1277",
        "label": "广西"
    }, {
        "children": [{
            "value": "1383",
            "label": "贵阳",
            "children": [
                { "value": "1385", "label": "清镇市" },
                { "value": "1384", "label": "贵阳市" },
                { "value": "1386", "label": "开阳县" },
                { "value": "1387", "label": "修文县" },
                { "value": "1388", "label": "息烽县" },
                { "value": "4408", "label": "南明区" },
                { "value": "4603", "label": "白云区" },
                { "value": "4604", "label": "花溪区" },
                { "value": "4605", "label": "乌当区" },
                { "value": "4606", "label": "小河区" },
                { "value": "4607", "label": "云岩区" },
                { "value": "520151", "label": "金阳开发区" },
                { "value": "520182", "label": "其它区" }
            ]
        }, {
            "value": "1389",
            "label": "六盘水",
            "children": [
                { "value": "1390", "label": "六盘水市" },
                { "value": "1391", "label": "水城县" },
                { "value": "1392", "label": "盘县" },
                { "value": "1393", "label": "六枝特区" },
                { "value": "4608", "label": "六枝特区" },
                { "value": "4609", "label": "钟山区" },
                { "value": "520223", "label": "其它区" }
            ]
        }, {
            "value": "1394",
            "label": "遵义",
            "children": [
                { "value": "1397", "label": "仁怀市" },
                { "value": "1395", "label": "遵义市" },
                { "value": "1396", "label": "赤水市" },
                { "value": "1398", "label": "遵义县" },
                { "value": "1399", "label": "绥阳县" },
                { "value": "1400", "label": "桐梓县" },
                { "value": "1401", "label": "习水县" },
                { "value": "1402", "label": "凤冈县" },
                { "value": "1403", "label": "正安县" },
                { "value": "1404", "label": "余庆县" },
                { "value": "1405", "label": "湄潭县" },
                { "value": "1406", "label": "道真仡佬族苗族自治县" },
                { "value": "1407", "label": "务川仡佬族苗族自治县" },
                { "value": "4611", "label": "红花岗区" },
                { "value": "4612", "label": "汇川区" },
                { "value": "520383", "label": "其它区" }
            ]
        }, {
            "value": "1408",
            "label": "安顺",
            "children": [
                { "value": "1409", "label": "安顺市" },
                { "value": "1410", "label": "普定县" },
                { "value": "1411", "label": "平坝县" },
                { "value": "1412", "label": "镇宁布依族苗族自治县" },
                { "value": "1413", "label": "紫云苗族布依族自治县" },
                { "value": "1414", "label": "关岭布依族苗族自治县" },
                { "value": "4602", "label": "西秀区" },
                { "value": "520426", "label": "其它区" }
            ]
        }, {
            "value": "1415",
            "label": "铜仁",
            "children": [
                { "value": "1416", "label": "铜仁市" },
                { "value": "1417", "label": "德江县" },
                { "value": "1418", "label": "江口县" },
                { "value": "1419", "label": "思南县" },
                { "value": "1420", "label": "石阡县" },
                { "value": "1421", "label": "玉屏侗族自治县" },
                { "value": "1422", "label": "松桃苗族自治县" },
                { "value": "1423", "label": "印江土家族苗族自治县" },
                { "value": "1424", "label": "沿河土家族自治县" },
                { "value": "1425", "label": "万山特区" },
                { "value": "4610", "label": "万山特区" }
            ]
        }, {
            "value": "1426",
            "label": "毕节",
            "children": [
                { "value": "1427", "label": "毕节市" },
                { "value": "1428", "label": "黔西县" },
                { "value": "1429", "label": "大方县" },
                { "value": "1430", "label": "织金县" },
                { "value": "1431", "label": "金沙县" },
                { "value": "1432", "label": "赫章县" },
                { "value": "1433", "label": "纳雍县" },
                { "value": "1434", "label": "威宁彝族回族苗族自治县" }
            ]
        }, {
            "value": "1435",
            "label": "黔西南布依族苗族自治州",
            "children": [
                { "value": "1436", "label": "兴义市" },
                { "value": "1437", "label": "望谟县" },
                { "value": "1438", "label": "兴仁县" },
                { "value": "1439", "label": "普安县" },
                { "value": "1440", "label": "册亨县" },
                { "value": "1441", "label": "晴隆县" },
                { "value": "1442", "label": "贞丰县" },
                { "value": "1443", "label": "安龙县" }
            ]
        }, {
            "value": "1444",
            "label": "黔东南苗族侗族自治州",
            "children": [
                { "value": "1460", "label": "丹寨县" },
                { "value": "1445", "label": "凯里市" },
                { "value": "1446", "label": "施秉县" },
                { "value": "1447", "label": "从江县" },
                { "value": "1448", "label": "锦屏县" },
                { "value": "1449", "label": "镇远县" },
                { "value": "1450", "label": "麻江县" },
                { "value": "1451", "label": "台江县" },
                { "value": "1452", "label": "天柱县" },
                { "value": "1453", "label": "黄平县" },
                { "value": "1454", "label": "榕江县" },
                { "value": "1455", "label": "剑河县" },
                { "value": "1456", "label": "三穗县" },
                { "value": "1457", "label": "雷山县" },
                { "value": "1458", "label": "黎平县" },
                { "value": "1459", "label": "岑巩县" }
            ]
        }, {
            "value": "1461",
            "label": "黔南布依族苗族自治州",
            "children": [
                { "value": "1462", "label": "都匀市" },
                { "value": "1463", "label": "福泉市" },
                { "value": "1464", "label": "贵定县" },
                { "value": "1465", "label": "惠水县" },
                { "value": "1466", "label": "罗甸县" },
                { "value": "1467", "label": "瓮安县" },
                { "value": "1468", "label": "荔波县" },
                { "value": "1469", "label": "龙里县" },
                { "value": "1470", "label": "平塘县" },
                { "value": "1471", "label": "长顺县" },
                { "value": "1472", "label": "独山县" },
                { "value": "1473", "label": "三都水族自治县" }
            ]
        }],
        "value": "1382",
        "label": "贵州"
    }, {
        "children": [{
            "value": "1475",
            "label": "海口",
            "children": [
                { "value": "1476", "label": "海口市" },
                { "value": "4409", "label": "龙华区" },
                { "value": "4613", "label": "美兰区" },
                { "value": "4614", "label": "琼山区" },
                { "value": "4615", "label": "秀英区" },
                { "value": "460109", "label": "其它区" }
            ]
        }, {
            "value": "1477",
            "label": "三亚",
            "children": [
                { "value": "1478", "label": "三亚市" }
            ]
        }, {
            "value": "1479",
            "label": "五指山",
            "children": [
                { "value": "1480", "label": "五指山市" }
            ]
        }, {
            "value": "1481",
            "label": "琼海",
            "children": [
                { "value": "1482", "label": "琼海市" }
            ]
        }, {
            "value": "1483",
            "label": "儋州",
            "children": [
                { "value": "1484", "label": "儋州市" }
            ]
        }, {
            "value": "1485",
            "label": "文昌",
            "children": [
                { "value": "1486", "label": "文昌市" }
            ]
        }, {
            "value": "1487",
            "label": "万宁",
            "children": [
                { "value": "1488", "label": "万宁市" }
            ]
        }, {
            "value": "1489",
            "label": "东方",
            "children": [
                { "value": "1490", "label": "东方市" }
            ]
        }, {
            "value": "1491",
            "label": "澄迈县",
            "children": [
                { "value": "1492", "label": "澄迈县" }
            ]
        }, {
            "value": "1493",
            "label": "定安县",
            "children": [
                { "value": "1494", "label": "定安县" }
            ]
        }, {
            "value": "1495",
            "label": "屯昌县",
            "children": [
                { "value": "1496", "label": "屯昌县" }
            ]
        }, {
            "value": "1497",
            "label": "临高县",
            "children": [
                { "value": "1498", "label": "临高县" }
            ]
        }, {
            "value": "1499",
            "label": "白沙黎族自治县",
            "children": [
                { "value": "1500", "label": "白沙黎族自治县" }
            ]
        }, {
            "value": "1501",
            "label": "昌江黎族自治县",
            "children": [
                { "value": "1502", "label": "昌江黎族自治县" }
            ]
        }, {
            "value": "1503",
            "label": "乐东黎族自治县",
            "children": [
                { "value": "1504", "label": "乐东黎族自治县" }
            ]
        }, {
            "value": "1505",
            "label": "陵水黎族自治县",
            "children": [
                { "value": "1506", "label": "陵水黎族自治县" }
            ]
        }, {
            "value": "1507",
            "label": "保亭黎族苗族自治县",
            "children": [
                { "value": "1508", "label": "保亭黎族苗族自治县" }
            ]
        }, {
            "value": "1509",
            "label": "琼中黎族苗族自治县",
            "children": [
                { "value": "1510", "label": "琼中黎族苗族自治县" }
            ]
        }, {
            "value": "3705",
            "label": "南沙群岛",
            "children": [
                { "value": "3706", "label": "南沙群岛" }
            ]
        }, {
            "value": "3707",
            "label": "西沙群岛",
            "children": [
                { "value": "3708", "label": "西沙群岛" }
            ]
        }, {
            "value": "3709",
            "label": "中沙群岛的岛礁及其海域",
            "children": [
                { "value": "3780", "label": "中沙群岛的岛礁及其海域" }
            ]
        }],
        "value": "1474",
        "label": "海南"
    }, {
        "children": [{
            "value": "1512",
            "label": "石家庄",
            "children": [
                { "value": "1523", "label": "行唐县" },
                { "value": "1513", "label": "石家庄市" },
                { "value": "1514", "label": "辛集市" },
                { "value": "1515", "label": "藁城市" },
                { "value": "1516", "label": "晋州市" },
                { "value": "1517", "label": "新乐市" },
                { "value": "1518", "label": "鹿泉市" },
                { "value": "1519", "label": "平山县" },
                { "value": "1520", "label": "井陉县" },
                { "value": "1521", "label": "栾城县" },
                { "value": "1522", "label": "正定县" },
                { "value": "1524", "label": "灵寿县" },
                { "value": "1525", "label": "高邑县" },
                { "value": "1526", "label": "赵县" },
                { "value": "1527", "label": "赞皇县" },
                { "value": "1528", "label": "深泽县" },
                { "value": "1529", "label": "无极县" },
                { "value": "1530", "label": "元氏县" },
                { "value": "4412", "label": "桥西区" },
                { "value": "4632", "label": "长安区" },
                { "value": "4633", "label": "井陉矿区" },
                { "value": "4634", "label": "桥东区" },
                { "value": "4635", "label": "新华区" },
                { "value": "4636", "label": "裕华区" },
                { "value": "130186", "label": "其它区" }
            ]
        }, {
            "value": "1531",
            "label": "唐山",
            "children": [
                { "value": "1535", "label": "迁西县" },
                { "value": "1532", "label": "唐山市" },
                { "value": "1533", "label": "遵化市" },
                { "value": "1534", "label": "迁安市" },
                { "value": "1536", "label": "滦南县" },
                { "value": "1537", "label": "玉田县" },
                { "value": "1538", "label": "唐海县" },
                { "value": "1539", "label": "乐亭县" },
                { "value": "1540", "label": "滦县" },
                { "value": "4637", "label": "丰南区" },
                { "value": "4638", "label": "丰润区" },
                { "value": "4639", "label": "古冶区" },
                { "value": "4640", "label": "开平区" },
                { "value": "4641", "label": "路北区" },
                { "value": "4642", "label": "路南区" },
                { "value": "130284", "label": "其它区" }
            ]
        }, {
            "value": "1541",
            "label": "秦皇岛",
            "children": [
                { "value": "1542", "label": "秦皇岛市" },
                { "value": "1543", "label": "昌黎县" },
                { "value": "1544", "label": "卢龙县" },
                { "value": "1545", "label": "抚宁县" },
                { "value": "1546", "label": "青龙满族自治县" },
                { "value": "4629", "label": "北戴河区" },
                { "value": "4630", "label": "海港区" },
                { "value": "4631", "label": "山海关区" },
                { "value": "130398", "label": "其它区" }
            ]
        }, {
            "value": "1547",
            "label": "邯郸",
            "children": [
                { "value": "1548", "label": "邯郸市" },
                { "value": "1549", "label": "武安市" },
                { "value": "1550", "label": "邯郸县" },
                { "value": "1551", "label": "永年县" },
                { "value": "1552", "label": "曲周县" },
                { "value": "1553", "label": "馆陶县" },
                { "value": "1554", "label": "魏县" },
                { "value": "1555", "label": "成安县" },
                { "value": "1556", "label": "大名县" },
                { "value": "1557", "label": "涉县" },
                { "value": "1558", "label": "鸡泽县" },
                { "value": "1559", "label": "邱县" },
                { "value": "1560", "label": "广平县" },
                { "value": "1561", "label": "肥乡县" },
                { "value": "1562", "label": "临漳县" },
                { "value": "1563", "label": "磁县" },
                { "value": "4623", "label": "丛台区" },
                { "value": "4624", "label": "峰峰矿区" },
                { "value": "4625", "label": "复兴区" },
                { "value": "4626", "label": "邯山区" },
                { "value": "130482", "label": "其它区" }
            ]
        }, {
            "value": "1564",
            "label": "邢台",
            "children": [
                { "value": "1574", "label": "隆尧县" },
                { "value": "1565", "label": "邢台市" },
                { "value": "1566", "label": "南宫市" },
                { "value": "1567", "label": "沙河市" },
                { "value": "1568", "label": "邢台县" },
                { "value": "1569", "label": "柏乡县" },
                { "value": "1570", "label": "任县" },
                { "value": "1571", "label": "清河县" },
                { "value": "1572", "label": "宁晋县" },
                { "value": "1573", "label": "威县" },
                { "value": "1575", "label": "临城县" },
                { "value": "1576", "label": "广宗县" },
                { "value": "1577", "label": "临西县" },
                { "value": "1578", "label": "内丘县" },
                { "value": "1579", "label": "平乡县" },
                { "value": "1580", "label": "巨鹿县" },
                { "value": "1581", "label": "新河县" },
                { "value": "1582", "label": "南和县" },
                { "value": "4643", "label": "桥东区" },
                { "value": "4644", "label": "桥西区" },
                { "value": "130583", "label": "其它区" }
            ]
        }, {
            "value": "1583",
            "label": "保定",
            "children": [
                { "value": "1587", "label": "安国市" },
                { "value": "1599", "label": "望都县" },
                { "value": "1584", "label": "保定市" },
                { "value": "1585", "label": "涿州市" },
                { "value": "1586", "label": "定州市" },
                { "value": "1588", "label": "高碑店市" },
                { "value": "1589", "label": "满城县" },
                { "value": "1590", "label": "清苑县" },
                { "value": "1591", "label": "涞水县" },
                { "value": "1592", "label": "阜平县" },
                { "value": "1593", "label": "徐水县" },
                { "value": "1594", "label": "定兴县" },
                { "value": "1595", "label": "唐县" },
                { "value": "1596", "label": "高阳县" },
                { "value": "1597", "label": "容城县" },
                { "value": "1598", "label": "涞源县" },
                { "value": "1600", "label": "安新县" },
                { "value": "1601", "label": "易县" },
                { "value": "1602", "label": "曲阳县" },
                { "value": "1603", "label": "蠡县" },
                { "value": "1604", "label": "顺平县" },
                { "value": "1605", "label": "博野县" },
                { "value": "1606", "label": "雄县" },
                { "value": "4616", "label": "北市区" },
                { "value": "4617", "label": "南市区" },
                { "value": "4618", "label": "新市区" },
                { "value": "130698", "label": "高开区" },
                { "value": "130699", "label": "其它区" }
            ]
        }, {
            "value": "1607",
            "label": "张家口",
            "children": [
                { "value": "1608", "label": "张家口市" },
                { "value": "1609", "label": "宣化县" },
                { "value": "1610", "label": "康保县" },
                { "value": "1611", "label": "张北县" },
                { "value": "1612", "label": "阳原县" },
                { "value": "1613", "label": "赤城县" },
                { "value": "1614", "label": "沽源县" },
                { "value": "1615", "label": "怀安县" },
                { "value": "1616", "label": "怀来县" },
                { "value": "1617", "label": "崇礼县" },
                { "value": "1618", "label": "尚义县" },
                { "value": "1619", "label": "蔚县" },
                { "value": "1620", "label": "涿鹿县" },
                { "value": "1621", "label": "万全县" },
                { "value": "4645", "label": "桥东区" },
                { "value": "4646", "label": "桥西区" },
                { "value": "4647", "label": "下花园区" },
                { "value": "4648", "label": "宣化区" },
                { "value": "130734", "label": "其它区" }
            ]
        }, {
            "value": "1622",
            "label": "承德",
            "children": [
                { "value": "1623", "label": "承德市" },
                { "value": "1624", "label": "承德县" },
                { "value": "1625", "label": "兴隆县" },
                { "value": "1626", "label": "隆化县" },
                { "value": "1627", "label": "平泉县" },
                { "value": "1628", "label": "滦平县" },
                { "value": "1629", "label": "丰宁满族自治县" },
                { "value": "1630", "label": "围场满族蒙古族自治县" },
                { "value": "1631", "label": "宽城满族自治县" },
                { "value": "4410", "label": "双滦区" },
                { "value": "4621", "label": "双桥区" },
                { "value": "4622", "label": "鹰手营子矿区" },
                { "value": "130829", "label": "其它区" }
            ]
        }, {
            "value": "1632",
            "label": "沧州",
            "children": [
                { "value": "1646", "label": "吴桥县" },
                { "value": "1633", "label": "沧州市" },
                { "value": "1634", "label": "泊头市" },
                { "value": "1635", "label": "任丘市" },
                { "value": "1636", "label": "黄骅市" },
                { "value": "1637", "label": "河间市" },
                { "value": "1638", "label": "沧县" },
                { "value": "1639", "label": "青县" },
                { "value": "1640", "label": "献县" },
                { "value": "1641", "label": "东光县" },
                { "value": "1642", "label": "海兴县" },
                { "value": "1643", "label": "盐山县" },
                { "value": "1644", "label": "肃宁县" },
                { "value": "1645", "label": "南皮县" },
                { "value": "1647", "label": "孟村回族自治县" },
                { "value": "4619", "label": "新华区" },
                { "value": "4620", "label": "运河区" },
                { "value": "130985", "label": "其它区" }
            ]
        }, {
            "value": "1648",
            "label": "廊坊",
            "children": [
                { "value": "1649", "label": "廊坊市" },
                { "value": "1650", "label": "霸州市" },
                { "value": "1651", "label": "三河市" },
                { "value": "1652", "label": "固安县" },
                { "value": "1653", "label": "永清县" },
                { "value": "1654", "label": "香河县" },
                { "value": "1655", "label": "大城县" },
                { "value": "1656", "label": "文安县" },
                { "value": "1657", "label": "大厂回族自治县" },
                { "value": "4411", "label": "安次区" },
                { "value": "4628", "label": "广阳区" },
                { "value": "131052", "label": "燕郊经济技术开发区" },
                { "value": "131083", "label": "其它区" }
            ]
        }, {
            "value": "1658",
            "label": "衡水",
            "children": [
                { "value": "1659", "label": "衡水市" },
                { "value": "1660", "label": "冀州市" },
                { "value": "1661", "label": "深州市" },
                { "value": "1662", "label": "饶阳县" },
                { "value": "1663", "label": "枣强县" },
                { "value": "1664", "label": "故城县" },
                { "value": "1665", "label": "阜城县" },
                { "value": "1666", "label": "安平县" },
                { "value": "1667", "label": "武邑县" },
                { "value": "1668", "label": "景县" },
                { "value": "1669", "label": "武强县" },
                { "value": "4627", "label": "桃城区" },
                { "value": "131183", "label": "其它区" }
            ]
        }],
        "value": "1511",
        "label": "河北"
    }, {
        "children": [{
            "value": "1671",
            "label": "郑州",
            "children": [
                { "value": "1672", "label": "郑州市" },
                { "value": "1673", "label": "巩义市" },
                { "value": "1674", "label": "新郑市" },
                { "value": "1675", "label": "新密市" },
                { "value": "1676", "label": "登封市" },
                { "value": "1677", "label": "荥阳市" },
                { "value": "1678", "label": "中牟县" },
                { "value": "4689", "label": "二七区" },
                { "value": "4690", "label": "管城回族区" },
                { "value": "4691", "label": "惠济区" },
                { "value": "4692", "label": "金水区" },
                { "value": "4693", "label": "上街区" },
                { "value": "4694", "label": "中原区" },
                { "value": "10006", "label": "郑东新区" },
                { "value": "10007", "label": "郑州矿区" },
                { "value": "10008", "label": "高新技术产业开发区" },
                { "value": "10009", "label": "经济技术开发区" },
                { "value": "10010", "label": "出口加工区" },
                { "value": "410188", "label": "其它区" }
            ]
        }, {
            "value": "1679",
            "label": "开封",
            "children": [
                { "value": "1680", "label": "开封市" },
                { "value": "1681", "label": "开封县" },
                { "value": "1682", "label": "尉氏县" },
                { "value": "1683", "label": "兰考县" },
                { "value": "1684", "label": "杞县" },
                { "value": "1685", "label": "通许县" },
                { "value": "4660", "label": "鼓楼区" },
                { "value": "4661", "label": "金明区" },
                { "value": "4662", "label": "龙亭区" },
                { "value": "4663", "label": "顺河回族区" },
                { "value": "4664", "label": "禹王台区" },
                { "value": "410226", "label": "其它区" }
            ]
        }, {
            "value": "1686",
            "label": "洛阳",
            "children": [
                { "value": "1687", "label": "洛阳市" },
                { "value": "1688", "label": "偃师市" },
                { "value": "1689", "label": "孟津县" },
                { "value": "1690", "label": "汝阳县" },
                { "value": "1691", "label": "伊川县" },
                { "value": "1692", "label": "洛宁县" },
                { "value": "1693", "label": "嵩县" },
                { "value": "1694", "label": "宜阳县" },
                { "value": "1695", "label": "新安县" },
                { "value": "1696", "label": "栾川县" },
                { "value": "4665", "label": "廛河回族区" },
                { "value": "4666", "label": "吉利区" },
                { "value": "4667", "label": "涧西区" },
                { "value": "4668", "label": "老城区" },
                { "value": "4669", "label": "洛龙区" },
                { "value": "4670", "label": "西工区" },
                { "value": "10001", "label": "高新区" },
                { "value": "471005", "label": "其它区" }
            ]
        }, {
            "value": "1697",
            "label": "平顶山",
            "children": [
                { "value": "1698", "label": "平顶山市" },
                { "value": "1699", "label": "汝州市" },
                { "value": "1700", "label": "舞钢市" },
                { "value": "1701", "label": "宝丰县" },
                { "value": "1702", "label": "叶县" },
                { "value": "1703", "label": "郏县" },
                { "value": "1704", "label": "鲁山县" },
                { "value": "4675", "label": "石龙区" },
                { "value": "4676", "label": "卫东区" },
                { "value": "4677", "label": "新华区" },
                { "value": "4678", "label": "湛河区" },
                { "value": "410483", "label": "其它区" }
            ]
        }, {
            "value": "1705",
            "label": "焦作",
            "children": [
                { "value": "1706", "label": "焦作市" },
                { "value": "1707", "label": "沁阳市" },
                { "value": "1708", "label": "孟州市" },
                { "value": "1709", "label": "修武县" },
                { "value": "1710", "label": "温县" },
                { "value": "1711", "label": "武陟县" },
                { "value": "1712", "label": "博爱县" },
                { "value": "1815", "label": "济源市" },
                { "value": "4656", "label": "解放区" },
                { "value": "4657", "label": "马村区" },
                { "value": "4658", "label": "山阳区" },
                { "value": "4659", "label": "中站区" },
                { "value": "410884", "label": "其它区" }
            ]
        }, {
            "value": "1713",
            "label": "鹤壁",
            "children": [
                { "value": "1714", "label": "鹤壁市" },
                { "value": "1715", "label": "浚县" },
                { "value": "1716", "label": "淇县" },
                { "value": "4653", "label": "鹤山区" },
                { "value": "4654", "label": "淇滨区" },
                { "value": "4655", "label": "山城区" },
                { "value": "410623", "label": "其它区" }
            ]
        }, {
            "value": "1717",
            "label": "新乡",
            "children": [
                { "value": "1725", "label": "封丘县" },
                { "value": "1718", "label": "新乡市" },
                { "value": "1719", "label": "卫辉市" },
                { "value": "1720", "label": "辉县市" },
                { "value": "1721", "label": "新乡县" },
                { "value": "1722", "label": "获嘉县" },
                { "value": "1723", "label": "原阳县" },
                { "value": "1724", "label": "长垣县" },
                { "value": "1726", "label": "延津县" },
                { "value": "4683", "label": "凤泉区" },
                { "value": "4684", "label": "红旗区" },
                { "value": "4685", "label": "牧野区" },
                { "value": "4686", "label": "卫滨区" },
                { "value": "10000", "label": "高新区" },
                { "value": "410783", "label": "其它区" }
            ]
        }, {
            "value": "1727",
            "label": "安阳",
            "children": [
                { "value": "1728", "label": "安阳市" },
                { "value": "1729", "label": "林州市" },
                { "value": "1730", "label": "安阳县" },
                { "value": "1731", "label": "滑县" },
                { "value": "1732", "label": "内黄县" },
                { "value": "1733", "label": "汤阴县" },
                { "value": "4649", "label": "北关区" },
                { "value": "4650", "label": "龙安区" },
                { "value": "4651", "label": "文峰区" },
                { "value": "4652", "label": "殷都区" },
                { "value": "410582", "label": "其它区" }
            ]
        }, {
            "value": "1734",
            "label": "濮阳",
            "children": [
                { "value": "1737", "label": "南乐县" },
                { "value": "1735", "label": "濮阳市" },
                { "value": "1736", "label": "濮阳县" },
                { "value": "1738", "label": "台前县" },
                { "value": "1739", "label": "清丰县" },
                { "value": "1740", "label": "范县" },
                { "value": "4679", "label": "华龙区" },
                { "value": "410929", "label": "其它区" }
            ]
        }, {
            "value": "1741",
            "label": "许昌",
            "children": [
                { "value": "1742", "label": "许昌市" },
                { "value": "1743", "label": "禹州市" },
                { "value": "1744", "label": "长葛市" },
                { "value": "1745", "label": "许昌县" },
                { "value": "1746", "label": "鄢陵县" },
                { "value": "1747", "label": "襄城县" },
                { "value": "4413", "label": "魏都区" },
                { "value": "411083", "label": "其它区" }
            ]
        }, {
            "value": "1748",
            "label": "漯河",
            "children": [
                { "value": "1750", "label": "郾城区" },
                { "value": "1749", "label": "漯河市" },
                { "value": "1751", "label": "临颍县" },
                { "value": "1752", "label": "舞阳县" },
                { "value": "4671", "label": "源汇区" },
                { "value": "4672", "label": "召陵区" },
                { "value": "411123", "label": "其它区" }
            ]
        }, {
            "value": "1753",
            "label": "三门峡",
            "children": [
                { "value": "1754", "label": "三门峡市" },
                { "value": "1755", "label": "义马市" },
                { "value": "1756", "label": "灵宝市" },
                { "value": "1757", "label": "渑池县" },
                { "value": "1758", "label": "卢氏县" },
                { "value": "1759", "label": "陕县" },
                { "value": "4680", "label": "湖滨区" },
                { "value": "411283", "label": "其它区" }
            ]
        }, {
            "value": "1760",
            "label": "南阳",
            "children": [
                { "value": "1761", "label": "南阳市" },
                { "value": "1762", "label": "邓州市" },
                { "value": "1763", "label": "桐柏县" },
                { "value": "1764", "label": "方城县" },
                { "value": "1765", "label": "淅川县" },
                { "value": "1766", "label": "镇平县" },
                { "value": "1767", "label": "唐河县" },
                { "value": "1768", "label": "南召县" },
                { "value": "1769", "label": "内乡县" },
                { "value": "1770", "label": "新野县" },
                { "value": "1771", "label": "社旗县" },
                { "value": "1772", "label": "西峡县" },
                { "value": "4673", "label": "宛城区" },
                { "value": "4674", "label": "卧龙区" },
                { "value": "411382", "label": "其它区" }
            ]
        }, {
            "value": "1773",
            "label": "商丘",
            "children": [
                { "value": "1776", "label": "宁陵县" },
                { "value": "1774", "label": "商丘市" },
                { "value": "1775", "label": "永城市" },
                { "value": "1777", "label": "虞城县" },
                { "value": "1778", "label": "民权县" },
                { "value": "1779", "label": "夏邑县" },
                { "value": "1780", "label": "柘城县" },
                { "value": "1781", "label": "睢县" },
                { "value": "4681", "label": "梁园区" },
                { "value": "4682", "label": "睢阳区" },
                { "value": "411482", "label": "其它区" }
            ]
        }, {
            "value": "1782",
            "label": "信阳",
            "children": [
                { "value": "1788", "label": "商城县" },
                { "value": "1783", "label": "信阳市" },
                { "value": "1784", "label": "潢川县" },
                { "value": "1785", "label": "淮滨县" },
                { "value": "1786", "label": "息县" },
                { "value": "1787", "label": "新县" },
                { "value": "1789", "label": "固始县" },
                { "value": "1790", "label": "罗山县" },
                { "value": "1791", "label": "光山县" },
                { "value": "4687", "label": "平桥区" },
                { "value": "4688", "label": "浉河区" },
                { "value": "411529", "label": "其它区" }
            ]
        }, {
            "value": "1792",
            "label": "周口",
            "children": [
                { "value": "1801", "label": "沈丘县" },
                { "value": "1793", "label": "周口市" },
                { "value": "1794", "label": "项城市" },
                { "value": "1795", "label": "商水县" },
                { "value": "1796", "label": "淮阳县" },
                { "value": "1797", "label": "太康县" },
                { "value": "1798", "label": "鹿邑县" },
                { "value": "1799", "label": "西华县" },
                { "value": "1800", "label": "扶沟县" },
                { "value": "1802", "label": "郸城县" },
                { "value": "4695", "label": "川汇区" },
                { "value": "411682", "label": "其它区" }
            ]
        }, {
            "value": "1803",
            "label": "驻马店",
            "children": [
                { "value": "1804", "label": "驻马店市" },
                { "value": "1805", "label": "确山县" },
                { "value": "1806", "label": "新蔡县" },
                { "value": "1807", "label": "上蔡县" },
                { "value": "1808", "label": "西平县" },
                { "value": "1809", "label": "泌阳县" },
                { "value": "1810", "label": "平舆县" },
                { "value": "1811", "label": "汝南县" },
                { "value": "1812", "label": "遂平县" },
                { "value": "1813", "label": "正阳县" },
                { "value": "4414", "label": "驿城区" },
                { "value": "411730", "label": "其它区" }
            ]
        }],
        "value": "1670",
        "label": "河南"
    }, {
        "children": [{
            "value": "1817",
            "label": "哈尔滨",
            "children": [
                { "value": "1819", "label": "阿城区" },
                { "value": "1823", "label": "呼兰区" },
                { "value": "1818", "label": "哈尔滨市" },
                { "value": "1820", "label": "尚志市" },
                { "value": "1821", "label": "双城市" },
                { "value": "1822", "label": "五常市" },
                { "value": "1824", "label": "方正县" },
                { "value": "1825", "label": "宾县" },
                { "value": "1826", "label": "依兰县" },
                { "value": "1827", "label": "巴彦县" },
                { "value": "1828", "label": "通河县" },
                { "value": "1829", "label": "木兰县" },
                { "value": "1830", "label": "延寿县" },
                { "value": "4415", "label": "南岗区" },
                { "value": "4704", "label": "道里区" },
                { "value": "4705", "label": "道外区" },
                { "value": "4706", "label": "平房区" },
                { "value": "4707", "label": "松北区" },
                { "value": "4708", "label": "香坊区" },
                { "value": "230107", "label": "动力区" },
                { "value": "230181", "label": "阿城市" },
                { "value": "230185", "label": "阿城市" },
                { "value": "230186", "label": "其它区" }
            ]
        }, {
            "value": "1831",
            "label": "齐齐哈尔",
            "children": [
                { "value": "1832", "label": "齐齐哈尔市" },
                { "value": "1833", "label": "讷河市" },
                { "value": "1834", "label": "富裕县" },
                { "value": "1835", "label": "拜泉县" },
                { "value": "1836", "label": "甘南县" },
                { "value": "1837", "label": "依安县" },
                { "value": "1838", "label": "克山县" },
                { "value": "1839", "label": "泰来县" },
                { "value": "1840", "label": "克东县" },
                { "value": "1841", "label": "龙江县" },
                { "value": "4418", "label": "富拉尔基区" },
                { "value": "4731", "label": "昂昂溪区" },
                { "value": "4732", "label": "建华区" },
                { "value": "4733", "label": "龙沙区" },
                { "value": "4734", "label": "梅里斯达斡尔族区" },
                { "value": "4735", "label": "碾子山区" },
                { "value": "4736", "label": "铁锋区" },
                { "value": "230282", "label": "其它区" }
            ]
        }, {
            "value": "1842",
            "label": "鹤岗",
            "children": [
                { "value": "1843", "label": "鹤岗市" },
                { "value": "1844", "label": "萝北县" },
                { "value": "1845", "label": "绥滨县" },
                { "value": "4709", "label": "东山区" },
                { "value": "4710", "label": "工农区" },
                { "value": "4711", "label": "南山区" },
                { "value": "4712", "label": "向阳区" },
                { "value": "4713", "label": "兴安区" },
                { "value": "4714", "label": "兴山区" },
                { "value": "230423", "label": "其它区" }
            ]
        }, {
            "value": "1846",
            "label": "双鸭山",
            "children": [
                { "value": "1849", "label": "宝清县" },
                { "value": "1847", "label": "双鸭山市" },
                { "value": "1848", "label": "集贤县" },
                { "value": "1850", "label": "友谊县" },
                { "value": "1851", "label": "饶河县" },
                { "value": "4737", "label": "宝山区" },
                { "value": "4738", "label": "尖山区" },
                { "value": "4739", "label": "岭东区" },
                { "value": "4740", "label": "四方台区" },
                { "value": "230525", "label": "其它区" }
            ]
        }, {
            "value": "1852",
            "label": "鸡西",
            "children": [
                { "value": "1853", "label": "鸡西市" },
                { "value": "1854", "label": "密山市" },
                { "value": "1855", "label": "虎林市" },
                { "value": "1856", "label": "鸡东县" },
                { "value": "4715", "label": "城子河区" },
                { "value": "4716", "label": "滴道区" },
                { "value": "4717", "label": "恒山区" },
                { "value": "4718", "label": "鸡冠区" },
                { "value": "4719", "label": "梨树区" },
                { "value": "4720", "label": "麻山区" },
                { "value": "230383", "label": "其它区" }
            ]
        }, {
            "value": "1857",
            "label": "大庆",
            "children": [
                { "value": "1861", "label": "肇源县" },
                { "value": "1858", "label": "大庆市" },
                { "value": "1859", "label": "林甸县" },
                { "value": "1860", "label": "肇州县" },
                { "value": "1862", "label": "杜尔伯特蒙古族自治县" },
                { "value": "4696", "label": "大同区" },
                { "value": "4697", "label": "红岗区" },
                { "value": "4698", "label": "龙凤区" },
                { "value": "4699", "label": "让胡路区" },
                { "value": "4700", "label": "萨尔图区" },
                { "value": "230625", "label": "其它区" }
            ]
        }, {
            "value": "1863",
            "label": "伊春",
            "children": [
                { "value": "1864", "label": "伊春市" },
                { "value": "1865", "label": "铁力市" },
                { "value": "1866", "label": "嘉荫县" },
                { "value": "4419", "label": "红星区" },
                { "value": "4420", "label": "西林区" },
                { "value": "4742", "label": "翠峦区" },
                { "value": "4743", "label": "带岭区" },
                { "value": "4744", "label": "金山屯区" },
                { "value": "4745", "label": "美溪区" },
                { "value": "4746", "label": "南岔区" },
                { "value": "4747", "label": "上甘岭区" },
                { "value": "4748", "label": "汤旺河区" },
                { "value": "4749", "label": "乌马河区" },
                { "value": "4750", "label": "乌伊岭区" },
                { "value": "4751", "label": "五营区" },
                { "value": "4752", "label": "新青区" },
                { "value": "4753", "label": "伊春区" },
                { "value": "4754", "label": "友好区" },
                { "value": "230782", "label": "其它区" }
            ]
        }, {
            "value": "1867",
            "label": "牡丹江",
            "children": [
                { "value": "1874", "label": "东宁县" },
                { "value": "1868", "label": "牡丹江市" },
                { "value": "1869", "label": "绥芬河市" },
                { "value": "1870", "label": "宁安市" },
                { "value": "1871", "label": "海林市" },
                { "value": "1872", "label": "穆棱市" },
                { "value": "1873", "label": "林口县" },
                { "value": "4724", "label": "爱民区" },
                { "value": "4725", "label": "东安区" },
                { "value": "4726", "label": "西安区" },
                { "value": "4727", "label": "阳明区" },
                { "value": "231086", "label": "其它区" }
            ]
        }, {
            "value": "1875",
            "label": "佳木斯",
            "children": [
                { "value": "1876", "label": "佳木斯市" },
                { "value": "1877", "label": "同江市" },
                { "value": "1878", "label": "富锦市" },
                { "value": "1879", "label": "桦川县" },
                { "value": "1880", "label": "抚远县" },
                { "value": "1881", "label": "桦南县" },
                { "value": "1882", "label": "汤原县" },
                { "value": "4417", "label": "前进区" },
                { "value": "4721", "label": "东风区" },
                { "value": "4722", "label": "郊区" },
                { "value": "4723", "label": "向阳区" },
                { "value": "230802", "label": "永红区" },
                { "value": "230883", "label": "其它区" }
            ]
        }, {
            "value": "1883",
            "label": "七台河",
            "children": [
                { "value": "1884", "label": "七台河市" },
                { "value": "1885", "label": "勃利县" },
                { "value": "4728", "label": "茄子河区" },
                { "value": "4729", "label": "桃山区" },
                { "value": "4730", "label": "新兴区" },
                { "value": "230922", "label": "其它区" }
            ]
        }, {
            "value": "1886",
            "label": "黑河",
            "children": [
                { "value": "1887", "label": "黑河市" },
                { "value": "1888", "label": "北安市" },
                { "value": "1889", "label": "五大连池市" },
                { "value": "1890", "label": "逊克县" },
                { "value": "1891", "label": "嫩江县" },
                { "value": "1892", "label": "孙吴县" },
                { "value": "4416", "label": "爱辉区" },
                { "value": "231183", "label": "其它区" }
            ]
        }, {
            "value": "1893",
            "label": "绥化",
            "children": [
                { "value": "1894", "label": "绥化市" },
                { "value": "1895", "label": "安达市" },
                { "value": "1896", "label": "肇东市" },
                { "value": "1897", "label": "海伦市" },
                { "value": "1898", "label": "绥棱县" },
                { "value": "1899", "label": "兰西县" },
                { "value": "1900", "label": "明水县" },
                { "value": "1901", "label": "青冈县" },
                { "value": "1902", "label": "庆安县" },
                { "value": "1903", "label": "望奎县" },
                { "value": "4741", "label": "北林区" },
                { "value": "231284", "label": "其它区" }
            ]
        }, {
            "value": "1904",
            "label": "大兴安岭",
            "children": [
                { "value": "3704", "label": "大兴安岭市" },
                { "value": "1905", "label": "呼玛县" },
                { "value": "1906", "label": "塔河县" },
                { "value": "1907", "label": "漠河县" },
                { "value": "3703", "label": "加格达奇区" },
                { "value": "4701", "label": "呼中区" },
                { "value": "4702", "label": "松岭区" },
                { "value": "4703", "label": "新林区" }
            ]
        }],
        "value": "1816",
        "label": "黑龙江"
    }, {
        "children": [{
            "value": "2003",
            "label": "长沙",
            "children": [
                { "value": "2008", "label": "宁乡县" },
                { "value": "2004", "label": "长沙市" },
                { "value": "2005", "label": "浏阳市" },
                { "value": "2006", "label": "长沙县" },
                { "value": "2007", "label": "望城县" },
                { "value": "4425", "label": "芙蓉区" },
                { "value": "4790", "label": "开福区" },
                { "value": "4791", "label": "天心区" },
                { "value": "4792", "label": "雨花区" },
                { "value": "4793", "label": "岳麓区" },
                { "value": "430182", "label": "其它区" }
            ]
        }, {
            "value": "2009",
            "label": "株洲",
            "children": [
                { "value": "2010", "label": "株洲市" },
                { "value": "2011", "label": "醴陵市" },
                { "value": "2012", "label": "株洲县" },
                { "value": "2013", "label": "炎陵县" },
                { "value": "2014", "label": "茶陵县" },
                { "value": "2015", "label": "攸县" },
                { "value": "4429", "label": "天元区" },
                { "value": "4816", "label": "荷塘区" },
                { "value": "4817", "label": "芦淞区" },
                { "value": "4818", "label": "石峰区" },
                { "value": "430282", "label": "其它区" }
            ]
        }, {
            "value": "2016",
            "label": "湘潭",
            "children": [
                { "value": "2017", "label": "湘潭市" },
                { "value": "2018", "label": "湘乡市" },
                { "value": "2019", "label": "韶山市" },
                { "value": "2020", "label": "湘潭县" },
                { "value": "4806", "label": "雨湖区" },
                { "value": "4807", "label": "岳塘区" },
                { "value": "430383", "label": "其它区" }
            ]
        }, {
            "value": "2021",
            "label": "衡阳",
            "children": [
                { "value": "2022", "label": "衡阳市" },
                { "value": "2023", "label": "耒阳市" },
                { "value": "2024", "label": "常宁市" },
                { "value": "2025", "label": "衡阳县" },
                { "value": "2026", "label": "衡东县" },
                { "value": "2027", "label": "衡山县" },
                { "value": "2028", "label": "衡南县" },
                { "value": "2029", "label": "祁东县" },
                { "value": "4797", "label": "南岳区" },
                { "value": "4798", "label": "石鼓区" },
                { "value": "4799", "label": "雁峰区" },
                { "value": "4800", "label": "蒸湘区" },
                { "value": "4801", "label": "珠晖区" },
                { "value": "430483", "label": "其它区" }
            ]
        }, {
            "value": "2030",
            "label": "邵阳",
            "children": [
                { "value": "2031", "label": "邵阳市" },
                { "value": "2032", "label": "武冈市" },
                { "value": "2033", "label": "邵东县" },
                { "value": "2034", "label": "洞口县" },
                { "value": "2035", "label": "新邵县" },
                { "value": "2036", "label": "绥宁县" },
                { "value": "2037", "label": "新宁县" },
                { "value": "2038", "label": "邵阳县" },
                { "value": "2039", "label": "隆回县" },
                { "value": "2040", "label": "城步苗族自治县" },
                { "value": "4427", "label": "北塔区" },
                { "value": "4804", "label": "大祥区" },
                { "value": "4805", "label": "双清区" },
                { "value": "430582", "label": "其它区" }
            ]
        }, {
            "value": "2041",
            "label": "岳阳",
            "children": [
                { "value": "2044", "label": "汨罗市" },
                { "value": "2042", "label": "岳阳市" },
                { "value": "2043", "label": "临湘市" },
                { "value": "2045", "label": "岳阳县" },
                { "value": "2046", "label": "湘阴县" },
                { "value": "2047", "label": "平江县" },
                { "value": "2048", "label": "华容县" },
                { "value": "4428", "label": "君山区" },
                { "value": "4812", "label": "岳阳楼区" },
                { "value": "4813", "label": "云溪区" },
                { "value": "430683", "label": "其它区" }
            ]
        }, {
            "value": "2049",
            "label": "常德",
            "children": [
                { "value": "2056", "label": "安乡县" },
                { "value": "2050", "label": "常德市" },
                { "value": "2051", "label": "津市市" },
                { "value": "2052", "label": "澧县" },
                { "value": "2053", "label": "临澧县" },
                { "value": "2054", "label": "桃源县" },
                { "value": "2055", "label": "汉寿县" },
                { "value": "2057", "label": "石门县" },
                { "value": "4794", "label": "鼎城区" },
                { "value": "4795", "label": "武陵区" },
                { "value": "430782", "label": "其它区" }
            ]
        }, {
            "value": "2058",
            "label": "张家界",
            "children": [
                { "value": "2059", "label": "张家界市" },
                { "value": "2060", "label": "慈利县" },
                { "value": "2061", "label": "桑植县" },
                { "value": "4814", "label": "武陵源区" },
                { "value": "4815", "label": "永定区" },
                { "value": "430823", "label": "其它区" }
            ]
        }, {
            "value": "2062",
            "label": "益阳",
            "children": [
                { "value": "2063", "label": "益阳市" },
                { "value": "2064", "label": "沅江市" },
                { "value": "2065", "label": "桃江县" },
                { "value": "2066", "label": "南县" },
                { "value": "2067", "label": "安化县" },
                { "value": "4808", "label": "赫山区" },
                { "value": "4809", "label": "资阳区" },
                { "value": "430982", "label": "其它区" }
            ]
        }, {
            "value": "2068",
            "label": "郴州",
            "children": [
                { "value": "2069", "label": "郴州市" },
                { "value": "2070", "label": "资兴市" },
                { "value": "2071", "label": "宜章县" },
                { "value": "2072", "label": "汝城县" },
                { "value": "2073", "label": "安仁县" },
                { "value": "2074", "label": "嘉禾县" },
                { "value": "2075", "label": "临武县" },
                { "value": "2076", "label": "桂东县" },
                { "value": "2077", "label": "永兴县" },
                { "value": "2078", "label": "桂阳县" },
                { "value": "4426", "label": "苏仙区" },
                { "value": "4796", "label": "北湖区" },
                { "value": "431082", "label": "其它区" }
            ]
        }, {
            "value": "2079",
            "label": "永州",
            "children": [
                { "value": "2080", "label": "永州市" },
                { "value": "2081", "label": "祁阳县" },
                { "value": "2082", "label": "蓝山县" },
                { "value": "2083", "label": "宁远县" },
                { "value": "2084", "label": "新田县" },
                { "value": "2085", "label": "东安县" },
                { "value": "2086", "label": "江永县" },
                { "value": "2087", "label": "道县" },
                { "value": "2088", "label": "双牌县" },
                { "value": "2089", "label": "江华瑶族自治县" },
                { "value": "4810", "label": "冷水滩区" },
                { "value": "4811", "label": "零陵区" },
                { "value": "431130", "label": "其它区" }
            ]
        }, {
            "value": "2090",
            "label": "怀化",
            "children": [
                { "value": "2091", "label": "怀化市" },
                { "value": "2092", "label": "洪江市" },
                { "value": "2093", "label": "会同县" },
                { "value": "2094", "label": "沅陵县" },
                { "value": "2095", "label": "辰溪县" },
                { "value": "2096", "label": "溆浦县" },
                { "value": "2097", "label": "中方县" },
                { "value": "2098", "label": "新晃侗族自治县" },
                { "value": "2099", "label": "芷江侗族自治县" },
                { "value": "2100", "label": "通道侗族自治县" },
                { "value": "2101", "label": "靖州苗族侗族自治县" },
                { "value": "2102", "label": "麻阳苗族自治县" },
                { "value": "4802", "label": "鹤城区" },
                { "value": "431282", "label": "其它区" }
            ]
        }, {
            "value": "2103",
            "label": "娄底",
            "children": [
                { "value": "2104", "label": "娄底市" },
                { "value": "2105", "label": "冷水江市" },
                { "value": "2106", "label": "涟源市" },
                { "value": "2107", "label": "新化县" },
                { "value": "2108", "label": "双峰县" },
                { "value": "4803", "label": "娄星区" },
                { "value": "431383", "label": "其它区" }
            ]
        }, {
            "value": "2109",
            "label": "湘西土家族苗族自治州",
            "children": [
                { "value": "2110", "label": "吉首市" },
                { "value": "2111", "label": "古丈县" },
                { "value": "2112", "label": "龙山县" },
                { "value": "2113", "label": "永顺县" },
                { "value": "2114", "label": "凤凰县" },
                { "value": "2115", "label": "泸溪县" },
                { "value": "2116", "label": "保靖县" },
                { "value": "2117", "label": "花垣县" }
            ]
        }],
        "value": "2002",
        "label": "湖南"
    }, {
        "children": [{
            "value": "2119",
            "label": "长春",
            "children": [
                { "value": "2123", "label": "德惠市" },
                { "value": "2120", "label": "长春市" },
                { "value": "2121", "label": "九台市" },
                { "value": "2122", "label": "榆树市" },
                { "value": "2124", "label": "农安县" },
                { "value": "4430", "label": "南关区" },
                { "value": "4821", "label": "朝阳区" },
                { "value": "4822", "label": "二道区" },
                { "value": "4823", "label": "宽城区" },
                { "value": "4824", "label": "绿园区" },
                { "value": "4825", "label": "双阳区" },
                { "value": "220185", "label": "汽车产业开发区" },
                { "value": "220187", "label": "净月旅游开发区" },
                { "value": "220188", "label": "其它区" }
            ]
        }, {
            "value": "2125",
            "label": "吉林",
            "children": [
                { "value": "2126", "label": "吉林市" },
                { "value": "2127", "label": "舒兰市" },
                { "value": "2128", "label": "桦甸市" },
                { "value": "2129", "label": "蛟河市" },
                { "value": "2130", "label": "磐石市" },
                { "value": "2131", "label": "永吉县" },
                { "value": "4826", "label": "昌邑区" },
                { "value": "4827", "label": "船营区" },
                { "value": "4828", "label": "丰满区" },
                { "value": "4829", "label": "龙潭区" },
                { "value": "220285", "label": "其它区" }
            ]
        }, {
            "value": "2132",
            "label": "四平",
            "children": [
                { "value": "2135", "label": "双辽市" },
                { "value": "2133", "label": "四平市" },
                { "value": "2134", "label": "公主岭市" },
                { "value": "2136", "label": "梨树县" },
                { "value": "2137", "label": "伊通满族自治县" },
                { "value": "4431", "label": "铁西区" },
                { "value": "4832", "label": "铁东区" },
                { "value": "220383", "label": "其它区" }
            ]
        }, {
            "value": "2138",
            "label": "辽源",
            "children": [
                { "value": "2139", "label": "辽源市" },
                { "value": "2140", "label": "东辽县" },
                { "value": "2141", "label": "东丰县" },
                { "value": "4830", "label": "龙山区" },
                { "value": "4831", "label": "西安区" },
                { "value": "220423", "label": "其它区" }
            ]
        }, {
            "value": "2142",
            "label": "通化",
            "children": [
                { "value": "2143", "label": "通化市" },
                { "value": "2144", "label": "梅河口市" },
                { "value": "2145", "label": "集安市" },
                { "value": "2146", "label": "通化县" },
                { "value": "2147", "label": "辉南县" },
                { "value": "2148", "label": "柳河县" },
                { "value": "4834", "label": "东昌区" },
                { "value": "4835", "label": "二道江区" },
                { "value": "220583", "label": "其它区" }
            ]
        }, {
            "value": "2149",
            "label": "白山",
            "children": [
                { "value": "2154", "label": "江源区" },
                { "value": "2150", "label": "白山市" },
                { "value": "2151", "label": "临江市" },
                { "value": "2152", "label": "靖宇县" },
                { "value": "2153", "label": "抚松县" },
                { "value": "2155", "label": "长白朝鲜族自治县" },
                { "value": "4820", "label": "八道江区" },
                { "value": "220625", "label": "江源县" },
                { "value": "220682", "label": "其它区" }
            ]
        }, {
            "value": "2156",
            "label": "松原",
            "children": [
                { "value": "2157", "label": "松原市" },
                { "value": "2158", "label": "乾安县" },
                { "value": "2159", "label": "长岭县" },
                { "value": "2160", "label": "扶余县" },
                { "value": "2161", "label": "前郭尔罗斯蒙古族自治县" },
                { "value": "4833", "label": "宁江区" },
                { "value": "220725", "label": "其它区" }
            ]
        }, {
            "value": "2162",
            "label": "白城",
            "children": [
                { "value": "2163", "label": "白城市" },
                { "value": "2164", "label": "大安市" },
                { "value": "2165", "label": "洮南市" },
                { "value": "2166", "label": "镇赉县" },
                { "value": "2167", "label": "通榆县" },
                { "value": "4819", "label": "洮北区" },
                { "value": "220883", "label": "其它区" }
            ]
        }, {
            "value": "2168",
            "label": "延边朝鲜族自治州",
            "children": [
                { "value": "2169", "label": "延吉市" },
                { "value": "2170", "label": "图们市" },
                { "value": "2171", "label": "敦化市" },
                { "value": "2172", "label": "龙井市" },
                { "value": "2173", "label": "珲春市" },
                { "value": "2174", "label": "和龙市" },
                { "value": "2175", "label": "安图县" },
                { "value": "2176", "label": "汪清县" }
            ]
        }],
        "value": "2118",
        "label": "吉林"
    }, {
        "children": [{
            "value": "2178",
            "label": "南京",
            "children": [
                { "value": "2179", "label": "南京市" },
                { "value": "2180", "label": "溧水县" },
                { "value": "2181", "label": "高淳县" },
                { "value": "4002", "label": "白下区" },
                { "value": "4003", "label": "鼓楼区" },
                { "value": "4004", "label": "建邺区" },
                { "value": "4005", "label": "江宁区" },
                { "value": "4006", "label": "六合区" },
                { "value": "4007", "label": "浦口区" },
                { "value": "4008", "label": "栖霞区" },
                { "value": "4009", "label": "秦淮区" },
                { "value": "4010", "label": "下关区" },
                { "value": "4011", "label": "玄武区" },
                { "value": "4012", "label": "雨花台区" },
                { "value": "320126", "label": "其它区" }
            ]
        }, {
            "value": "2182",
            "label": "徐州",
            "children": [
                { "value": "2185", "label": "新沂市" },
                { "value": "2183", "label": "徐州市" },
                { "value": "2184", "label": "邳州市" },
                { "value": "2186", "label": "铜山县" },
                { "value": "2187", "label": "睢宁县" },
                { "value": "2188", "label": "沛县" },
                { "value": "2189", "label": "丰县" },
                { "value": "4030", "label": "鼓楼区" },
                { "value": "4031", "label": "贾汪区" },
                { "value": "4032", "label": "泉山区" },
                { "value": "4033", "label": "云龙区" },
                { "value": "4366", "label": "九里区" },
                { "value": "320383", "label": "其它区" }
            ]
        }, {
            "value": "2190",
            "label": "连云港",
            "children": [
                { "value": "2191", "label": "连云港市" },
                { "value": "2192", "label": "东海县" },
                { "value": "2193", "label": "灌云县" },
                { "value": "2194", "label": "赣榆县" },
                { "value": "2195", "label": "灌南县" },
                { "value": "4000", "label": "连云区" },
                { "value": "4001", "label": "新浦区" },
                { "value": "4844", "label": "海州区" },
                { "value": "320725", "label": "其它区" }
            ]
        }, {
            "value": "2196",
            "label": "淮安",
            "children": [
                { "value": "2198", "label": "涟水县" },
                { "value": "2197", "label": "淮安市" },
                { "value": "2199", "label": "洪泽县" },
                { "value": "2200", "label": "金湖县" },
                { "value": "2201", "label": "盱眙县" },
                { "value": "4840", "label": "楚州区" },
                { "value": "4841", "label": "淮阴区" },
                { "value": "4842", "label": "清河区" },
                { "value": "4843", "label": "清浦区" },
                { "value": "320832", "label": "其它区" }
            ]
        }, {
            "value": "2202",
            "label": "宿迁",
            "children": [
                { "value": "2204", "label": "宿豫区" },
                { "value": "2203", "label": "宿迁市" },
                { "value": "2205", "label": "沭阳县" },
                { "value": "2206", "label": "泗阳县" },
                { "value": "2207", "label": "泗洪县" },
                { "value": "4021", "label": "宿城区" },
                { "value": "321325", "label": "其它区" }
            ]
        }, {
            "value": "2208",
            "label": "盐城",
            "children": [
                { "value": "2212", "label": "盐都区" },
                { "value": "2210", "label": "东台市" },
                { "value": "2209", "label": "盐城市" },
                { "value": "2211", "label": "大丰市" },
                { "value": "2213", "label": "建湖县" },
                { "value": "2214", "label": "响水县" },
                { "value": "2215", "label": "阜宁县" },
                { "value": "2216", "label": "射阳县" },
                { "value": "2217", "label": "滨海县" },
                { "value": "4034", "label": "亭湖区" },
                { "value": "320983", "label": "其它区" }
            ]
        }, {
            "value": "2218",
            "label": "扬州",
            "children": [
                { "value": "2219", "label": "扬州市" },
                { "value": "2220", "label": "高邮市" },
                { "value": "2221", "label": "江都市" },
                { "value": "2222", "label": "仪征市" },
                { "value": "2223", "label": "宝应县" },
                { "value": "4035", "label": "广陵区" },
                { "value": "4036", "label": "邗江区" },
                { "value": "4037", "label": "维扬区" },
                { "value": "321093", "label": "其它区" }
            ]
        }, {
            "value": "2224",
            "label": "泰州",
            "children": [
                { "value": "2225", "label": "泰州市" },
                { "value": "2226", "label": "泰兴市" },
                { "value": "2227", "label": "姜堰市" },
                { "value": "2228", "label": "靖江市" },
                { "value": "2229", "label": "兴化市" },
                { "value": "4022", "label": "高港区" },
                { "value": "4023", "label": "海陵区" },
                { "value": "321285", "label": "其它区" }
            ]
        }, {
            "value": "2230",
            "label": "南通",
            "children": [
                { "value": "2231", "label": "南通市" },
                { "value": "2232", "label": "如皋市" },
                { "value": "2233", "label": "通州市" },
                { "value": "2234", "label": "海门市" },
                { "value": "2235", "label": "启东市" },
                { "value": "2236", "label": "海安县" },
                { "value": "2237", "label": "如东县" },
                { "value": "4013", "label": "崇川区" },
                { "value": "4014", "label": "港闸区" },
                { "value": "320694", "label": "其它区" }
            ]
        }, {
            "value": "2238",
            "label": "镇江",
            "children": [
                { "value": "2239", "label": "镇江市" },
                { "value": "2240", "label": "丹阳市" },
                { "value": "2241", "label": "扬中市" },
                { "value": "2242", "label": "句容市" },
                { "value": "4038", "label": "丹徒区" },
                { "value": "4039", "label": "润州区" },
                { "value": "4367", "label": "京口区" },
                { "value": "321184", "label": "其它区" }
            ]
        }, {
            "value": "2243",
            "label": "常州",
            "children": [
                { "value": "2246", "label": "溧阳市" },
                { "value": "2244", "label": "常州市" },
                { "value": "2245", "label": "金坛市" },
                { "value": "4432", "label": "钟楼区" },
                { "value": "4836", "label": "戚墅堰区" },
                { "value": "4837", "label": "天宁区" },
                { "value": "4838", "label": "武进区" },
                { "value": "4839", "label": "新北区" },
                { "value": "320483", "label": "其它区" }
            ]
        }, {
            "value": "2247",
            "label": "无锡",
            "children": [
                { "value": "2248", "label": "无锡市" },
                { "value": "2249", "label": "江阴市" },
                { "value": "2250", "label": "宜兴市" },
                { "value": "4024", "label": "北塘区" },
                { "value": "4025", "label": "滨湖区" },
                { "value": "4026", "label": "崇安区" },
                { "value": "4027", "label": "惠山区" },
                { "value": "4028", "label": "南长区" },
                { "value": "4029", "label": "锡山区" },
                { "value": "320296", "label": "新区" },
                { "value": "320297", "label": "其它区" }
            ]
        }, {
            "value": "2251",
            "label": "苏州",
            "children": [
                { "value": "2252", "label": "苏州市" },
                { "value": "2253", "label": "常熟市" },
                { "value": "2254", "label": "张家港市" },
                { "value": "2255", "label": "太仓市" },
                { "value": "2256", "label": "昆山市" },
                { "value": "2257", "label": "吴江市" },
                { "value": "4015", "label": "沧浪区" },
                { "value": "4016", "label": "虎丘区" },
                { "value": "4017", "label": "金阊区" },
                { "value": "4018", "label": "平江区" },
                { "value": "4019", "label": "吴中区" },
                { "value": "4020", "label": "相城区" },
                { "value": "320594", "label": "新区" },
                { "value": "320595", "label": "园区" },
                { "value": "320596", "label": "其它区" }
            ]
        }],
        "value": "2177",
        "label": "江苏"
    }, {
        "children": [{
            "value": "2362",
            "label": "沈阳",
            "children": [
                { "value": "2363", "label": "沈阳市" },
                { "value": "2364", "label": "新民市" },
                { "value": "2365", "label": "法库县" },
                { "value": "2366", "label": "辽中县" },
                { "value": "2367", "label": "康平县" },
                { "value": "4093", "label": "大东区" },
                { "value": "4094", "label": "东陵区" },
                { "value": "4095", "label": "和平区" },
                { "value": "4096", "label": "皇姑区" },
                { "value": "4097", "label": "沈北新区" },
                { "value": "4098", "label": "沈河区" },
                { "value": "4099", "label": "苏家屯区" },
                { "value": "4100", "label": "于洪区" },
                { "value": "4375", "label": "铁西区" },
                { "value": "210113", "label": "新城子区" },
                { "value": "210182", "label": "浑南新区" },
                { "value": "210183", "label": "张士开发区" },
                { "value": "210185", "label": "其它区" }
            ]
        }, {
            "value": "2368",
            "label": "大连",
            "children": [
                { "value": "2369", "label": "大连市" },
                { "value": "2370", "label": "瓦房店市" },
                { "value": "2371", "label": "普兰店市" },
                { "value": "2372", "label": "庄河市" },
                { "value": "2373", "label": "长海县" },
                { "value": "4066", "label": "甘井子区" },
                { "value": "4067", "label": "金州区" },
                { "value": "4068", "label": "沙河口区" },
                { "value": "4069", "label": "西岗区" },
                { "value": "4070", "label": "中山区" },
                { "value": "4371", "label": "旅顺口区" },
                { "value": "210297", "label": "岭前区" },
                { "value": "210298", "label": "其它区" }
            ]
        }, {
            "value": "2374",
            "label": "鞍山",
            "children": [
                { "value": "2375", "label": "鞍山市" },
                { "value": "2376", "label": "海城市" },
                { "value": "2377", "label": "台安县" },
                { "value": "2378", "label": "岫岩满族自治县" },
                { "value": "4057", "label": "立山区" },
                { "value": "4058", "label": "千山区" },
                { "value": "4059", "label": "铁东区" },
                { "value": "4060", "label": "铁西区" },
                { "value": "210382", "label": "其它区" }
            ]
        }, {
            "value": "2379",
            "label": "抚顺",
            "children": [
                { "value": "2380", "label": "抚顺市" },
                { "value": "2381", "label": "抚顺县" },
                { "value": "2382", "label": "清原满族自治县" },
                { "value": "2383", "label": "新宾满族自治县" },
                { "value": "4074", "label": "东洲区" },
                { "value": "4075", "label": "顺城区" },
                { "value": "4076", "label": "新抚区" },
                { "value": "4372", "label": "望花区" },
                { "value": "210424", "label": "其它区" }
            ]
        }, {
            "value": "2384",
            "label": "本溪",
            "children": [
                { "value": "2385", "label": "本溪市" },
                { "value": "2386", "label": "本溪满族自治县" },
                { "value": "2387", "label": "桓仁满族自治县" },
                { "value": "4061", "label": "南芬区" },
                { "value": "4062", "label": "平山区" },
                { "value": "4063", "label": "溪湖区" },
                { "value": "4370", "label": "明山区" },
                { "value": "210523", "label": "其它区" }
            ]
        }, {
            "value": "2388",
            "label": "丹东",
            "children": [
                { "value": "2389", "label": "丹东市" },
                { "value": "2390", "label": "东港市" },
                { "value": "2391", "label": "凤城市" },
                { "value": "2392", "label": "宽甸满族自治县" },
                { "value": "4071", "label": "元宝区" },
                { "value": "4072", "label": "振安区" },
                { "value": "4073", "label": "振兴区" },
                { "value": "210683", "label": "其它区" }
            ]
        }, {
            "value": "2393",
            "label": "锦州",
            "children": [
                { "value": "2396", "label": "北镇市" },
                { "value": "2394", "label": "锦州市" },
                { "value": "2395", "label": "凌海市" },
                { "value": "2397", "label": "黑山县" },
                { "value": "2398", "label": "义县" },
                { "value": "4084", "label": "古塔区" },
                { "value": "4085", "label": "凌河区" },
                { "value": "4086", "label": "太和区" },
                { "value": "210783", "label": "其它区" }
            ]
        }, {
            "value": "2399",
            "label": "葫芦岛",
            "children": [
                { "value": "2400", "label": "葫芦岛市" },
                { "value": "2401", "label": "兴城市" },
                { "value": "2402", "label": "绥中县" },
                { "value": "2403", "label": "建昌县" },
                { "value": "4082", "label": "连山区" },
                { "value": "4083", "label": "南票区" },
                { "value": "4373", "label": "龙港区" },
                { "value": "211482", "label": "其它区" }
            ]
        }, {
            "value": "2404",
            "label": "营口",
            "children": [
                { "value": "2405", "label": "营口市" },
                { "value": "2406", "label": "大石桥市" },
                { "value": "2407", "label": "盖州市" },
                { "value": "4103", "label": "鲅鱼圈区" },
                { "value": "4104", "label": "老边区" },
                { "value": "4105", "label": "西市区" },
                { "value": "4106", "label": "站前区" },
                { "value": "210883", "label": "其它区" }
            ]
        }, {
            "value": "2408",
            "label": "盘锦",
            "children": [
                { "value": "2409", "label": "盘锦市" },
                { "value": "2410", "label": "盘山县" },
                { "value": "2411", "label": "大洼县" },
                { "value": "4092", "label": "兴隆台区" },
                { "value": "4374", "label": "双台子区" },
                { "value": "211123", "label": "其它区" }
            ]
        }, {
            "value": "2412",
            "label": "阜新",
            "children": [
                { "value": "2413", "label": "阜新市" },
                { "value": "2414", "label": "彰武县" },
                { "value": "2415", "label": "阜新蒙古族自治县" },
                { "value": "4077", "label": "海州区" },
                { "value": "4078", "label": "清河门区" },
                { "value": "4079", "label": "太平区" },
                { "value": "4080", "label": "细河区" },
                { "value": "4081", "label": "新邱区" },
                { "value": "210923", "label": "其它区" }
            ]
        }, {
            "value": "2416",
            "label": "辽阳",
            "children": [
                { "value": "2417", "label": "辽阳市" },
                { "value": "2418", "label": "灯塔市" },
                { "value": "2419", "label": "辽阳县" },
                { "value": "4087", "label": "白塔区" },
                { "value": "4088", "label": "弓长岭区" },
                { "value": "4089", "label": "宏伟区" },
                { "value": "4090", "label": "太子河区" },
                { "value": "4091", "label": "文圣区" },
                { "value": "211082", "label": "其它区" }
            ]
        }, {
            "value": "2420",
            "label": "铁岭",
            "children": [
                { "value": "2421", "label": "铁岭市" },
                { "value": "2422", "label": "调兵山市" },
                { "value": "2423", "label": "开原市" },
                { "value": "2424", "label": "铁岭县" },
                { "value": "2425", "label": "昌图县" },
                { "value": "2426", "label": "西丰县" },
                { "value": "4101", "label": "清河区" },
                { "value": "4102", "label": "银州区" },
                { "value": "211283", "label": "其它区" }
            ]
        }, {
            "value": "2427",
            "label": "朝阳",
            "children": [
                { "value": "2428", "label": "朝阳市" },
                { "value": "2429", "label": "凌源市" },
                { "value": "2430", "label": "北票市" },
                { "value": "2431", "label": "朝阳县" },
                { "value": "2432", "label": "建平县" },
                { "value": "2433", "label": "喀喇沁左翼蒙古族自治县" },
                { "value": "4064", "label": "龙城区" },
                { "value": "4065", "label": "双塔区" },
                { "value": "211383", "label": "其它区" }
            ]
        }],
        "value": "2361",
        "label": "辽宁"
    }, {
        "children": [{
            "value": "2435",
            "label": "呼和浩特",
            "children": [
                { "value": "2436", "label": "呼和浩特市" },
                { "value": "2437", "label": "托克托县" },
                { "value": "2438", "label": "清水河县" },
                { "value": "2439", "label": "武川县" },
                { "value": "2440", "label": "和林格尔县" },
                { "value": "2441", "label": "土默特左旗" },
                { "value": "4116", "label": "赛罕区" },
                { "value": "4117", "label": "新城区" },
                { "value": "4118", "label": "玉泉区" },
                { "value": "4377", "label": "回民区" },
                { "value": "150126", "label": "其它区" }
            ]
        }, {
            "value": "2442",
            "label": "包头",
            "children": [
                { "value": "2443", "label": "包头市" },
                { "value": "2444", "label": "固阳县" },
                { "value": "2445", "label": "土默特右旗" },
                { "value": "2446", "label": "达尔罕茂明安联合旗" },
                { "value": "4107", "label": "东河区" },
                { "value": "4108", "label": "九原区" },
                { "value": "4109", "label": "昆都仑区" },
                { "value": "4110", "label": "青山区" },
                { "value": "4111", "label": "石拐区" },
                { "value": "4376", "label": "白云矿区" },
                { "value": "150224", "label": "其它区" }
            ]
        }, {
            "value": "2447",
            "label": "乌海",
            "children": [
                { "value": "2448", "label": "乌海市" },
                { "value": "4121", "label": "海勃湾区" },
                { "value": "4122", "label": "海南区" },
                { "value": "4123", "label": "乌达区" },
                { "value": "150305", "label": "其它区" }
            ]
        }, {
            "value": "2449",
            "label": "赤峰",
            "children": [
                { "value": "2459", "label": "巴林右旗" },
                { "value": "2450", "label": "赤峰市" },
                { "value": "2451", "label": "宁城县" },
                { "value": "2452", "label": "林西县" },
                { "value": "2453", "label": "喀喇沁旗" },
                { "value": "2454", "label": "巴林左旗" },
                { "value": "2455", "label": "敖汉旗" },
                { "value": "2456", "label": "阿鲁科尔沁旗" },
                { "value": "2457", "label": "翁牛特旗" },
                { "value": "2458", "label": "克什克腾旗" },
                { "value": "4112", "label": "红山区" },
                { "value": "4113", "label": "松山区" },
                { "value": "4114", "label": "元宝山区" },
                { "value": "150431", "label": "其它区" }
            ]
        }, {
            "value": "2460",
            "label": "通辽",
            "children": [
                { "value": "2461", "label": "通辽市" },
                { "value": "2462", "label": "霍林郭勒市" },
                { "value": "2463", "label": "开鲁县" },
                { "value": "2464", "label": "科尔沁左翼中旗" },
                { "value": "2465", "label": "科尔沁左翼后旗" },
                { "value": "2466", "label": "库伦旗" },
                { "value": "2467", "label": "奈曼旗" },
                { "value": "2468", "label": "扎鲁特旗" },
                { "value": "4120", "label": "科尔沁区" },
                { "value": "150582", "label": "其它区" }
            ]
        }, {
            "value": "2469",
            "label": "鄂尔多斯",
            "children": [
                { "value": "2472", "label": "乌审旗" },
                { "value": "2470", "label": "鄂尔多斯市" },
                { "value": "2471", "label": "准格尔旗" },
                { "value": "2473", "label": "伊金霍洛旗" },
                { "value": "2474", "label": "鄂托克旗" },
                { "value": "2475", "label": "鄂托克前旗" },
                { "value": "2476", "label": "杭锦旗" },
                { "value": "2477", "label": "达拉特旗" },
                { "value": "4115", "label": "东胜区" },
                { "value": "150628", "label": "其它区" }
            ]
        }, {
            "value": "2478",
            "label": "呼伦贝尔",
            "children": [
                { "value": "2491", "label": "鄂温克族自治旗" },
                { "value": "2479", "label": "呼伦贝尔市" },
                { "value": "2480", "label": "满洲里市" },
                { "value": "2481", "label": "牙克石市" },
                { "value": "2482", "label": "扎兰屯市" },
                { "value": "2483", "label": "根河市" },
                { "value": "2484", "label": "额尔古纳市" },
                { "value": "2485", "label": "陈巴尔虎旗" },
                { "value": "2486", "label": "阿荣旗" },
                { "value": "2487", "label": "新巴尔虎左旗" },
                { "value": "2488", "label": "新巴尔虎右旗" },
                { "value": "2489", "label": "鄂伦春自治旗" },
                { "value": "2490", "label": "莫力达瓦达斡尔族自治旗" },
                { "value": "4119", "label": "海拉尔区" },
                { "value": "150786", "label": "其它区" }
            ]
        }, {
            "value": "2492",
            "label": "乌兰察布",
            "children": [
                { "value": "2493", "label": "乌兰察布市" },
                { "value": "2494", "label": "丰镇市" },
                { "value": "2495", "label": "兴和县" },
                { "value": "2496", "label": "卓资县" },
                { "value": "2497", "label": "商都县" },
                { "value": "2498", "label": "凉城县" },
                { "value": "2499", "label": "化德县" },
                { "value": "2500", "label": "察哈尔右翼前旗" },
                { "value": "2501", "label": "察哈尔右翼中旗" },
                { "value": "2502", "label": "察哈尔右翼后旗" },
                { "value": "2503", "label": "四子王旗" },
                { "value": "4124", "label": "集宁区" },
                { "value": "150982", "label": "其它区" }
            ]
        }, {
            "value": "2504",
            "label": "锡林郭勒盟",
            "children": [
                { "value": "2505", "label": "锡林浩特市" },
                { "value": "2506", "label": "二连浩特市" },
                { "value": "2507", "label": "多伦县" },
                { "value": "2508", "label": "阿巴嘎旗" },
                { "value": "2509", "label": "西乌珠穆沁旗" },
                { "value": "2510", "label": "东乌珠穆沁旗" },
                { "value": "2511", "label": "苏尼特左旗" },
                { "value": "2512", "label": "苏尼特右旗" },
                { "value": "2513", "label": "太仆寺旗" },
                { "value": "2514", "label": "正镶白旗" },
                { "value": "2515", "label": "正蓝旗" },
                { "value": "2516", "label": "镶黄旗" }
            ]
        }, {
            "value": "2517",
            "label": "巴彦淖尔市",
            "children": [
                { "value": "2518", "label": "临河区" },
                { "value": "2524", "label": "乌拉特后旗" },
                { "value": "3785", "label": "巴彦淖尔市" },
                { "value": "2519", "label": "五原县" },
                { "value": "2520", "label": "磴口县" },
                { "value": "2521", "label": "杭锦后旗" },
                { "value": "2522", "label": "乌拉特中旗" },
                { "value": "2523", "label": "乌拉特前旗" },
                { "value": "150827", "label": "其它区" }
            ]
        }, {
            "value": "2525",
            "label": "阿拉善盟",
            "children": [
                { "value": "2526", "label": "阿拉善左旗" },
                { "value": "2527", "label": "阿拉善右旗" },
                { "value": "2528", "label": "额济纳旗" }
            ]
        }, {
            "value": "2529",
            "label": "兴安盟",
            "children": [
                { "value": "2530", "label": "乌兰浩特市" },
                { "value": "2531", "label": "阿尔山市" },
                { "value": "2532", "label": "突泉县" },
                { "value": "2533", "label": "扎赉特旗" },
                { "value": "2534", "label": "科尔沁右翼前旗" },
                { "value": "2535", "label": "科尔沁右翼中旗" }
            ]
        }],
        "value": "2434",
        "label": "内蒙古"
    }, {
        "children": [{
            "value": "4847",
            "label": "香港岛",
            "children": [
                { "value": "4848", "label": "香港岛" },
                { "value": "810101", "label": "中西区" },
                { "value": "810102", "label": "湾仔" },
                { "value": "810104", "label": "南区" }
            ]
        }, {
            "value": "4849",
            "label": "九龙",
            "children": [
                { "value": "4850", "label": "九龙" },
                { "value": "810201", "label": "九龙城区" },
                { "value": "810202", "label": "油尖旺区" },
                { "value": "810203", "label": "深水埗区" },
                { "value": "810204", "label": "黄大仙区" },
                { "value": "810205", "label": "观塘区" }
            ]
        }, {
            "value": "4851",
            "label": "新界",
            "children": [
                { "value": "4852", "label": "新界" },
                { "value": "810301", "label": "北区" },
                { "value": "810302", "label": "大埔区" },
                { "value": "810303", "label": "沙田区" },
                { "value": "810304", "label": "西贡区" },
                { "value": "810305", "label": "元朗区" },
                { "value": "810306", "label": "屯门区" },
                { "value": "810307", "label": "荃湾区" },
                { "value": "810308", "label": "葵青区" },
                { "value": "810309", "label": "离岛区" }
            ]
        }],
        "value": "4846",
        "label": "香港"
    }, {
        "children": [{
            "value": "4854",
            "label": "澳门半岛",
            "children": [
                { "value": "4855", "label": "澳门半岛" }
            ]
        }, {
            "value": "4856",
            "label": "澳门离岛",
            "children": [
                { "value": "4857", "label": "澳门离岛" }
            ]
        }],
        "value": "4853",
        "label": "澳门"
    }, {
        "children": [{
            "value": "4859",
            "label": "台北县",
            "children": [
                { "value": "4860", "label": "台北县" }
            ]
        }, {
            "value": "4861",
            "label": "宜兰县",
            "children": [
                { "value": "4862", "label": "宜兰县" }
            ]
        }, {
            "value": "4863",
            "label": "桃园县",
            "children": [
                { "value": "4864", "label": "桃园县" }
            ]
        }, {
            "value": "4865",
            "label": "新竹县",
            "children": [
                { "value": "4866", "label": "新竹县" }
            ]
        }, {
            "value": "4867",
            "label": "苗栗县",
            "children": [
                { "value": "4868", "label": "苗栗县" }
            ]
        }, {
            "value": "4869",
            "label": "台中县",
            "children": [
                { "value": "4870", "label": "台中县" }
            ]
        }, {
            "value": "4871",
            "label": "彰化县",
            "children": [
                { "value": "4872", "label": "彰化县" }
            ]
        }, {
            "value": "4873",
            "label": "南投县",
            "children": [
                { "value": "4874", "label": "南投县" }
            ]
        }, {
            "value": "4875",
            "label": "云林县",
            "children": [
                { "value": "4876", "label": "云林县" }
            ]
        }, {
            "value": "4877",
            "label": "嘉义县",
            "children": [
                { "value": "4878", "label": "嘉义县" }
            ]
        }, {
            "value": "4879",
            "label": "台南县",
            "children": [
                { "value": "4880", "label": "台南县" }
            ]
        }, {
            "value": "4881",
            "label": "高雄县",
            "children": [
                { "value": "4882", "label": "高雄县" }
            ]
        }, {
            "value": "4883",
            "label": "屏东县",
            "children": [
                { "value": "4884", "label": "屏东县" }
            ]
        }, {
            "value": "4885",
            "label": "台东县",
            "children": [
                { "value": "4886", "label": "台东县" }
            ]
        }, {
            "value": "4887",
            "label": "花莲县",
            "children": [
                { "value": "4888", "label": "花莲县" }
            ]
        }, {
            "value": "4889",
            "label": "澎湖县",
            "children": [
                { "value": "4890", "label": "澎湖县" }
            ]
        }, {
            "value": "4891",
            "label": "基隆市",
            "children": [
                { "value": "4892", "label": "基隆市" },
                { "value": "710701", "label": "仁爱区" },
                { "value": "710702", "label": "信义区" },
                { "value": "710703", "label": "中正区" },
                { "value": "710705", "label": "安乐区" },
                { "value": "710706", "label": "暖暖区" },
                { "value": "710707", "label": "七堵区" },
                { "value": "710708", "label": "其它区" }
            ]
        }, {
            "value": "4893",
            "label": "新竹市",
            "children": [
                { "value": "4894", "label": "新竹市" },
                { "value": "710802", "label": "北区" },
                { "value": "710803", "label": "香山区" },
                { "value": "710804", "label": "其它区" }
            ]
        }, {
            "value": "4895",
            "label": "台中市",
            "children": [
                { "value": "4896", "label": "台中市" },
                { "value": "710401", "label": "中区" },
                { "value": "710403", "label": "南区" },
                { "value": "710405", "label": "北区" },
                { "value": "710406", "label": "北屯区" },
                { "value": "710407", "label": "西屯区" },
                { "value": "710408", "label": "南屯区" },
                { "value": "710409", "label": "其它区" }
            ]
        }, {
            "value": "4897",
            "label": "嘉义市",
            "children": [
                { "value": "4898", "label": "嘉义市" },
                { "value": "710903", "label": "其它区" }
            ]
        }, {
            "value": "4899",
            "label": "台南市",
            "children": [
                { "value": "4900", "label": "台南市" },
                { "value": "710301", "label": "中西区" },
                { "value": "710303", "label": "南区" },
                { "value": "710304", "label": "北区" },
                { "value": "710305", "label": "安平区" },
                { "value": "710306", "label": "安南区" },
                { "value": "710307", "label": "其它区" }
            ]
        }, {
            "value": "4901",
            "label": "台北市",
            "children": [
                { "value": "4902", "label": "台北市" },
                { "value": "710101", "label": "中正区" },
                { "value": "710106", "label": "万华区" },
                { "value": "710107", "label": "信义区" },
                { "value": "710108", "label": "士林区" },
                { "value": "710109", "label": "北投区" },
                { "value": "710110", "label": "内湖区" },
                { "value": "710111", "label": "南港区" },
                { "value": "710112", "label": "文山区" },
                { "value": "710113", "label": "其它区" }
            ]
        }, {
            "value": "4903",
            "label": "高雄市",
            "children": [
                { "value": "4904", "label": "高雄市" },
                { "value": "710202", "label": "前金区" },
                { "value": "710203", "label": "芩雅区" },
                { "value": "710204", "label": "盐埕区" },
                { "value": "710205", "label": "鼓山区" },
                { "value": "710206", "label": "旗津区" },
                { "value": "710207", "label": "前镇区" },
                { "value": "710208", "label": "三民区" },
                { "value": "710209", "label": "左营区" },
                { "value": "710210", "label": "楠梓区" },
                { "value": "710211", "label": "小港区" },
                { "value": "710212", "label": "其它区" }
            ]
        }, {
            "value": "4905",
            "label": "金门县",
            "children": [
                { "value": "4906", "label": "金门" }
            ]
        }, {
            "value": "4907",
            "label": "连江县",
            "children": [
                { "value": "4908", "label": "连江" }
            ]
        }, {
            "value": "4908",
            "label": "新北市",
            "children": [
                { "value": "711100", "label": "新北市" }
            ]
        }],
        "value": "4858",
        "label": "台湾"
    }];

    if (hasDisabled) {
        dataSource[1].disabled = true;
    }

    return dataSource;
};

function render(lang = 'en-us') {
    const i18n = i18nMap[lang];
    const dataSource = createDataSource(i18n.option);
    const disabledDataSource = createDataSource(i18n.option, true);

    ReactDOM.render((
        <div className="demo-container">
            <Demo title="Single">
                <DemoGroup label="Normal">
                    <Cascader canOnlySelectLeaf expandTriggerType="hover" dataSource={dataSource} />
                </DemoGroup>
                <DemoGroup label="Selected">
                    <Cascader canOnlySelectLeaf expandTriggerType="hover" dataSource={disabledDataSource} defaultValue="3480" />
                </DemoGroup>
            </Demo>
            <Demo title="Multiple">
                <DemoGroup label="Normal">
                    <Cascader multiple expandTriggerType="hover" dataSource={dataSource} />
                </DemoGroup>
                <DemoGroup label="Selected">
                    <Cascader multiple expandTriggerType="hover" dataSource={disabledDataSource} defaultValue="3480" />
                </DemoGroup>
            </Demo>
        </div>
    ), document.getElementById('container'));
}

window.renderDemo = function(lang) {
    render(lang);
};

window.renderDemo();

initDemo('cascader');
