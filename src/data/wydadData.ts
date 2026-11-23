export type PositionGroup = 'GK' | 'DEF' | 'MID' | 'FWD';

export interface Player {
  id: string;
  nameAr: string;
  nameLat: string;
  number: number;
  positionGroup: PositionGroup;
  positionAr: string;
  nationality: string;
  flagCode: string;
  age: number;
  heightCm: number;
  preferredFoot: 'اليمنى' | 'اليسرى' | 'القدمان';
  marketValue: string;
  joinedYear: string;
  isCaptain?: boolean;
  bioAr: string;
  kitStyle: 'outfield' | 'keeper';
}

export interface StaffMember {
  id: string;
  nameAr: string;
  nameLat: string;
  roleAr: string;
  nationality: string;
  since: string;
  noteAr: string;
}

export interface PlayerMatchPerformance {
  playerId: string;
  starter: boolean;
  minutes: number;
  rating: number;
  goals?: number;
  assists?: number;
  yellowCard?: boolean;
  redCard?: boolean;
  saves?: number;
}

export interface MatchStatComparison {
  labelAr: string;
  wydad: number | string;
  opponent: number | string;
  isPercent?: boolean;
}

export interface MatchEvent {
  minute: string;
  team: 'wydad' | 'opponent';
  type: 'goal' | 'penalty' | 'yellow' | 'sub';
  playerAr: string;
  detailAr?: string;
}

export interface SeasonMatch {
  id: string;
  round: number;
  roundLabelAr: string;
  dateAr: string;
  dateISO: string;
  kickoff: string;
  competitionAr: string;
  homeTeamAr: string;
  awayTeamAr: string;
  isWydadHome: boolean;
  stadiumAr: string;
  status: 'played' | 'upcoming';
  wydadScore?: number;
  opponentScore?: number;
  outcome?: 'W' | 'D' | 'L';
  summaryNoteAr?: string;
  events?: MatchEvent[];
  stats?: MatchStatComparison[];
  lineup?: PlayerMatchPerformance[];
}

export interface StandingRow {
  rank: number;
  teamAr: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
  isWydad?: boolean;
}

export interface TrophyItem {
  id: string;
  titleAr: string;
  category: 'national' | 'continental' | 'historical';
  categoryLabelAr: string;
  count: number;
  years: string[];
  descriptionAr: string;
}

export interface HistoryEra {
  period: string;
  titleAr: string;
  summaryAr: string;
  keyFiguresAr: string;
}

export interface OfficialDispatch {
  id: string;
  sourceAr: 'الموقع الرسمي للوداد' | 'الصفحة الرسمية على فايسبوك' | 'تقارير فلاشسكور';
  sourceUrl: string;
  dateAr: string;
  titleAr: string;
  excerptAr: string;
}

export const CLUB_INFO = {
  nameAr: 'نادي الوداد الرياضي',
  shortNameAr: 'الوداد الرياضي',
  foundedAr: '8 ماي 1937',
  founderAr: 'الحاج محمد بنجلون التويمي',
  footballFatherAr: 'الأب جيكو (محمد بن الحسن التونسي العفاني)',
  stadiumAr: 'المركب الرياضي محمد الخامس (دونور)',
  trainingCenterAr: 'مركب الحاج محمد بنجلون — الوازيس، الدار البيضاء',
  registrationNumber: 'السجل رقم 1 في الجامعة الملكية المغربية لكرة القدم',
  officialWebsite: 'https://www.wydadac.ma',
  officialFacebook: 'https://www.facebook.com/WACofficiel',
  flashscoreUrl: 'https://www.flashscore.com',
  seasonLabel: 'موسم 2026–2027',
  leagueLabel: 'البطولة الاحترافية إنوي — القسم الأول',
};

export const OFFICIAL_DISPATCHES: OfficialDispatch[] = [
  {
    id: 'disp-1',
    sourceAr: 'الصفحة الرسمية على فايسبوك',
    sourceUrl: 'https://www.facebook.com/WACofficiel',
    dateAr: '21 نونبر 2026',
    titleAr: 'اختبار ودي مغلق أمام الجيش الملكي خلال فترة التوقف الدولي',
    excerptAr:
      'أجرى الفريق الأول لنادي الوداد الرياضي مباراة إعدادية مغلقة أمام فريق الجيش الملكي بمركز المعمورة الرياضي استعداداً لاستئناف منافسات البطولة الاحترافية في 27 نونبر 2026.',
  },
  {
    id: 'disp-2',
    sourceAr: 'الموقع الرسمي للوداد',
    sourceUrl: 'https://www.wydadac.ma',
    dateAr: '8 نونبر 2026',
    titleAr: 'العودة إلى التداريب بمركب بنجلون بعد جولة مراكش',
    excerptAr:
      'باشرت العناصر الودادية برنامج الاستشفاء والتداريب التقنية بمركب محمد بنجلون للوقوف على جاهزية المصابين وتصحيح الأخطاء الدفاعية قبل قمة الجولة الثامنة.',
  },
  {
    id: 'disp-3',
    sourceAr: 'الموقع الرسمي للوداد',
    sourceUrl: 'https://www.wydadac.ma',
    dateAr: '2 أكتوبر 2026',
    titleAr: 'قرار اللجنة التأديبية باعتماد فوز الوداد (3-0) أمام وداد تمارة',
    excerptAr:
      'صادقت اللجنة التأديبية على أحقية نادي الوداد الرياضي في نقاط الجولة الافتتاحية وبنتيجة ثلاثة أهداف دون رد بعد ثبوت إشراك الفريق الضيف للاعب غير مؤهل قانونياً.',
  },
];

export const TECHNICAL_STAFF: StaffMember[] = [
  {
    id: 'staff-1',
    nameAr: 'نصر الدين نابي / محمد أمين بنهاشم',
    nameLat: 'Nasreddine Nabi / M. A. Benhachem',
    roleAr: 'الطاقم التقني المشرف على الفريق الأول',
    nationality: 'تونس / المغرب',
    since: 'موسم 2026–2027',
    noteAr: 'إدارة تقنية متداولة خلال بداية موسم 2026–2027 لضمان التنافسية في البطولة الاحترافية.',
  },
  {
    id: 'staff-2',
    nameAr: 'عبد الصمد وراد',
    nameLat: 'Abdessamad Ouarrad',
    roleAr: 'المدرب المساعد الأول',
    nationality: 'المغرب',
    since: '2026',
    noteAr: 'مسؤول عن التنظيم التكتيكي والربط بين الخطوط في التداريب اليومية.',
  },
  {
    id: 'staff-3',
    nameAr: 'إبراهيم النقاش',
    nameLat: 'Brahim Nakach',
    roleAr: 'المدرب المساعد',
    nationality: 'المغرب',
    since: '2026',
    noteAr: 'القائد التاريخي السابق للوداد ومكلف بمواكبة لاعبي خط الوسط والشباب.',
  },
  {
    id: 'staff-4',
    nameAr: 'زهير العروبي',
    nameLat: 'Zouhair Laâroubi',
    roleAr: 'مدرب حراس المرمى',
    nationality: 'المغرب',
    since: '2026',
    noteAr: 'حارس الوداد المتوج بعصبة الأبطال 2017 والمشرف على تأهيل الحراس.',
  },
];

