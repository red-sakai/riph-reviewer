export type QuestionType = "multiple-choice" | "identification" | "true-false"

export interface BaseQuestion {
  id: number
  type: QuestionType
  question: string
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice"
  choices: string[]
  answer: string
}

export interface IdentificationQuestion extends BaseQuestion {
  type: "identification"
  answer: string
}

export interface TrueFalseQuestion {
  id: number
  type: "true-false"
  statement: string
  isCorrect: boolean
  correctTerm?: string
}

export type Question = MultipleChoiceQuestion | IdentificationQuestion | TrueFalseQuestion

export interface Section<T extends Question = Question> {
  title: string
  subtitle: string
  instructions: string
  points: number
  questions: T[]
}

export const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Sa mga sumusunod, tukuyin kung saang lalawigan ipinagdiriwang ang Moriones Festival?",
    choices: ["Quezon", "Cavite", "Pangasinan", "Marinduque"],
    answer: "Marinduque",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Kailan opisyal na itinatag ang Polytechnic University of the Philippines (na nagsimula bilang Manila Business School)?",
    choices: ["Oktubre 19, 1904", "Oktubre 25, 1904", "Oktubre 1, 1904", "Oktubre 5, 1904"],
    answer: "Oktubre 19, 1904",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Sa labindalawang catolonan o babaylan na naitala sa Customs of the Tagalogs, sino ang may kakayahang makasilip sa tabing ng hinaharap?",
    choices: ["Mancocolam", "Silagan", "Pangatahojan", "Sonat"],
    answer: "Pangatahojan",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Aling uri ng catolonan ang may kakayahang makapatay ng kanilang nanaisin sa pamamagitan lamang ng pagtaas o pagpapakita ng kanilang kamay?",
    choices: ["Mancocolam", "Mangangauay", "Silagan", "Hocloban"],
    answer: "Hocloban",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Aling uri ng catolonan o babaylan ang may kakayahang lumipad at pumapatay ng mga kalalakihan?",
    choices: ["Silagan", "Bayoguin", "Manyisalat", "Osuang"],
    answer: "Bayoguin",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Ito ang sistema ng sapilitang pagbili at monopolyo ng pamahalaang Espanyol sa mga pananim at produkto ng mga Indio.",
    choices: ["Polo y servicio", "Cedula", "Bandala", "Encomienda"],
    answer: "Bandala",
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "Batay sa Laguna Copperplate Inscription, isinasaad dito ang kapatawaran sa utang ng isang nagngangalang:",
    choices: ["Kilyawan", "Namwaran", "Buwaran", "Bukaran"],
    answer: "Namwaran",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Sa panahong kolonyal, alin ang itinuturing na pinakamataas na antas ng tao sa lipunang pinatatakbo ng mga Espanyol?",
    choices: ["Peninsulares", "Insulares", "Encomiendero", "Haciendero"],
    answer: "Peninsulares",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Batay sa Customs of the Tagalogs, anong ibon ang pinaniniwalaan ng mga katutubo na nagbabadya ng kamalasan o suwerte depende sa direksyon ng lipad nito?",
    choices: ["Sigmamanuguin", "Tigmamanuguin", "Manuguin", "Sigmanuguin"],
    answer: "Tigmamanuguin",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: 'Anong salita mula sa tala ni Pigafetta ang may kasingkahulugan ng "kapatid" o "brother" na naging turing ng isang Rajah sa Kabisayaan kay Magellan?',
    choices: ["Casi-casi", "Comrade", "Chita", "Areca"],
    answer: "Casi-casi",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: "Sino ang opisyal na kinikilala bilang Ikalawang Pangulo ng Pilipinas (Unang Pangulo ng Komonwelt)?",
    choices: ["Manuel Roxas", "Jose P. Laurel", "Elpidio Quirino", "Manuel L. Quezon"],
    answer: "Manuel L. Quezon",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Ano ang tawag sa dokumento o papel na nagpapatunay na nakapagbayad na ang isang natibo ng kaniyang tributo o buwis?",
    choices: ["Polo y servicio", "Cedula", "Bandala", "Encomienda"],
    answer: "Cedula",
  },
  {
    id: 13,
    type: "multiple-choice",
    question: 'Sino sa mga sumusunod na tanyag na Ilustrado at kauna-unahang pandaigdigang artistang Pilipino ang nagpinta ng kilalang "Spoliarium"?',
    choices: ["Marcelo H. del Pilar", "Felix Resurreccion Hidalgo", "Juan Luna", "Fernando Amorsolo"],
    answer: "Juan Luna",
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Sino ang pinuno ng paksyong Magdalo sa ilalim ng rebolusyonaryong hukbo ng Cavite?",
    choices: ["Mariano Alvarez", "Baldomero Aguinaldo", "Procopio Bonifacio", "Andres Bonifacio"],
    answer: "Baldomero Aguinaldo",
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "Ano ang tamang pagkakasunod-sunod ng antas ng tao sa lipunan (mula sa pinakamataas hanggang pinakamababa) sa panahong pre-kolonyal?",
    choices: [
      "Maguinoo/Datu — Maharlika — Alipin",
      "Maguinoo/Datu — Alipin — Maharlika",
      "Maharlika — Maguinoo/Datu — Alipin",
    ],
    answer: "Maguinoo/Datu — Maharlika — Alipin",
  },
  {
    id: 16,
    type: "multiple-choice",
    question: "Sino ang naging Heneral o kapitan na nag-uwi ng barkong Victoria pabalik ng Espanya mula sa natitirang Armada de Molucca?",
    choices: ["Duarte Barbosa", "Pedro Valderrama", "Juan Luna", "Juan Sebastian Elcano"],
    answer: "Juan Sebastian Elcano",
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Saang lalawigan nakakita ang mga tauhan ni Magellan ng maraming hayop tulad ng mga aso at ibon ayon sa tala ng kanilang tagapagsalaysay?",
    choices: ["Cebu", "Butuan", "Samar", "Bohol"],
    answer: "Samar",
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Ano ang opisyal na pahayagan ng Katipunan na nagpalaganap ng mga ideya ng rebolusyon?",
    choices: ["La Solidaridad", "La Independencia", "Kalayaan", "El Amor Patrio"],
    answer: "Kalayaan",
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Sino ang Katipunero na nagsiwalat ng mga lihim ng Katipunan sa kaniyang kapatid na naging dahilan ng pagkakadiskubre nito ng mga Espanyol?",
    choices: ["Pedro Pelaez", "Pedro Paterno", "Pedro Valderrama", "Pedro Patiño"],
    answer: "Pedro Patiño",
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Aling barko ng armada ni Magellan ang tanging nakabalik sa Espanya at naging kauna-unahang sasakyang-pandagat na nakaikot sa buong mundo?",
    choices: ["Victoria", "Concepcion", "Trinidad", "San Antonio"],
    answer: "Victoria",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Ano ang nakitang nginunguya ng mga katutubo sa Visayas ayon kay Pigafetta na naging dahilan ng pagka-pula o pagka-dilaw ng kanilang mga ngipin?",
    choices: ["Buyo", "Areca", "Tabako", "Wala sa nabanggit"],
    answer: "Areca",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Kung mag-aasawa ang isang maharlika at isang alipin sa panahong pre-kolonyal, kanino mapupunta ang katayuan ng unang anak?",
    choices: ["Ama", "Ina", "Kapatid na lalaki", "Kapatid na babae"],
    answer: "Ama",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Ang mga sumusunod ay mga katutubong tawag sa dote o kaloob na ibinibigay sa pamilya ng babae bago ang kasal MALIBAN sa:",
    choices: ["Bigay-kaya", "Bigay-suso", "Panghimuyat", "Pasunod"],
    answer: "Pasunod",
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Ano ang tawag sa kalakalang pandagat sa pagitan ng Maynila at Acapulco na nagtagal mula 1565 hanggang 1815?",
    choices: ["Kalakalang Galyon", "Kalakalan ng Pampalasa", "Kalakalan ng Tela", "Kalakalang Silk Road"],
    answer: "Kalakalang Galyon",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Sila ang mga paring Pilipino, Mestiso, o sekular na walang kinabibilangang relihiyosong orden noong panahon ng Espanyol.",
    choices: ["Paring Regular", "Paring Sekular", "Gomburza", "Cuerpo de Compromisarios"],
    answer: "Paring Sekular",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Sino ang naging utak ng pagtutol sa pagkahalal kay Andres Bonifacio bilang Direktor ng Interyor sa Tejeros Convention?",
    choices: ["Pedro Pelaez", "Pedro Paterno", "Daniel Tirona", "Pedro Patiño"],
    answer: "Daniel Tirona",
  },
  {
    id: 27,
    type: "multiple-choice",
    question: "Saang lalawigan unang nakita ng tagapagsalaysay ni Magellan ang kultura ng pagsasabong ng mga malalaking manok?",
    choices: ["Cebu", "Palawan", "Butuan", "Bohol"],
    answer: "Palawan",
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Sino ang Gobernador-Heneral na nag-alis ng mga pribilehiyo ng mga manggagawa sa Cavite Arsenal na siyang nagmitsa ng Cavite Mutiny noong 1872?",
    choices: ["Carlos Maria de la Torre", "Camilo de Polavieja", "Rafael Izquierdo", "Eulogio Despujol"],
    answer: "Rafael Izquierdo",
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Ano ang tawag sa katitikang pinirmahan ni Andres Bonifacio na nagpapahayag ng pagtanggi at pagpapawalang-bisa sa magulong halalan sa Tejeros?",
    choices: ["Acta de Malabon", "Acta de Tejeros", "Acta de Magdalo", "Acta de Magdiwang"],
    answer: "Acta de Tejeros",
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Ano ang tawag sa patakaran ng mga Espanyol kung saan pinagsasama-sama o pinamamalagi ang mga katutubo sa isang pueblo sa ilalim ng tunog ng kampana ng simbahan?",
    choices: ["Resurreccion", "Redunsion", "Reduccion", "Remonte"],
    answer: "Reduccion",
  },
  {
    id: 31,
    type: "multiple-choice",
    question: "Sa anong relihiyosong orden ng mga prayle kabilang si Fray Juan de Plasencia?",
    choices: ["Fransiskano", "Heswita", "Rekoleto", "Agustiniano"],
    answer: "Fransiskano",
  },
  {
    id: 32,
    type: "multiple-choice",
    question: "Sino ang historyador na sumulat ng kasaysayan ng Cavite Mutiny gamit ang opisyal na bersyon at perspektiba ng pamahalaang Espanyol?",
    choices: ["T.H. Pardo de Tavera", "Jose Montero y Vidal", "Bricio Pantas", "Rafael Izquierdo"],
    answer: "Jose Montero y Vidal",
  },
  {
    id: 33,
    type: "multiple-choice",
    question: "Sino ang itinuturing na liberal na Gobernador-Heneral ng Pilipinas na nagbigay ng mas malawak na pribilehiyo at kalayaan sa mga manggagawa at mamamayan?",
    choices: ["Ramon Blanco", "Carlos Maria de la Torre", "Camilo de Polavieja", "Rafael Izquierdo"],
    answer: "Carlos Maria de la Torre",
  },
  {
    id: 34,
    type: "multiple-choice",
    question: "Maliban sa Katipunan, anong grupo ng mga repormista ang nabuo mula sa mga labi ng nabuwag na La Liga Filipina?",
    choices: ["Cuerpo de Vigilancia", "Hijos del Paid", "La Liga Filipina", "Cuerpo de Compromisarios"],
    answer: "Cuerpo de Compromisarios",
  },
  {
    id: 35,
    type: "multiple-choice",
    question: "Sino ang tinuturing na pinunong militar ng mga nag-alsa sa Cavite Arsenal noong 1872?",
    choices: ["Edmund Plauchut", "Sergeant La Madrid", "Trinidad Pardo de Tavera", "Rafael de Izquierdo"],
    answer: "Sergeant La Madrid",
  },
  {
    id: 36,
    type: "multiple-choice",
    question: "Sino ang paring Pranses na naglahad ng pananaw na ang Cavite Mutiny ay pinalaki lamang ng mga prayle at pamahalaang Espanyol upang idawit ang mga paring Pilipino?",
    choices: ["Edmund Plauchut", "Jose Montero y Vidal", "Vicente Balaguer", "Antonio Obach"],
    answer: "Edmund Plauchut",
  },
  {
    id: 37,
    type: "multiple-choice",
    question: "Sino ang Heswitang pari na tumangging ikasal si Jose Rizal kay Josephine Bracken sa Dapitan hangga't hindi ito lumalagda sa retraksyon?",
    choices: ["Vicente Balaguer", "Antonio Obach", "Manuel Garcia", "Ricardo Pascual"],
    answer: "Antonio Obach",
  },
  {
    id: 38,
    type: "multiple-choice",
    question: 'Aling lugar ang naging opisyal na kinilala ng pamahalaan ng Pilipinas noong administrasyon ni Diosdado Macapagal bilang pook ng "Unang Sigaw"?',
    choices: ["Balintawak", "Pugad Lawin", "Bahay Toro", "Kangkong"],
    answer: "Pugad Lawin",
  },
  {
    id: 39,
    type: "multiple-choice",
    question: "Anong batas noong panahon ng mga Amerikano ang nagbawal sa pagpapakita o paglaladlad ng watawat ng Pilipinas?",
    choices: ["Jones Law", "Flag Law", "Sedition Law", "Brigandage Act"],
    answer: "Flag Law",
  },
  {
    id: 40,
    type: "multiple-choice",
    question: "Anong batas ang ipinasa ng Kongreso ng Amerika noong 1916 na nagako ng kalayaan sa Pilipinas kapag mayroon na itong matatag na pamahalaan?",
    choices: ["Jones Law", "Cooper Act", "Tydings-McDuffie Law", "Spooner Amendment"],
    answer: "Jones Law",
  },
]

