import { Article, Comment } from '../types/news';

export const HERO_ARTICLE: Article = {
  id: 'saudi-yemeni-airports-strikes',
  section: 'Middle East',
  title: 'Saudi and Yemeni Airports Are Hit in New Round of Strikes',
  deck: 'At least one person was killed in the Saudi capital, Riyadh, kingdom authorities said. The Houthis said Saudi aircraft hit the Yemeni capital’s airport.',
  readTime: '3 MIN READ',
  authors: ['Cynthia Silva', 'Zach Wasser'],
  authorRoles: ['Reporting from Riyadh', 'Reporting from London'],
  publishDate: 'Oct. 11, 2026',
  location: 'Riyadh, Saudi Arabia',
  heroImage: '/src/assets/images/saudi_summit_strikes_1791785032246.jpg',
  heroImageCaption: 'Saudi Arabia hosted an energy summit on the same day the Saudi and Yemeni capitals were rocked by new strikes',
  heroImageCredit: 'Pool photo via Associated Press',
  isFree: true,
  commentCount: 142,
  keyTakeaways: [
    'Explosions reported at King Khalid International Airport near Riyadh; one casualty confirmed by civil defense authorities.',
    'Houthi military command claimed responsibility for a multi-drone barrage targeting military and petroleum infrastructure.',
    'Strikes unfolded concurrently with high-stakes international energy negotiations hosted in the Saudi capital.'
  ],
  pullQuote: {
    quote: 'The regional escalation underscores the fragility of diplomatic detentes when cross-border aerial capabilities remain active.',
    attribution: 'Dr. Tariq Al-Husseini, Gulf Security Institute'
  },
  bodyParagraphs: [
    'RIYADH, Saudi Arabia — A coordinated volley of cross-border drone strikes struck commercial and defense targets across the Arabian Peninsula on Monday, puncturing months of relative calm and roiling regional energy markets during an international conference in Riyadh.',
    'Saudi civil defense officials confirmed that shrapnel from an intercepted unmanned aerial vehicle fell across the perimeter of King Khalid International Airport, killing at least one maintenance technician and injuring three ground handlers. Commercial operations were halted for approximately ninety minutes as emergency crews cleared debris from the runway apron.',
    'Simultaneously, witnesses in Sana, the Yemeni capital controlled by the Houthi movement, reported retaliatory airstrikes directed against Sana International Airport and surrounding ammunition depots. The strikes sent towering columns of black smoke into the early morning sky, according to satellite imagery and local emergency responders.',
    'The attacks came at a delicate geopolitical juncture: Crown Prince Mohammed bin Salman was convening global ministers and petroleum executives at the Saudi Energy Forum to present multi-billion-dollar renewable transition contracts. Several international delegations hurried into secured briefings as alert sirens echoed in the northern diplomatic quarter.',
    'Western diplomats in Riyadh condemned the strikes, calling them a reckless escalation that threatens commercial aviation corridors and civilian transit hubs throughout the Persian Gulf. In Washington, the State Department urged both sides to show immediate restraint and return to United Nations-mediated de-escalation protocols.',
    'The strikes also highlight the ongoing vulnerability of critical infrastructure despite billions of dollars invested in integrated air and missile defense systems. Military analysts observed that swarm tactics utilizing low-altitude loitering munitions continue to present asymmetric challenges to conventional radar batteries.'
  ]
};