export const SQUAD_PLAYERS: Player[] = [
  // Goalkeepers
  {
    id: 'benabid',
    nameAr: 'المهدي بنعبيد',
    nameLat: 'El Mehdi Benabid',
    number: 16,
    positionGroup: 'GK',
    positionAr: 'حارس مرمى',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 28,
    heightCm: 190,
    preferredFoot: 'اليمنى',
    marketValue: '1.50M €',
    joinedYear: '2025',
    bioAr: 'حارس مرمى دولي يتميز بردود فعل سريعة وخروج موفق في الكرات العرضية، يعد من الركائز الأساسية في حراسة عرين الوداد.',
    kitStyle: 'keeper',
  },
  {
    id: 'ghanimi',
    nameAr: 'رشيد غانيمي',
    nameLat: 'Rachid Ghanimi',
    number: 1,
    positionGroup: 'GK',
    positionAr: 'حارس مرمى',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 25,
    heightCm: 188,
    preferredFoot: 'اليمنى',
    marketValue: '325K €',
    joinedYear: '2026',
    bioAr: 'حارس مرمى شاب فرض حضوره في التشكيلة الأساسية خلال عدة جولات من البطولة الاحترافية بفضل ثباته في التصديات.',
    kitStyle: 'keeper',
  },
  {
    id: 'aqzdaou',
    nameAr: 'عمر أقزداو',
    nameLat: 'Omar Aqzdaou',
    number: 36,
    positionGroup: 'GK',
    positionAr: 'حارس مرمى',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 21,
    heightCm: 186,
    preferredFoot: 'اليمنى',
    marketValue: '50K €',
    joinedYear: '2025',
    bioAr: 'خريج مدرسة الوداد الرياضي وأحد الحراس الواعدين ضمن لائحة الفريق الأول.',
    kitStyle: 'keeper',
  },
  // Defenders
  {
    id: 'moufid',
    nameAr: 'محمد مفيد',
    nameLat: 'Mohamed Moufid',
    number: 2,
    positionGroup: 'DEF',
    positionAr: 'ظهير أيمن',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 26,
    heightCm: 179,
    preferredFoot: 'اليمنى',
    marketValue: '1.00M €',
    joinedYear: '2024',
    bioAr: 'ظهير أيمن نشيط يجمع بين الصلابة الدفاعية والمساندة الهجومية المتواصلة على الرواق الأيمن.',
    kitStyle: 'outfield',
  },
  {
    id: 'attiyat-allah',
    nameAr: 'يحيى عطية الله',
    nameLat: 'Yahia Attiyat Allah',
    number: 14,
    positionGroup: 'DEF',
    positionAr: 'ظهير أيسر',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 31,
    heightCm: 176,
    preferredFoot: 'اليسرى',
    marketValue: '800K €',
    joinedYear: '2026',
    bioAr: 'الظهير الأيسر الدولي العائد إلى بيته الودادي، متخصص في العرضيات الدقيقة والكرات الثابتة.',
    kitStyle: 'outfield',
  },
  {
    id: 'el-wafi',
    nameAr: 'أيمن الوافي',
    nameLat: 'Ayman El Wafi',
    number: 5,
    positionGroup: 'DEF',
    positionAr: 'قلب دفاع',
    nationality: 'المغرب / إيطاليا',
    flagCode: 'MA',
    age: 22,
    heightCm: 191,
    preferredFoot: 'اليسرى',
    marketValue: '2.20M €',
    joinedYear: '2026',
    bioAr: 'مدافع محوري صلب صاحب أعلى قيمة سوقية في خط الدفاع، يمتاز بإخراج الكرة من الخلف والتفوق في الصراعات الهوائية.',
    kitStyle: 'outfield',
  },
  {
    id: 'moussaddaq',
    nameAr: 'صلاح الدين مصدق',
    nameLat: 'Salah Moussaddaq',
    number: 13,
    positionGroup: 'DEF',
    positionAr: 'قلب دفاع',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 27,
    heightCm: 187,
    preferredFoot: 'اليمنى',
    marketValue: '400K €',
    joinedYear: '2025',
    bioAr: 'مدافع أوسط ثابت الحضور في الخط الخلفي، يعتمد على التمركز الجيد والتدخلات الحاسمة.',
    kitStyle: 'outfield',
  },
  {
    id: 'dayo',
    nameAr: 'إيسوفو دايو',
    nameLat: 'Issoufou Dayo',
    number: 25,
    positionGroup: 'DEF',
    positionAr: 'قلب دفاع',
    nationality: 'بوركينا فاسو',
    flagCode: 'BF',
    age: 35,
    heightCm: 187,
    preferredFoot: 'اليمنى',
    marketValue: '500K €',
    joinedYear: '2026',
    bioAr: 'صخرة دفاعية إفريقية بخبرة قارية واسعة في البطولة المغربية والمسابقات الإفريقية.',
    kitStyle: 'outfield',
  },
  {
    id: 'aboulfath',
    nameAr: 'أمين أبو الفتح',
    nameLat: 'Amine Aboulfath',
    number: 4,
    positionGroup: 'DEF',
    positionAr: 'قلب دفاع',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 29,
    heightCm: 185,
    preferredFoot: 'اليمنى',
    marketValue: '750K €',
    joinedYear: '2020',
    bioAr: 'أحد أبناء الدار المتوجين بالبطولات الأخيرة، يقدم حلولاً دفاعية موثوقة في المحور.',
    kitStyle: 'outfield',
  },
  {
    id: 'ferreira',
    nameAr: 'غيليرمي فيريرا',
    nameLat: 'Guilherme Ferreira',
    number: 24,
    positionGroup: 'DEF',
    positionAr: 'قلب دفاع',
    nationality: 'البرازيل',
    flagCode: 'BR',
    age: 26,
    heightCm: 188,
    preferredFoot: 'اليمنى',
    marketValue: '325K €',
    joinedYear: '2025',
    bioAr: 'مدافع برازيلي يمتاز بالقوة البدنية والتغطية السريعة خلف الأظهرة.',
    kitStyle: 'outfield',
  },
  {
    id: 'atik',
    nameAr: 'وليد عتيق',
    nameLat: 'Walid Atik',
    number: 20,
    positionGroup: 'DEF',
    positionAr: 'ظهير أيسر',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 24,
    heightCm: 178,
    preferredFoot: 'اليسرى',
    marketValue: '250K €',
    joinedYear: '2025',
    bioAr: 'خيار شاب على الرواق الأيسر يمنح الإضافة البدنية والانضباط التكتيكي.',
    kitStyle: 'outfield',
  },
  {
    id: 'nassik',
    nameAr: 'زكرياء ناسيك',
    nameLat: 'Zakaria Nassik',
    number: 3,
    positionGroup: 'DEF',
    positionAr: 'ظهير أيسر',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 29,
    heightCm: 177,
    preferredFoot: 'اليسرى',
    marketValue: '150K €',
    joinedYear: '2024',
    bioAr: 'ظهير أيسر مجرب في البطولة الاحترافية يجيد الأدوار الدفاعية والرقابة الفردية.',
    kitStyle: 'outfield',
  },
  // Midfielders
  {
    id: 'jabrane',
    nameAr: 'يحيى جبران',
    nameLat: 'Yahya Jabrane',
    number: 15,
    positionGroup: 'MID',
    positionAr: 'وسط دفاعي',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 35,
    heightCm: 187,
    preferredFoot: 'اليمنى',
    marketValue: '800K €',
    joinedYear: '2019',
    isCaptain: true,
    bioAr: 'عميد الفريق ورمز خط الوسط الودادي، ضابط إيقاع اللعب وقائد التتويجات القارية والوطنية.',
    kitStyle: 'outfield',
  },
  {
    id: 'zemraoui',
    nameAr: 'أسامة زمراوي',
    nameLat: 'Oussama Zemraoui',
    number: 8,
    positionGroup: 'MID',
    positionAr: 'وسط ميدان هجومي',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 24,
    heightCm: 180,
    preferredFoot: 'اليمنى',
    marketValue: '650K €',
    joinedYear: '2024',
    bioAr: 'محرك خط الوسط وأكثر لاعبي الوداد تأثيراً في انطلاقة موسم 2026–2027 بتسجيله هدفين حاسمين خارج الميدان.',
    kitStyle: 'outfield',
  },
  {
    id: 'al-rashdan',
    nameAr: 'نزار الرشدان',
    nameLat: 'Nizar Al-Rashdan',
    number: 18,
    positionGroup: 'MID',
    positionAr: 'وسط ميدان',
    nationality: 'الأردن',
    flagCode: 'JO',
    age: 27,
    heightCm: 183,
    preferredFoot: 'اليمنى',
    marketValue: '600K €',
    joinedYear: '2026',
    bioAr: 'الدولي الأردني النشيط في وسط الميدان، يجمع بين افتكاك الكرات والتمريرات العمودية الدقيقة.',
    kitStyle: 'outfield',
  },
  {
    id: 'el-hassouni',
    nameAr: 'أيمن الحسوني',
    nameLat: 'Aymane El Hassouni',
    number: 10,
    positionGroup: 'MID',
    positionAr: 'صانع ألعاب',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 31,
    heightCm: 179,
    preferredFoot: 'اليمنى',
    marketValue: '500K €',
    joinedYear: '2025',
    bioAr: 'صانع ألعاب مبدع بلمسات فنية عالية، منح الفريق فوزاً ثميناً أمام اتحاد تواركة في الجولة الخامسة.',
    kitStyle: 'outfield',
  },
  {
    id: 'bakasu',
    nameAr: 'جوزيف باكاسو',
    nameLat: 'Joseph Bakasu',
    number: 6,
    positionGroup: 'MID',
    positionAr: 'وسط دفاعي',
    nationality: 'الكونغو الديمقراطية',
    flagCode: 'CD',
    age: 25,
    heightCm: 182,
    preferredFoot: 'اليمنى',
    marketValue: '450K €',
    joinedYear: '2025',
    bioAr: 'لاعب ارتكاز قوي بدنياً يغطي مساحات شاسعة في وسط الميدان ويساند قلب الدفاع.',
    kitStyle: 'outfield',
  },
  {
    id: 'byar',
    nameAr: 'نعيم بيار',
    nameLat: 'Naïm Byar',
    number: 21,
    positionGroup: 'MID',
    positionAr: 'وسط ميدان',
    nationality: 'المغرب / فرنسا',
    flagCode: 'MA',
    age: 21,
    heightCm: 178,
    preferredFoot: 'اليمنى',
    marketValue: '450K €',
    joinedYear: '2026',
    bioAr: 'موهبة صاعدة في خط الوسط تتميز بالسرعة في التحولات والجرأة في بناء اللعب.',
    kitStyle: 'outfield',
  },
  {
    id: 'pedrinho',
    nameAr: 'بيدرينيو',
    nameLat: 'Pedrinho (Pedro Henrique)',
    number: 22,
    positionGroup: 'MID',
    positionAr: 'وسط هجومي',
    nationality: 'البرازيل',
    flagCode: 'BR',
    age: 23,
    heightCm: 175,
    preferredFoot: 'اليسرى',
    marketValue: '250K €',
    joinedYear: '2025',
    bioAr: 'لاعب وسط هجومي برازيلي مهاري يجيد المراوغة في المساحات الضيقة وصناعة الفرص.',
    kitStyle: 'outfield',
  },
  // Forwards
  {
    id: 'ziyech',
    nameAr: 'حكيم زياش',
    nameLat: 'Hakim Ziyech',
    number: 7,
    positionGroup: 'FWD',
    positionAr: 'جناح أيمن / صانع ألعاب',
    nationality: 'المغرب / هولندا',
    flagCode: 'MA',
    age: 33,
    heightCm: 181,
    preferredFoot: 'اليسرى',
    marketValue: '2.20M €',
    joinedYear: '2025',
    bioAr: 'نجم الأسود وهداف الفريق في الموسم الماضي بـ8 أهداف، صاحب اليسرى الساحرة والتسديدات البعيدة.',
    kitStyle: 'outfield',
  },
  {
    id: 'ganvoula',
    nameAr: 'سيلفير غانفولا',
    nameLat: 'Silvère Ganvoula',
    number: 9,
    positionGroup: 'FWD',
    positionAr: 'رأس حربة',
    nationality: 'الكونغو',
    flagCode: 'CG',
    age: 30,
    heightCm: 191,
    preferredFoot: 'اليمنى',
    marketValue: '900K €',
    joinedYear: '2026',
    bioAr: 'المهاجم الصريح وهداف الوداد الأول في موسم 2026–2027 بأهدافه الحاسمة في المباريات الأولى.',
    kitStyle: 'outfield',
  },
  {
    id: 'lorch',
    nameAr: 'ثيمبينكوسي لورش',
    nameLat: 'Thembinkosi Lorch',
    number: 11,
    positionGroup: 'FWD',
    positionAr: 'جناح أيسر',
    nationality: 'جنوب إفريقيا',
    flagCode: 'ZA',
    age: 33,
    heightCm: 174,
    preferredFoot: 'اليمنى',
    marketValue: '400K €',
    joinedYear: '2025',
    bioAr: 'جناح سريع ومتمرس في البطولات الإفريقية يخلق التفوق العددي على الرواق الأيسر.',
    kitStyle: 'outfield',
  },
  {
    id: 'paniagua',
    nameAr: 'مويسيس بانياغوا',
    nameLat: 'Moises Paniagua',
    number: 27,
    positionGroup: 'FWD',
    positionAr: 'جناح هجومي',
    nationality: 'بوليفيا',
    flagCode: 'BO',
    age: 19,
    heightCm: 175,
    preferredFoot: 'اليمنى',
    marketValue: '900K €',
    joinedYear: '2026',
    bioAr: 'أحد أبرز المواهب اللاتينية الشابة في صفوف الفريق الأحمر بسرعة اختراق لافتة.',
    kitStyle: 'outfield',
  },
  {
    id: 'hannouri',
    nameAr: 'حمزة هنوري',
    nameLat: 'Hamza Hannouri',
    number: 19,
    positionGroup: 'FWD',
    positionAr: 'مهاجم',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 28,
    heightCm: 183,
    preferredFoot: 'اليمنى',
    marketValue: '700K €',
    joinedYear: '2025',
    bioAr: 'مهاجم متعدد الأدوار يتقن التحرك داخل منطقة الجزاء والضغط على دفاعات الخصوم.',
    kitStyle: 'outfield',
  },
  {
    id: 'nassi',
    nameAr: 'وليد ناسي',
    nameLat: 'Walid Nassi',
    number: 17,
    positionGroup: 'FWD',
    positionAr: 'جناح أيمن',
    nationality: 'المغرب / فرنسا',
    flagCode: 'MA',
    age: 26,
    heightCm: 178,
    preferredFoot: 'اليمنى',
    marketValue: '350K €',
    joinedYear: '2024',
    bioAr: 'جناح حركي يمنح الإضافة السريعة على الأروقة سواء أساسياً أو كورقة رابحة.',
    kitStyle: 'outfield',
  },
  {
    id: 'el-moutaraji',
    nameAr: 'زهير المترجي',
    nameLat: 'Zouhair El Moutaraji',
    number: 29,
    positionGroup: 'FWD',
    positionAr: 'مهاجم / جناح',
    nationality: 'المغرب',
    flagCode: 'MA',
    age: 30,
    heightCm: 178,
    preferredFoot: 'اليمنى',
    marketValue: '200K €',
    joinedYear: '2026',
    bioAr: 'بطل نهائي عصبة الأبطال 2022، يعود بأهدافه وتجربته الكبيرة في المواعيد الكبرى.',
    kitStyle: 'outfield',
  },
];

