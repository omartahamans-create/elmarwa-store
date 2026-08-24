/* Catalogue data for the El Marwa store kit.
   Categories follow the real Egyptian homeware-store tree (see research/bayoumistore-reference.md),
   minus electrical appliances — the owner does not sell them.
   Prices are plausible EGP placeholders, NOT the shop's real prices. */
(function(){
const P = '/assets/products/';

const CATEGORIES = [
  { id: 'sofra', title: 'أطقم السفرة', count: 86, image: P + 'porcelain-dinner-set-gold.jpg', children: [
    'أطقم عشاء بورسلين', 'أطقم الشاي والجاتوه', 'بورسلين بالقطعة', 'شوك ومعالق',
    'سرفيس تقديم', 'صواني التقديم', 'شيالات الكحك وأطباق الفاكهة', 'أطقم الميلامين', 'أطقم التوزيع'
  ] },
  { id: 'crystal', title: 'الزجاج والكريستال', count: 64, image: P + 'crystal-detail.jpg', children: [
    'أطقم الجاتوه', 'أطقم الشربات', 'أطقم الكاسات والأكواب', 'أطقم شاي', 'أطقم الخشاف', 'شيالات كريستال'
  ] },
  { id: 'kitchen', title: 'أدوات المطبخ', count: 112, image: P + 'ceramic-cookware.jpg', children: [
    'أطقم أواني الطهي', 'أواني الطهي بالقطعة', 'أطقم السكاكين', 'أطقم الشوربة',
    'أطقم المجات والقهوة', 'أطقم التوابل', 'طواجن الفرن', 'قوالب الكيك', 'رفايع المطبخ'
  ] },
  { id: 'storage', title: 'حافظات الطعام', count: 38, image: P + 'easybox-square.jpg', children: [
    'حافظ طعام', 'حافظات بلاستيك', 'أدوات أخرى للمنزل والمطبخ'
  ] },
  { id: 'gifts', title: 'أطقم الهدايا', count: 24, image: P + 'promo-laroos-crystal-gift.jpg', children: [
    'أطقم هدايا 3 قطع', 'هدايا المناسبات', 'هدايا الأفراح'
  ] }
];

const PRODUCTS = [
  { id: 1, title: 'طقم عشاء بورسلين مذهب 60 قطعة', brand: 'Porcelain', cat: 'sofra', image: P + 'porcelain-dinner-set-gold.jpg', current: 8450, original: 10900, rating: 5, reviews: 24, stockLeft: 3 },
  { id: 2, title: 'طقم شاي وجاتوه بورسلين مذهب', brand: 'Porcelain', cat: 'sofra', image: P + 'porcelain-teapot-gold.jpg', current: 4200, original: 5300, rating: 5, reviews: 17 },
  { id: 3, title: 'طبق تقديم بورسلين بحواف مذهبة', brand: 'Porcelain', cat: 'sofra', image: P + 'porcelain-plate-gold.jpg', current: 690, original: 850, rating: 4, reviews: 9 },
  { id: 4, title: 'فنجان قهوة بورسلين بطبق وردة', cat: 'sofra', image: P + 'pink-cup-saucer.jpg', current: 320, rating: 5, reviews: 6, ribbon: 'وصل حديثاً' },
  { id: 5, title: 'شيالة كريستال دورين بقاعدة ذهبية', cat: 'crystal', image: P + 'crystal-tier-stand-2.jpg', current: 1450, original: 1900, rating: 5, reviews: 12, stockLeft: 4 },
  { id: 6, title: 'شيالة كريستال دورين — موديل الوردة', cat: 'crystal', image: P + 'crystal-tier-stand-3.jpg', current: 1650, original: 2100, rating: 5, reviews: 8 },
  { id: 7, title: 'شيالة كريستال دور واحد ذهبي', cat: 'crystal', image: P + 'crystal-stand-gold.jpg', current: 980, original: 1250, rating: 5, reviews: 15, stockLeft: 2 },
  { id: 8, title: 'طقم سلطانيات زجاج شفاف 6 قطع', cat: 'crystal', image: P + 'glass-bowls.jpg', current: 540, original: 700, rating: 4, reviews: 21 },
  { id: 9, title: 'طقم مجات زجاج مع إبريق', cat: 'crystal', image: P + 'glass-mug-pitcher.jpg', current: 780, original: 950, rating: 5, reviews: 11 },
  { id: 10, title: 'طقم هدية لاروس كريستال 3 قطع', cat: 'gifts', image: P + 'promo-laroos-crystal-gift.jpg', current: 2350, original: 3100, rating: 5, reviews: 19, ribbon: 'الأكثر مبيعاً' },
  { id: 11, title: 'طقم براد شاي ستانلس ستيل قطعتين', brand: 'Steel', cat: 'kitchen', image: P + 'steel-tea-kettle-set.jpg', current: 1890, original: 2400, rating: 5, reviews: 33 },
  { id: 12, title: 'براد شاي تركي ستانلس ستيل', brand: 'Steel', cat: 'kitchen', image: P + 'steel-turkish-tea-set.jpg', current: 2150, original: 2650, rating: 5, reviews: 14, stockLeft: 5 },
  { id: 13, title: 'سكرية ستانلس ستيل بغطاء', brand: 'Steel', cat: 'kitchen', image: P + 'steel-sugar-pot.jpg', current: 480, rating: 4, reviews: 7 },
  { id: 14, title: 'طقم أواني طهي سيراميك 5 قطع', cat: 'kitchen', image: P + 'ceramic-cookware.jpg', current: 3900, original: 4800, rating: 5, reviews: 28, stockLeft: 3 },
  { id: 15, title: 'طقم حافظات طعام EasyBox مربع', brand: 'Softchef', cat: 'storage', image: P + 'easybox-square.jpg', current: 620, original: 780, rating: 4, reviews: 41 },
  { id: 16, title: 'طقم حافظات طعام EasyBox مستطيل', brand: 'Softchef', cat: 'storage', image: P + 'easybox-rect.jpg', current: 680, original: 850, rating: 4, reviews: 36 },
  { id: 17, title: 'حافظ بيض 24 عين بغطاء', cat: 'storage', image: P + 'egg-keeper.jpg', current: 190, original: 240, rating: 4, reviews: 52 },
  { id: 18, title: 'قطعة كريستال مزخرفة بحواف ذهبية', cat: 'crystal', image: P + 'crystal-detail.jpg', current: 1100, original: 1400, rating: 5, reviews: 5 }
];

const FAQ = [
  ['بتشحنوا لكل المحافظات؟', 'أيوه، بنشحن لكل محافظات مصر. التوصيل من 2 لـ 5 أيام عمل حسب المحافظة، والقاهرة والدقهلية أسرع.'],
  ['الشحن مؤمن ضد الكسر؟', 'كل الطلبات بتتغلف بتغليف مزدوج ومؤمنة ضد الكسر. لو وصلك أي قطعة مكسورة، صوّرها وابعتلنا خلال 24 ساعة وهنستبدلها.'],
  ['أقدر أدفع عند الاستلام؟', 'أيوه، الدفع عند الاستلام متاح في كل المحافظات. وكمان تقدر تدفع أونلاين بالفيزا أو محفظة الموبايل.'],
  ['الشحن مجاني إمتى؟', 'الشحن مجاني على أي طلب فوق 3000 جنيه.'],
  ['أقدر أستبدل أو أرجّع المنتج؟', 'عندك 14 يوم من تاريخ الاستلام للاستبدال أو الاسترجاع، بشرط إن المنتج بحالته وبعلبته الأصلية.'],
  ['عندكم فرع أقدر أشوف المنتجات فيه؟', 'أيوه، المعرض في جراح — أجا — الدقهلية. مفتوح يومياً، وتقدر تتصل بينا قبل ما تيجي.'],
  ['بتبيعوا جملة؟', 'أيوه، عندنا أسعار جملة للمحلات والموزعين. كلمنا على 010070226313.']
];

const GOVERNORATES = ['الدقهلية', 'القاهرة', 'الجيزة', 'الإسكندرية', 'الشرقية', 'الغربية', 'المنوفية', 'القليوبية', 'دمياط', 'كفر الشيخ', 'بورسعيد', 'أسيوط'];

const SHIPPING_THRESHOLD = 3000;

window.__STORE__ = { CATEGORIES, PRODUCTS, FAQ, GOVERNORATES, SHIPPING_THRESHOLD, P };
})();