export const identificationQuestions: IdentificationQuestion[] = [
  {
    id: 1,
    type: "identification",
    question: "Uri ng kritisismo sa kasaysayan na sumusuri sa pisikal na anyo, papel, tinta, panahon, at authenticity ng isang historikal na dokumento.",
    answer: "Panlabas na kritisismo",
  },
  {
    id: 2,
    type: "identification",
    question: "Uri ng kritisismo na sumusuri sa katotohanan, kredibilidad, at tunay na kahulugan ng nilalaman ng isang sulat o dokumento.",
    answer: "Panloob na kritisismo",
  },
  {
    id: 3,
    type: "identification",
    question: "Ayon kay Plasencia, ito ang espiritu ng isang ina na namatay sa panganganak na naririnig na umiiyak sa gabi upang magdulot ng kaparusahan o takot.",
    answer: "Patianac",
  },
  {
    id: 4,
    type: "identification",
    question: "Ang itinawag ng pangkat ni Magellan sa pulo ng Guam dahil sa kinuha ng mga katutubo ang kanilang mga maliliit na bangka.",
    answer: "Isla de los Ladrones",
  },
  {
    id: 5,
    type: "identification",
    question: "Ang opisyal o koronel na nanguna sa pangkat na umaresto at humuli kay Andres Bonifacio sa Limbon, Indang sa utos ni Emilio Aguinaldo.",
    answer: "Agapito Bonzon",
  },
  {
    id: 6,
    type: "identification",
    question: "Ang paring Pransiskano na sumulat ng sikat na ulat tungkol sa kultura, relihiyon, at batas ng mga sinaunang Pilipino na may pamagat na Customs of the Tagalogs.",
    answer: "Juan de Plasencia",
  },
  {
    id: 7,
    type: "identification",
    question: 'Ang tinaguriang "Walled City" na nagsilbing sentro ng pulitika, relihiyon, at pamahalaan ng mga Espanyol sa Maynila.',
    answer: "Intramuros",
  },
  {
    id: 8,
    type: "identification",
    question: "Ang katutubong tawag sa mga sekundaryang asawa o concubines ng isang Datu o makapangyarihang lalaki sa lipunang pre-kolonyal.",
    answer: "Inasawa",
  },
  {
    id: 9,
    type: "identification",
    question: "Ang eksaktong anyong-tubig o ilog sa Laguna kung saan aksidenteng natagpuan ang tanyag na Laguna Copperplate Inscription.",
    answer: "Ilog Lumban",
  },
  {
    id: 10,
    type: "identification",
    question: "Ang tawag sa mga materyal o pisikal na bagay na ginawa at ginamit ng mga sinaunang tao na nagsisilbing direktang ebidensya ng kanilang kultura.",
    answer: "Artifact",
  },
  {
    id: 11,
    type: "identification",
    question: "Ang samahang sibiko na itinatag ni Dr. Jose Rizal noong Hulyo 3, 1892 sa Tondo, Maynila na naglalayong pag-isahin ang kapuluan.",
    answer: "La Liga Filipina",
  },
  {
    id: 12,
    type: "identification",
    question: "Ang partikular na tawag sa mga mamamayang Pilipino noong panahon ng Espanyol na may halong dugong Tsino.",
    answer: "Mestiso de Sangley",
  },
  {
    id: 13,
    type: "identification",
    question: "Ang Italyanong iskolar at taga-tala na sumulat ng pinakakumpletong kronika ng ekspedisyon ni Ferdinand Magellan sa buong mundo.",
    answer: "Antonio Pigafetta",
  },
  {
    id: 14,
    type: "identification",
    question: "Ang patakaran ng sapilitang paggawa para sa mga kalalakihang may edad 16 hanggang 60 sa loob ng 40 araw bawat taon.",
    answer: "Polo y servicio",
  },
  {
    id: 15,
    type: "identification",
    question: "Ang unang akda o mga alituntunin na isinulat ni Andres Bonifacio na naglalaman ng mga tungkulin ng mga kasapi ng Katipunan bago gamitin ang Kartilya.",
    answer: "Decalogo",
  },
  {
    id: 16,
    type: "identification",
    question: "Ang pinuno ng Cebu na naging kaalyado ni Magellan at humingi ng tulong nito upang supilin ang kaniyang kaaway sa kalapit na pulo ng Mactan.",
    answer: "Rajah Humabon",
  },
  {
    id: 17,
    type: "identification",
    question: "Ang daungan sa Amerika kung saan dinadala at ipinagpapalit ang mga kalakal mula sa Maynila sa pamamagitan ng Galyon.",
    answer: "Acapulco",
  },
  {
    id: 18,
    type: "identification",
    question: "Ang hukumang militar o lupon ng mga rebolusyonaryong opisyal na naglitis at nagpataw ng parusang kamatayan sa magkapatid na Bonifacio.",
    answer: "Konseho ng Digmaan",
  },
  {
    id: 19,
    type: "identification",
    question: "Ang pangalan ng dakilang diyos o maylikha na sinasamba ng mga katutubo sa Visayas batay sa mga isinulat na tala ni Antonio Pigafetta.",
    answer: "Abba",
  },
  {
    id: 20,
    type: "identification",
    question: "Ang natatanging kapatid na lalaki ni Jose Rizal na naging mag-aaral at malapit na tagasunod ng binitay na paring si Jose Burgos.",
    answer: "Paciano Rizal",
  },
  {
    id: 21,
    type: "identification",
    question: "Ayon kay Plasencia, ito ang uri ng katutubong manggagamot na kilala sa pagkukunwari na nagpapagaling ng mga may sakit sa pamamagitan ng mga ritwal.",
    answer: "Manyisalat",
  },
  {
    id: 22,
    type: "identification",
    question: "Ang bayani ng Cavite na itinalaga ni Aguinaldo bilang pinuno ng pamahalaang bayan sa Imus matapos ang kanilang tagumpay sa labanan.",
    answer: "Jose Tagle",
  },
  {
    id: 23,
    type: "identification",
    question: "Ang pangkalahatang buwis sa anyo ng pera o produkto na sinisingil ng mga Espanyol sa mga katutubo bilang tanda ng pagpapasakop.",
    answer: "Tributo",
  },
  {
    id: 24,
    type: "identification",
    question: "Ang paring Pilipino na nagpatuloy ng pamumuno sa Kilusang Sekularisasyon matapos ang biglaang pagkamatay ni Padre Pedro Pelaez.",
    answer: "Jose Burgos",
  },
  {
    id: 25,
    type: "identification",
    question: 'Ang tinaguriang "Utak ng Katipunan" na gumamit ng sagisag-panulat na "Pingkian" at sumulat ng Kartilya ng Katipunan.',
    answer: "Emilio Jacinto",
  },
  {
    id: 26,
    type: "identification",
    question: "Ang taong diumano'y binayaran ng mga prayleng Espanyol upang kopyahin at palsipikahin ang sulat-kamay ni Rizal sa dokumento ng retraksyon.",
    answer: "Roman Roque",
  },
  {
    id: 27,
    type: "identification",
    question: "Ang paring Heswita na siyang pangunahing naglahad ng salaysay na nagkaroon ng opisyal na retraksyon si Jose Rizal bago ito barilin.",
    answer: "Vicente Balaguer",
  },
  {
    id: 28,
    type: "identification",
    question: "Ang iskolar at manunuri na nagsagawa ng mabusising pag-aaral sa dokumento ng retraksyon at nagpatunay na ito ay isang palsipikadong sulat.",
    answer: "Ricardo Pascual",
  },
  {
    id: 29,
    type: "identification",
    question: "Ang paring Katoliko na nakatuklas muli sa nawawalang dokumento ng retraksyon ni Jose Rizal sa loob ng artsibo ng Arsobispo noong 1935.",
    answer: "Manuel Garcia",
  },
  {
    id: 30,
    type: "identification",
    question: "Ang opisyal at kasapi ng Katipunan na naging pangunahing saksi sa pagpunit ng sedula, bagamat nagkaroon ng paiba-ibang bersyon sa petsa at lugar ng Unang Sigaw.",
    answer: "Pio Valenzuela",
  },
  {
    id: 31,
    type: "identification",
    question: "Ang modernong historyador na bumatikos sa mga konklusyon ni Teodoro Agoncillo ukol sa pagpili sa Pugad Lawin bilang pook ng Unang Sigaw.",
    answer: "Teodoro Agoncillo",
  },
  {
    id: 32,
    type: "identification",
    question: "Ang kilalang nasyonalistang historyador at kritiko na nagpahayag na ang Benevolent Assimilation ng Estados Unidos ay isang uri lamang ng imperyalismo.",
    answer: "Renato Constantino",
  },
  {
    id: 33,
    type: "identification",
    question: "Ang tanyag na lingguhang pahayagang Pilipino noong panahon ng Amerikano na kilala sa paglalathala ng mga satrikal na political cartoons.",
    answer: "Lipang Kalabaw",
  },
  {
    id: 34,
    type: "identification",
    question: "Ang patakarang ipinatupad ng mga Amerikano na naglalayong unti-unting palitan ng mga kuwalipikadong Pilipino ang mga Amerikanong opisyal sa gobyerno.",
    answer: "Filipinization",
  },
  {
    id: 35,
    type: "identification",
    question: "Ang sistema ng pagpaparehistro ng lupa na ipinakilala ng mga Amerikano upang magbigay ng opisyal at garantisadong titulo sa mga ari-arian.",
    answer: "Torrens System",
  },
  {
    id: 36,
    type: "identification",
    question: "Ang terminong pampulitika na tumutukoy sa pinakamataas at lubos na kapangyarihan ng isang estado na mamahala sa kaniyang sarili at teritoryo.",
    answer: "Soberanya",
  },
  {
    id: 37,
    type: "identification",
    question: "Ang katutubong diyos o diyosa na sinasamba ng mga sinaunang Tagalog bilang patron ng mabubuting ani at mayabong na lupain.",
    answer: "Lacapati",
  },
  {
    id: 38,
    type: "identification",
    question: "Ang malaki at tradisyunal na sasakyang-pandagat ng mga katutubo na naging batayan ng pangalan ng pinakamaliit na yunit ng pamahalaan sa bansa.",
    answer: "Balanghay",
  },
  {
    id: 39,
    type: "identification",
    question: "Ang ginagamit na yunit ng pananalapi o multa ng mga katutubo kapag ang isang pamilya ay lumabag sa batas ng barangay (lumipat nang walang paalam).",
    answer: "Tael ng ginto",
  },
  {
    id: 40,
    type: "identification",
    question: "Ang pinuno ng mga rebeldeng sundalo at manggagawa na nag-alsa sa loob ng Cavite Arsenal noong gabi ng Enero 20, 1872.",
    answer: "Sergeant La Madrid",
  },
]