export const BOTOLA_STANDINGS: StandingRow[] = [
  { rank: 1, teamAr: 'الكوكب المراكشي', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 10, goalsAgainst: 6, goalDiff: 4, points: 16 },
  { rank: 2, teamAr: 'النادي المكناسي', played: 7, won: 4, drawn: 2, lost: 1, goalsFor: 10, goalsAgainst: 4, goalDiff: 6, points: 14 },
  { rank: 3, teamAr: 'الرجاء الرياضي', played: 7, won: 3, drawn: 3, lost: 1, goalsFor: 7, goalsAgainst: 5, goalDiff: 2, points: 12 },
  { rank: 4, teamAr: 'الجيش الملكي', played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 9, goalsAgainst: 5, goalDiff: 4, points: 11 },
  { rank: 5, teamAr: 'الوداد الرياضي', played: 7, won: 3, drawn: 2, lost: 2, goalsFor: 9, goalsAgainst: 3, goalDiff: 6, points: 11, isWydad: true },
  { rank: 6, teamAr: 'المغرب الفاسي', played: 7, won: 3, drawn: 2, lost: 2, goalsFor: 6, goalsAgainst: 5, goalDiff: 1, points: 11 },
  { rank: 7, teamAr: 'نهضة بركان', played: 6, won: 3, drawn: 1, lost: 2, goalsFor: 8, goalsAgainst: 6, goalDiff: 2, points: 10 },
  { rank: 8, teamAr: 'الفتح الرباطي', played: 7, won: 2, drawn: 3, lost: 2, goalsFor: 7, goalsAgainst: 7, goalDiff: 0, points: 9 },
  { rank: 9, teamAr: 'اتحاد تواركة', played: 7, won: 2, drawn: 2, lost: 3, goalsFor: 6, goalsAgainst: 7, goalDiff: -1, points: 8 },
  { rank: 10, teamAr: 'الدفاع الحسني الجديدي', played: 7, won: 2, drawn: 2, lost: 3, goalsFor: 5, goalsAgainst: 8, goalDiff: -3, points: 8 },
];

