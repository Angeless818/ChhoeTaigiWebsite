// https://github.com/ChhoeTaigi/ChhoeTaigiDatabase

module.exports = [
    {
        name: 'KamJitian',
        chineseName: '1913 甘字典',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hanji_taibun: '漢字台文',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
        },
        briefWidth: {
            poj_unicode: '166px',
            kiplmj_unicode: '158px',
            hanji_taibun: '140px',
            hanlo_taibun_kaisoeh_poj: '448px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            hanji_taibun: '漢字台文',
            poj_bunim_unicode: '文音(白話字)',
            poj_bunim_input: '文音(白話字輸入)',
            poj_kaisoeh: '台文解說(白話字)',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_input: '教育部羅馬拼音輸入',
            kiplmj_bunim_unicode: '文音(教育部羅馬拼音)',
            kiplmj_bunim_input: '文音(教育部羅馬拼音輸入)',
            kiplmj_kaisoeh: '台文解說(教育部羅馬拼音)',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'TaioanSitbutMialui',
        chineseName: '1928 台灣植物名彙',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hanji_taibun: '漢字台文',
        },
        briefWidth: {
            poj_unicode: '304px',
            kiplmj_unicode: '304px',
            hanji_taibun: '304px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_input: '教育部羅馬拼音輸入',
            hanji_taibun: '漢字台文',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'TaijitToaSutian',
        chineseName: '1932 台日大辭典(台譯版)',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
        },
        briefWidth: {
            poj_unicode: '121px',
            kiplmj_unicode: '121px',
            hanlo_taibun_poj: '140px',
            hanlo_taibun_kaisoeh_poj: '530px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入(其他講法)',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            hanlo_taibun_kaisoeh_poj: '漢羅台文解說(白話字)',
            hanlo_taibun_leku_poj: '漢羅台文例句(白話字)',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_unicode_dialect: '教育部羅馬拼音(其他講法)',
            kiplmj_input: '教育部羅馬拼音輸入',
            kiplmj_input_dialect: '教育部羅馬拼音輸入(其他講法)',
            hanlo_taibun_kiplmj: '漢羅台文(教育部羅馬拼音)',
            hanlo_taibun_kaisoeh_kiplmj: '漢羅台文解說(教育部羅馬拼音)',
            hanlo_taibun_leku_kiplmj: '漢羅台文例句(教育部羅馬拼音)',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'TaioanPehoeKichhooGiku',
        chineseName: '1956 台灣白話基礎語句',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hoabun: '對應華文',
        },
        briefWidth: {
            poj_unicode: '304px',
            kiplmj_unicode: '304px',
            hoabun: '304px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入(其他講法)',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_unicode_dialect: '教育部羅馬拼音(其他講法)',
            kiplmj_input: '教育部羅馬拼音輸入',
            kiplmj_input_dialect: '教育部羅馬拼音輸入(其他講法)',
            hoabun: '華文',
            page_number: '原冊頁數',
        }
    },
    {
        name: 'EmbreeTaigiSutian',
        chineseName: '1973 Embree台英辭典',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hoabun: '對應華文',
            english_descriptions: '對應英文',
        },
        briefWidth: {
            poj_unicode: '175px',
            kiplmj_unicode: '175px',
            hoabun: '156px',
            english_descriptions: '406px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_input: '教育部羅馬拼音輸入',
            abbreviations: '詞類縮寫',
            noun_classifiers: '單位量詞',
            reduplication: '疊詞',
            hoabun: '華文',
            english_descriptions: '英文解說',
            page_number: '原冊頁數(暫時無)',
        }
    },
    {
        name: 'MaryknollTaiengSutian',
        chineseName: '1976 Maryknoll台英辭典',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hoabun: '對應華文',
            english_descriptions: '對應英文',
        },
        briefWidth: {
            poj_unicode: '168px',
            kiplmj_unicode: '182px',
            hoabun: '156px',
            english_descriptions: '406px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_input: '教育部羅馬拼音輸入',
            hoabun: '華文',
            english_descriptions: '英文解說',
            page_number: '原冊頁數(暫時無)',
        }
    },
    {
        name: 'TaibunHoabunSoanntengSutian',
        chineseName: '2002+ 台華線頂對照典',
        brief: {
            poj_unicode: '白話字',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            kiplmj_unicode: '教育部羅馬拼音',
            hoabun: '對應華文',
        },
        briefWidth: {
            poj_unicode: '228px',
            hanlo_taibun_poj: '228px',
            kiplmj_unicode: '228px',
            hoabun: '228px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入(其他講法)',
            hanlo_taibun_poj: '漢羅台文(白話字)',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_unicode_dialect: '教育部羅馬拼音(其他講法)',
            kiplmj_input: '教育部羅馬拼音輸入',
            kiplmj_input_dialect: '教育部羅馬拼音輸入(其他講法)',
            hanlo_taibun_kiplmj: '漢羅台文(教育部羅馬拼音)',
            hoabun: '華文',
        }
    },
    {
        name: 'TJTaigiPehoeSiosutian',
        chineseName: '2009 TJ台語白話小詞典',
        brief: {
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字(其他講法)',
            page_number: '原冊頁數',
        },
        briefWidth: {
            poj_unicode: '304px',
            poj_unicode_dialect: '304px',
            page_number: '304px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入(其他講法)',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_unicode_dialect: '教育部羅馬拼音(其他講法)',
            kiplmj_input: '教育部羅馬拼音輸入',
            kiplmj_input_dialect: '教育部羅馬拼音輸入(其他講法)',
            page_number: '原冊頁數',
            store_link: '來去買冊',
        }
    },
    {
        name: 'KauiokpooTaigiSutian',
        chineseName: '2011+ 教育部台語辭典',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hanji_taibun: '漢字台文',
            hoabun: '對應華文',
        },
        briefWidth: {
            poj_unicode: '170px',
            kiplmj_unicode: '204px',
            hanji_taibun: '88px',
            hoabun: '450px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_unicode_dialect: '白話字(其他講法)',
            poj_input: '白話字輸入',
            poj_input_dialect: '白話字輸入(其他講法)',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_unicode_dialect: '教育部羅馬拼音(其他講法)',
            kiplmj_input: '教育部羅馬拼音輸入',
            kiplmj_input_dialect: '教育部羅馬拼音輸入(其他講法)',
            word_property: '字詞屬性',
            word_bunpeh_property: '文白屬性',
            word_dialect_property: '其他講法ê類型',
            hanji_taibun: '漢字台文',
            hoabun: '華文',
            descriptions: '華文解說、詞性，台文例詞kap例句',
        }
    },
    {
        name: 'iTaigiHoataiSutian',
        chineseName: '2016+ iTaigi華台對照典',
        brief: {
            poj_unicode: '白話字',
            kiplmj_unicode: '教育部羅馬拼音',
            hanlo_taibun_kiplmj: '漢羅台文(教育部羅馬拼音)',
            hoabun: '對應華文',
        },
        briefWidth: {
            poj_unicode: '256px',
            kiplmj_unicode: '246px',
            hanlo_taibun_kiplmj: '210px',
            hoabun: '200px',
        },
        columns: {
            id: '編號',
            poj_unicode: '白話字',
            poj_input: '白話字輸入',
            kiplmj_unicode: '教育部羅馬拼音',
            kiplmj_input: '教育部羅馬拼音輸入',
            hanlo_taibun_kiplmj: '漢羅台文(教育部羅馬拼音)',
            hoabun: '華文',
            from: '字詞來源',
        }
    },
]