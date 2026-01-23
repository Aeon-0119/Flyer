function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

const STORES = [
  { id: "dai", name: "ダイレックス" },
  { id: "aeon", name: "イオン" },
  { id: "maru", name: "マルキョウ" },
];

const CATEGORIES = ["青果", "鮮魚", "精肉", "食品","飲料", "菓子", "冷凍食品・パン", "日配", "お酒"];

const ITEMS = [
  {storeId: "dai", category: "食品", name: "お茶 伊右衛門", price: 149, unit: "1本", dateTo: "2026-01-05", note: "まで", image: "images/iemon.jpg" },
  {storeId: "dai", category: "食品", name: "どん兵衛 うどん", price: 128, unit: "1個", dateTo: "2026-01-05", note: "まで", image: "images/donbei.jpg" },
  {storeId: "aeon", category: "青果", name: "ジャガイモ", price: 213, unit: "3玉", dateTo: "2026-01-06", note: "限定", image: "images/imo.jpg" },
  {storeId: "aeon", category: "青果", name: "バナナ", price: 213, unit: "1袋", dateTo: "2026-01-06", note: "限定", image: "images/banana.jpg" },
  {storeId: "maru", category: "青果", name: "ピーマン", price: 106, unit: "1袋", dateTo: "2026-01-06", note: "まで", image: "images/pi-man.jpg" },
  {storeId: "maru", category: "食品", name: "パン", price: 138, unit: "1個", dateTo: "2026-01-06", note: "まで" },
  {storeId:"aeon", category:"食品", group:"丸美屋 麻婆豆腐の素", flavor:"甘口", price:178, unit:"162g", dateTo:"2026-01-31", note:"まで", image:"images/mabo_amakuchi.jpg" },
  {storeId:"aeon", category:"食品", group:"丸美屋 麻婆豆腐の素", flavor:"中辛", price:178, unit:"162g", dateTo:"2026-01-31", note:"まで", image:"images/mabo_chukara.jpg" },
  {storeId:"aeon", category:"菓子", group:"明治 チョコレート", flavor:"マカダミア", name:"明治 マカダミアチョコレート", price:268, unit:"各種", dateTo:"2026-01-31", note:"まで", image:"images/meiji_maka.jpg" },
  {storeId:"aeon", category:"菓子", group:"明治 チョコレート", flavor:"アーモンド", name:"明治 アーモンドチョコレート",   price:268, unit:"各種", dateTo:"2026-01-31", note:"まで", image:"images/meiji_amo.jpg" },
  {storeId:"aeon", category:"菓子", group:"東ハト ポテコ", flavor:"うましお", name:"東ハト ポテコ", price:98, unit:"各種", dateTo:"2026-01-31", note:"まで", image:"images/po_umashio.jpg" },
  {storeId:"aeon", category:"菓子", group:"東ハト ポテコ", flavor:"コンソメ", name:"東ハト ポテコ", price:98, unit:"各種", dateTo:"2026-01-31", note:"まで", image:"images/po_konsome.jpg" },
  {storeId:"aeon", category:"菓子", group:"亀田のうす焼", flavor:"サラダ", name:"亀田製菓 亀田のうす焼", price:128, unit:"各種", dateTo:"2026-01-31", note:"まで", image:"images/ka_sarada.jpg" },
  {storeId:"aeon", category:"菓子", group:"亀田のうす焼", flavor:"えび",   name:"亀田製菓 亀田のうす焼", price:128, unit:"各種", dateTo:"2026-01-31", note:"まで", image:"images/ka_ebi.jpg" },
  {storeId:"aeon", category:"飲料", group:"ネスカフェ ゴールドブレンド", flavor:"通常", name:"ネスカフェ ゴールドブレンド", price:758, unit:"80g", dateTo:"2026-01-31", note:"まで", image:"images/ne_tu.jpg" },
  {storeId:"aeon", category:"飲料", group:"ネスカフェ ゴールドブレンド", flavor:"コク深め", name:"ネスカフェ ゴールドブレンド", price:758, unit:"80g", dateTo:"2026-01-31", note:"まで", image:"images/ne_koku.jpg" },
  {storeId:"aeon", category:"冷凍食品・パン", name:"森永 ホットケーキミックス", price:258, unit:"150g×4袋", dateTo:"2026-01-31", note:"まで", image:"images/hot.jpg" },
  {storeId:"aeon", category:"飲料", group:"アクエリアス", flavor:"通常", name:"コカ・コーラ アクエリアス", price:98, unit:"500ml", dateTo:"2026-01-31", note:"まで", image:"images/akueri_tu.jpg" },
  {storeId:"aeon", category:"飲料", group:"アクエリアス", flavor:"マルチビタミン", name:"アクエリアス", price:98, unit:"500ml", dateTo:"2026-01-31", note:"まで", image:"images/akueri_bita.jpg" },
  {storeId:"aeon", category:"食品", group:"mizkan 味ぽん", flavor:"通常", name:"mizkan 味ぽん", price:278, unit:"500ml", dateTo:"2026-01-31", note:"まで", image:"images/ajipon_tu.jpg" },
  {storeId:"aeon", category:"食品", group:"mizkan 味ぽん", flavor:"MILD", name:"mizkan 味ぽん", price:278, unit:"500ml", dateTo:"2026-01-31", note:"まで", image:"images/ajipon_m.jpg" },
  {storeId:"aeon", category:"食品", group:"クノール カップスープ", flavor:"クリーミージュ", name:"クノール カップスープ", price:318, unit:"8袋入", dateTo:"2026-01-31", note:"まで", image:"images/kuno_ku.jpg" },
  {storeId:"aeon", category:"食品", group:"クノール カップスープ", flavor:"コーンクリーム", name:"クノール カップスープ", price:318, unit:"8袋入", dateTo:"2026-01-31", note:"まで", image:"images/kuno_ko.jpg" },
  {storeId:"aeon", category:"食品", group:"クノール カップスープ", flavor:"オニオンコンソメ", name:"クノール カップスープ", price:318, unit:"8袋入", dateTo:"2026-01-31", note:"まで", image:"images/kuno_oni.jpg" },
  {storeId:"aeon", category:"食品", name:"ハウス 北海道グラタン", price:198, unit:"4皿分", dateTo:"2026-01-31", note:"まで", image:"images/hausu_gura.jpg" },
  {storeId:"aeon", category:"食品", group:"ポポロスパ 結束", flavor:"5分", name:"はごろもフーズ ポポロスパ", price:178, unit:"80g×6", dateTo:"2026-01-31", note:"まで", image:"images/popo_5.jpg" },
  {storeId:"aeon", category:"食品", group:"ポポロスパ 結束", flavor:"7分", name:"はごろもフーズ ポポロスパ", price:178, unit:"80g×6", dateTo:"2026-01-31", note:"まで", image:"images/popo_7.jpg" },
  {storeId:"aeon", category:"食品", group:"ハウス こくまろカレー", flavor:"甘口", name:"ハウス こくまろカレー", price:178, unit:"140g", dateTo:"2026-01-31", note:"まで", image:"images/hausu_amakuchi.jpg" },
  {storeId:"aeon", category:"食品", group:"ハウス こくまろカレー", flavor:"中辛", name:"ハウス こくまろカレー", price:178, unit:"140g", dateTo:"2026-01-31", note:"まで", image:"images/hausu_chukara.jpg" },
  {storeId: "maru", category: "青果", name: "大根", price: 160, unit: "1本" ,dateTo:"2026-01-31", note:"まで", image:"images/original.jpg" },         
  {storeId: "maru", category: "青果", name: "にら", price: 160, unit: "1束",dateTo:"2026-01-31", note:"まで", image:"images/36370df3309b2ab8.jpg" },         
  {storeId: "maru", category: "青果", name: "白ねぎ", price: 268, unit: "1束",dateTo:"2026-01-31", note:"まで", image:"images/00111217_008-1.jpg" },        
  {storeId: "maru", category: "青果", name: "サンふじりんご", price: 214, unit: "2玉" ,dateTo:"2026-01-31", note:"まで", image:"images/kind_12_img_main.jpg" },
  {storeId: "maru", category: "青果", name: "みかん", price: 646, unit: "1袋", dateTo:"2026-01-31", note:"まで", image:"images/publicdomainq-0000852xolhto.jpg" },        
  {storeId: "maru", category: "青果", name: "白菜", price: 106, unit: "1/4カット" ,dateTo:"2026-01-31", note:"まで", image:"images/hakusai4.jpg" },    
  {storeId: "maru", category: "精肉", name: "豚ロース切身", price: 171, unit: "100g",dateTo:"2026-01-31", note:"まで", image:"images/1000_F_267875523_qmPCXe3Q1Tupp9wjzAivTC8BWEz1VL7C.jpg"  },   
  {storeId: "maru", category: "精肉", name: "豚バラスライス", price: 214, unit: "100g" ,dateTo:"2026-01-31", note:"まで", image:"images/k00340005_3.jpg" }, 
  {storeId: "maru", category: "精肉", name: "牛モモスライス", price: 1069, unit: "330g" ,dateTo:"2026-01-31", note:"まで", image:"images/momo_shoulder_3001-740×540.jpg" }, 
  {storeId: "maru", category: "鮮魚", name: "真だら切身", price: 204, unit: "100g" ,dateTo:"2026-01-31", note:"まで", image:"images/madarakirimi.jpg" },  
  {storeId: "maru", category: "食品", name: "ホクトぶなしめじ", price: 128, unit: "1袋", dateTo:"2026-01-31", note:"まで", image:"images/814HI-UtusS._AC_SX342.jpg" }, 
  {storeId: "maru", category: "食品", name: "鍋用スープ", price: 322, unit: "1袋",dateTo:"2026-01-31", dateTo:"2026-01-31", note:"まで", image:"images/71f1U10xRJL.AC_SL1500.jpg" },
  {storeId: "dai",category:"食品",group:"鍋キューブ", flavor:"濃厚白湯", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"鍋キューブ", flavor:"鶏だし・うま塩", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"鍋キューブ", flavor:"うま辛キムチ", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"鍋キューブ",flavor:"鶏だしコク醤油", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品", name:"棒状鍋用ラーメン", price:108, unit:"3人前",dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品", name:"キムチの素", price:199, unit:"190g",dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"エバラ",flavor:"おろしのたれ", name:"エバラ食品", price:198, unit:"270g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"エバラ",flavor:"にんにくのたれ", name:"エバラ食品", price:198, unit:"270g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"カゴメ",flavor:"ウスター", name:"醸熟ソース", price:199, unit:"300ml", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"カゴメ",flavor:"中濃", name:"醸熟ソース", price:199, unit:"300ml", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"カゴメ",flavor:"とんかつ", name:"醸熟ソース", price:199, unit:"300ml", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"オイリオ",flavor:"やさし～く香るエキストラバージンオリーブオイル", name:"日清オイリオ", price:598, unit:"350g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"オイリオ",flavor:"さらっと軽いオリーブオイル", name:"日清オイリオ", price:598, unit:"350g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"ハウス商品",flavor:"クリーム", name:"シチューミクス", price:279, unit:"170g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"ハウス商品",flavor:"クリーム濃厚仕立て", name:"シチューミクス", price:279, unit:"170g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"わかめ",flavor:"しそ", name:"わかめ混ぜご飯", price:79, unit:"30g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"わかめ",flavor:"若菜", name:"わかめ混ぜご飯", price:79, unit:"30g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"わかめ",flavor:"明太子昆布", name:"わかめ混ぜご飯", price:79, unit:"30g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"シビ辛麻辣", name:"一平ちゃん夜店の焼きそば", price:129, unit:"76g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"ソース焼きそば", name:"ごつ盛り", price:129, unit:"171g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"塩焼きそば", name:"ごつ盛り", price:129, unit:"156g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"カルボナーラ", name:"MARUCHANQTTA", price:129, unit:"114g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai",category:"食品",group:"袋麺",name:"サッポロ一番 5食入",price:333,unit:"5食",dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"プチコーン", flavor:"直火焼きトウモロコシ", name:"プチコーン",price:89, unit:"1袋",dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"プチコーン", flavor:"コーンマヨ", name:"プチコーン", price:89, unit:"1袋", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"クリスプ", flavor:"うましお", name:"クリスプ", price:89, unit:"1袋", dateTo:"2026-01-31",  note:"まで",},
  {storeId: "dai", category:"菓子", group:"クリスプ", flavor:"旨味コンソメ", name:"クリスプ", price:89, unit:"1袋", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"とんがりコーン", flavor:"あっさり塩", name:"とんがりコーン", price:129, unit:"1個", dateTo:"2026-01-31", note:"まで", },
  {storeId: "dai", category:"菓子", group:"とんがりコーン", flavor:"焼きトウモロコシ", name:"とんがりコーン", price:129, unit:"1個", dateTo:"2026-01-31", note:"まで", },
  {storeId: "dai", category:"菓子", group:"とんがりコーン", flavor:"ハニーバター", name:"とんがりコーン", price:129, unit:"1個", dateTo:"2026-01-31", note:"まで", },
  {storeId: "dai", category:"菓子", group:"とんがりコーン", flavor:"あっさり塩", name:"とんがりコーン", price:129, unit:"1個", dateTo:"2026-01-31", note:"まで", },
  {storeId: "dai", category:"菓子", group:"フルグラ", flavor:"プレーン", name:"フルグラ", price:649, unit:"700g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"フルグラ", flavor:"糖質オフ", name:"フルグラ", price:649, unit:"550g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"フルグラ", flavor:"チョコバナナ", name:"フルグラ", price:649, unit:"550g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"コグミ", flavor:"フルーツアソート", name:"コグミ", price:108, unit:"1つ", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"コグミ", flavor:"ドリンクアソート", name:"コグミ", price:108, unit:"1つ", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"レギュラー", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"トリプルナッツ", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"発酵バター", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"アップルパイ", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"ハッピータン", flavor:"レギュラー", name:"ハッピータン", price:159, unit:"96g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"ハッピータン", flavor:"スパイス", name:"ハッピータン", price:159, unit:"73g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"チョコ", flavor:"ラミー", name:"ラミー", price:249, unit:"3本入り", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"チョコ", flavor:"バッカス", name:"バッカス", price:249, unit:"10粒入り", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"チョコ", flavor:"ラッカス", name:"ラッカス", price:249, unit:"10粒入り", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"明治チョコ", flavor:"カカオ72%", name:"チョコレート効果大袋", price:980, unit:"225g", dateTo:"2026-01-31", note:"まで",},
  {storeId: "dai", category:"菓子", group:"明治チョコ", flavor:"カカオ86%", name:"チョコレート効果大袋", price:980, unit:"210g", dateTo:"2026-01-31", note:"まで",},
  {storeId:  "dai",category:"飲料",group:"伊藤園",name:"お〜いお茶PURE GREEN",price:129,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/f809f9780a8d3369b08f347e7383775e.jpg"},
  {storeId:  "dai",category:"飲料",group:"伊藤園",name:"健康ミネラル麦茶",price:129,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"お茶",name:"ウーロン茶",price:149,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"お茶",name:"生茶",price:149,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"お茶",name:"おいしい無糖",price:149,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"コカ・コーラ",name:"レギュラー",price:99,unit:"700ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"コカ・コーラ",name:"ゼロシュガー",price:99,unit:"700ml",dateTo:"2026-01-31", note:"まで", image:"images/tanomail_9627095.jpg"},
  {storeId:  "dai",category:"飲料",group:"ネスレ日本",flavor:"無糖", name:"ネスカフェエクセラボトルコーヒー", price:118,unit:"900ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"ネスレ日本",flavor:"甘さ控えめ", name:"ネスカフェエクセラボトルコーヒー", price:118,unit:"900ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",name:"グリーンダカラ",price:89,unit:"600ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"午後の紅茶", flavor:"ストレートティー", name:"午後の紅茶", price:89,unit:"500ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"午後の紅茶", flavor:"ミルクティー", name:"午後の紅茶", price:89,unit:"500ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"午後の紅茶", flavor:"レモンティー", name:"午後の紅茶", price:89,unit:"500ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"ネスカフェゴールドブレンド", flavor:"オリジナル", name:"ネスカフェゴールドブレンド", price:599,unit:"80g",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"ネスカフェゴールドブレンド", flavor:"コク深め", name:"ネスカフェゴールドブレンド", price:599,unit:"80g",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"飲料",group:"ネスカフェゴールドブレンド", flavor:"香り華やぐ", name:"ネスカフェゴールドブレンド", price:599,unit:"80g",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"カルボナーラ",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"ミートソース",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"ナポリタン",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"和風たらこ",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"若鶏たれづけ唐揚げ", price:378,unit:"260g",dateTo:"2026-01-31", note:"まで", image:"images/compass1683474414.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"大きな大きな焼きおにぎり", price:378,unit:"6個入",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン", group:"菓心堂", name:"三角カステラ風蒸しケーキ", price:99,unit:"1個",dateTo:"2026-01-31", note:"まで", image:"images/2040__5LiJ6KeS44Kr44K544OG44Op6aKo6JK444GX44Kx44O844Kt77y-MjMwN1JO.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", group:"菓心堂", name:"三角よもぎ小豆蒸しパン", price:99,unit:"1個",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"りんごデニッシュ", price:99,unit:"1個",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"じゃりパンシュガー", price:99,unit:"4個入り",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",name:"豊潤あらびきウインナー",price:238,unit:"80g×2",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"豆乳", name:"調整豆乳",price:178,unit:"1000ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"豆乳", name:"毎日おいしい無調整豆乳",price:178,unit:"1000ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"豆乳", name:"調整カロリー45%オフ",price:178,unit:"1000ml",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"金のつぶ", name:"たれたっぷりたまご醬油たれ",price:98,unit:"45g×3",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"金のつぶ", name:"パキッ!とたれとろっ豆",price:98,unit:"45g×3",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配", name:"焼いておいしい絹厚揚げ",price:98,unit:"4個入り",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"ニッポンハム", flavor:"マルゲリータ", name:"ピッツァフェリッチェリア",price:228,unit:"1枚",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"ニッポンハム", flavor:"ソーセージピザ", name:"ピッツァフェリッチェリア",price:228,unit:"1枚",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"プレーン加糖", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"砂糖不使用", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"砂糖不使用脂肪0", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"贅沢搾りぶどう", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/"},
  {storeId:  "dai",category:"お酒",group:"発泡酒",name:"淡麗グリーンラベル",price:878,unit:"350ml×6",dateTo:"2026-01-31", note:"まで", image:"images/rpt20140210047.jpg"},
  {storeId:  "dai",category:"お酒",group:"ビール",name:"晴れ風",price:1108,unit:"350ml×6",dateTo:"2026-01-31", note:"まで", image:"images/021741b.jpg"},
  {storeId:  "dai",category:"お酒",group:"日本酒",name:"月桂冠",price:1538,unit:"3L",dateTo:"2026-01-31", note:"まで", image:"images/4901030146019_01.jpg"}
];

document.addEventListener("DOMContentLoaded", () => {
  const elCategory = document.getElementById("categorySelect");
  const elStore = document.getElementById("storeSelect");
  const elOnly = document.getElementById("onlyCheapest");
  const elResult = document.getElementById("result");
  const elTitle = document.getElementById("resultTitle");

  if (!elCategory || !elStore || !elOnly || !elResult || !elTitle) {
    console.error("HTMLのidが一致してないか、要素が見つかりません。");
    return;
  }

  let state = {
    category: CATEGORIES[0],
    storeId: "all",
    onlyCheapest: false,
  };

  elCategory.innerHTML = CATEGORIES
  .map(c => `<option value="${c}">${c}</option>`)
  .join("");
  elCategory.value = state.category;

  elStore.innerHTML = `<option value="all">全店舗</option>` +
    STORES.map(s => `<option value="${s.id}">${s.name}</option>`).join("");

  elCategory.addEventListener("change", () => {
    state.category = elCategory.value;
    render();
  });

  elStore.addEventListener("change", () => {
    state.storeId = elStore.value;
    render();
  });

  elOnly.addEventListener("change", () => {
    state.onlyCheapest = elOnly.checked;
    render();
  });

  render();

  function render() {
  const today = todayISO();
  elTitle.textContent = `結果：${state.category}`;

  let rows = ITEMS.filter(x =>
    x.category === state.category &&
    (!x.dateTo || x.dateTo >= today)
  );

  if (state.storeId !== "all") {
    rows = rows.filter(x => x.storeId === state.storeId);
  }

  const seriesKeyOf = (r) => `${(r.group ?? r.name)}__${r.unit}`;
  const bestPrice = new Map();
  for (const r of rows) {
    const key = seriesKeyOf(r);
    const cur = bestPrice.get(key);
    if (cur === undefined || r.price < cur) bestPrice.set(key, r.price);
  }

  const hasGroup = rows.filter(r => r.group);
  const noGroup  = rows.filter(r => !r.group);

  const groupKeyOf = (r) =>
    `${r.storeId}__${r.category}__${r.group}__${r.unit}__${r.dateTo ?? ""}`;

  const grouped = new Map();
  for (const r of hasGroup) {
    const key = groupKeyOf(r);
    if (!grouped.has(key)) {
      grouped.set(key, {
        storeId: r.storeId,
        category: r.category,
        title: r.group,
        unit: r.unit,
        dateTo: r.dateTo,
        note: r.note,
        variants: []
      });
    }
    grouped.get(key).variants.push(r);
  }

  let groups = Array.from(grouped.values());

  if (state.onlyCheapest) {
    groups = groups.filter(g => {
      const minP = Math.min(...g.variants.map(v => v.price));
      return minP === bestPrice.get(`${g.title}__${g.unit}`);
    });
  }

  groups.sort((a, b) =>
    Math.min(...a.variants.map(v => v.price)) -
    Math.min(...b.variants.map(v => v.price))
  );
  noGroup.sort((a, b) => a.price - b.price);

  const html1 = groups.map(g => cardHtmlGroupSimple(g, bestPrice)).join("");
  const html2 = noGroup.map(r => cardHtml(r, bestPrice)).join("");

  elResult.innerHTML = (html1 + html2) ? (html1 + html2) : emptyHtml();
}

  function cardHtml(r, bestPrice) {
    const storeName = STORES.find(s => s.id === r.storeId)?.name ?? r.storeId;
    const isBest = r.price === bestPrice.get(`${r.name}__${r.unit}`);
    const limitText = r.dateTo ? `期限：${r.dateTo}${r.note ? " " + r.note : ""}` : "";

    return `
      <div class="card">
        ${r.image ? `<img src="${r.image}" class="item-img" alt="${r.name}">` : ""}

        <div class="meta">
          <span class="badge">${r.category}</span>
          <span class="badge">${storeName}</span>
          ${isBest ? `<span class="badge best">最安</span>` : ""}
        </div>
        <h3>${r.name}</h3>
        ${limitText ? `<div class="meta"><span class="badge">${limitText}</span></div>` : ""}
        <div class="price">¥${r.price}<span style="font-size:12px;font-weight:500;color:#666;"> / ${r.unit}</span></div>
      </div>
    `;
  }

  function cardHtmlGroupSimple(g, bestPrice) {
  const storeName = STORES.find(s => s.id === g.storeId)?.name ?? g.storeId;

  const minPrice = Math.min(...g.variants.map(v => v.price));
  const isBest = minPrice === bestPrice.get(`${g.title}__${g.unit}`);

  const limitText = g.dateTo ? `期限：${g.dateTo}${g.note ? " " + g.note : ""}` : "";

  const variantHtml = g.variants.map(v => `
    <div class="variant-line">
      ${v.image ? `<img src="${v.image}" class="variant-img" alt="${g.title} ${v.flavor ?? ""}">` : ""}
      <span class="badge">${v.flavor ?? v.name}</span>
      ${v.price !== minPrice ? `<span class="badge">¥${v.price}</span>` : ""}
    </div>
  `).join("");

  return `
    <div class="card">
      <div class="meta">
        <span class="badge">${g.category}</span>
        <span class="badge">${storeName}</span>
        ${isBest ? `<span class="badge best">最安</span>` : ""}
      </div>

      <h3>${g.title}</h3>

      <div class="variants">
        ${variantHtml}
      </div>

      ${limitText ? `<div class="meta"><span class="badge">${limitText}</span></div>` : ""}

      <div class="price">
        ¥${minPrice}
        <span style="font-size:12px;font-weight:500;color:#666;"> / ${g.unit}</span>
      </div>
    </div>
  `;
}
  function emptyHtml() {
    return `<div class="card"><h3>該当なし</h3><div class="meta">期限切れ or データ未入力の可能性</div></div>`;
  }
});