export const SEASON_MATCHES: SeasonMatch[] = [
  {
    id: 'r1-temara',
    round: 1,
    roundLabelAr: 'الجولة 1',
    dateAr: '26 شتنبر 2026',
    dateISO: '2026-09-26',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'وداد تمارة',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'played',
    wydadScore: 3,
    opponentScore: 0,
    outcome: 'W',
    summaryNoteAr:
      'تم اعتماد النتيجة القانونية (3–0) لصالح الوداد الرياضي بقرار اللجنة التأديبية للجامعة بسبب إشراك وداد تمارة للاعب غير مؤهل (انتهى اللقاء على أرضية الملعب 1–3 وسجل غانفولا هدف الوداد).',
    events: [
      { minute: "42'", team: 'wydad', type: 'penalty', playerAr: 'سيلفير غانفولا', detailAr: 'ركلة جزاء (النتيجة الميدانية)' },
      { minute: 'قرار إداري', team: 'wydad', type: 'goal', playerAr: 'اعتماد الفوز 3–0', detailAr: 'قرار تأديبي رسمي' },
    ],
    stats: [
      { labelAr: 'الاستحواذ', wydad: 64, opponent: 36, isPercent: true },
      { labelAr: 'إجمالي التسديدات', wydad: 16, opponent: 8 },
      { labelAr: 'التسديدات على المرمى', wydad: 6, opponent: 4 },
      { labelAr: 'الأهداف المتوقعة (xG)', wydad: '1.94', opponent: '1.12' },
      { labelAr: 'الضربات الركنية', wydad: 8, opponent: 3 },
      { labelAr: 'دقة التمرير', wydad: 84, opponent: 73, isPercent: true },
      { labelAr: 'الأخطاء المرتكبة', wydad: 11, opponent: 15 },
      { labelAr: 'البطاقات الصفراء', wydad: 2, opponent: 3 },
    ],
    lineup: [
      { playerId: 'benabid', starter: true, minutes: 90, rating: 6.5, saves: 2 },
      { playerId: 'moufid', starter: true, minutes: 90, rating: 6.8 },
      { playerId: 'el-wafi', starter: true, minutes: 90, rating: 6.7 },
      { playerId: 'moussaddaq', starter: true, minutes: 72, rating: 6.4, yellowCard: true },
      { playerId: 'attiyat-allah', starter: true, minutes: 90, rating: 7.0 },
      { playerId: 'jabrane', starter: true, minutes: 78, rating: 6.9 },
      { playerId: 'al-rashdan', starter: true, minutes: 90, rating: 6.7 },
      { playerId: 'zemraoui', starter: true, minutes: 81, rating: 7.1 },
      { playerId: 'ziyech', starter: true, minutes: 68, rating: 7.2 },
      { playerId: 'lorch', starter: true, minutes: 65, rating: 6.6 },
      { playerId: 'ganvoula', starter: true, minutes: 90, rating: 7.4, goals: 1 },
      { playerId: 'el-hassouni', starter: false, minutes: 22, rating: 6.8 },
      { playerId: 'nassi', starter: false, minutes: 25, rating: 6.7 },
      { playerId: 'dayo', starter: false, minutes: 18, rating: 6.5 },
      { playerId: 'byar', starter: false, minutes: 12, rating: 6.4 },
      { playerId: 'hannouri', starter: false, minutes: 9, rating: 6.3 },
    ],
  },
  {
    id: 'r2-dhj',
    round: 2,
    roundLabelAr: 'الجولة 2',
    dateAr: '3 أكتوبر 2026',
    dateISO: '2026-10-03',
    kickoff: '18:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الدفاع الحسني الجديدي',
    awayTeamAr: 'الوداد الرياضي',
    isWydadHome: false,
    stadiumAr: 'ملعب بن أحمد العبدي، الجديدة',
    status: 'played',
    wydadScore: 2,
    opponentScore: 0,
    outcome: 'W',
    summaryNoteAr: 'أداء تكتيكي متوازن وانتصار مستحق خارج الديار بشباك نظيفة بفضل هدفي زمراوي وغانفولا.',
    events: [
      { minute: "27'", team: 'wydad', type: 'goal', playerAr: 'أسامة زمراوي', detailAr: 'تسديدة من داخل المنطقة' },
      { minute: "59'", team: 'wydad', type: 'goal', playerAr: 'سيلفير غانفولا', detailAr: 'تمريرة حاسمة: يحيى عطية الله' },
    ],
    stats: [
      { labelAr: 'الاستحواذ', wydad: 56, opponent: 44, isPercent: true },
      { labelAr: 'إجمالي التسديدات', wydad: 14, opponent: 7 },
      { labelAr: 'التسديدات على المرمى', wydad: 6, opponent: 2 },
      { labelAr: 'الأهداف المتوقعة (xG)', wydad: '1.86', opponent: '0.58' },
      { labelAr: 'الضربات الركنية', wydad: 6, opponent: 4 },
      { labelAr: 'دقة التمرير', wydad: 82, opponent: 76, isPercent: true },
      { labelAr: 'الأخطاء المرتكبة', wydad: 13, opponent: 16 },
      { labelAr: 'البطاقات الصفراء', wydad: 2, opponent: 2 },
    ],
    lineup: [
      { playerId: 'benabid', starter: true, minutes: 90, rating: 7.4, saves: 2 },
      { playerId: 'moufid', starter: true, minutes: 90, rating: 7.3 },
      { playerId: 'el-wafi', starter: true, minutes: 90, rating: 7.6 },
      { playerId: 'dayo', starter: true, minutes: 90, rating: 7.5 },
      { playerId: 'attiyat-allah', starter: true, minutes: 90, rating: 7.9, assists: 1 },
      { playerId: 'bakasu', starter: true, minutes: 84, rating: 7.2, yellowCard: true },
      { playerId: 'al-rashdan', starter: true, minutes: 90, rating: 7.4 },
      { playerId: 'zemraoui', starter: true, minutes: 82, rating: 8.1, goals: 1 },
      { playerId: 'ziyech', starter: true, minutes: 74, rating: 7.5 },
      { playerId: 'lorch', starter: true, minutes: 68, rating: 7.1 },
      { playerId: 'ganvoula', starter: true, minutes: 86, rating: 7.8, goals: 1 },
      { playerId: 'nassi', starter: false, minutes: 22, rating: 6.8 },
      { playerId: 'el-hassouni', starter: false, minutes: 16, rating: 6.7 },
      { playerId: 'jabrane', starter: false, minutes: 8, rating: 6.6 },
      { playerId: 'byar', starter: false, minutes: 6, rating: 6.5 },
      { playerId: 'hannouri', starter: false, minutes: 4, rating: 6.4 },
    ],
  },
  {
    id: 'r3-codm',
    round: 3,
    roundLabelAr: 'الجولة 3',
    dateAr: '11 أكتوبر 2026',
    dateISO: '2026-10-11',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'النادي المكناسي',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'played',
    wydadScore: 0,
    opponentScore: 0,
    outcome: 'D',
    summaryNoteAr: 'سيطرة ميدانية للوداد أمام تكتل دفاعي مكناسي منظم مع تغييرات هجومية مكثفة في الشوط الثاني.',
    events: [
      { minute: "13'", team: 'wydad', type: 'yellow', playerAr: 'أيمن الحسوني' },
      { minute: "33'", team: 'wydad', type: 'yellow', playerAr: 'صلاح الدين مصدق' },
    ],
    stats: [
      { labelAr: 'الاستحواذ', wydad: 67, opponent: 33, isPercent: true },
      { labelAr: 'إجمالي التسديدات', wydad: 18, opponent: 5 },
      { labelAr: 'التسديدات على المرمى', wydad: 5, opponent: 1 },
      { labelAr: 'الأهداف المتوقعة (xG)', wydad: '1.52', opponent: '0.39' },
      { labelAr: 'الضربات الركنية', wydad: 10, opponent: 2 },
      { labelAr: 'دقة التمرير', wydad: 86, opponent: 71, isPercent: true },
      { labelAr: 'الأخطاء المرتكبة', wydad: 12, opponent: 18 },
      { labelAr: 'البطاقات الصفراء', wydad: 2, opponent: 4 },
    ],
    lineup: [
      { playerId: 'ghanimi', starter: true, minutes: 90, rating: 7.1, saves: 1 },
      { playerId: 'moufid', starter: true, minutes: 90, rating: 7.2 },
      { playerId: 'moussaddaq', starter: true, minutes: 90, rating: 7.0, yellowCard: true },
      { playerId: 'el-wafi', starter: true, minutes: 90, rating: 7.3 },
      { playerId: 'attiyat-allah', starter: true, minutes: 90, rating: 7.4 },
      { playerId: 'bakasu', starter: true, minutes: 45, rating: 6.6 },
      { playerId: 'el-hassouni', starter: true, minutes: 66, rating: 6.8, yellowCard: true },
      { playerId: 'pedrinho', starter: true, minutes: 45, rating: 6.5 },
      { playerId: 'ziyech', starter: true, minutes: 90, rating: 7.6 },
      { playerId: 'paniagua', starter: true, minutes: 65, rating: 6.9 },
      { playerId: 'ganvoula', starter: true, minutes: 73, rating: 6.7 },
      { playerId: 'zemraoui', starter: false, minutes: 45, rating: 7.2 },
      { playerId: 'al-rashdan', starter: false, minutes: 45, rating: 7.1 },
      { playerId: 'nassi', starter: false, minutes: 25, rating: 6.7 },
      { playerId: 'jabrane', starter: false, minutes: 24, rating: 6.8 },
      { playerId: 'hannouri', starter: false, minutes: 17, rating: 6.5 },
    ],
  },
  {
    id: 'r4-tiznit',
    round: 4,
    roundLabelAr: 'الجولة 4',
    dateAr: '18 أكتوبر 2026',
    dateISO: '2026-10-18',
    kickoff: '18:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'أمل تيزنيت',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'played',
    wydadScore: 1,
    opponentScore: 1,
    outcome: 'D',
    summaryNoteAr: 'تقدم أمل تيزنيت بركلة جزاء في الدقيقة 53 قبل أن يعدل سيلفير غانفولا النتيجة من علامة الجزاء في الدقيقة 62.',
    events: [
      { minute: "53'", team: 'opponent', type: 'penalty', playerAr: 'زكرياء الصالحي', detailAr: 'ركلة جزاء' },
      { minute: "62'", team: 'wydad', type: 'penalty', playerAr: 'سيلفير غانفولا', detailAr: 'ركلة جزاء' },
    ],
    stats: [
      { labelAr: 'الاستحواذ', wydad: 69, opponent: 31, isPercent: true },
      { labelAr: 'إجمالي التسديدات', wydad: 20, opponent: 6 },
      { labelAr: 'التسديدات على المرمى', wydad: 7, opponent: 2 },
      { labelAr: 'الأهداف المتوقعة (xG)', wydad: '2.18', opponent: '0.94' },
      { labelAr: 'الضربات الركنية', wydad: 11, opponent: 2 },
      { labelAr: 'دقة التمرير', wydad: 85, opponent: 68, isPercent: true },
      { labelAr: 'الأخطاء المرتكبة', wydad: 10, opponent: 17 },
      { labelAr: 'البطاقات الصفراء', wydad: 1, opponent: 3 },
    ],
    lineup: [
      { playerId: 'ghanimi', starter: true, minutes: 90, rating: 6.8, saves: 1 },
      { playerId: 'moufid', starter: true, minutes: 90, rating: 7.2 },
      { playerId: 'dayo', starter: true, minutes: 90, rating: 7.1 },
      { playerId: 'aboulfath', starter: true, minutes: 90, rating: 6.9, yellowCard: true },
      { playerId: 'attiyat-allah', starter: true, minutes: 90, rating: 7.5 },
      { playerId: 'al-rashdan', starter: true, minutes: 78, rating: 7.1 },
      { playerId: 'zemraoui', starter: true, minutes: 90, rating: 7.4 },
      { playerId: 'el-hassouni', starter: true, minutes: 71, rating: 7.0 },
      { playerId: 'nassi', starter: true, minutes: 63, rating: 6.8 },
      { playerId: 'lorch', starter: true, minutes: 63, rating: 6.9 },
      { playerId: 'ganvoula', starter: true, minutes: 90, rating: 7.6, goals: 1 },
      { playerId: 'ziyech', starter: false, minutes: 27, rating: 7.3 },
      { playerId: 'paniagua', starter: false, minutes: 27, rating: 7.0 },
      { playerId: 'byar', starter: false, minutes: 19, rating: 6.7 },
      { playerId: 'jabrane', starter: false, minutes: 12, rating: 6.6 },
    ],
  },
  {
    id: 'r5-touarga',
    round: 5,
    roundLabelAr: 'الجولة 5',
    dateAr: '24 أكتوبر 2026',
    dateISO: '2026-10-24',
    kickoff: '18:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'اتحاد تواركة',
    awayTeamAr: 'الوداد الرياضي',
    isWydadHome: false,
    stadiumAr: 'ملعب مولاي الحسن، الرباط',
    status: 'played',
    wydadScore: 1,
    opponentScore: 0,
    outcome: 'W',
    summaryNoteAr: 'هدف مبكر لأيمن الحسوني من ركلة جزاء في الدقيقة 9 منح الوداد ثلاث نقاط ثمينة بأداء دفاعي صلب في الرباط.',
    events: [
      { minute: "9'", team: 'wydad', type: 'penalty', playerAr: 'أيمن الحسوني', detailAr: 'ركلة جزاء' },
    ],
    stats: [
      { labelAr: 'الاستحواذ', wydad: 53, opponent: 47, isPercent: true },
      { labelAr: 'إجمالي التسديدات', wydad: 11, opponent: 9 },
      { labelAr: 'التسديدات على المرمى', wydad: 4, opponent: 3 },
      { labelAr: 'الأهداف المتوقعة (xG)', wydad: '1.44', opponent: '0.72' },
      { labelAr: 'الضربات الركنية', wydad: 5, opponent: 6 },
      { labelAr: 'دقة التمرير', wydad: 81, opponent: 79, isPercent: true },
      { labelAr: 'الأخطاء المرتكبة', wydad: 14, opponent: 13 },
      { labelAr: 'البطاقات الصفراء', wydad: 2, opponent: 2 },
    ],
    lineup: [
      { playerId: 'ghanimi', starter: true, minutes: 90, rating: 7.7, saves: 3 },
      { playerId: 'moufid', starter: true, minutes: 90, rating: 7.4 },
      { playerId: 'dayo', starter: true, minutes: 90, rating: 7.6 },
      { playerId: 'moussaddaq', starter: true, minutes: 90, rating: 7.5 },
      { playerId: 'attiyat-allah', starter: true, minutes: 90, rating: 7.4, yellowCard: true },
      { playerId: 'al-rashdan', starter: true, minutes: 90, rating: 7.3 },
      { playerId: 'bakasu', starter: true, minutes: 80, rating: 7.2, yellowCard: true },
      { playerId: 'zemraoui', starter: true, minutes: 85, rating: 7.5 },
      { playerId: 'el-hassouni', starter: true, minutes: 74, rating: 7.9, goals: 1 },
      { playerId: 'nassi', starter: true, minutes: 67, rating: 7.0 },
      { playerId: 'ganvoula', starter: true, minutes: 90, rating: 7.1 },
      { playerId: 'hannouri', starter: false, minutes: 23, rating: 6.7 },
      { playerId: 'byar', starter: false, minutes: 16, rating: 6.6 },
      { playerId: 'jabrane', starter: false, minutes: 10, rating: 6.7 },
      { playerId: 'ferreira', starter: false, minutes: 5, rating: 6.5 },
    ],
  },
  {
    id: 'r6-mat',
    round: 6,
    roundLabelAr: 'الجولة 6',
    dateAr: '31 أكتوبر 2026',
    dateISO: '2026-10-31',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'المغرب التطواني',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'played',
    wydadScore: 1,
    opponentScore: 0,
    outcome: 'W',
    summaryNoteAr: 'فوز متتالي ثانٍ وشباك نظيفة بفضل هدف القناص سيلفير غانفولا من ركلة جزاء قبل نهاية الشوط الأول.',
    events: [
      { minute: "40'", team: 'wydad', type: 'penalty', playerAr: 'سيلفير غانفولا', detailAr: 'ركلة جزاء' },
    ],
    stats: [
      { labelAr: 'الاستحواذ', wydad: 61, opponent: 39, isPercent: true },
      { labelAr: 'إجمالي التسديدات', wydad: 15, opponent: 6 },
      { labelAr: 'التسديدات على المرمى', wydad: 5, opponent: 2 },
      { labelAr: 'الأهداف المتوقعة (xG)', wydad: '1.78', opponent: '0.45' },
      { labelAr: 'الضربات الركنية', wydad: 7, opponent: 3 },
      { labelAr: 'دقة التمرير', wydad: 85, opponent: 74, isPercent: true },
      { labelAr: 'الأخطاء المرتكبة', wydad: 11, opponent: 14 },
      { labelAr: 'البطاقات الصفراء', wydad: 1, opponent: 3 },
    ],
    lineup: [
      { playerId: 'benabid', starter: true, minutes: 90, rating: 7.3, saves: 2 },
      { playerId: 'moufid', starter: true, minutes: 90, rating: 7.4 },
      { playerId: 'el-wafi', starter: true, minutes: 90, rating: 7.6 },
      { playerId: 'dayo', starter: true, minutes: 90, rating: 7.4 },
      { playerId: 'attiyat-allah', starter: true, minutes: 90, rating: 7.5 },
      { playerId: 'al-rashdan', starter: true, minutes: 84, rating: 7.2 },
      { playerId: 'zemraoui', starter: true, minutes: 90, rating: 7.6 },
      { playerId: 'el-hassouni', starter: true, minutes: 72, rating: 7.1 },
      { playerId: 'ziyech', starter: true, minutes: 81, rating: 7.7 },
      { playerId: 'lorch', starter: true, minutes: 64, rating: 7.0, yellowCard: true },
      { playerId: 'ganvoula', starter: true, minutes: 88, rating: 7.8, goals: 1 },
      { playerId: 'el-moutaraji', starter: false, minutes: 26, rating: 6.9 },
      { playerId: 'pedrinho', starter: false, minutes: 18, rating: 6.7 },
      { playerId: 'jabrane', starter: false, minutes: 9, rating: 6.6 },
      { playerId: 'bakasu', starter: false, minutes: 6, rating: 6.5 },
      { playerId: 'hannouri', starter: false, minutes: 2, rating: 6.4 },
    ],
  },
  {
    id: 'r7-kacm',
    round: 7,
    roundLabelAr: 'الجولة 7',
    dateAr: '7 نونبر 2026',
    dateISO: '2026-11-07',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الكوكب المراكشي',
    awayTeamAr: 'الوداد الرياضي',
    isWydadHome: false,
    stadiumAr: 'الملعب الكبير بمراكش',
    status: 'played',
    wydadScore: 1,
    opponentScore: 2,
    outcome: 'L',
    summaryNoteAr: 'تأخر الوداد في الشوط الأول بهدفين من توقيع محروس والسالمي قبل أن يقلص أسامة زمراوي الفارق في الدقيقة 59.',
    events: [
      { minute: "18'", team: 'opponent', type: 'goal', playerAr: 'أسامة محروس' },
      { minute: "44'", team: 'opponent', type: 'goal', playerAr: 'صلاح الدين السالمي' },
      { minute: "59'", team: 'wydad', type: 'goal', playerAr: 'أسامة زمراوي', detailAr: 'تمريرة: حكيم زياش' },
    ],
    stats: [
      { labelAr: 'الاستحواذ', wydad: 58, opponent: 42, isPercent: true },
      { labelAr: 'إجمالي التسديدات', wydad: 13, opponent: 11 },
      { labelAr: 'التسديدات على المرمى', wydad: 4, opponent: 5 },
      { labelAr: 'الأهداف المتوقعة (xG)', wydad: '1.36', opponent: '1.48' },
      { labelAr: 'الضربات الركنية', wydad: 7, opponent: 4 },
      { labelAr: 'دقة التمرير', wydad: 82, opponent: 75, isPercent: true },
      { labelAr: 'الأخطاء المرتكبة', wydad: 13, opponent: 15 },
      { labelAr: 'البطاقات الصفراء', wydad: 3, opponent: 2 },
    ],
    lineup: [
      { playerId: 'benabid', starter: true, minutes: 90, rating: 6.4, saves: 3 },
      { playerId: 'moufid', starter: true, minutes: 90, rating: 6.7 },
      { playerId: 'el-wafi', starter: true, minutes: 90, rating: 6.6, yellowCard: true },
      { playerId: 'moussaddaq', starter: true, minutes: 64, rating: 6.2 },
      { playerId: 'attiyat-allah', starter: true, minutes: 90, rating: 6.9 },
      { playerId: 'al-rashdan', starter: true, minutes: 76, rating: 6.7 },
      { playerId: 'bakasu', starter: true, minutes: 60, rating: 6.4, yellowCard: true },
      { playerId: 'zemraoui', starter: true, minutes: 90, rating: 7.7, goals: 1 },
      { playerId: 'ziyech', starter: true, minutes: 90, rating: 7.4, assists: 1 },
      { playerId: 'el-moutaraji', starter: true, minutes: 58, rating: 6.5 },
      { playerId: 'ganvoula', starter: true, minutes: 90, rating: 6.8, yellowCard: true },
      { playerId: 'paniagua', starter: false, minutes: 32, rating: 6.9 },
      { playerId: 'el-hassouni', starter: false, minutes: 30, rating: 6.8 },
      { playerId: 'dayo', starter: false, minutes: 26, rating: 6.7 },
      { playerId: 'hannouri', starter: false, minutes: 14, rating: 6.5 },
    ],
  },
  // Upcoming Matches (Rounds 8 - 15)
  {
    id: 'r8-asfar',
    round: 8,
    roundLabelAr: 'الجولة 8',
    dateAr: 'نهاية نونبر 2026 (مؤجلة / تحدد لاحقاً)',
    dateISO: '2026-11-29',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'الجيش الملكي',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'upcoming',
    summaryNoteAr: 'القمة الكلاسيكية المرتقبة بعد استئناف البطولة يوم 27 نونبر عقب التوقف الدولي (علماً أن الفريقين التقيا ودياً يوم 21 نونبر).',
  },
  {
    id: 'r9-zemamra',
    round: 9,
    roundLabelAr: 'الجولة 9',
    dateAr: 'دجنبر 2026',
    dateISO: '2026-12-06',
    kickoff: '18:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'نهضة الزمامرة',
    awayTeamAr: 'الوداد الرياضي',
    isWydadHome: false,
    stadiumAr: 'ملعب أحمد شكري، الزمامرة',
    status: 'upcoming',
    summaryNoteAr: 'رحلة محفوفة بالتحدي نحو دكالة لمواصلة حصد النقاط خارج الديار.',
  },
  {
    id: 'r10-mas',
    round: 10,
    roundLabelAr: 'الجولة 10',
    dateAr: 'دجنبر 2026',
    dateISO: '2026-12-13',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'المغرب الفاسي',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'upcoming',
    summaryNoteAr: 'صدام تاريخي أمام الماص قبل أسبوع من موقعة الديربي البيضاوي.',
  },
  {
    id: 'r11-raja',
    round: 11,
    roundLabelAr: 'الجولة 11',
    dateAr: 'دجنبر 2026',
    dateISO: '2026-12-20',
    kickoff: '18:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الرجاء الرياضي',
    awayTeamAr: 'الوداد الرياضي',
    isWydadHome: false,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'upcoming',
    summaryNoteAr: 'ديربي الدار البيضاء الكبير لحساب الجولة الحادية عشرة من مرحلة الذهاب.',
  },
  {
    id: 'r12-husa',
    round: 12,
    roundLabelAr: 'الجولة 12',
    dateAr: 'يناير 2027',
    dateISO: '2027-01-03',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'حسنية أكادير',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'upcoming',
  },
  {
    id: 'r13-rsb',
    round: 13,
    roundLabelAr: 'الجولة 13',
    dateAr: 'يناير 2027',
    dateISO: '2027-01-10',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'نهضة بركان',
    awayTeamAr: 'الوداد الرياضي',
    isWydadHome: false,
    stadiumAr: 'الملعب البلدي، بركان',
    status: 'upcoming',
  },
  {
    id: 'r14-irt',
    round: 14,
    roundLabelAr: 'الجولة 14',
    dateAr: 'يناير 2027',
    dateISO: '2027-01-17',
    kickoff: '18:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الوداد الرياضي',
    awayTeamAr: 'اتحاد طنجة',
    isWydadHome: true,
    stadiumAr: 'المركب الرياضي محمد الخامس، الدار البيضاء',
    status: 'upcoming',
  },
  {
    id: 'r15-fus',
    round: 15,
    roundLabelAr: 'الجولة 15',
    dateAr: 'يناير 2027',
    dateISO: '2027-01-24',
    kickoff: '20:00',
    competitionAr: 'البطولة الاحترافية إنوي',
    homeTeamAr: 'الفتح الرباطي',
    awayTeamAr: 'الوداد الرياضي',
    isWydadHome: false,
    stadiumAr: 'ملعب مولاي الحسن، الرباط',
    status: 'upcoming',
  },
];