export const ANALYSIS_ARTICLE: Article = {
  id: 'saudi-arabia-has-few-options',
  section: 'Middle East',
  kicker: 'ANALYSIS',
  title: 'Saudi Arabia Has Few Options as Houthis Aim at Heart of Its Ambitions',
  deck: 'The kingdom has sought to insulate its Vision 2030 megaprojects from regional conflict, but recurrent aerial attacks illustrate how closely linked its economic transformation remains to Gulf security.',
  readTime: '6 MIN READ',
  authors: ['Vivian Nereim'],
  authorRoles: ['Riyadh Bureau Chief'],
  publishDate: 'Oct. 12, 2026',
  location: 'Riyadh, Saudi Arabia',
  heroImage: '/src/assets/images/saudi_summit_strikes_1791785032246.jpg',
  heroImageCaption: 'Crown Prince Mohammed bin Salman speaking on economic resilience at the capital auditorium.',
  heroImageCredit: 'The New York Times',
  isFree: true,
  commentCount: 88,
  keyTakeaways: [
    'Vision 2030 projects depend heavily on foreign capital and international talent retention.',
    'Direct military engagement in Yemen risks triggering wider regional retaliation against giga-projects like NEOM.',
    'Riyadh must balance deterrence against its overarching desire to present itself as a stable global trade destination.'
  ],
  pullQuote: {
    quote: 'You cannot build the tourist capital of the 21st century under the periodic shadow of intercepted loitering munitions.',
    attribution: 'Faisal J. Abbas, Regional Economic Review'
  },
  bodyParagraphs: [
    'For nearly a decade, the kingdom’s leadership has bet its future on an audacious premise: that Saudi Arabia could reshape itself into a global tourism, logistics, and tech magnet while insulating its domestic transformation from the chaotic conflicts surrounding its borders.',
    'Monday’s strikes against Riyadh’s airport provided a jarring reminder of how fragile that separation remains. As foreign investors sat in conference halls discussing semiconductor foundries and luxury resort archipelagos, air defense sirens served as an unwanted acoustic backdrop.',
    'Saudi planners find themselves caught in a strategic vise. A full-scale military campaign to eradicate drone launching facilities in northern Yemen would shatter the fragile truce that has allowed cross-border commerce to resume and would invite devastating counter-strikes on oil facilities.',
    'Yet doing nothing risks undermining the fundamental investor confidence that Crown Prince Mohammed bin Salman’s Vision 2030 requires. International executives and expatriate families who have flocked to Riyadh under lucrative incentives demand safety and uninterrupted air travel above all else.'
  ]
};

export const MORE_STORIES: Article[] = [
  {
    id: 'israeli-election-like-no-other',
    section: 'The World',
    kicker: 'THE WORLD',
    title: 'Catch Up on the News: An Israeli Election Like No Other',
    deck: 'Many say a vote in two weeks may be the most consequential in Israel’s history.',
    readTime: '5 MIN READ',
    authors: ['Patrick Kingsley'],
    authorRoles: ['Jerusalem Bureau Chief'],
    publishDate: 'Oct. 12, 2026',
    location: 'Jerusalem',
    heroImage: '/src/assets/images/israeli_election_voting_1791785043605.jpg',
    heroImageCaption: 'A voter casts her ballot in a Jerusalem precinct as campaigns enter their final fortnight.',
    heroImageCredit: 'Ohad Zwigenberg/Associated Press',
    badge: 'The World',
    isFree: true,
    commentCount: 54,
    bodyParagraphs: [
      'JERUSALEM — With two weeks remaining before Israeli voters head to polling stations, campaign discourse has shifted from familiar ideological disputes to an existential reckoning over the structure of the state itself.',
      'The contest brings into sharp relief deep generational and demographic divisions over judicial power, religion in civic life, and long-term security architecture in the West Bank and Gaza.',
      'Pollsters report unprecedented numbers of undecided voters across suburban battlegrounds, with political analysts describing the ballot as a defining crossroads that could reverberate across regional diplomatic pacts for decades.'
    ]
  },
  {
    id: 'taliban-using-europe-fear-migrants',
    section: 'The World',
    title: 'The Taliban Are Using Europe’s Fear of Migrants to Their Advantage',
    deck: 'European nations that condemn the Taliban government for its human rights record are seeking its help to deport refugees back to Afghanistan.',
    readTime: '6 MIN READ',
    authors: ['Christina Goldbaum'],
    authorRoles: ['Kabul Correspondent'],
    publishDate: 'Oct. 12, 2026',
    location: 'Kabul, Afghanistan',
    heroImage: '/src/assets/images/afghanistan_deportation_1791785056707.jpg',
    heroImageCaption: 'Returnees at the Torkham border crossing between Pakistan and eastern Afghanistan.',
    heroImageCredit: 'Tomas Munita for The New York Times',
    isFree: true,
    commentCount: 39,
    bodyParagraphs: [
      'KABUL, Afghanistan — Western European governments that spent years withholding formal recognition from the Taliban administration are quietly opening back-channel negotiations to facilitate the forced return of rejected asylum seekers.',
      'The transactional diplomacy has handed Taliban leaders an unexpected lever of influence. In exchange for accepting repatriation flights, officials in Kabul have pressed for consular access in European capitals, loosened banking restrictions, and humanitarian assistance packages.',
      'Human rights advocates warn that returnees face heightened jeopardy upon their arrival, particularly former military personnel, journalists, and women activists who fled during the collapse of the previous republic.'
    ]
  },
  {
    id: 'wilderness-adventure-epic-dogs',
    section: 'The Great Read',
    kicker: 'THE GREAT READ',
    title: 'He Went Out on an Epic Wilderness Adventure. Only His Dogs Came Back.',
    deck: 'For three years and 750 miles, Steffen Skjottelvik lived a life of adventure. Until the adventure took his life.',
    readTime: '14 MIN READ',
    authors: ['Dan Barry'],
    authorRoles: ['Special Features Writer'],
    publishDate: 'Oct. 12, 2026',
    location: 'Tromsø, Norway',
    heroImage: '/src/assets/images/arctic_wilderness_dogs_1791785067590.jpg',
    heroImageCaption: 'Steffen Skjottelvik on his solo epic snowy wilderness trek across the Nordic arctic mountains.',
    heroImageCredit: 'Steffen Skjottelvik / Archive',
    badge: 'The Great Read',
    isFree: true,
    commentCount: 92,
    bodyParagraphs: [
      'The winter storms above the Arctic Circle have a way of erasing names, trails, and memories within hours of a squall.',
      'When Steffen Skjottelvik stepped onto the high plateau of the Scandinavian interior in the late autumn of 2023, he brought six Greenland huskies, a wooden freight sled built with his own hands, and an unquenchable desire to outrun the clamor of modernity.',
      'For more than a thousand days, his handwritten journals chronicled a solitary communion with frozen glaciers, migrating reindeer herds, and the blinding beauty of the aurora borealis. But when his pack of dogs walked into an isolated logging depot last month without their master, a silent tragedy was laid bare.',
      'Search-and-rescue teams who retraced his final miles found not evidence of folly, but the enduring record of a man who chose deliberately how he wished to meet the world.'
    ]
  }
];