export const trueFalseQuestions: TrueFalseQuestion[] = [
  {
    id: 1,
    type: "true-false",
    statement: "Ang mga Insulares ay purong Espanyol na ipinanganak sa Pilipinas, habang ang Peninsulares naman ay mga Espanyol na ipinanganak sa mismong Espanya.",
    isCorrect: true,
  },
  {
    id: 2,
    type: "true-false",
    statement: "Ang Kartilya ng Katipunan na isinulat ni Emilio Jacinto ay binubuo ng 14 na prinsipyo.",
    isCorrect: false,
    correctTerm: "13 na prinsipyo",
  },
  {
    id: 3,
    type: "true-false",
    statement: "Ang disenyo na makikita sa itaas na bahagi ng sikat na Manunggul Jar ay animo'y mga galamay ng ahas na kumakatawan sa parusa ng kaluluwa.",
    isCorrect: false,
    correctTerm: "kaluluwa",
  },
  {
    id: 4,
    type: "true-false",
    statement: "Ang mga Ilustrado ay mga Pilipinong nakapag-aral sa Europa na karamihan ay nagmula sa mayayamang lahi ng mga mestiso.",
    isCorrect: true,
  },
  {
    id: 5,
    type: "true-false",
    statement: "Ayon sa ulat ni Fray Juan de Plasencia, ang isang barangay sa Katagalugan ay binubuo ng malaking komunidad na may 20,000 hanggang 30,000 katao.",
    isCorrect: false,
    correctTerm: "30,000",
  },
  {
    id: 6,
    type: "true-false",
    statement: "Ang Maca ang katawagan ng mga sinaunang Tagalog sa kanilang bersyon ng paraiso para sa mga kaluluwa ng mga namatay na mabubuti.",
    isCorrect: true,
  },
  {
    id: 7,
    type: "true-false",
    statement: "Ang makasaysayang paglalakbay ng armada ni Ferdinand Magellan at Juan Sebastian Elcano ay nagtagal sa loob ng tatlong taon.",
    isCorrect: true,
  },
  {
    id: 8,
    type: "true-false",
    statement: "Sa ilalim ng pamumuno ni Gobernador-Heneral Camilo de Polavieja, inilagay ang unang walong lalawigan sa ilalim ng batas militar noong rebolusyon ng 1896.",
    isCorrect: false,
    correctTerm: "Camilo de Polavieja",
  },
  {
    id: 9,
    type: "true-false",
    statement: "Ang pangunahing layunin ng ekspedisyon ni Magellan pakanluran ay upang patunayan na bilog ang mundo.",
    isCorrect: false,
    correctTerm: "bilog ang mundo",
  },
  {
    id: 10,
    type: "true-false",
    statement: "Si Pio Valenzuela ang opisyal na ipinadala ng Katipunan sa Dapitan upang ihayag kay Jose Rizal ang rebolusyonaryong plano ng samahan.",
    isCorrect: true,
  },
  {
    id: 11,
    type: "true-false",
    statement: "Ang samahang sibiko na itinatag ni Dr. Jose Rizal noong Hulyo 1892 upang magkaisa ang mga Pilipino ay ang La Solidaridad.",
    isCorrect: false,
    correctTerm: "La Solidaridad",
  },
  {
    id: 12,
    type: "true-false",
    statement: "Si Enrique ng Malacca ang naging tapat na alipin at pangunahing tagasalin ng wika nina Magellan sa kanilang pakikipag-usap sa mga katutubo sa Pilipinas.",
    isCorrect: true,
  },
  {
    id: 13,
    type: "true-false",
    statement: "Ayon sa tradisyon ng mga Tagalog, ang isang pamilya na lumipat ng ibang barangay nang walang pahintulot ay kailangang magbayad ng multa na nagkakahalaga ng 5 hanggang 7 tael ng ginto.",
    isCorrect: true,
  },
  {
    id: 14,
    type: "true-false",
    statement: "Ang kataas-taasang diyos at tagalikha ng mga sinaunang Tagalog ay kilala sa tawag na Bathala.",
    isCorrect: true,
  },
  {
    id: 15,
    type: "true-false",
    statement: "Sa lalawigan ng Catanduanes, ang nilalang sa gabi na lumilipad na hiwalay ang kalahating katawan ay tinatawag nilang Osuang.",
    isCorrect: true,
  },
  {
    id: 16,
    type: "true-false",
    statement: "Ang pagturing at mga karapatan sa mga alipin, maging namamahay man o saguiguilir, ay pantay at legal ayon sa sinaunang batas ng mga Tagalog.",
    isCorrect: false,
    correctTerm: "alipin",
  },
  {
    id: 17,
    type: "true-false",
    statement: "Si Miguel Lopez de Legazpi ang opisyal na kinikilala bilang kauna-unahang Gobernador-Heneral ng Pilipinas sa ilalim ng Espanya.",
    isCorrect: true,
  },
  {
    id: 18,
    type: "true-false",
    statement: "Ang opisyal na dokumento ng pagbawi ni Rizal sa kaniyang mga sinulat laban sa simbahan ay tinatawag sa kasaysayan bilang retraksyon.",
    isCorrect: true,
  },
  {
    id: 19,
    type: "true-false",
    statement: "Ang simbolikong simula ng himagsikan ng mga Katipunero laban sa pamahalaang Espanyol ay tinatawag na Unang Sigaw.",
    isCorrect: true,
  },
  {
    id: 20,
    type: "true-false",
    statement: "Ang pangunahing layunin ng Patakarang Benevolent Assimilation ng Estados Unidos ay ang marahas na pagsakop sa kapuluan ng Pilipinas nang walang pakundangan.",
    isCorrect: false,
    correctTerm: "marahas na pagsakop",
  },
]

export const sections: Section[] = [
  {
    title: "PART I",
    subtitle: "MULTIPLE CHOICE",
    instructions: "Panuto: Basahin at unawain ang bawat tanong. Piliin ang titik ng tamang sagot.",
    points: 40,
    questions: multipleChoiceQuestions,
  },
  {
    title: "PART II",
    subtitle: "IDENTIFICATION",
    instructions: "Panuto: Isulat ang tamang sagot sa patlang.",
    points: 40,
    questions: identificationQuestions,
  },
  {
    title: "PART III",
    subtitle: "TAMA O MALI",
    instructions: 'Panuto: Isulat ang TAMA kung ang pahayag ay wasto. Kung ang pahayag ay MALI, isulat sa patlang ang tamang salita o kataga upang iwasto ang sinalungguhitang salita.',
    points: 20,
    questions: trueFalseQuestions,
  },
]