export const TROPHY_CABINET: TrophyItem[] = [
  {
    id: 'botola',
    titleAr: 'البطولة المغربية (البطولة الاحترافية)',
    category: 'national',
    categoryLabelAr: 'ألقاب وطنية',
    count: 22,
    years: [
      '1948', '1949', '1950', '1951', '1955', '1957', '1966', '1969', '1976', '1977', '1978',
      '1986', '1990', '1991', '1993', '2006', '2010', '2015', '2017', '2019', '2021', '2022',
    ],
    descriptionAr: 'الرقم القياسي الوطني المطلق لأكثر الأندية تتويجاً بلقب الدوري المغربي عبر التاريخ.',
  },
  {
    id: 'throne-cup',
    titleAr: 'كأس العرش المغربي',
    category: 'national',
    categoryLabelAr: 'ألقاب وطنية',
    count: 9,
    years: ['1970', '1978', '1979', '1981', '1989', '1994', '1997', '1998', '2001'],
    descriptionAr: 'تاريخ طويل من الملاحم في المسابقة الأعرق في كرة القدم الوطنية.',
  },
  {
    id: 'super-cup-ma',
    titleAr: 'كأس السوبر المغربي / كأس الشباب',
    category: 'national',
    categoryLabelAr: 'ألقاب وطنية',
    count: 7,
    years: ['1940', '1946', '1948', '1949', '1951', '1955', '1966'],
    descriptionAr: 'بطولات السوبر الوطنية التي جمعت بطل الدوري وحامل الكأس.',
  },
  {
    id: 'independence-cup',
    titleAr: 'كأس الاستقلال',
    category: 'national',
    categoryLabelAr: 'ألقاب وطنية',
    count: 1,
    years: ['1956'],
    descriptionAr: 'أول بطولة كبرى في عهد الاستقلال نظمت احتفاءً بعودة الملك محمد الخامس.',
  },
  {
    id: 'caf-cl',
    titleAr: 'دوري أبطال إفريقيا',
    category: 'continental',
    categoryLabelAr: 'قارية وعربية',
    count: 3,
    years: ['1992', '2017', '2022'],
    descriptionAr: 'ثلاث نجوم قارية ترصع قميص الوداد فوق الشعار بعد نهائيات 1992 و2017 و2022.',
  },
  {
    id: 'caf-cwc',
    titleAr: 'كأس الكؤوس الإفريقية',
    category: 'continental',
    categoryLabelAr: 'قارية وعربية',
    count: 1,
    years: ['2002'],
    descriptionAr: 'التتويج الإفريقي التاريخي أمام أشانتي كوتوكو الغاني سنة 2002.',
  },
  {
    id: 'caf-super',
    titleAr: 'كأس السوبر الإفريقي',
    category: 'continental',
    categoryLabelAr: 'قارية وعربية',
    count: 1,
    years: ['2018'],
    descriptionAr: 'التتويج القاري بمركب محمد الخامس أمام تي بي مازيمبي.',
  },
  {
    id: 'afro-asian',
    titleAr: 'الكأس الأفرو-آسيوية للأندية',
    category: 'continental',
    categoryLabelAr: 'قارية وعربية',
    count: 1,
    years: ['1993'],
    descriptionAr: 'اللقب القاري العابر للقارات على حساب باس طهران الإيراني.',
  },
  {
    id: 'arab-cl',
    titleAr: 'البطولة العربية للأندية الأبطال',
    category: 'continental',
    categoryLabelAr: 'قارية وعربية',
    count: 1,
    years: ['1989'],
    descriptionAr: 'أول تتويج عربي كبير للوداد في مراكش أمام الهلال السعودي.',
  },
  {
    id: 'arab-super',
    titleAr: 'كأس السوبر العربي',
    category: 'continental',
    categoryLabelAr: 'قارية وعربية',
    count: 1,
    years: ['1992'],
    descriptionAr: 'لقب السوبر العربي في الدار البيضاء سنة 1992.',
  },
  {
    id: 'na-championship',
    titleAr: 'بطولة شمال إفريقيا',
    category: 'historical',
    categoryLabelAr: 'ألقاب التأسيس',
    count: 3,
    years: ['1948', '1949', '1950'],
    descriptionAr: 'سيطرة تاريخية للوداد على أندية المغرب الكبير طيلة ثلاث سنوات متتالية.',
  },
  {
    id: 'na-cup',
    titleAr: 'كأس شمال إفريقيا',
    category: 'historical',
    categoryLabelAr: 'ألقاب التأسيس',
    count: 1,
    years: ['1949'],
    descriptionAr: 'تتويج ثنائي جمع بين البطولة والكأس المغاربية في موسم 1949.',
  },
];

