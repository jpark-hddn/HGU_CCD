// 더미 데이터 — USE_MOCK 모드에서 src/lib/api 가 반환. 백엔드 연결 후엔 참고용.
// 전시 정보·졸업생 명단: 전시 정보 스프레드시트 기준 (졸업생은 가나다 순 정렬)
// 포스터: 드라이브 '역대 디그리 도록 정보/졸전 포스터 이미지'. 온라인 전시 링크(archiveUrl)는 2026만 있음
import type { Exhibition } from "@/types/exhibition";

export const EXHIBITIONS: Exhibition[] = [
  {
    "year": 2026,
    "name": "Filling to Flow",
    "date": "2026.11.4—11.15",
    "venue": "Genesis Lab, HGU",
    "subtitle": [
      "2026 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Filling to Flow : 채우심으로 말미암아"
    ],
    "verse": {
      "ref": "출애굽기 31:3",
      "text": "그에게 하나님의 영을 채워 주어, 지혜와 총명과 지식과 온갖 기술을 갖게 하셨다.",
      "en": {
        "ref": "Exodus 31:3",
        "text": "I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선",
          "이중섭"
        ],
        "graduates": []
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "이은종",
          "최인욱",
          "손성찬",
          "이정훈"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Filling to Flow’는 하나님께 받은 지혜와 재능이 세상으로 흘러가 새로운 가치를 만드는 과정을 담은 전시입니다. 학생들은 배움과 경험으로 자신을 채우고, 이를 각자의 디자인 언어로 확장했습니다. 출애굽기 31장 3절의 말씀처럼 지혜와 총명, 지식과 기술로 충만해져 사람과 사회를 이롭게 하는 디자인을 만들어 갈 예비 디자이너들의 흐름을 선보입니다."
      }
    ],
    "archiveUrl": "https://harlo-ii.github.io/hgu-filling-to-flowing-comingsoon/",
    "image": "/images/exhibitions/2026.jpg",
    "size": {
      "width": 384,
      "height": 579
    }
  },
  {
    "year": 2025,
    "name": "Where the Light Begins",
    "date": "2025.11.05—11.11",
    "venue": "Genesis Lab, HGU",
    "subtitle": [
      "2025 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Where the Light Begins : 능력의 서막"
    ],
    "verse": {
      "ref": "빌립보서 4:13",
      "text": "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
      "en": {
        "ref": "Philippians 4:13",
        "text": "I can do all things through Christ who strengthens me."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선",
          "이중섭"
        ],
        "graduates": [
          "강예은",
          "강주찬",
          "강진희",
          "강하라",
          "권미소",
          "기은찬",
          "김민준",
          "김민하",
          "김선우",
          "김종욱",
          "김채영",
          "류하나",
          "박선영",
          "박아나",
          "박예빈",
          "박정현",
          "박하은",
          "변지민",
          "서주민",
          "성윤지",
          "안민애",
          "양진솔",
          "연승아",
          "오사랑",
          "오신영",
          "오은경",
          "유은강",
          "유하은",
          "육지민",
          "윤규인",
          "이어진",
          "이유진",
          "이지애",
          "임사랑",
          "임정훈",
          "장한나",
          "조하민",
          "천예은",
          "최서우",
          "최예영",
          "최현성",
          "토모키",
          "한상일",
          "한지원",
          "홍현지"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "이은종",
          "박찬송",
          "손성찬"
        ],
        "graduates": [
          "강희",
          "김고은",
          "김근희",
          "김민지",
          "김서영",
          "김소영",
          "김수빈",
          "김수아",
          "김수정",
          "김은수",
          "김채영",
          "김혜나",
          "박정민",
          "박지윤",
          "박창휘",
          "백송이",
          "석예슬",
          "송연수",
          "유재선",
          "이수빈",
          "이재은",
          "장수민",
          "장주영",
          "정경난",
          "정승준",
          "조예은",
          "조예준",
          "조환",
          "최민서",
          "최찬희",
          "한지영",
          "홍휘영"
        ]
      }
    ],
    "body": [
      {
        "text": "‘Where the Light Begins’는 빛이 시작되는 지점에서 새로운 가능성과 능력을 발견하는 전시입니다. 학생들은 배움과 도전의 시간을 지나며 자신만의 시선과 디자인 역량을 작품에 담았습니다. 빌립보서 4장 13절의 말씀처럼 힘을 주시는 그리스도 안에서 한계를 넘어, 세상을 밝히는 창의적인 변화를 시작할 예비 디자이너들의 첫걸음을 보여줍니다."
      }
    ],
    "image": "/images/exhibitions/2025.jpg",
    "size": {
      "width": 513,
      "height": 723
    }
  },
  {
    "year": 2024,
    "name": "ONE IN CHRIST",
    "date": "2024.10.21—10.28",
    "venue": "Grace School, HGU",
    "subtitle": [
      "2024 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "ONE IN CHRIST : 그리스도 안에서 하나되는 공동체"
    ],
    "verse": {
      "ref": "로마서 12:5",
      "text": "이와 같이 우리 많은 사람이 그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라.",
      "en": {
        "ref": "Romans 12:5",
        "text": "So we, being many, are one body in Christ, and every one members one of another."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선",
          "이중섭"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘One in Christ’는 서로 다른 사람들이 그리스도 안에서 하나의 공동체를 이루는 모습을 담은 전시입니다. 학생들은 각자의 개성과 전문성을 존중하면서 협력과 연결이 만들어 내는 가치를 탐구했습니다. 로마서 12장 5절의 말씀처럼 서로가 서로에게 필요한 존재임을 기억하며, 다양한 생각과 표현이 조화를 이루어 완성된 디자인을 선보입니다."
      }
    ],
    "image": "/images/exhibitions/2024.jpg",
    "size": {
      "width": 384,
      "height": 385
    }
  },
  {
    "year": 2023,
    "name": "THE TRUTH SHALL SET YOU FREE",
    "date": "2023.10.25—10.30",
    "venue": "Grace School, HGU",
    "subtitle": [
      "2023 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "THE TRUTH SHALL SET YOU FREE : 진리가 너희를 자유케하리라"
    ],
    "verse": {
      "ref": "요한복음 8:32",
      "text": "진리를 알지니 진리가 너희를 자유롭게 하리라.",
      "en": {
        "ref": "John 8:32",
        "text": "And ye shall know the truth, and the truth shall make you free."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선",
          "이중섭"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘The Truth Shall Set You Free’는 수많은 정보와 기준 속에서 진정한 가치와 방향을 찾는 과정을 담은 전시입니다. 학생들은 익숙한 관점에 질문을 던지고, 디자인을 통해 자신이 발견한 진실을 표현했습니다. 요한복음 8장 32절의 말씀처럼 진리가 주는 자유를 바탕으로 세상과 사람을 새롭게 바라보며, 각자의 신념과 가능성을 담아낸 작품을 선보입니다."
      }
    ],
    "image": "/images/exhibitions/2023.jpg",
    "size": {
      "width": 453,
      "height": 641
    }
  },
  {
    "year": 2022,
    "name": "Return to New",
    "date": "2022.10.26—11.3",
    "venue": "Grace School, HGU",
    "subtitle": [
      "2022 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Return to New : 영원한 초심"
    ],
    "verse": {
      "ref": "고린도후서 4:16",
      "text": "우리가 낙심하지 아니함은 우리의 겉사람은\n낡아지나 속사람은 날로 새로워짐이라.",
      "en": {
        "ref": "2 Corinthians 4:16",
        "text": "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "김성혜",
          "정경일",
          "이재선"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Return to New’는 익숙함을 벗어나 처음의 마음으로 돌아가 새로움을 발견하는 과정을 담은 전시입니다. 학생들은 지나온 시간을 돌아보며 자신의 관점과 디자인 언어를 다시 정립했습니다. 고린도후서 4장 16절의 말씀처럼 날마다 새로워지는 마음으로 현재를 바라보고, 끊임없는 탐구와 성찰을 통해 앞으로 만들어 갈 새로운 가능성을 제안합니다."
      }
    ],
    "image": "/images/exhibitions/2022.jpg",
    "size": {
      "width": 523,
      "height": 808
    }
  },
  {
    "year": 2021,
    "name": "Designations",
    "date": "2021.10.29—11.3",
    "venue": "Grace School, HGU",
    "subtitle": [
      "2021 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Designations"
    ],
    "verse": {
      "ref": "사도행전 1:8",
      "text": "오직 성령이 너희에게 임하시면 너희가 권능을 받고.",
      "en": {
        "ref": "Acts 1:8",
        "text": "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "김성혜",
          "정경일",
          "이재선"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Designations’는 각자에게 주어진 이름과 자리, 그리고 디자이너로서의 부르심을 탐구하는 전시입니다. 서로 다른 관심과 경험에서 출발한 학생들은 자신만의 역할과 방향을 디자인으로 구체화했습니다. 사도행전 1장 8절의 말씀을 바탕으로, 세상과 소통하며 긍정적인 변화를 만들어 갈 예비 디자이너들의 다양한 관점과 가능성을 한자리에 담았습니다."
      }
    ],
    "image": "/images/exhibitions/2021.jpg",
    "size": {
      "width": 640,
      "height": 359
    }
  },
  {
    "year": 2020,
    "name": "They are meal for us",
    "date": "2020.11.4—11.10",
    "venue": "Lounge, HGU",
    "subtitle": [
      "2020 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "They are meal for us : 그들은 우리의 먹이라"
    ],
    "verse": {
      "ref": "민수기 14:9",
      "text": "그 땅의 백성을 두려워하지 말라 그들은 우리의 먹이라, 그들의 \n보호자는 그들에게서 떠났고 여호와는 우리와 함께 하시느니라.",
      "en": {
        "ref": "Numbers 14:9",
        "text": "Only rebel not ye against the LORD, neither fear ye the people of the land; for they are bread for us: their defence is departed from them, and the LORD is with us: fear them not."
      }
    },
    "body": [
      {
        "text": "‘They Are Meal for Us’는 두려움과 한계를 성장의 자양분으로 전환하는 태도를 이야기합니다. 예상하지 못한 변화와 어려움 속에서도 학생들은 각자의 질문을 멈추지 않고 디자인의 가능성을 탐구했습니다. 민수기 14장 9절의 말씀처럼 눈앞의 장벽에 머무르지 않고, 도전을 새로운 힘으로 삼아 앞으로 나아간 예비 디자이너들의 시선과 결과물을 선보입니다."
      }
    ],
    "image": "/images/exhibitions/2020.jpg",
    "size": {
      "width": 536,
      "height": 759
    }
  },
  {
    "year": 2019,
    "name": "Go to the land",
    "date": "2018.10.17—10.22",
    "venue": "Hongik Daehangno Art Center",
    "subtitle": [
      "2019 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Go to the land : 네게 지시할 땅으로 가라"
    ],
    "verse": {
      "ref": "창세기 12:1-2",
      "text": "여호와께서 아브람에게 이르시되, \n너는 너의 본토 친척 아비집을 떠나 내가 네게 지시할 땅으로 가라.",
      "en": {
        "ref": "Genesis 12:1-2",
        "text": "Leave your country, your people and your father's household and go to the land I will show you."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구(커뮤니케이션 디자인)",
          "김성혜(영상 디자인)",
          "이중섭(서비스디자인)"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Go to the Land I Will Show You’는 정해진 답을 따라가는 평면적인 여정에서 벗어나, 새로운 차원과 방향을 찾아 나서는 과정을 담은 전시입니다."
      },
      {
        "text": "“네게 지시할 땅으로 가라”는 말은 미래완료형 시제의 한가지로서 아직 일어나지 않은 일이며 이에 대한 믿음과 신뢰를 요구합니다. 땅이라는 말은 목적지이며, 현재는 정확히 그곳을 볼 수 없습니다. 그래서, 늘 깨어 방향을 인지하고 매순간있을 지시를 잘 분별하여 정확히 한발씩 내딛어야 할 것입니다. 창세기 12장 1–2절의 말씀처럼 목적지를 모두 알 수 없는 순간에도 창조주의 인도하심을 신뢰하며, 자신만의 관점과 가능성을 발견해 가는 디자이너들의 여정을 보여줍니다."
      }
    ],
    "image": "/images/exhibitions/2019.jpg",
    "size": {
      "width": 559,
      "height": 712
    }
  },
  {
    "year": 2018,
    "name": "Design Again",
    "date": "2018.10.17—10.22",
    "venue": "GALLERY IANG",
    "subtitle": [
      "2018 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Design Again"
    ],
    "verse": {
      "ref": "전도서 12: 1",
      "text": "너는 청년의 때에 너의 창조주를 기억하라 곧 곤고한 날이 \n이르기 전에, 나는 아무 낙이 없다고 할 해들이 가깝기 전에.",
      "en": {
        "ref": "Ecclesiastes 12:1",
        "text": "Remember your Creator in the days of your youth, before the days of trouble come and the years draw near when you will say, ‘I find no pleasure in them’."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Design Again’은 창조의 본질을 돌아보고 디자인의 의미를 다시 묻는 전시입니다. 학생들은 매일 다른 모습으로 떠오르는 달처럼 익숙한 세상과 일상을 새롭게 바라보았습니다. 전도서 12장 1절의 말씀을 바탕으로, 창조주를 기억하며 아름다움과 질서를 발견하고 이를 각자의 언어와 방식으로 재해석한 디자인을 선보입니다."
      }
    ],
    "image": "/images/exhibitions/2018.jpg",
    "size": {
      "width": 448,
      "height": 896
    }
  },
  {
    "year": 2017,
    "name": "Spread your wings",
    "date": "2017.9.20—9.26",
    "venue": "GALLERY IANG",
    "subtitle": [
      "2017 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Spread your wings : 청춘을 독수리같이"
    ],
    "verse": {
      "ref": "시편 103:5",
      "text": "좋은 것으로 네 소원을 만족하게 하사 네 청춘을 \n독수리같이 새롭게 하시는 도다.",
      "en": {
        "ref": "Psalm 103:5",
        "text": "He satisfies your desires with good things, so that your youth is renewed like the eagle’s."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Spread Your Wings’는 새로운 세상을 향해 날개를 펼치는 청춘의 도전과 성장을 이야기합니다. 불확실함 속에서도 각자의 가능성을 믿고 앞으로 나아가는 학생들의 여정을 담았습니다. 시편 103편 5절의 말씀처럼, 하나님 안에서 새 힘을 얻어 더 넓은 세상으로 비상하고자 하는 예비 디자이너들의 시선과 열정을 작품으로 펼쳐 보입니다. 이 전시를 통해 관람자와 디자이너 모두 자신의 꿈을 되찾는 ‘꿈의 나래’, 미래의 도약을 위한 ‘상상의 나래’, 새로운 세상에 대한 ‘희망의 나래’를 펼쳐 나갈 것을 기대합니다."
      }
    ],
    "image": "/images/exhibitions/2017.jpg",
    "size": {
      "width": 473,
      "height": 663
    }
  },
  {
    "year": 2016,
    "name": "Healing in the Light",
    "date": "2016.10.20—10.24",
    "venue": "ARA ART CENTER",
    "subtitle": [
      "2016 한동대학교 콘텐츠융합디자인학부 졸업 작품전",
      "Healing in the Light : 빛으로 나음이라"
    ],
    "verse": {
      "ref": "말라기 4:2",
      "text": "내 이름을 경외하는 너희에게는 공의로운 해가 떠올라서 치료하는 \n광선을 비추리니 너희가 나가서 외양간에서 나온 송아지 같이 뛰리라.",
      "en": {
        "ref": "Malachi 4:2",
        "text": "But for you who revere my name, the sun of righteousness will rise with healing in its rays. And you will go out and leap like calves released from the stall."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Healing in the Light’는 세상의 상처와 어둠을 비추고 치유하는 빛의 의미를 담은 전시입니다. 학생들은 디자인이 사람과 사회에 건넬 수 있는 위로와 회복의 가능성을 탐구했습니다. 말라기 4장 2절의 말씀처럼, 각자의 자리에서 발견한 문제를 새로운 관점으로 조명하고 그 안에 따뜻한 변화와 희망을 전하는 작품을 선보입니다."
      }
    ],
    "image": "/images/exhibitions/2016.jpg",
    "size": {
      "width": 557,
      "height": 788
    },
    "venueOnNewLine": true
  },
  {
    "year": 2015,
    "name": "Make it Neue(new)",
    "date": "2015.10.28—11.2",
    "venue": "ARA ART CENTER",
    "subtitle": [
      "2015 한동대학교 산업정보디자인학부 졸업 작품전",
      "Make it Neue(new) : 새롭게 하소서"
    ],
    "verse": {
      "ref": "시편 51:10",
      "text": "내 속에 정한 마음을 창조하시고 내 안에 정직한 영을 새롭게 하소서.",
      "en": {
        "ref": "Psalm 51:10",
        "text": "But for you who revere my name, the sun of righteousness will rise with healing in its rays. And you will go out and leap like calves released from the stall."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "이재선"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "‘Make it Neue’는 ‘새롭게 하소서’라는 의미를 담은 전시입니다. 익숙한 생각과 표현에 머무르지 않고, 디자인을 통해 세상을 바라보는 새로운 시선과 가능성을 제안합니다. “내 안에 정한 마음을 창조하시고 내 안에 정직한 영을 새롭게 하소서”라는 시편 51편 10절의 말씀처럼, 창조주 안에서 새로워진 마음으로 완성한 졸업 작품을 선보입니다."
      }
    ],
    "image": "/images/exhibitions/2015.jpg",
    "size": {
      "width": 473,
      "height": 670
    }
  },
  {
    "year": 2014,
    "name": "YOU ARE THE LIGHT OF THE WORLD",
    "date": "2014.10.15—10.19",
    "venue": "Sangmyung Gallery",
    "subtitle": [
      "2014 한동대학교 산업정보디자인학부 졸업 작품전",
      "YOU ARE THE LIGHT OF THE WORLD : 너희는 세상의 빛이라"
    ],
    "verse": {
      "ref": "마태복음 5:14",
      "text": "너희는 세상의 빛이라 산 위에 있는 동네가 숨겨지지 못할 것이요.",
      "en": {
        "ref": "Matthew 5:14",
        "text": "You are the light of the world a city on a hill cannot be hidden."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "강민구",
          "곽은아",
          "김수지",
          "김영민",
          "김예영",
          "김온유",
          "김지영",
          "김지예",
          "김지은",
          "김평화",
          "김현정",
          "김휘준",
          "김희년",
          "문성희",
          "미앙갈리",
          "박경록",
          "박경원",
          "박구원",
          "박예나",
          "수미얏윈",
          "신광수",
          "신다은",
          "신영주",
          "윤수민",
          "이규리",
          "이지수",
          "임주안",
          "정성희",
          "정우슬",
          "조예지",
          "최다운",
          "최은주",
          "한지현",
          "황금성"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [],
        "graduates": [
          "김다인",
          "김아인",
          "김유나",
          "김혜수",
          "문원식",
          "박수환",
          "박우림",
          "박진아",
          "손주은",
          "신민용",
          "신재민",
          "신희수",
          "위지원",
          "윤은혜",
          "이소연",
          "이은지",
          "이진민",
          "이찬영",
          "임현정",
          "장기도",
          "정다영",
          "조수희",
          "조윤아",
          "조윤제",
          "주은선",
          "주정하",
          "최기쁨",
          "하주한",
          "황유선"
        ]
      }
    ],
    "body": [],
    "image": "/images/exhibitions/2014.jpg",
    "size": {
      "width": 478,
      "height": 680
    }
  },
  {
    "year": 2013,
    "name": "God saw that it was good",
    "date": "2013.10.17—10.20",
    "venue": "RAEMIAN GALLERY",
    "subtitle": [
      "2013 한동대학교 산업정보디자인학부 졸업 작품전",
      "보시기에 좋았더라"
    ],
    "verse": {
      "ref": "마태복음 5:14",
      "text": "너희는 세상의 빛이라 산 위에 있는 동네가 숨겨지지 못할 것이요.",
      "en": {
        "ref": "Matthew 5:14",
        "text": "You are the light of the world a city on a hill cannot be hidden."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "김성혜",
          "이주현",
          "이재선",
          "김공웅",
          "이고은",
          "임희원",
          "전예인",
          "홍승표",
          "양봄"
        ],
        "graduates": [
          "강희원",
          "괵예나",
          "김범철",
          "김보람",
          "김슬기",
          "김승환",
          "김예현",
          "김용호",
          "김유진",
          "김은광",
          "김은영",
          "김주은",
          "김주은",
          "김지혜",
          "김찬영",
          "김형진",
          "박근호",
          "박남진",
          "박은경",
          "배소진",
          "변하늘",
          "서희원",
          "양여호수아",
          "윤소정",
          "이가람",
          "이수연",
          "이승화",
          "이정하",
          "전지",
          "정경일",
          "정예은",
          "정찬양",
          "정한별",
          "조서연",
          "조수호",
          "최동인",
          "최예솔",
          "황국희",
          "황장근"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "조원철",
          "최인욱",
          "강대근",
          "김승준",
          "석진민"
        ],
        "graduates": [
          "곽유경",
          "김보규",
          "김은혜",
          "김진규",
          "김진솔",
          "김태호",
          "남지연",
          "박보영",
          "박주영",
          "박찬양",
          "반재영",
          "백라파엘",
          "백성윤",
          "성주미",
          "손영운",
          "유두선",
          "윤하지",
          "이민하",
          "이윤희",
          "이한별",
          "이향아",
          "정은혜",
          "정한솔",
          "지혜원",
          "최채영",
          "황수현"
        ]
      }
    ],
    "body": [
      {
        "text": "금번 한동대학교 산업정보디자인학부 졸업전시회 주제인 '보시기에 좋았더라'의 핵심은 하나님께서 우리에게 허락하신 본질의 회복과 창조주의 절대적인 주권 가운데 펼쳐진 세상의 참 아름다움을 발견하는 것입니다."
      }
    ],
    "image": "/images/exhibitions/2013.jpg",
    "size": {
      "width": 481,
      "height": 680
    }
  },
  {
    "year": 2012,
    "name": "Naetasio",
    "date": "2012.10.17—10.23",
    "venue": "Seoul Design Support Center",
    "subtitle": [
      "2012 한동대학교 산업정보디자인학부 졸업 작품전",
      "Naetasio: 내탓이오[내타시오]"
    ],
    "verse": {
      "ref": "빌립보서 2:2",
      "text": "마음을 같이하여 같은 사랑을 가지고 뜻을 합하며 한마음을 품어.",
      "en": {
        "ref": "Philippians 2:2",
        "text": "Having the same love, being one in spirit and purpose."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "김성혜",
          "이주현",
          "이재선"
        ],
        "graduates": [
          "강사라",
          "강영아",
          "김문정",
          "김민지",
          "김선희",
          "김세정",
          "김소연",
          "김하랑",
          "박길호",
          "박준영",
          "손석민",
          "신유화",
          "유근경",
          "유세현",
          "유슬아",
          "유정우",
          "유하연",
          "이석주",
          "이성봉",
          "이성욱",
          "이지선",
          "이충만",
          "이하영",
          "장진",
          "장형규",
          "정리나",
          "정연복",
          "정윤경",
          "정주리",
          "조수민",
          "조주영",
          "최기찬",
          "최예은",
          "최혜진",
          "포노다",
          "하상옥",
          "황의돈"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "이은종",
          "조원철",
          "최인욱"
        ],
        "graduates": [
          "고예림",
          "김영실",
          "김지원",
          "김형석",
          "김혜진",
          "송주은",
          "안부영",
          "양은실",
          "원주현",
          "유보영",
          "윤하정",
          "이미례",
          "이상아",
          "이슬기",
          "이원달",
          "이지은",
          "임지민",
          "장성윤",
          "장호성",
          "정찬송",
          "정하영",
          "조규형",
          "조미건",
          "진예령",
          "최규하",
          "최락훈",
          "최은지",
          "허두석"
        ]
      }
    ],
    "body": [
      {
        "text": "우리 디자인은 세상에 대한 자발적 참여이자 사랑입니다. 또한 이것은 우리의 선언입니다."
      }
    ],
    "image": "/images/exhibitions/2012.jpg",
    "size": {
      "width": 478,
      "height": 680
    }
  },
  {
    "year": 2011,
    "name": "The world's happiest design",
    "date": "2011.10.19—10.25",
    "venue": "Sangmyung Gallery",
    "subtitle": [
      "2011 한동대학교 산업정보디자인학부 졸업 작품전",
      "세상에서 가장 행복한 디자인: 'The world's happiest design"
    ],
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "김성혜"
        ],
        "graduates": [
          "<시각디자인>",
          "권미혜",
          "김경빈",
          "김보람",
          "김성희",
          "김인애",
          "김재후",
          "김하경",
          "대쉬브람",
          "박꽃초롱",
          "박상용",
          "박용재",
          "백승윤",
          "서유진",
          "손예진",
          "송우리",
          "신윤희",
          "신은비",
          "신인영",
          "우철희",
          "유수향",
          "유일준",
          "이나경",
          "이미영",
          "이재진",
          "이한솔",
          "임덕균",
          "장새아",
          "장진원",
          "전미현",
          "제시카",
          "최경무",
          "최소명",
          "최우뢰",
          "최은혜",
          "최호익",
          "한광훈",
          "황유민"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "이은종",
          "최인욱"
        ],
        "graduates": [
          "강선교",
          "김성은",
          "김슬기",
          "김영아",
          "김유나",
          "김은구",
          "반소량",
          "백윤희",
          "아벨",
          "유선아",
          "윤경민",
          "이대영",
          "이지수",
          "이지영",
          "이지혜",
          "이충경",
          "이향아",
          "정의진",
          "정이삭",
          "최미진",
          "최온유",
          "최혜령",
          "한태웅"
        ]
      }
    ],
    "body": [],
    "image": "/images/exhibitions/2011.jpg",
    "size": {
      "width": 463,
      "height": 680
    }
  },
  {
    "year": 2010,
    "name": "Nothing Better",
    "subtitle": [
      "2010 한동대학교 산업정보디자인학부 졸업 작품전",
      "더할 나위 없는: Nothing Better"
    ],
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "조용재",
          "김성혜",
          "김공웅"
        ],
        "graduates": [
          "김강산",
          "김유민",
          "김주현",
          "김현옥",
          "무라가미 레이초",
          "문동규",
          "문하운",
          "박형동",
          "박혜림",
          "박효성",
          "백미란",
          "백성암",
          "백제현",
          "손수현",
          "송수연",
          "신지선",
          "오영은",
          "이따냐",
          "이서연",
          "이승하",
          "이시진",
          "이예지",
          "이예진",
          "이혜란",
          "임의영",
          "임진민",
          "정지혜",
          "조수아",
          "채영지",
          "최새봄",
          "최승호",
          "최영무"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "이은종",
          "최인욱"
        ],
        "graduates": []
      }
    ],
    "body": [
      {
        "text": "크리스천 디자인으로서, 이 땅에 살고 있는 한국인 본연의 Identity를 고민하고 표형하고 발전 시켜보고자 '더할 나위 없는'을 주제로 다루었습니다."
      }
    ],
    "image": "/images/exhibitions/2010.jpg",
    "size": {
      "width": 477,
      "height": 680
    }
  },
  {
    "year": 2009,
    "name": "POST-",
    "subtitle": [
      "2009 한동대학교 산업정보디자인학부 졸업 작품전",
      "POST-"
    ],
    "verse": {
      "ref": "요엘 2:28",
      "text": "너희 젊은이는 이상을 볼 것이며.",
      "en": {
        "ref": "Joel 2:28",
        "text": "your young men will see visions."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구",
          "조성배(영상디자인)",
          "유현경(시각디자인)",
          "이주현(웹디자인)",
          "김성혜",
          "김공웅"
        ],
        "graduates": [
          "강슬기",
          "강일신",
          "강한나",
          "권준",
          "권혁성",
          "김대훈",
          "김미나",
          "김보원",
          "김소연",
          "김재현",
          "김주휘",
          "김지인",
          "김현수",
          "박상현",
          "박영지",
          "박재원",
          "박지웅",
          "박지호",
          "방주은",
          "백유림",
          "소영인",
          "손서영",
          "유보라",
          "이승재",
          "이은진",
          "이하린",
          "이학근",
          "임지연",
          "장지현",
          "정다훈",
          "정예람",
          "조명진",
          "최아람",
          "최연정",
          "현준혁",
          "황샤론",
          "황호성"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "조원철",
          "이은종",
          "최인욱"
        ],
        "graduates": [
          "강다님",
          "김보람",
          "김영국",
          "박윤호",
          "박현정",
          "배유진",
          "손의준",
          "오신영",
          "이다윗",
          "이희진",
          "장형태",
          "정용민",
          "정원철",
          "최영근",
          "최재호",
          "한우정",
          "황호성"
        ]
      }
    ],
    "body": [
      {
        "text": "21c 디자인의 흐름은 급변하며 예측불허이다. 과거를 거울삼고 현재를 진단하며 미래를 에측해 보는 것 -"
      },
      {
        "text": "이는 리드할 수 있고 차별화 시킬 수 있는 디자인 전략의 핵심 키워드이다. 우리는 미래의 디자인에 도전해보고자 한다. 다소 시행착오가 있을지 모르나 \"가다가 중지 곧 하더라도 간 만큼 이익이 아니겠는가?\""
      }
    ],
    "image": "/images/exhibitions/2009.jpg",
    "size": {
      "width": 556,
      "height": 680
    }
  },
  {
    "year": 2008,
    "name": "DESIGN HANPOONG",
    "subtitle": [
      "2008 한동대학교 산업정보디자인학부 졸업 작품전",
      "DESIGN HANPOONG: 디자인 한풍"
    ],
    "verse": {
      "ref": "요한복음 3:8",
      "text": "바람이 임의로 불매 네가 그 소리는 들어도 어디서와서 어디로 가는지 알지 못하나니 성령으로 난 사람도 다 그러하니라.",
      "en": {
        "ref": "John 3:8",
        "text": "he wide blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So it is with everyone born of the Sprits."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [
          "이진구(시각정보디자인)",
          "이주현(웹디자인)",
          "김성혜(영상디자인)",
          "김공웅(일러스트레이션, 기초디자인)"
        ],
        "graduates": [
          "강소현",
          "강은혜",
          "구평모",
          "권미나",
          "길태경",
          "김경민",
          "김나래",
          "김연수",
          "김예성",
          "김윤아",
          "김지나",
          "김형희",
          "김혜림",
          "김혜미",
          "김혜진",
          "류기원",
          "박경인",
          "박민영",
          "박소은",
          "박장호",
          "박하은",
          "서동희",
          "서미영",
          "손청진",
          "승보현",
          "심에스더",
          "유채은",
          "윤병욱",
          "윤여준",
          "이나연",
          "이승현",
          "이용순",
          "이유림",
          "이의신",
          "이준",
          "이치성",
          "임미정",
          "주은경",
          "최도나",
          "최미라",
          "현다영"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [
          "조원철",
          "이은종",
          "최인욱"
        ],
        "graduates": [
          "기예지",
          "김승화",
          "김완규",
          "김지현",
          "러신충",
          "박수아",
          "신은정",
          "양윤석",
          "윤성미",
          "이후희",
          "정헌재",
          "조성진",
          "조재성",
          "조정훈",
          "최하나"
        ]
      }
    ],
    "body": [
      {
        "text": "한류는 일정한 곳만을 흐르지만 한풍은 어디든 볼 수 있습니다. 한풍은 한국의 바람, 한동의 바람이자 하나님의 바람입니다. 바람이 부는 곳은 어디든 풍화작용이 일어납니다. 우리는 모난 곳을 깎고, 패인 곳은 메우는 세상을 변화시키는 디자이너가 되길 원합니다. 우리의 작품들은 한국의 아름다움을 품고 세상으로 쏟아낸 한동의 마음이며 태초부터 이 일을 하고 계씬 하나님과의 동역입니다. 한풍이 불어옵니다. 이제 돛을 펼치겠습니다."
      }
    ],
    "image": "/images/exhibitions/2008.jpg",
    "size": {
      "width": 552,
      "height": 680
    }
  },
  {
    "year": 2007,
    "name": "Design Korean Wave",
    "subtitle": [
      "2007 한동대학교 산업정보디자인학부 졸업 작품전",
      "디자인 한류"
    ],
    "verse": {
      "ref": "시편124:8",
      "text": "우리의 도움은 천지를 지으신 여호와의 이름에 있도다.",
      "en": {
        "ref": "Psalm 124:8",
        "text": "Our helps is in the name of the name of the Lord, the Maker of heaven and earth."
      }
    },
    "advisors": [
      "이진구(시각정보디자인)",
      "최인욱(제품디자인)",
      "조원철(자동차디자인)",
      "이은종(User Experience 디자인)",
      "이주현(웹디자인)",
      "김성혜(영상디자인)",
      "김공웅(일러스트레이션, 기초디자인)",
      "최병묵(광고디자인)"
    ],
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "강성구",
          "강소희",
          "강은모",
          "구태균",
          "권애경",
          "권예훈",
          "권은영",
          "김기형",
          "김동림",
          "김민근",
          "김영린",
          "김은종",
          "김진영",
          "김초롱",
          "김해성",
          "노은경",
          "민유나",
          "박아름",
          "박온유",
          "박진규",
          "박혜민",
          "방나영",
          "배성은",
          "배세인",
          "손문성",
          "손수미",
          "신소애",
          "신주형",
          "양승신",
          "오주연",
          "유가은",
          "유찬양",
          "이부원",
          "이삼열",
          "이재민",
          "이정훈",
          "이태길",
          "이택형",
          "이평강",
          "임혜선",
          "임희원",
          "장 윤",
          "정성혜",
          "정혜정",
          "조종제",
          "조주영",
          "최현수",
          "표은혜",
          "한길로",
          "한성하",
          "한송이"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [],
        "graduates": [
          "강한종",
          "권일구",
          "김도원",
          "김솔",
          "김수진",
          "김승태",
          "김우신",
          "김은진",
          "라지영",
          "박지영",
          "서승현",
          "서은혜",
          "석진민",
          "송예은",
          "윤성혜",
          "윤자원",
          "이승훈",
          "이창훈",
          "이한나",
          "이혜리",
          "정나래",
          "정필현",
          "조성실",
          "지주민",
          "진영민"
        ]
      }
    ],
    "body": [
      {
        "text": "한국의 예비 디자이너로서 어떤 정체성을 가지고 세상을 향해 발을 내딛어야 할지 고민해 봅니다. 급변하는 세계 속에서 크리스찬 디자이너인 우리는 하나님께서 우리에게 주신 한국의 부흥 속에 그 분의 창조질서와 아름다움을 연구하고 재현하고자 합니다. '디자인한류' 의 연구를 통해 한국인의 정체성, 또는 인간 본연의 모습으로서 남들과 차별화된 정체성을 찾고자 하였습니다. 이런 고민과 노력을 통해 \"Wht not change the world\" 라는 Vision을 품고 한국의 예비 디자이너로서 당당히 세상에 나아가기를 소망합니다."
      }
    ],
    "image": "/images/exhibitions/2007.jpg",
    "size": {
      "width": 431,
      "height": 680
    }
  },
  {
    "year": 2006,
    "name": "Vision&Vernecular",
    "subtitle": [
      "2006 한동대학교 산업정보디자인학부 졸업 작품전",
      "Vision&Vernacular: 비전 그리고 버네클러 디자인"
    ],
    "verse": {
      "ref": "빌립보서 4:13",
      "text": "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
      "en": {
        "ref": "Philippians 4:13",
        "text": "I can do all this through him who gives me strength."
      }
    },
    "advisors": [
      "이진구(시각정보디자인)",
      "최인욱(제품디자인)",
      "조원철(자동차디자인)",
      "이은종(User Experience 디자인)",
      "이주현(웹디자인)",
      "김성혜(영상디자인)",
      "김공웅(일러스트레이션, 기초디자인)",
      "최병묵(광고디자인)"
    ],
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "강경중",
          "강신혜",
          "곽민혜",
          "구민희",
          "길민영",
          "김세훈",
          "김알리샤",
          "김윤태",
          "김지연",
          "김지현",
          "김진욱",
          "김형우",
          "김혜인",
          "김희경",
          "남상미",
          "도주영",
          "문영신",
          "박성하",
          "박신애",
          "박지영",
          "박찬미",
          "박효정",
          "서현정",
          "성덕호",
          "송규한",
          "신병근",
          "안성희",
          "유보람",
          "윤이나",
          "이미령",
          "이보람",
          "이영롱",
          "이정진",
          "이정현",
          "이정화",
          "이한경",
          "이혜린",
          "이화정",
          "이환희",
          "장미",
          "장세훈",
          "정석훈",
          "정이든",
          "정희연",
          "조근혜",
          "최인정",
          "하은진",
          "허린",
          "허영조",
          "허주연"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [],
        "graduates": [
          "김상민",
          "김애영",
          "김진우",
          "남성우",
          "박예지",
          "박찬송",
          "박찬혁",
          "석소미",
          "송지철",
          "송현철",
          "신혜미",
          "원지선",
          "유승하",
          "유정열",
          "이경진",
          "이근민",
          "이다영",
          "이수현",
          "이하늘",
          "임영신",
          "임예지",
          "전주일",
          "최진호",
          "최한진",
          "한지영",
          "호용방"
        ]
      }
    ],
    "body": [
      {
        "text": "디자이너로서 어떤 vision을 가지고 세상을 향해 발을 내 딛어야 할지 고민해 봅니다. 급변하는 사회 속에서 크리스찬 디자이너인 우리는 하나님께서 우리에게 주신 창조력을 가지고 최초의, 그리고 최고의 디자이너이신 그 분의 창조질서와 아름다움을 연구하고 재현하고자 합니다. 또한 Vernacular design의 연구를 통해 한국인, 또는 인간 본연의 모습으로서 남들과 차별화된. Identitiy를 찾고자 하였습니다. 이런 고민과 노력을 통해 \"Why not change the world\" 라는 vision을 품고 세상에 당당히 나아가기를 소망합니다."
      },
      {
        "text": "태초의 만물의 생성과 호흡을 디자인하신 하나님. 시간의 흐름을 뛰어넘어 고유의 가치를 발견, 독특한 문화를 재창조해낼 수 있는 Vernacular Design은 바로 그 분의 Creativity를 닮기 위한 노력이다. 전통적 미와 요소를 디자인의 원천적인 개념으로 인식하고 현대 디자인의 영역에 응용함으로써 Vernacular를 이룰고자 한다."
      }
    ],
    "image": "/images/exhibitions/2006.jpg",
    "size": {
      "width": 480,
      "height": 680
    }
  },
  {
    "year": 2005,
    "name": "God the First vernacular designer",
    "subtitle": [
      "2005 한동대학교 산업정보디자인학부 졸업 작품전",
      "God the First vernacular designer: 하나님은 최초의 최고의 버네클러 디자이너"
    ],
    "verse": {
      "ref": "요한복음 1:3",
      "text": "만물이 그로 말미암아 지은 바 되었으니 지은 것이 하나도 그가 없이는 된 것이 없느니라.",
      "en": {
        "ref": "John 1:3",
        "text": "Through him all things were made, without him nothing was made that has been made."
      }
    },
    "advisors": [
      "이진구(시각정보디자인)",
      "최인욱(제품디자인)",
      "조원철(자동차디자인)",
      "이은종(User Experience 디자인)",
      "이주현(웹디자인)",
      "김성혜(영상디자인)",
      "김공웅(일러스트레이션, 기초디자인)",
      "최병묵(광고디자인)"
    ],
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "권성미",
          "권희정",
          "김건의",
          "김명수",
          "김미라",
          "김보희",
          "김선희",
          "김치호",
          "김한나",
          "김혜은",
          "나탈리아 강",
          "문정훈",
          "박대욱",
          "박미소",
          "박상훈",
          "박세환",
          "박인아",
          "박재형",
          "서백기",
          "선우하나",
          "송지영",
          "심우석",
          "안정현",
          "이경진",
          "이대영",
          "이민화",
          "이숙현",
          "이영민",
          "이재경",
          "이지연",
          "이지현",
          "이학성",
          "이해수",
          "장현주",
          "전효진",
          "정승원",
          "정평강",
          "조은지",
          "주은혜",
          "최윤석",
          "허인진"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [],
        "graduates": [
          "강승구",
          "강승구",
          "고정",
          "구신애",
          "권예경",
          "김경구",
          "김무혁",
          "김문영",
          "김세미",
          "김수현",
          "김요섭",
          "김현주",
          "김형우",
          "남승욱",
          "남지아",
          "맹승우",
          "박수영",
          "박주환",
          "박지애",
          "백수연",
          "신은영",
          "오은지",
          "유인상",
          "유정열",
          "윤선혜",
          "윤정균",
          "이도철",
          "이미나",
          "이보영",
          "이영민",
          "이요한",
          "이원섭",
          "이재우",
          "이재화",
          "이정훈",
          "이효정",
          "장수완",
          "정지현",
          "정해원",
          "최상돈",
          "최윤정",
          "호용방"
        ]
      }
    ],
    "body": [
      {
        "text": "급변하는 사회 속에서 우리는 한국으로서 또는 크리스찬으로서의 'vernacular' 를 잃어가고 있지는 않습니까? 하나님께서 우리에게 주신 창조력을 가지고 최초의 vernacular desinger 이신 그분의 창조질서와 아름다움을 닮아가고자 고민하는 것은 크리스찬 디자이너로서 꼭 필요한 모습일 것입니다. 이런 고민을 통해 하나님이 지으신 태초의 선한 세계를 회복해나갈 수 있게 되기를 소망합니다."
      }
    ],
    "image": "/images/exhibitions/2005.jpg",
    "size": {
      "width": 515,
      "height": 680
    }
  },
  {
    "year": 2004,
    "name": "REALUZE THE GOOD",
    "subtitle": [
      "2004 한동대학교 산업정보디자인학부 졸업 작품전",
      "REALUZE THE GOOD: 우리가 알거니와"
    ],
    "verse": {
      "ref": "로마서 8:28",
      "text": "하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라.",
      "en": {
        "ref": "Romans 8:28",
        "text": "And we know that in all things God works for the good of those who love to his purpose."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "김고운",
          "김미리안",
          "김선록",
          "김성화",
          "김은수",
          "김지영",
          "김진성",
          "김태현",
          "김효기",
          "박찬표",
          "박현회",
          "서재원",
          "석아름",
          "송화진",
          "안유정",
          "양나혜",
          "오형민",
          "위사명",
          "이고은",
          "이기철",
          "이성업",
          "이영원",
          "이태희",
          "이하영",
          "이해정",
          "장하렴",
          "전예인",
          "정인교",
          "조선영",
          "차고운",
          "홍경철",
          "황현상"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [],
        "graduates": [
          "강대은",
          "김보라",
          "김원주",
          "김종학",
          "김지윤",
          "신지연",
          "이상욱",
          "이승현",
          "임숙연",
          "전도래",
          "정현오",
          "천주영",
          "최나리",
          "최익환"
        ]
      }
    ],
    "body": [
      {
        "text": "무심코 디자인을 하다보면 그 안에 무엇이 담겨있는지, 목표가 무엇인지 스스로도 모를 때가 있습니다. 하지만 저희는 태초의 선한 세계의 회복을 위해 늘 고민하며 디자인을 하는 과정과 내용을 중시합니다. 또한 경쟁적인 사회에서도 인갅거인 나눔을 잃지 않으며 동료와 함께 목표를 이루려 합니다. 그러한 과정에서 최고의 디자이너이신 하나님을 더욱 닮아가고 싶습니다."
      }
    ],
    "image": "/images/exhibitions/2004.jpg",
    "size": {
      "width": 507,
      "height": 680
    }
  },
  {
    "year": 2003,
    "name": "PARACLETE",
    "date": "2003.11.06—11.09",
    "venue": "COEX",
    "subtitle": [
      "2003 한동대학교 산업정보디자인학부 졸업 작품전",
      "PARACLETE: 중보자"
    ],
    "verse": {
      "ref": "요한복음 14:16~17 / 요한복음 14:26",
      "text": "내가 아버지께 구하겠으니 그가 또 다른 보혜사를 너희에게 주사 영원토록 너희와 함께 있게 하시리니 저는 진리의 영이라 세상은 능히 저를받지 못하나니 이는 저를 보지도 못하고 알지도 못함이라 그러나 너희는 저를 아나니 저는 너희와 함께 거하심이요 또 너희 속에 계시겠음이라.\n\n보혜사 곧 아버지께서 내 이름으로 보내실 성령 그가 너희에게 모든 것을 가르치시고 내가 너희에게 말한 모든 것을 생각나게 하시리라.",
      "en": {
        "ref": "John 14:16~17 / John 14:26",
        "text": "And I will the Father, and he will give you another Counselor to be with you foever the Spirit of truth. The world cannot accept him, because it neither sees him norknows him. But you know him, for he lives with you end will be in you. But the Counselor, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "곽혜진",
          "구인애",
          "구자경",
          "김경숙",
          "김명광",
          "김문정",
          "김병준",
          "김유진",
          "김재영",
          "김정찬",
          "김지윤",
          "박가영",
          "박소정",
          "박준선",
          "박지은",
          "배미주",
          "성주경",
          "송혜준",
          "신원석",
          "신지혜",
          "양은진",
          "오수홍",
          "윤순천",
          "윤혜진",
          "이규경",
          "이근희",
          "이민규",
          "이정민",
          "이주연",
          "이지영",
          "이지영",
          "이진욱",
          "이한준",
          "장재우",
          "장지현",
          "장하림",
          "정주영",
          "정학순",
          "조현준",
          "천혜림",
          "최고운",
          "최성은",
          "홍혜경",
          "황성용"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [],
        "graduates": [
          "김두연",
          "김명광",
          "김명은",
          "김성훈",
          "김지혜",
          "박준선",
          "박지은",
          "손동락",
          "손충현",
          "오수홍",
          "유지연",
          "윤지나",
          "이민규",
          "이효은",
          "정한나",
          "정호련",
          "정호련",
          "조현준",
          "주영민",
          "천혜림",
          "최고운",
          "허은정",
          "홍찬주",
          "홍혜경"
        ]
      }
    ],
    "body": [
      {
        "text": "중보자"
      },
      {
        "text": "001. 둘 사이에 들어 일을 주선하는 사람 002. 인간의 죄를 대신해서 피를 흘리고 죽음으로 하나님과의 관계를 회복시키고 유지하세 하신 그리스도"
      },
      {
        "text": "한동산디가 생각하는 중보자 십자가에서 죽으심으로 우리와 하나님 사이의 관계를 회복시켜 주었던 예수님처럼 우리는 우리의 디자인을 통해서 사람들이 알지 못하는 아름다움과 따뜻함, 그 분의 사랑하시는 마음을 사람들에게 보여줌으로 깨어진 우리들의 관계, 그 분과의 관계가 회복되어지길 소망합니다."
      }
    ],
    "image": "/images/exhibitions/2003.jpg",
    "size": {
      "width": 607,
      "height": 680
    }
  },
  {
    "year": 2002,
    "name": "New Creation, Culture",
    "venue": "한동대학교 효암별관",
    "subtitle": [
      "2002 한동대학교 산업정보디자인학부 졸업 작품전",
      "through New Creation, make Culture"
    ],
    "verse": {
      "ref": "고린도후서 5:17",
      "text": "그런즉 누구든지 그리스도 안에 있으면 새로운 피조물이라 이전 것은 지나갔으니 보라 새것이 되었도다.",
      "en": {
        "ref": "Corinthians 5:17",
        "text": "Therefore, if anyone is in Christ, he is a new creation;the old has gone, the new has come."
      }
    },
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "고숙진",
          "권진태",
          "김교은",
          "김나무",
          "김성수",
          "김소리",
          "김아영",
          "김유미",
          "김지숙",
          "도유리",
          "박기완",
          "박성규",
          "박신애",
          "배혜원",
          "서자영",
          "심민정",
          "유효림",
          "윤지애",
          "이남경",
          "이보라",
          "이새미",
          "이성은",
          "이완",
          "이용석",
          "이용정",
          "이우석",
          "이정은",
          "이효은",
          "임영광",
          "정은진",
          "조관희",
          "조윤진",
          "천승희",
          "최윤진",
          "최정아",
          "한아름",
          "황기용"
        ]
      },
      {
        "track": "Product-UX Design",
        "advisors": [],
        "graduates": [
          "고숙진",
          "권진태",
          "김교은",
          "김나무",
          "김병준",
          "김성수",
          "김소리",
          "김아영",
          "김유미",
          "김지숙",
          "박기완",
          "박성규",
          "박신애",
          "배혜원",
          "서자영",
          "심민정",
          "유효림",
          "윤순천",
          "윤지애",
          "이남경",
          "이보라",
          "이새미",
          "이성은",
          "이완",
          "이용석",
          "이용정",
          "이우석",
          "이정은",
          "임영광",
          "정은진",
          "조관희",
          "조윤진",
          "천승희",
          "최윤진",
          "최정아",
          "황기용"
        ]
      }
    ],
    "body": [
      {
        "text": "우리 크리스천 디자이너는 여느 디자이너와 다름없이 디자인 결과물을 만들어내지만 전혀 다른 존재가 된 우리의 창조는 전혀 다른 개념과 마음을 가지고 있는 새로운 피조물이 되어야 할 것이다. 우리가 창조한 디자인에는 크리스천의 영성과 하나님의 창조성이 내재되어 있는 창조물이어야 할 것이다. 새로운 피조물로서의 디자인은 새로운 문화를 안에 담고 있다. 우리의 새로움을 디자인 안에 융화시키고 그 안의 의미로 인해 새로운 문화를 창조함으로써 하나님의 자녀인 우리의 영성과 창조성이 들어있는 새로운 피조물을 디자인하고자 한다."
      }
    ],
    "image": "/images/exhibitions/2002.jpg",
    "size": {
      "width": 565,
      "height": 680
    }
  },
  {
    "year": 2001,
    "name": "exodus",
    "venue": "한동대학교 효암별관",
    "subtitle": [
      "2001 한동대학교 산업정보디자인학부 졸업 작품전",
      "exodus"
    ],
    "advisors": [
      "이진구(학부장, 시각정보디자인)",
      "조원철(자동차 디자인)",
      "김공웅(기초드로잉, 일러스트레이션)",
      "이명구(시각정보디자인)",
      "이은종(산업디자인)",
      "박재관(삼성전자 해외영업팀장, 객원교수)",
      "석금호(산돌커뮤니케이션즈대표, 객원교수)",
      "김성혜(영상디자인, 겸임교수)"
    ],
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "고승완",
          "곽내경",
          "권숙향",
          "권은선",
          "김병수",
          "김지연",
          "김현전",
          "남채완",
          "류송아",
          "마승현",
          "박민정",
          "박슬아",
          "박주연",
          "변혜진",
          "신은정",
          "안효선",
          "오남용",
          "우경례",
          "유영은",
          "윤기숙",
          "윤소정",
          "윤정은",
          "이경남",
          "이경하",
          "이규찬",
          "이문선",
          "이중섭",
          "이지영",
          "이지은",
          "임영실",
          "전예윤",
          "정선은",
          "정지수",
          "정희현",
          "조민정",
          "황선영"
        ]
      }
    ],
    "body": [
      {
        "text": "특히 금년도 산업정보디자인학부의 세 번째 Degree Presentation의 주제는 \"Exodus\"로 이는 한동대학교가 추구하고 있는 Globalism과 디자인을 통해 보다 나은 세상을 지향하는 모든 졸업생들의 사명이라고 봅니다."
      },
      {
        "text": "많은 부정적인 것들로부터 훼파되어가고 있는 불확실성의 미래에서 디자인의 감동을 통하여서 하나님의 나라를 건설하고 세상을 변화시키고자 노력하고 있는 산업정보디자인학부 졸업생들의 의지는 여호수아와 갈렙이 보여주었던 것처럼 매우 소중한 도전과 사명이라고 생각합니다."
      }
    ],
    "image": "/images/exhibitions/2001.jpg",
    "size": {
      "width": 508,
      "height": 680
    }
  },
  {
    "year": 1999,
    "name": "Light",
    "venue": "한동대학교 효암별관",
    "subtitle": [
      "1999 한동대학교 산업정보디자인학부 졸업 작품전",
      "Light: 빛"
    ],
    "verse": {
      "ref": "창세기 1:3~4",
      "text": "하나님이 가라사대 빛이 있으라 하시매 빛이 있었고 그 빛이 하나님이 보시기에 좋았더라.",
      "en": {
        "ref": "Genesis 1:3~4",
        "text": "And God said, 'Let there be light,' and there was light. God saw that the light was good, and he separated the light from the darkness."
      }
    },
    "advisors": [
      "이진구(학부장, 시각정보디자인)",
      "조원철(자동차 디자인)",
      "김공웅(기초드로잉, 일러스트레이션)",
      "이명구(시각정보디자인)",
      "이은종(산업디자인)",
      "박재관(삼성전자 해외영업팀장, 객원교수)",
      "석금호(산돌커뮤니케이션즈대표, 객원교수)",
      "김성혜(영상디자인, 겸임교수)",
      "박혜경(실내디자인, 겸임교수)",
      "박현철(산업디자인, 겸임교수)",
      "김승자(상업사진, 겸임교수)"
    ],
    "alumni": [
      {
        "track": "Visual Communication Design",
        "advisors": [],
        "graduates": [
          "김용주",
          "김태은",
          "나은주",
          "유승명",
          "홍지현"
        ]
      }
    ],
    "body": [
      {
        "text": "특히 금년도 산업정보디자인학부의 첫번째 Degree Presentation 의 주제는 \"빛(Light)\" 으로 이는 하나님께서 처음 창조하신 피조물입니다. \"하나님이 가라사대 빛이 있으라 하시매 빛이 있었고 그 빛이 하나님이 보시기에 좋았더라\" (창세기1:3~4)"
      },
      {
        "text": "빛은 하나님께서 창조하신 그 시점부터 우리와 함께 있었고 앞으로도 우리와 함께 있을 것입니다. 따라서 빛이 주제가 된 금번 Degree Presentation은 디자인을 통해 과거와 현재 그리고 미래가 이어진다는 측면에서 그 의의가 더욱 크다고 봅니다."
      }
    ],
    "image": "/images/exhibitions/1999.jpg",
    "size": {
      "width": 491,
      "height": 680
    }
  },
];
