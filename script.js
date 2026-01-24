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
  {storeId: "maru", category: "青果", name: "大根", price: 160, unit: "1本",dateTo:"2026-01-31", note:"まで", image:"images/original.jpg" },        
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
  {storeId: "maru", category: "食品", name: "鍋スープ", price:322, unit:"1つ", dateTo:"2026-01-31", note:"まで", image:"images/71fIU10xRJL._AC_SL1500.jpg" },
  {storeId: "dai",category:"食品",group:"鍋キューブ", flavor:"濃厚白湯", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",image:"images/soukai_4901001526178.jpg"},
  {storeId: "dai",category:"食品",group:"鍋キューブ", flavor:"鶏だし・うま塩", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",image:"images/61mHbuo3qIL.jpg"},
  {storeId: "dai",category:"食品",group:"鍋キューブ", flavor:"うま辛キムチ", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",image:"images/soukai_4901001830275.jpg"},
  {storeId: "dai",category:"食品",group:"鍋キューブ",flavor:"鶏だしコク醤油", name:"鍋キューブ", price:259, unit:"7個入り", dateTo:"2026-01-31", note:"まで",image:"images/rimp_cow-099-cube-05-01.jpg"},
  {storeId: "dai",category:"食品", name:"棒状鍋用ラーメン", price:108, unit:"3人前",dateTo:"2026-01-31", note:"まで",image:"images/4901726014820.jpg"},
  {storeId: "dai",category:"食品", name:"キムチの素", price:199, unit:"190g",dateTo:"2026-01-31", note:"まで",image:"images/716hWSRYDRL._AC_SL1500.jpg"},
  {storeId: "dai",category:"食品",group:"エバラ",flavor:"おろしのたれ", name:"エバラ食品", price:198, unit:"270g", dateTo:"2026-01-31", note:"まで",image:"images/715t+SX02XL._AC_SL1500.jpg"},
  {storeId: "dai",category:"食品",group:"エバラ",flavor:"にんにくのたれ", name:"エバラ食品", price:198, unit:"270g", dateTo:"2026-01-31", note:"まで",image:"images/81+vHm-A4pL._AC_SL1500.jpg"},
  {storeId: "dai",category:"食品",group:"カゴメ",flavor:"ウスター", name:"醸熟ソース", price:199, unit:"300ml", dateTo:"2026-01-31", note:"まで",image:"images/3421_b1.jpg"},
  {storeId: "dai",category:"食品",group:"カゴメ",flavor:"中濃", name:"醸熟ソース", price:199, unit:"300ml", dateTo:"2026-01-31", note:"まで",image:"images/9831_b1.jpg"},
  {storeId: "dai",category:"食品",group:"カゴメ",flavor:"とんかつ", name:"醸熟ソース", price:199, unit:"300ml", dateTo:"2026-01-31", note:"まで",image:"images/9832_b1.jpg"},
  {storeId: "dai",category:"食品",group:"オイリオ",flavor:"やさし～く香るエキストラバージンオリーブオイル", name:"日清オイリオ", price:598, unit:"350g", dateTo:"2026-01-31", note:"まで",image:"images/4902380194354_s.jpg"},
  {storeId: "dai",category:"食品",group:"オイリオ",flavor:"さらっと軽いオリーブオイル", name:"日清オイリオ", price:598, unit:"350g", dateTo:"2026-01-31", note:"まで",image:"images/61bTEz2omWL._AC_SS390.jpg"},
  {storeId: "dai",category:"食品",group:"ハウス商品",flavor:"クリーム", name:"シチューミクス", price:279, unit:"170g", dateTo:"2026-01-31", note:"まで",image:"images/11189788_615.jpg"},
  {storeId: "dai",category:"食品",group:"ハウス商品",flavor:"クリーム濃厚仕立て", name:"シチューミクス", price:279, unit:"170g", dateTo:"2026-01-31", note:"まで",image:"images/11189791_615.jpg"},
  {storeId: "dai",category:"食品",group:"わかめ",flavor:"しそ", name:"わかめ混ぜご飯", price:79, unit:"30g", dateTo:"2026-01-31", note:"まで",image:"images/siso.jpg"},
  {storeId: "dai",category:"食品",group:"わかめ",flavor:"若菜", name:"わかめ混ぜご飯", price:79, unit:"30g", dateTo:"2026-01-31", note:"まで",image:"images/wakana.jpg"},
  {storeId: "dai",category:"食品",group:"わかめ",flavor:"明太子昆布", name:"わかめ混ぜご飯", price:79, unit:"30g", dateTo:"2026-01-31", note:"まで",image:"images/mentaiko.jpg"},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"シビ辛麻辣", name:"一平ちゃん夜店の焼きそば", price:129, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/1763013_original.jpg"},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"ソース焼きそば", name:"ごつ盛り", price:129, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/hcgooday_9839472.jpg"},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"塩焼きそば", name:"ごつ盛り", price:129, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/hcgooday_9840911.jpg"},
  {storeId: "dai",category:"食品",group:"カップ麺",flavor:"カルボナーラ", name:"MARUCHANQTTA", price:129, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/karubo.jpg"},
  {storeId: "dai", category:"菓子", group:"プチコーン", flavor:"直火焼きトウモロコシ", name:"プチコーン",price:89, unit:"1袋",dateTo:"2026-01-31", note:"まで",image:"images/goyougura-okawa_4903015557544-12.jpg"},
  {storeId: "dai", category:"菓子", group:"プチコーン", flavor:"コーンマヨ", name:"プチコーン", price:89, unit:"1袋", dateTo:"2026-01-31", note:"まで",image:"images/4903015557582.jpg"},
  {storeId: "dai", category:"菓子", group:"クリスプ", flavor:"うましお", name:"クリスプ", price:89, unit:"1袋", dateTo:"2026-01-31",  note:"まで",image:"images/718rWwveNHL._AC_SL1271.jpg"},
  {storeId: "dai", category:"菓子", group:"クリスプ", flavor:"旨味コンソメ", name:"クリスプ", price:89, unit:"1袋", dateTo:"2026-01-31", note:"まで",image:"images/71WD3x0NHjL._AC_SL1271.jpg"},
  {storeId: "dai", category:"菓子", group:"とんがりコーン", flavor:"あっさり塩", name:"とんがりコーン", price:129, unit:"1個", dateTo:"2026-01-31", note:"まで", image:"images/71cZ4dts46L._AC_SX679.jpg"},
  {storeId: "dai", category:"菓子", group:"とんがりコーン", flavor:"焼きトウモロコシ", name:"とんがりコーン", price:129, unit:"1個", dateTo:"2026-01-31", note:"まで", image:"images/159732_615.jpg"},
  {storeId: "dai", category:"菓子", group:"とんがりコーン", flavor:"ハニーバター", name:"とんがりコーン", price:129, unit:"1個", dateTo:"2026-01-31", note:"まで", image:"images/hani.jpg"},
  {storeId: "dai", category:"菓子", group:"フルグラ", flavor:"プレーン", name:"フルグラ", price:649, unit:"1袋", dateTo:"2026-01-31", note:"まで",image:"images/10010004901330746360_1.jpg"},
  {storeId: "dai", category:"菓子", group:"フルグラ", flavor:"糖質オフ", name:"フルグラ", price:649, unit:"1袋", dateTo:"2026-01-31", note:"まで",image:"images/image_5-3.jpg"},
  {storeId: "dai", category:"菓子", group:"フルグラ", flavor:"チョコバナナ", name:"フルグラ", price:649, unit:"1袋", dateTo:"2026-01-31", note:"まで",image:"images/3n-shop_20230414-05_1_d_20230414213422.jpg"},
  {storeId: "dai", category:"菓子", group:"コグミ", flavor:"フルーツアソート", name:"コグミ", price:108, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/gu67.jpg"},
  {storeId: "dai", category:"菓子", group:"コグミ", flavor:"ドリンクアソート", name:"コグミ", price:108, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/gu111-s.jpg"},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"レギュラー", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",image:"images/04901620300142.jpg"},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"トリプルナッツ", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",image:"images/04901620300777.jpg"},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"発酵バター", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",image:"images/sg-11134207-23010-1zxki91iejmv2c.jpg"},
  {storeId: "dai", category:"菓子", group:"ココナッツサブレ", flavor:"アップルパイ", name:"ココナッツサブレ", price:99, unit:"各16枚", dateTo:"2026-01-31", note:"まで",image:"images/20260114200959.jpg"},
  {storeId: "dai", category:"菓子", group:"ハッピータン", flavor:"レギュラー", name:"ハッピータン", price:159, unit:"1袋", dateTo:"2026-01-31", note:"まで",image:"images/207079_610_610-1.jpg"},
  {storeId: "dai", category:"菓子", group:"ハッピータン", flavor:"スパイス", name:"ハッピータン", price:159, unit:"1袋", dateTo:"2026-01-31", note:"まで",image:"images/210215_1200_630.jpg"},
  {storeId: "dai", category:"菓子", group:"チョコ", flavor:"ラミー", name:"ラミーバッカス", price:249, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/rami-r.jpg"},
  {storeId: "dai", category:"菓子", group:"チョコ", flavor:"バッカス", name:"ラミーバッカス", price:249, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/d2360-1612-19704ed3c7e91b1f79be-1.jpg"},
  {storeId: "dai", category:"菓子", group:"明治チョコ", flavor:"カカオ72%", name:"チョコレート効果大袋", price:980, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/71vm-Ef4ZXL.jpg"},
  {storeId: "dai", category:"菓子", group:"明治チョコ", flavor:"カカオ86%", name:"チョコレート効果大袋", price:980, unit:"1つ", dateTo:"2026-01-31", note:"まで",image:"images/511e8c9g9AL._SL500.jpg"},
  {storeId:  "dai",category:"飲料",group:"伊藤園",name:"お〜いお茶PURE GREEN",price:129,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/f809f9780a8d3369b08f347e7383775e.jpg"},
  {storeId:  "dai",category:"飲料",group:"伊藤園",name:"健康ミネラル麦茶",price:129,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/youbetsuen-y_714.jpg"},
  {storeId:  "dai",category:"飲料",group:"お茶",name:"ウーロン茶",price:149,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/R.jpg"},
  {storeId:  "dai",category:"飲料",group:"お茶",name:"生茶",price:149,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/4510001918_k.jpg"},
  {storeId:  "dai",category:"飲料",group:"お茶",name:"おいしい無糖",price:149,unit:"2L",dateTo:"2026-01-31", note:"まで", image:"images/ladydrugheartshop_4909411048754.jpg"},
  {storeId:  "dai",category:"飲料",group:"コカ・コーラ",name:"レギュラー",price:99,unit:"700ml",dateTo:"2026-01-31", note:"まで", image:"images/1278940_1.jpg"},
  {storeId:  "dai",category:"飲料",group:"コカ・コーラ",name:"ゼロシュガー",price:99,unit:"700ml",dateTo:"2026-01-31", note:"まで", image:"images/1320095_1.jpg"},
  {storeId:  "dai",category:"飲料",group:"ネスレ日本",flavor:"無糖", name:"ネスカフェエクセラボトルコーヒー", price:118,unit:"900ml",dateTo:"2026-01-31", note:"まで", image:"images/41J3HdtrDML._SL500.jpg"},
  {storeId:  "dai",category:"飲料",group:"ネスレ日本",flavor:"甘さ控えめ", name:"ネスカフェエクセラボトルコーヒー", price:118,unit:"900ml",dateTo:"2026-01-31", note:"まで", image:"images/41Lp0sLHkuL._SL500.jpg"},
  {storeId:  "dai",category:"飲料",name:"グリーンダカラ",price:89,unit:"600ml",dateTo:"2026-01-31", note:"まで", image:"images/4901777336711.jpg"},
  {storeId:  "dai",category:"飲料",group:"午後の紅茶", flavor:"ストレートティー", name:"午後の紅茶", price:89,unit:"500ml",dateTo:"2026-01-31", note:"まで", image:"images/salada-bowl_kb-4909411076627-1.jpg"},
  {storeId:  "dai",category:"飲料",group:"午後の紅茶", flavor:"ミルクティー", name:"午後の紅茶", price:89,unit:"500ml",dateTo:"2026-01-31", note:"まで", image:"images/336655b.jpg"},
  {storeId:  "dai",category:"飲料",group:"午後の紅茶", flavor:"レモンティー", name:"午後の紅茶", price:89,unit:"500ml",dateTo:"2026-01-31", note:"まで", image:"images/1356999_1.jpg"},
  {storeId:  "dai",category:"飲料",group:"ネスカフェゴールドブレンド", flavor:"オリジナル", name:"ネスカフェゴールドブレンド", price:599,unit:"80g",dateTo:"2026-01-31", note:"まで", image:"images/ne_tu.jpg"},
  {storeId:  "dai",category:"飲料",group:"ネスカフェゴールドブレンド", flavor:"コク深め", name:"ネスカフェゴールドブレンド", price:599,unit:"80g",dateTo:"2026-01-31", note:"まで", image:"images/ne_koku.jpg"},
  {storeId:  "dai",category:"飲料",group:"ネスカフェゴールドブレンド", flavor:"香り華やぐ", name:"ネスカフェゴールドブレンド", price:599,unit:"80g",dateTo:"2026-01-31", note:"まで", image:"images/16637270_0.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"カルボナーラ",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/4902110281705.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"ミートソース",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/4902110281699.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"ナポリタン",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/4902110281668.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン",group:"マ・マー大盛りスパゲティ",name:"和風たらこ",price:198,unit:"1袋",dateTo:"2026-01-31", note:"まで", image:"images/4902110281712.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"若鶏たれづけ唐揚げ", price:378,unit:"260g",dateTo:"2026-01-31", note:"まで", image:"images/compass1683474414.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"大きな大きな焼きおにぎり", price:378,unit:"6個入",dateTo:"2026-01-31", note:"まで", image:"images/71+s1Tix9qL.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", group:"菓心堂", name:"三角カステラ風蒸しケーキ", price:99,unit:"1個",dateTo:"2026-01-31", note:"まで", image:"images/kasutera.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", group:"菓心堂", name:"三角よもぎ小豆蒸しパン", price:99,unit:"1個",dateTo:"2026-01-31", note:"まで", image:"images/yomogi.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"りんごデニッシュ", price:99,unit:"1個",dateTo:"2026-01-31", note:"まで", image:"images/2999846.jpg"},
  {storeId:  "dai",category:"冷凍食品・パン", name:"じゃりパンシュガー", price:99,unit:"4個入り",dateTo:"2026-01-31", note:"まで", image:"images/4903380037047_l.jpg"},
  {storeId:  "dai",category:"日配",name:"豊潤あらびきウインナー",price:238,unit:"80g×2",dateTo:"2026-01-31", note:"まで", image:"images/2828131.jpg"},
  {storeId:  "dai",category:"日配",group:"豆乳", name:"調整豆乳",price:178,unit:"1000ml",dateTo:"2026-01-31", note:"まで", image:"images/180075_01_231212.jpg"},
  {storeId:  "dai",category:"日配",group:"豆乳", name:"毎日おいしい無調整豆乳",price:178,unit:"1000ml",dateTo:"2026-01-31", note:"まで", image:"images/BB9485B7BD-SP-13676727.jpg"},
  {storeId:  "dai",category:"日配",group:"豆乳", name:"調整カロリー45%オフ",price:178,unit:"1000ml",dateTo:"2026-01-31", note:"まで", image:"images/6243c826a1b60-391x800.jpg"},
  {storeId:  "dai",category:"日配",group:"金のつぶ", name:"たれたっぷりたまご醬油たれ",price:98,unit:"45g×3",dateTo:"2026-01-31", note:"まで", image:"images/auNLdIusmsFKtFvJPf-1435x1536.jpg"},
  {storeId:  "dai",category:"日配",group:"金のつぶ", name:"パキッ!とたれとろっ豆",price:98,unit:"45g×3",dateTo:"2026-01-31", note:"まで", image:"images/img_146565_1.jpg"},
  {storeId:  "dai",category:"日配", name:"焼いておいしい絹厚揚げ",price:98,unit:"4個入り",dateTo:"2026-01-31", note:"まで", image:"images/21.jpg"},
  {storeId:  "dai",category:"日配",group:"ニッポンハム", flavor:"マルゲリータ", name:"ピッツァフェリッチェリア",price:228,unit:"1枚",dateTo:"2026-01-31", note:"まで", image:"images/91LWpL5GgzL._AC_SX342.jpg"},
  {storeId:  "dai",category:"日配",group:"ニッポンハム", flavor:"ソーセージピザ", name:"ピッツァフェリッチェリア",price:228,unit:"1枚",dateTo:"2026-01-31", note:"まで", image:"images/91c2+5NEtSL._AC_SX300_SY300.jpg"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"プレーン加糖", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/1615075_original.jpg"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"砂糖不使用", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/goyougura-okawa_4901112600835-6.jpg"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"砂糖不使用脂肪0", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/1615078_original.jpg"},
  {storeId:  "dai",category:"日配",group:"ヨーグルト", flavor:"贅沢搾りぶどう", name:"ダノンビオ",price:158,unit:"75g×4",dateTo:"2026-01-31", note:"まで", image:"images/2967521_original.jpg"},
  {storeId:  "dai",category:"青果", name: "ブロッコリー", price: 214, unit:"1玉", dateTo:"2026-01-29", note:"まで", image:"images/food02_tph00.jpg" }, 
  {storeId:  "dai",category:"青果", name: "ほうれん草", price: 171, unit:"1袋", dateTo:"2026-01-29", note:"まで", image:"images/201903230135_top_img_A.jpg" }, 
  {storeId:  "dai",category:"青果", name: "イチゴ", price: 538, unit:"1パック", dateTo:"2026-01-30", note:"まで", image:"images/450-2010042201115050457.jpg" }, 
  {storeId:  "dai",category:"青果", name: "キャベツ", price: 171, unit:"1玉", dateTo:"2026-01-30", note:"まで", image:"images/img_cabbage_main.jpg" }, 
  {storeId:  "dai",category:"青果", name: "みかん", price: 322, unit:"1袋", dateTo:"2026-01-31", note:"まで", image:"images/publicdomainq-0000852xolhto.jpg" }, 
  {storeId:  "dai",category:"青果", name: "新ばれいしょ", price: 171, unit:"1袋", dateTo:"2026-01-31", note:"まで", image:"images/bareisyo_nangu_1.jpg" }, 
  {storeId:  "dai",category:"精肉", name: "牛モモステーキ用", price: 518, unit: "100gあたり" ,dateTo:"2026-01-29", note:"まで", image:"images/2_001001000006.jpg" },
  {storeId:  "dai",category:"精肉", name: "豚ロース生姜焼き用", price: 116, unit: "100gあたり" ,dateTo:"2026-01-29", note:"まで", image:"images/KT191615.jpg" },
  {storeId:  "dai",category:"精肉", name: "牛肩ロースうす切り", price: 689, unit: "100gあたり" ,dateTo:"2026-01-30", note:"まで", image:"images/02.jpg" },
  {storeId:  "dai",category:"精肉", name: "豚バラ焼肉用", price: 213, unit: "100gあたり" ,dateTo:"2026-01-30", note:"まで", image:"images/1541775.jpg" },
  {storeId:  "dai",category:"精肉", name: "牛モモ焼肉用", price: 518, unit: "100gあたり" ,dateTo:"2026-01-31", note:"まで", image:"images/momo_5001-740x540.jpg" },
  {storeId:  "dai",category:"精肉", name: "豚ロースとんかつ用", price: 116, unit: "100gあたり" ,dateTo:"2026-01-31", note:"まで", image:"images/1000_F_267875523_qmPCXe3Q1Tupp9WjzAivTC8BWEzIVL7C.jpg" },
  {storeId:  "dai",category:"鮮魚", name: "バナメイ無頭エビ(大)(養殖・解凍)", price: 429, unit: "1パック" ,dateTo:"2026-01-29", note:"まで", image:"images/25_1627367560.jpg" },
  {storeId:  "dai",category:"鮮魚", name: "カラスカレイ切身(解凍)", price: 192, unit: "100gあたり" ,dateTo:"2026-01-29", note:"まで", image:"images/0000008689_l1.jpg" },
  {storeId:  "dai",category:"鮮魚", name: "刺身5点盛", price: 599, unit: "1パック" ,dateTo:"2026-01-30", note:"まで", image:"images/DSC01022-2048x1365.jpg" },
  {storeId:  "dai",category:"鮮魚", name: "刺身用トラウトサーモンブロック(養殖・解凍)", price: 300, unit: "100gあたり" ,dateTo:"2026-01-31", note:"まで", image:"images/2743540000020.jpg" },
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