export const HISTORY_ERAS: HistoryEra[] = [
  {
    period: '1937 – 1956',
    titleAr: 'التأسيس، وداد المقاومة وبزوغ أسطورة الأب جيكو',
    summaryAr:
      'انطلق نادي الوداد الرياضي في 8 ماي 1937 بفرع السباحة والماء بدعم من الحاج محمد بنجلون التويمي ليكون صوتاً رياضياً ووطنياً للمغاربة في زمن الحماية. وفي يونيو 1939 تأسس فرع كرة القدم تحت قيادة الأب جيكو، ليفرض الوداد هيمنته على بطولات المغرب وشمال إفريقيا ويحمل السجل رقم 1 في الجامعة الوطنية.',
    keyFiguresAr: 'محمد بنجلون التويمي · الأب جيكو · إدريس شتو · عبد السلام بنمحمد',
  },
  {
    period: '1957 – 1991',
    titleAr: 'ترسيخ الزعامة المحلية والانفتاح العربي',
    summaryAr:
      'واصلت القلعة الحمراء حصد درع الدوري المغربي وكؤوس العرش في الستينيات والسبعينيات والثمانينيات مع أجيال ذهبية صنعت مجد دونور، وصولاً إلى التتويج بالبطولة العربية للأندية سنة 1989 بمراكش.',
    keyFiguresAr: 'بتشوي · العربي أحرضان · بودربالة · فاخر الدين رجحي · الزاكي',
  },
  {
    period: '1992 – 2016',
    titleAr: 'الأميرة السمراء الأولى والأفرو-آسيوية',
    summaryAr:
      'سنة 1992 نقش الوداد اسمه بأحرف من ذهب على عرش القارة الإفريقية بالفوز بأول لقب لدوري الأبطال وكأس السوبر العربي ثم الكأس الأفرو-آسيوية 1993، تلاها كأس الكؤوس الإفريقية 2002 وعودة قوية لدرع البطولة 2006 و2010 و2015.',
    keyFiguresAr: 'رشيد الداودي · موسى نضاو · نادر المياغري · هشام اللويسي',
  },
  {
    period: '2017 – 2027',
    titleAr: 'عصر النجوم القارية الثلاث ومشروع التجديد',
    summaryAr:
      'تُوج الوداد باللقب القاري الثاني سنة 2017 ثم الثالث سنة 2022 مع السوبر الإفريقي 2018 ورفع رصيده القياسي إلى 22 بطولة وطنية. وفي موسم 2026–2027 يدخل الفريق بتركيبة تجمع الخبرة الدولية والمواهب الشابة للمنافسة على اللقب الوطني رقم 23.',
    keyFiguresAr: 'يحيى جبران · أشرف بنشرقي · وليد الكرتي · زهير المترجي · حكيم زياش',
  },
];