export const ALL_ARTICLES: Article[] = [
  HERO_ARTICLE,
  ANALYSIS_ARTICLE,
  ...MORE_STORIES
];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'Eleanor Vance',
    location: 'Boston, MA',
    timestamp: '2 hours ago',
    content: 'This election is shaping up to be unlike anything we have observed in the last thirty years. The coalition mathematics are tighter than ever, and voter fatigue is being countered by genuine anxiety over the judicial system.',
    recommendations: 148,
    isNytPick: true
  },
  {
    id: 'c2',
    author: 'Avi Ben-David',
    location: 'Tel Aviv',
    timestamp: '3 hours ago',
    content: 'Living here, you can feel the tension in every café and market. People are not just voting for candidates; they feel they are voting on what kind of society our children will inherit. Thank you for this balanced coverage.',
    recommendations: 93,
    isNytPick: true
  },
  {
    id: 'c3',
    author: 'Marcus Aurelius K.',
    location: 'Chicago, IL',
    timestamp: '4 hours ago',
    content: 'The reporting correctly highlights how high the stakes are for regional diplomacy. If the moderate wing cannot build a durable governing coalition, the entire Abraham Accords framework could be tested in ways Washington is unprepared for.',
    recommendations: 64,
    isNytPick: false
  },
  {
    id: 'c4',
    author: 'Sarah Jenkins',
    location: 'Oxford, UK',
    timestamp: '5 hours ago',
    content: 'What strikes me is the demographic shift among first-time voters under 25. Their priorities seem markedly different from the traditional political establishment.',
    recommendations: 41,
    isNytPick: false
  }
];

export const SECTIONS_LIST = [
  { id: 'world', name: 'World', count: 48 },
  { id: 'us', name: 'U.S.', count: 62 },
  { id: 'politics', name: 'Politics', count: 35 },
  { id: 'business', name: 'Business', count: 41 },
  { id: 'tech', name: 'Technology', count: 29 },
  { id: 'science', name: 'Science', count: 18 },
  { id: 'health', name: 'Health', count: 22 },
  { id: 'sports', name: 'Sports', count: 31 },
  { id: 'arts', name: 'Arts & Culture', count: 27 },
  { id: 'books', name: 'Books', count: 15 },
  { id: 'style', name: 'Style', count: 19 },
  { id: 'food', name: 'Food & Cooking', count: 33 },
  { id: 'travel', name: 'Travel', count: 14 },
  { id: 'magazine', name: 'The Magazine', count: 12 },
  { id: 'opinion', name: 'Opinion & Editorial', count: 24 }
];