export interface AggregatedPlayerStat {
  player: Player;
  appearances: number;
  starts: number;
  minutesPlayed: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  avgRating: number;
  matchLogs: {
    matchId: string;
    roundLabelAr: string;
    opponentAr: string;
    scoreLabel: string;
    outcome: 'W' | 'D' | 'L';
    starter: boolean;
    minutes: number;
    rating: number;
    goals: number;
    assists: number;
    yellowCard: boolean;
  }[];
}

export function getAggregatedPlayerStats(): AggregatedPlayerStat[] {
  const playedMatches = SEASON_MATCHES.filter((m) => m.status === 'played');

  return SQUAD_PLAYERS.map((player) => {
    const matchLogs: AggregatedPlayerStat['matchLogs'] = [];
    let starts = 0;
    let minutesPlayed = 0;
    let goals = 0;
    let assists = 0;
    let yellowCards = 0;
    let redCards = 0;
    let ratingSum = 0;

    for (const match of playedMatches) {
      const perf = match.lineup?.find((p) => p.playerId === player.id);
      const opponentAr = match.isWydadHome ? match.awayTeamAr : match.homeTeamAr;
      const scoreLabel = match.isWydadHome
        ? `${match.wydadScore} - ${match.opponentScore}`
        : `${match.opponentScore} - ${match.wydadScore}`;

      if (perf) {
        if (perf.starter) starts += 1;
        minutesPlayed += perf.minutes;
        goals += perf.goals ?? 0;
        assists += perf.assists ?? 0;
        if (perf.yellowCard) yellowCards += 1;
        if (perf.redCard) redCards += 1;
        ratingSum += perf.rating;

        matchLogs.push({
          matchId: match.id,
          roundLabelAr: match.roundLabelAr,
          opponentAr,
          scoreLabel,
          outcome: match.outcome ?? 'D',
          starter: perf.starter,
          minutes: perf.minutes,
          rating: perf.rating,
          goals: perf.goals ?? 0,
          assists: perf.assists ?? 0,
          yellowCard: Boolean(perf.yellowCard),
        });
      }
    }

    const appearances = matchLogs.length;
    const avgRating = appearances > 0 ? Number((ratingSum / appearances).toFixed(2)) : 0;

    return {
      player,
      appearances,
      starts,
      minutesPlayed,
      goals,
      assists,
      yellowCards,
      redCards,
      avgRating,
      matchLogs,
    };
  });
}

export function getRatingTierLabel(rating: number): {
  labelAr: string;
  colorClass: string;
  bgClass: string;
} {
  if (rating >= 7.8) {
    return {
      labelAr: 'ممتاز',
      colorClass: 'text-emerald-800',
      bgClass: 'bg-emerald-100/80 border border-emerald-300/70',
    };
  }
  if (rating >= 7.1) {
    return {
      labelAr: 'جيد جداً',
      colorClass: 'text-teal-800',
      bgClass: 'bg-teal-50 border border-teal-200',
    };
  }
  if (rating >= 6.6) {
    return {
      labelAr: 'جيد',
      colorClass: 'text-amber-800',
      bgClass: 'bg-amber-50 border border-amber-200',
    };
  }
  if (rating > 0) {
    return {
      labelAr: 'متوسط',
      colorClass: 'text-stone-700',
      bgClass: 'bg-stone-100 border border-stone-200',
    };
  }
  return {
    labelAr: 'لم يشارك',
    colorClass: 'text-stone-500',
    bgClass: 'bg-stone-100 border border-stone-200',
  };
}
