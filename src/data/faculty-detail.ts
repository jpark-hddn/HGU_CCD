// 교수 상세(모달) 데이터 — 교수진 정보 스프레드시트의 교수별 시트 기준
// 시트가 있는 교수님만 포함. 여기 없는 교수님은 카드 클릭(상세 모달)이 비활성화됨
// 연도 칸이 빈 줄은 위 연도에 이어지는 항목 (시트 원본 그대로)
import type { FacultyDetail } from "@/types/faculty";

export const FACULTY_DETAILS: Record<string, FacultyDetail> = {
  "lee-joongsup": {
    "title": "학부장, 부교수/ 그래픽디자인, 서비스디자인",
    "contact": {
      "office": "느헤미야홀(NHM) 213호",
      "phone": "054-260-1463",
      "email": "joongsup@handong.edu"
    },
    "intro": "이중섭 교수는 아이오와 주립대에서 그래픽디자인 MFA를 받았다. 디자인 전문회사 DBwI를 운영하였으며 다양한 기관 및 기업의 프로젝트를 경험하였으다. 한동대학교 부임 후, 중소기업 및 공공기관의 브랜딩 및 서비스(경험) 디자인 프로젝트를 수행하였다. 주된 연구 관심사는 디자인 분야 뿐만 아니라 기술, 문화, 산업 등 외부적인 경계가 사라지고 있는 초융합 시대에 그래픽디자인이 어떻게 발전하고 이 시대를 준비해야 하는지에 촛점을 맞추고 있다. 그리고 새로운 세대에게 어떤것들을 물려주고, 디자인의 경계를 넘어 그 역할을 확장시키는 가치 있는 교육을 하는 데에 있다.",
    "major": [
      {
        "year": "2015",
        "text": "M.F.A. · Graphic Design | Iowa State University"
      }
    ],
    "biography": [
      {
        "year": "2025 -",
        "text": "Associate Professor | Dean of School of Contents Convergence Design, Handong Global University"
      },
      {
        "year": "2019 - 2025",
        "text": "Assistant Professor | School of Contents Convergence  Design, Handong Global University"
      },
      {
        "year": "2014 - 2019",
        "text": "Adjunct Professor | School of Contents Convergence Design, Handong Global University"
      },
      {
        "year": "2006 - 2009",
        "text": "Creative Director | DBwI, GangNam, Seoul"
      }
    ],
    "awards": [
      {
        "year": "2021",
        "text": "The final Top 20, ‘AED Taxi Service’ | 2021 National Development Project Contest <Idea League>, SBS(Seoul Broadcasting System) and the Korea Chamber of Commerce and Industry"
      },
      {
        "year": "2018",
        "text": "Best Creativity | Convergence Art & Design International 2018, Korea"
      },
      {
        "year": "2017",
        "text": "Most-Accessed Dissertations and Master’s Theses Award in the World, 15th place overall, 1st place in design | ProQuest, USA"
      },
      {
        "year": "2015",
        "text": "Top4 Research Paper, Corresponding Author  | CHI 2015 Student Design Competition"
      },
      {
        "year": "2014",
        "text": "Handong Research Achievement Award, Handong Global University"
      }
    ],
    "researchInterest": "Branding, Graphic and Service Design",
    "publications": [
      {
        "label": "Peer-reviewed Journal Articles",
        "entries": [
          {
            "year": "2026",
            "text": "Son, Y., & Lee, J. S. (2026). A Study on the Elevator External Interface Design Based on CPTED: Focusing on the Non-Display of Floor Numbers. Smart Media Journal, 15(6), 9–16. https://doi.org/10.30693/SMJ.2026.15.6.9"
          },
          {
            "text": "Sung, Y., Park, H., Kim, M., Kim, C., & Lee, J. S. (2026). A Study on Activating Foster Care for Abandoned Animals as a Solution to Euthanasia and Overpopulation in Public Shelters. Design Works, 9(2), 75–92. https://doi.org/10.15187/dw.2026.06.9.2.75"
          },
          {
            "text": "Kang, J., Kim, M., Lim, J., Yuk, J., & Lee, J. S. (2026). Design of a Linked Outfit Recommendation System Based on Personal Gallery Data. Design Works, 9(1), 61–68. https://doi.org/10.15187/dw.2026.03.9.1.61"
          },
          {
            "text": "Park, Y., & Lee, J. S. (2026). Generative AI-Based User Research Interviews: A Study on Follow-Up Question Generation and Analysis. Smart Media Journal, 15(3)."
          },
          {
            "year": "2025",
            "text": "Kim, S., Lee, J., Han, S., & Lee, J. S. (2025). A Study on a Family-Type Accommodation Service Model Utilizing Vacant Houses in the Old Downtown: Focused on Jungang-dong, Pohang. The Korean Society of Science & Art, 43(5), 561–575."
          },
          {
            "text": "Hong, J. G., Shin, W. S., & Lee, J. S. (2025). A Study on a Public Transit Mobility Support Service for the Transportation Vulnerable Using Personal Mobile Devices. The Korean Society of Science & Art, 43(5), 613–625. https://doi.org/10.17548/ksaf.2025.12.30.613"
          },
          {
            "text": "Yoo, J. H., Lee, J. S., Choi, Y. Y., & Ahn, H. J. (2025). Proposal for a System to Promote Reusable Containers for Food Delivery through Standardization. Korea Design Forum, 30(1), 291–300. https://doi.org/10.21326/ksdt.2025.30.1.025"
          },
          {
            "year": "2024",
            "text": "Ro, Y. W., Song, M. J., Lim, D. S., & Lee, J. S. (2024). A Proposal for an AI-Driven Budget Management Application Based on an Analysis of College Students’ Spending Behaviors. The Korean Society of Science & Art, 42(5), 77–87. https://doi.org/10.17548/ksaf.2024.12.30.77"
          },
          {
            "text": "Kim, K., Park, E., Cha, K., Ahn, K., & Lee, J. S. (2024). A Study on an RFID-Based Smart Clothing Management System Through an Analysis of Clothing Care Label Issues. The Korean Society of Science & Art, 42(5)."
          },
          {
            "text": "Hong, J. G., & Lee, J. S. (2024). A Study on the Necessity of Sonic Branding for Processed Coffee Product Promotion: Focused on Starbucks RTD Coffee. Journal of the Korea Society of Visual Design Forum, 29(4), 165–173."
          },
          {
            "text": "Lee, S. Y., Hong, J. G., & Lee, J. S. (2024). A Study on Key Arrangement of Virtual Keyboard Based on an Eyeball Input System. Smart Media Journal, 13(4), 94–103."
          },
          {
            "year": "2023",
            "text": "Lee, J. S., & Park, C. S. (2023). Reinterpreting the Design of Noah’s Ark in the Contextual Perspective of Noah’s Era. Faith and Scholarship, 28(2), 5–21. https://doi.org/10.30806/fs.28.2.202306.5"
          },
          {
            "year": "2022",
            "text": "Kim, O., Oh, J. J., Kim, Y. Y., Lee, J. S., & Lee, J. K. (2022). A Study on Application of Converging Pictorial Typography and Storytelling in Public Design. The Korean Society of Science & Art, 40(3), 75–86. https://doi.org/10.17548/ksaf.2022.06.30.75"
          },
          {
            "text": "Kim, O., Lee, J. S., Kim, Y. Y., & Lee, J. K. (2022). A Study on the Proposal of New National Symbols for Unified Korea. The Korean Society of Science & Art, 40(3), 59–73. https://doi.org/10.17548/ksaf.2022.06.30.59"
          }
        ]
      },
      {
        "label": "Proceeding _ Conference Presentations",
        "entries": [
          {
            "year": "2026",
            "text": "Hong, J. G., Lee, J. S., & Lim, H. (2026). Design and Usability Evaluation of a Circular Keyboard Optimized for Gaze-Input Systems. In HCI International 2026 Posters (Communications in Computer and Information Science, Vol. 3049, pp. 530–539). Springer. https://doi.org/10.1007/978-3-032-30819-1_55"
          },
          {
            "text": "Oh, H., Lee, H., Kim, J., Jang, M., & Lee, J. S. (2026). Exploring Service Design Directions for Enhancing Social Relationships Among Older Adults. Proceedings of the 2026 Spring International Conference of the Korean Society of Design Science, Republic of Korea."
          },
          {
            "text": "Song, H., Ko, J., Kim, Y., Lee, S., & Lee, J. S. (2026). AI Middle Manager Service Design to Reduce Employer Training Burden. Proceedings of the 2026 Spring International Conference of the Korean Society of Design Science, Republic of Korea, 622–627."
          },
          {
            "text": "Song, E., Park, Y., Jo, H., Lee, D., Lee, H., & Lee, J. S. (2026). Design of an AI-Based Real-Time Traffic Accident Information Sharing System for Preventing Secondary Accidents on Expressways. Proceedings of the 2026 Spring International Conference of the Korean Society of Design Science, Republic of Korea."
          },
          {
            "year": "2025",
            "text": "Kim, S., Lee, J., Han, S., & Lee, J. S. (2025). Development and Branding of a Family-Oriented Accommodation Service Utilizing Vacant Houses: Focusing on Jungang-dong, Pohang. Proceedings of the 2025 Fall International Conference of the Korean Society of Design Science, Republic of Korea."
          },
          {
            "text": "Kwon, M., Park, J., Ahn, M., Yoon, H., & Lee, J. S. (2025). A Service Design Proposal for Improving Public Awareness of Korean Sign Language. Proceedings of the 2025 Fall International Conference of the Korean Society of Design Science, Republic of Korea."
          },
          {
            "text": "Kim, M., Park, H., Sung, Y., Kim, C., & Lee, J. S. (2025). A Study on Promoting Foster Care for Abandoned Animals to Address Euthanasia Caused by Overcrowding in Public Animal Shelters. Proceedings of the 2025 Fall International Conference of the Korean Society of Design Science, Republic of Korea."
          }
        ]
      }
    ],
    "patents": [
      {
        "year": "2026",
        "text": "“전기자동차에 탑재된 AED의 실시간 모니터링 방법 및 시스템”, 이중섭, 이원섭/ 특허번호: 10-2990989, 대한민국 특허청"
      }
    ],
    "works": [
      {
        "year": "2026",
        "text": "XR 스마트글래스의 AI서비스 구현을 위한 콘텐츠 및 SW 개발, Branding & GUI/ 산업통상자원부, Brand design, Graphic User Interface Design, Creative director."
      },
      {
        "text": "Asia Leadership Training Media Center/ KCCN, Brand design, Creative director."
      },
      {
        "text": "첨단 산업 제조공정의 머신비전 검사 시스템을 위한 브랜딩 기반 모니터링 UI 시스템 구축 및 설계/ Connected Insight, Chunan ChungNam, Korea: UI System Design, Creative Director."
      },
      {
        "text": "포항시 그린루프 유동인구 인접지역 확산을 통해 원도심 활성화를 위한 웨이파인딩 시스템 개발 및 실증 프로젝트/ 포항시, HI Alliance, Pohang, Korea: Wayfinding Design, Project Director."
      },
      {
        "text": "포항시 도심 공동화 문제 해결을 위한 가족형 숙박 서비스 기획 및 실행 전략 연구/ 포항시, 포항시지속가능발전연구소, Pohang, Korea: Service Design, Project Director."
      },
      {
        "text": "울릉도 외국인 관광객(FIT) 유입을 위한 앵커 액티비티 개발 제안/ 울릉군, RISE사업단, Ulleung, Korea: Service Design, Project Director."
      },
      {
        "text": "Handong Residential College Branding Project/ 한동대학교 생활관, Pohang, Korea: Brand design, Wayfinding Design, Creative director."
      },
      {
        "text": "Hanwha Qcell, Solar Cell 모도 딥러닝 검사 시스템 GUI/ Connected Insight, Chunan ChungNam, Korea: UI Guideline, GUI Design, Creative Director."
      },
      {
        "year": "2025",
        "text": "시선 추적 기반 원형 배열 인터페이스의 다국어 시스템 디자인 연구: AI 활용 및 XR환경으로의 확장/ 글로컬대학30, CREDO Flagship, Pohang, Korea: Service Design, Project Director."
      },
      {
        "text": "예방적 의료 접근성 향상을 위한 지역 시민 참여형 초연결 헬스케어 플랫폼 구축/ 포어텔마이헬스, Pohang, Korea: Service Design, Project Director."
      },
      {
        "text": "자연 재난 이후 삶의 재건을 돕는 회복 운동 플랫폼 브랜딩/ 의성 보나콤 공동체, Pohang, Korea: Service Design, Creative Director."
      },
      {
        "text": "지역 6차산업(농촌융복합산업) 구축을 위한 디자인 개발/ 착한아빠농장, Pohang, Korea: Service Design, Project Director."
      },
      {
        "text": "Micro Plastics Cleansing Products 5mm/ DeComposition, Pohang, Korea: Web Design, Brand Design, Creative Director."
      },
      {
        "text": "Handong Genesis Lab./ 한동대학교, Pohang, Korea: Brand design, Wayfinding Design, Creative director."
      },
      {
        "year": "2024",
        "text": "부산 연재구 오방맛길 특화브랜드 개발/ 재단법인 연제구 상권활성화 재단, Busan Yunjai, Korea: Brand Design, Package Design, Creative Director."
      },
      {
        "text": "Solar Cell 모도 Inspection Launcher/ Connected Insight, Cheonan ChungNam, Korea: UI Guideline, GUI Design, Creative Director."
      },
      {
        "text": "시니어 경험 기반의 휴대폰 시나리오 개발, Developing cell phone user scenarios based on senior experience, Design Research/ ALT, Hidden Figures, 한국연구재단, UX and Design Research, Project Manager and Art director."
      },
      {
        "text": "Handong Grace School, Brand Re-newer Design/ 한동 김영길 그레이스 스쿨, Handong KimYoungGil Grace School, Pohang, Korea, Creative director."
      },
      {
        "year": "2023",
        "text": "IJM(International Justice and Mission) KOREA, Branding and Promotion System Guideline Design/ IJM Korea, Seoul, Korea: Brand renewal design, Package Design Promotion Plan, Project Manager and Creative director."
      },
      {
        "text": "위하는 내과의원, For You Internal Medicine/ 위하는 내과, Sejong, Korea; Brand and Interior Design, Creative director."
      },
      {
        "year": "2022",
        "text": "공예품 원본인증·유통 기반 창작지원 기술개발, 국가 R&D/ 한국디자인진흥원, 광주과학기술원: Brand design, Web Design, Art director."
      }
    ]
  },
  "park-chansong": {
    "title": "조교수 / 모빌리티디자인, 인간공학디자인",
    "contact": {
      "office": "느헤미야홀(NHM) 216호",
      "phone": "054-260-1437",
      "email": "cspark@handong.edu"
    },
    "intro": "박찬송 교수는 스웨덴 우메오 대학교 디자인대학에서 운송디자인 MFA를 받았다. HD현대 디자인센터에서 약 10년간 선임·책임연구원으로 재직하며 선박, 의료·산업용 로봇, 산업차량, 건설장비의 내외장 디자인과 가상 휴먼 시뮬레이션 기반의 인간공학 디자인 가이드 개발을 이끌었다. 2021년 한동대학교에 부임한 후에는 KG모빌리티, 한국항공우주산업, 한화 등과 함께 차세대 SUV 인테리어, KF-21 전투기 위장 도장 그래픽, K9 자주포 인간공학 디자인 가이드라인 등의 산학 프로젝트를 수행하였다. 주된 연구 관심사는 모빌리티·로봇·선박 디자인, 가상 휴먼 시뮬레이션을 활용한 인간공학적 디자인 평가 및 3D 모델링 설계이다.",
    "major": [
      {
        "year": "2007 - 2009",
        "text": "M.F.A., Transportation Design | Umeå Institute of Design, Sweden"
      }
    ],
    "biography": [
      {
        "year": "2021 - Present",
        "text": "Assistant Professor | School of Contents Convergence Design, Handong Global University"
      },
      {
        "year": "2018 - 2021",
        "text": "Industrial Design Lead | Design Center, Hyundai CE"
      },
      {
        "year": "2011 - 2018",
        "text": "Senior Industrial Designer | Design Center, HD Hyundai"
      },
      {
        "year": "2008",
        "text": "Transportation Designer | Design Team, GP designpartners, Austria"
      }
    ],
    "awards": [
      {
        "year": "2024",
        "text": "Best Creativity | Convergence Art & Design International 2024, Korea"
      }
    ],
    "researchInterest": "Mobility, Robot & Marine Vessel Design; Ergonomic Virtual Human Simulation; 3D Modeling Design",
    "publications": [
      {
        "label": "Peer-reviewed Journal Articles",
        "entries": [
          {
            "year": "2026",
            "text": "“A Study on Advanced Product Design for Enhancing Generation Alpha's Learning Engagement: Focusing on Dynamic Visual Elements and User Control Elements”, Kim, S., Park, C., Journal of the Korean Society of Science & Art, Vol.44(4)"
          },
          {
            "year": "2025",
            "text": "“A Study on the Advanced Interior Design of a Next-Generation Compact SUV Incorporating the Characteristics of Generation Z”, Park, C., Journal of the Korean Society of Science & Art, Vol.43(5)"
          },
          {
            "year": "2024",
            "text": "“Usability Evaluation of a Mobile Brain-Training Application Using an Eye Tracker”, Park, C., Choi, I., Journal of the Korean Society of Science & Art, Vol.42"
          },
          {
            "year": "2023",
            "text": "“Ergonomic Evaluation and Improvement of the K9 Self-Propelled Howitzer Design”, Kim, M., Kim, R., Jeong, Y., Jeong, H., Park, J., Lee, S., You, H., Park, C., Journal of the Ergonomics Society of Korea, Vol.42(5), pp.495-507"
          },
          {
            "text": "“The Advancement Trend of Digital Human Modeling and Simulation for Ergonomic Design and Evaluation”, Park, J., Kim, M., Jung, H., Park, C., Cui, X., Lee, S., You, H., Journal of the Ergonomics Society of Korea"
          },
          {
            "text": "“A Design Reinterpretation of the Ark's Form from the Contextual Perspective of Noah's Era”, Lee, J., Park, C., Faith & Scholarship, Vol.28(2), pp.5-21"
          },
          {
            "year": "2022",
            "text": "“A Study on the Excavator Cockpit Usability Analysis Method Using Virtual Human Simulation”, Park, C., Choi, I., Journal of Industrial Design Studies, Vol.16(4), pp.1-11"
          }
        ]
      },
      {
        "label": "Proceeding _ Conference Presentations",
        "entries": [
          {
            "year": "2017",
            "text": "“Ergonomic Evaluation Method of Major Components of an Excavator”, Jung, H., Lee, S., Choi, Y., Moon, S., Oh, G., Sung, C., Lee, S., Lee, S., Park, C., Choi, J., You, H., Proceedings of the Korean Institute of Industrial Engineers (KIIE) Spring Joint Conference, pp.4975-4985"
          },
          {
            "year": "2014",
            "text": "\"Improving User Experience Design for Gait-Assistance Rehabilitation Robots through an Ergonomic Approach\", Park, C., Conference Presentation of Korean Society of Design Science, November 1, 2014"
          }
        ]
      }
    ],
    "patents": [
      {
        "year": "2016",
        "text": "Drive Unit for Welding Robot Positioner (Patent No. 3008613680000), HD Hyundai"
      },
      {
        "text": "Rotary Table for Welding (Patent No. 3008613690000), HD Hyundai"
      },
      {
        "text": "Controller for Engines (Patent No. 3008506830000), HD Hyundai"
      },
      {
        "text": "Electronic Engine Controller (Patent No. 3008429640000), HD Hyundai"
      },
      {
        "text": "Rehabilitation Device for Gait Training (Patent No. 3008425410000), HD Hyundai"
      },
      {
        "year": "2015",
        "text": "Robot Base for Interventional Procedures (Patent No. 3008177930000), HD Hyundai"
      },
      {
        "year": "2014",
        "text": "Counterweight for Forklifts (Patent No. 3007600570000), Hyundai CE"
      },
      {
        "text": "Electrical Distribution Board (Patent No. 3007305110000), Hyundai Electric"
      },
      {
        "text": "Electrical Distribution Board (Patent No. 3007300250000), Hyundai Electric"
      }
    ],
    "works": [
      {
        "year": "2026",
        "text": "Eco-friendly Ship Charging System Design / Yusin Co., Ltd. / Design Director"
      },
      {
        "text": "Eco-friendly Ship Product BI Design / Yusin Co., Ltd. / Design Director"
      },
      {
        "year": "2024",
        "text": "Next-Generation Tivoli (X200) Interior Design for Generation Z / KG Mobility / Design Director"
      },
      {
        "text": "Usability Evaluation Method for a Mobile Brain-Training Application Using an Eye Tracker / Emocog Inc. / Project Manager"
      },
      {
        "year": "2023",
        "text": "Biomimetic Bathtub Product Design / Royal & Co. / Design Director"
      },
      {
        "text": "Next-Generation SUV (F100) Interior Design for the New Senior Generation / KG Mobility / Design Director"
      },
      {
        "text": "Inflatable Aeroponic Smart Farm Design / Midbar Co., Ltd. / Design Director"
      },
      {
        "year": "2022 - 2023",
        "text": "KF-21 Fighter Aircraft Camouflage Color & Graphic Design (Export Version) / Korea Aerospace Industries (KAI) / Project Manager"
      },
      {
        "year": "2022 - 2023",
        "text": "K9 Self-Propelled Howitzer Ergonomic Design Guideline Research / Hanwha Aerospace / Ergonomics Researcher, Virtual Human Simulation"
      },
      {
        "year": "2019 - 2021",
        "text": "Next-Generation Construction Equipment Cockpit Interior Design / Hyundai CE / Project Manager, Ergonomic Design Guideline & Interior Design"
      },
      {
        "year": "2018 - 2019",
        "text": "Ergonomic Design Guide Development for the Optimal Layout of Industrial Vehicle Cockpits / Hyundai CE / Project Manager, Ergonomic Design Guideline"
      },
      {
        "year": "2018",
        "text": "Electric Forklift Exterior & Interior Design / HD Hyundai / Project Manager, Exterior & Interior Design"
      },
      {
        "year": "2017 - 2018",
        "text": "Reach Truck Exterior & Interior Design Development / HD Hyundai / Project Manager, Ergonomic Design Guideline & Exterior Design"
      },
      {
        "year": "2016 - 2017",
        "text": "Usability Improvement of a Gait Rehabilitation Robot through an Ergonomic Approach / HD Hyundai / Project Manager, Ergonomic Design Guideline & Exterior Design"
      },
      {
        "year": "2015 - 2017",
        "text": "Interventional Procedure Robot System Design Development / HD Hyundai / Project Manager, Ergonomic Design Guideline & Exterior Design"
      },
      {
        "year": "2013 - 2015",
        "text": "Oceanographic Research Vessel Exterior Design Development / HD Hyundai / Exterior Design Lead"
      }
    ]
  },
  "lee-eunjong": {
    "title": "정교수 / UX/UI 디자인, AI 인터페이스, 서비스 디자인",
    "contact": {
      "office": "한동대학교 (포항시 북구 흥해읍 한동로 558)",
      "phone": "054-260-1462",
      "email": "sbell@handong.edu"
    },
    "intro": "이은종 교수는 KAIST 산업디자인학과에서 학사, 석사 및 박사과정을 수료하였다. 1997년부터 한동대학교 콘텐츠융합디자인학부 교수로 재직 중이며, Design 연구소 및 Life Experience Design 연구소 소장을 맡고 있다. LG전자, 삼성전자, KAI(한국항공우주산업), SK텔레콤 및 정부 산하 기관과의 수많은 산학/국가 연구 프로젝트를 총괄하였으며, 최근에는 AI 기반 UX/UI 디자인 프레임워크, 모빌리티 UX, Generative AI 가전 및 인터페이스 설계 연구를 활발히 수행하고 있다.",
    "major": [
      {
        "year": "2008",
        "text": "Ph.D. Coursework Completed, Industrial Design | KAIST"
      }
    ],
    "biography": [
      {
        "text": "한동대학교 콘텐츠융합디자인학부 정교수"
      },
      {
        "text": "한동대학교 Design 연구소 소장"
      },
      {
        "text": "한동대학교 Life Experience Design 연구소 소장"
      },
      {
        "text": "산업디자인학연구지 편집위원"
      },
      {
        "text": "서비스디자인 학회 감사"
      },
      {
        "text": "한국디자인학회 이사"
      },
      {
        "text": "전 HCI Korea 2025 공동조직위원장"
      },
      {
        "text": "전 서비스디자인 협의회 부회장"
      },
      {
        "text": "전 삼성전자 디자인센터 자문"
      },
      {
        "text": "전 한국스마트미디어학회 상임이사"
      }
    ],
    "awards": [
      {
        "year": "2019",
        "text": "최우수 강의상, 한동대학교(전교 2명 선정),"
      },
      {
        "text": "Best teacher 3회 선정, 한동대학교"
      },
      {
        "year": "2007",
        "text": "한국디자인학회 주최 2007 대학생 학술대회 지도교수상"
      },
      {
        "year": "2004",
        "text": "2004 Awarded SK telecom Best Partner"
      }
    ],
    "researchInterest": "AI 기반 UX/UI 디자인, 모빌리티 UX, Generative AI 인터페이스, 인간 중심 서비스 디자인, 사용자 경험(UX) 방법론",
    "publications": [
      {
        "label": "Peer-reviewed Journal Articles",
        "entries": [
          {
            "year": "2026",
            "text": "“네러티브와 시각적 정합성 확보를 위한 생성형 AI 캐릭터 연구: 캐릭터 Uniqueness 및 Appearance 프레임워크를 기반으로”, 김고은, 박유진, 손연우, 박에녹, 이석영, 김혜나, 최석현, 이은종, 스마트미디어저널, Vol.15 No.3"
          },
          {
            "year": "2025",
            "text": "“사용자 경험 개선을 위한 Generative AI Framework 기반 멀티모달 가전 AI 레벨 규명 및 설계 원칙 제안 – 세탁기 사례를 중심으로”, 김현서, 이은종, 스마트미디어저널, Vol.14 No.6"
          },
          {
            "year": "2025",
            "text": "“홈 액티비티 컨텍스트 분석을 통한 에어솔루션 연구: 홈 액티비티 구성 요소 프레임웍을 기반으로”, 박유진, 이은종, 스마트미디어저널, Vol.14 No.8, pp.9-20"
          },
          {
            "year": "2025",
            "text": "“인지심리 원리를 기반으로 한 FPC 분석 프레임 제안 및 생성형 AI 적용 가능성 탐색”, 박유진, 최석현, 이은종, 산업디자인학연구, Vol.19 No.2, pp.115-133"
          },
          {
            "year": "2022",
            "text": "“혼합현실 컨트롤에 최적화된 인터랙션을 위한 손 동작과 컨트롤 방식 Matching체계의 제안 - Augmented Behavior와 Meta Interface를 중심으로”, 이사야, 이은종, 스마트미디어저널, Vol.11 No.9"
          },
          {
            "year": "2021",
            "text": "“주행 공공 안내표지판의 맥락적 시인성 향상을 위한 표지판 디자인 연구”, 이사야, 조익현, 김채희, 이중섭, 김승준, 이은종, 스마트미디어저널, Vol.10 No.4"
          },
          {
            "year": "2021",
            "text": "“공예품 이커머스 데이터베이스 구축을 위한 공예품 조형 디자인 분류체계 개발”, 조익현, 이사야, 김채희, 이중섭, 이은종, 스마트미디어저널, Vol.10 No.4"
          },
          {
            "year": "2020",
            "text": "“컨텍스트 리서치에 기반한 BX디자인 구축에 관한 연구 -동대문 패션 도매시장 디자인 개발 사례를 중심으로-”, 이강현, 이은종, 조형미디어학, Vol.23 No.1, pp.249-261"
          },
          {
            "year": "2020",
            "text": "“원격제어 모바일 앱의 제어 단계에서 복합적으로 요구되는 정보 속성 융합 프레임워크 개발 -커넥티드 카, 스마트 홈 모바일 앱을 중심으로 -”, 동가람, 이은종, 한국과학예술융합학회, Vol.38 No.2, pp.123-133"
          }
        ]
      },
      {
        "label": "Proceeding _ Conference Presentations",
        "entries": [
          {
            "year": "2025",
            "text": "“개인의 상황, 환경에 맞춰 주는 Wearable 제품의 컨셉 발굴을 위한 연구”, 허준행, 이은종, 한국HCI학회 학술대회, pp.296-301"
          }
        ]
      }
    ],
    "works": [
      {
        "year": "2026",
        "text": "Z세대 대상 영어 교육 최적화를 위한 AI 캐릭터 구축 프로세스 개발 연구 / 교내연구지원사업 / 연구총괄"
      },
      {
        "year": "2025",
        "text": "AI-Defined Vehicle 기반 Y2030 모빌리티 UX / LG전자 / 연구총괄"
      },
      {
        "year": "2025",
        "text": "홈스크린의 미래 개발 / LG전자 / 연구총괄"
      },
      {
        "year": "2025",
        "text": "AI 에이전트 UX/UI 디자인 프레임웍 개발 / (주)히든피겨스 / 연구총괄"
      },
      {
        "year": "2025",
        "text": "UX기반의 AI인터페이스 가이드 개발에 관한 연구 / 교내연구지원사업 / 연구총괄"
      },
      {
        "year": "2024",
        "text": "AI 중심의 미래 모빌리티 UX디자인 / LG전자 / 연구총괄"
      },
      {
        "year": "2024",
        "text": "간호사를 위한 스마트 스케줄링 UI/UX 개발 / 한국연구재단 / 연구총괄"
      },
      {
        "year": "2023",
        "text": "KFX 외부도장 그래픽 디자인 개발 / KAI (한국항공우주산업) / 공동연구총괄"
      },
      {
        "year": "2023",
        "text": "LG전자 Y2030 Mobility UX / LG전자 / 연구총괄"
      },
      {
        "year": "2023",
        "text": "LG전자 직무 이동자를 위한 UX 기본 역량강화 방법론 연구 / LG전자 / 연구총괄"
      },
      {
        "year": "2022",
        "text": "공예품 원본인증, 유통 기반 창작지원 기술개발 / 한국콘텐츠진흥원 / 공동연구"
      },
      {
        "year": "2022",
        "text": "LG전자 차세대 에어솔루션의 신규서비스 및 기기 컨셉발굴 / LG전자 / 연구총괄"
      },
      {
        "year": "2021",
        "text": "KF-X 색채디자인 가이드라인 연구 / KAI (한국항공우주산업) / 공동책임"
      },
      {
        "year": "2021",
        "text": "LG전자 대형스크린 신규서비스 및 기기컨셉 개발 / LG전자 / 연구총괄"
      },
      {
        "year": "2020",
        "text": "길 찾기 작업 중 공공안내 표지판의 시인성에 영향을 미치는 핵심 맥락모듈, 공간유형, 평가요인 연구 / 한국콘텐츠진흥원 (GIST) / 위탁연구"
      }
    ]
  },
  "ju-youngmin": {
    "title": "부교수 / 브랜드경험디자인, 서비스경험디자인",
    "contact": {
      "office": "느헤미야홀(NHM) 222호",
      "phone": "054-260-1417",
      "email": "youngmin@handong.edu"
    },
    "intro": "주영민 교수는 동시대의 현상과 사람들의 경험을 바탕으로 디자인을 연구하고 실천한다. SK텔레콤에서 AI·로봇·서비스 플랫폼의 UX와 스마트 디바이스 기획·디자인을 이끌었으며, 브랜드 컨설팅펌 Clay의 전략총괄을 거쳐 AX 디자인 컨설팅펌 ㈜히든피겨스(hddn)를 설립했다. 이후 국내외 주요 정보통신 및 금융, 모빌리티 기업들의 브랜드와 디지털 제품·서비스 디자인의 혁신 전략을 컨설팅한 경험을 바탕으로 한국디자인학회 이사, 한국HCI학회 조직위원 등의 활동을 통해 산업과 학문의 가치를 의미있게 연결하려 노력해왔다. 주요 관심사는 시각 언어, 경험과 감각, 형태와 태도의 관계이며, 브랜드 경험과 인식이 행동에 미치는 영향과 AI 기반 서비스 디자인을 연구하고 있다.",
    "major": [
      {
        "year": "2022",
        "text": "M.F.A. in Industrial Design, Hongik University"
      }
    ],
    "biography": [
      {
        "year": "2026 - Present",
        "text": "Associate Professor, School of Contents Convergence Design, Handong Global University"
      },
      {
        "year": "2022 - 2026",
        "text": "Adjunct Professor, School of Contents Convergence Design, Handong Global University"
      },
      {
        "year": "2019 - 2026",
        "text": "Founder and CEO, Hidden Figures Inc. (BX/UX/AX Design Consultancy)"
      },
      {
        "year": "2016 - 2019",
        "text": "Chief Strategy Officer, Clay Inc. (Brand Consultancy)"
      },
      {
        "year": "2005 - 2016",
        "text": "Design Project Leader, SK Telecom (UX, Smart Device and AI & Robot Team)"
      },
      {
        "year": "2004 - 2005",
        "text": "UX Lead, ITL (Web Design Agency)"
      },
      {
        "year": "2004",
        "text": "UX Consultant, ProDVD (NJ, United States)"
      },
      {
        "year": "2000 - 2002",
        "text": "Head of Design, HosannaNet (Web Portal & Media Service Platform)"
      }
    ],
    "awards": [
      {
        "year": "2025",
        "text": "Frontier Grand Prize, Korea Research Association of International Commerce (Hidden Figures Inc.)"
      },
      {
        "year": "2023",
        "text": "iF DESIGN AWARD GOLD, User Experience, Shared Safety (Hidden Figures Inc.)"
      },
      {
        "year": "2023",
        "text": "iF DESIGN AWARD, Service Design, Shared Safety (Hidden Figures Inc.)"
      },
      {
        "year": "2014-2016",
        "text": "SKMS Prize (Personal, SK telecom), SUPEX Prize (Team, SK Group)"
      }
    ],
    "researchInterest": "Brand Experience, Cognitive Psychology in Design, AI Transformation and AI-Enabled Service Design, Design System, Human-Computer Interaction, Human-AI Interaction",
    "extra": [
      {
        "title": "Affiliations",
        "entries": [
          {
            "year": "2026 - Present",
            "text": "Board Member, Korean Society of Design Science (한국디자인학회)"
          },
          {
            "year": "2024 - Present",
            "text": "Organizing Committee Member, HCI Society of Korea (한국HCI학회)"
          }
        ]
      },
      {
        "title": "Teaching",
        "entries": [
          {
            "year": "2026",
            "text": "Invited Speaker, Creative MIXOLOGY, 2026 Creative Director Seminar, Korea Internet Professional Association(Kipfa)"
          },
          {
            "year": "2025",
            "text": "Guest Lecturer, Innovative Product Design (DEA 1110), Cornell University"
          },
          {
            "year": "2025",
            "text": "Tutorial Speaker, AI Service Experience Strategy, HCI Korea"
          },
          {
            "year": "2024",
            "text": "Invited Speaker, Financial Experience Design for Young Users, Woori Bank"
          },
          {
            "year": "2023",
            "text": "UX Expert Mentor, Apple Developer Academy at POSTECH"
          },
          {
            "year": "2023",
            "text": "Invited Speaker, UX Design Consulting Strategy, Boston Consulting Group Design Studio"
          },
          {
            "year": "2023",
            "text": "Guest Lecturer, Brand Experience Strategy, Hongik University"
          },
          {
            "year": "2011 - 2022",
            "text": "UX and Development Mentor, Software Maestro Program, Institute of Information & Communications Technology Planning & Evaluation (IITP)"
          }
        ]
      }
    ],
    "publications": [
      {
        "entries": [
          {
            "year": "2026",
            "text": "Ju, Y., & Oh, Y. (2026). Development of local food-tech innovation's brand equity and design: A case study on Korean beef home meal replacements. Korea Logistics Review"
          },
          {
            "year": "2025",
            "text": "Ju, Y. (2025). Acceptance and resistance of AI-based UI/UX: A focus on electronic commerce platform. Management & Information Systems Review"
          },
          {
            "year": "2008",
            "text": "Kang, W., Ju, Y., Seo, J.-Y., & Lim, S.-H. (2008). A case study for alternative usability evaluation method to enhance mobile user experience: With special focus on the UI enhancement for SKT mobile contents box. Proceedings of HCI Korea 2008."
          },
          {
            "year": "2007",
            "text": "Kang, W., Ju, Y., Kim, J., & Lee, J. (2007). A case study of evaluation methodology on GUI consistency rate: With special focus on the SKT style guide development. Proceedings of HCI Korea 2007."
          }
        ]
      }
    ],
    "patents": [
      {
        "year": "2024",
        "text": "Customized AI Recommendation Design System Based on Customer Requirements and Context Analysis. Korean Patent No. 10-2738455. Inventor."
      },
      {
        "year": "2022",
        "text": "Remote Control Service. Korean Patent No. 10-2390575. Co-inventor."
      },
      {
        "year": "2020",
        "text": "Terminal Device Providing Service Search Results with Contact Information. Korean Patent No. 10-2162425. Co-inventor."
      },
      {
        "year": "2018",
        "text": "Music Album Service System Using Beacon. Korean Patent No. 10-1923953. Co-inventor."
      },
      {
        "year": "2016",
        "text": "Method, Apparatus and Terminal for Providing User Interface of Simple Mode. Korean Patent No. 10-1665311. Co-inventor."
      },
      {
        "year": "2015",
        "text": "Method and Apparatus for Providing Power-Saving Mode. Korean Patent No. 10-1524673. Co-inventor."
      }
    ],
    "works": [
      {
        "year": "2026",
        "text": "Shinhan Bank | UX design consulting and development for MLSecOps AI Platform."
      },
      {
        "year": "2025 - 2026",
        "text": "LG Electronics | UX planning and design for the LGE.com AI shopping agent."
      },
      {
        "year": "2025 - 2026",
        "text": "SK Telecom | Development and operation of AI recommendation services for T3S, spanning T world, T Direct Shop, and T Membership."
      },
      {
        "year": "2025",
        "text": "POSTECH | Brand application consulting for university merchandise."
      },
      {
        "year": "2024 - 2026",
        "text": "LG U+ | UX planning and design for AI calling, robot monitoring and control, and IPTV services."
      },
      {
        "year": "2024",
        "text": "SK Group | Design system development for the AI transformation of internal management systems."
      },
      {
        "year": "2024",
        "text": "SK Telecom | Voice UX strategy consulting for an AI contact center."
      },
      {
        "year": "2024",
        "text": "MEGA Coffee | Mobile app redesign, including UX strategy, interface planning, and visual design."
      },
      {
        "year": "2023",
        "text": "Shinhan AI | Service development for MOMOOL, a generative AI financial assistant."
      },
      {
        "year": "2023",
        "text": "Hana Bank | Brand identity and design consulting for iBOOJA 3.0, a financial service for young users."
      },
      {
        "year": "2023",
        "text": "LX Hausys | Brand identity design consulting for new products."
      },
      {
        "year": "2022",
        "text": "Hoban Construction and Pluxity | UX concept direction for Shared Safety, a digital twin platform for construction-site safety and communication."
      },
      {
        "year": "2022",
        "text": "CJ Group | Design system guidelines for Digital Channel 3.0."
      },
      {
        "year": "2021 - 2022",
        "text": "Samsung Card | Design and development of next-generation mobile and web platforms."
      },
      {
        "year": "2020 - 2022",
        "text": "Hyundai Motors Group | Service design development and operation of Driving Insight, a data-driven mobility platform."
      },
      {
        "year": "-2020",
        "text": "(Earlier experience omitted)"
      }
    ]
  },
  "choi-inwook": {
    "title": "교수 / 제품디자인, 컴퓨터그래픽디자인",
    "contact": {
      "office": "느헤미야홀(NHM) 218A호",
      "phone": "054 260 1467",
      "email": "faithful@handong.edu"
    },
    "intro": "최인욱 교수는 국민대학교 공업디자인학과를 졸업하고 LG전자에서 연구원으로 근무한 뒤, 미국으로 건너가 로체스터 공과대학교(RIT)에서 컴퓨터 그래픽 디자인을 공부했습니다. 그는 미국 한국인 교회에서 만난 학생을 통해 한동대학교를 알게 되었으며, 졸업과 동시에 기회가 열려서 감사한 마음으로 한동대학교에 오게 되었습니다. \n대학 1학년 때에 그는 캠퍼스 복음화에 대한 소명을 느꼈습니다. 즉시 선교 단체에서 훈련을 받았으며, 캠퍼스 개척과 제자 훈련, 성경 공부를 통해 하나님의 나라를 확장하는 일에 소망을 가져 왔습니다. 이러한 사명은 미국에서도 이어져, 현지 한인 청년들을 대상으로 교회와 대학 캠퍼스에서 선교 활동을 펼치기도 했습니다. '그리스도인을 위한 섬김'이라는 모토를 갖고 있는 그는 한동대학교에서의 생활을 큰 기쁨으로 여기며, 계속해서 섬길 수 있는 기회를 주시는 하나님께 깊이 감사하고 있습니다.\n그는 디자인을 통해 건강 증진에 기여할 방법을 꾸준히 모색하고 있으며, 특히 경도 인지 장애나 ADHD를 비롯한 다양한 정신 건강 문제를 위한 디지털 진단 도구 및 치료제를 개발하는 데에 관심이 있습니다.",
    "major": [
      {
        "year": "2002 ~ 2005",
        "text": "M.F.A. in Computer Graphics Design, Rochester Institute of Technology, N.Y."
      },
      {
        "year": "1990 ~ 1996",
        "text": "B.F.A. in Industial Design, Kookmin University, Seoul"
      }
    ],
    "biography": [
      {
        "year": "2009 ~ 현재",
        "text": "한동대학교 콘텐츠융합디자인학부 교수"
      },
      {
        "year": "2026 ~ 현재",
        "text": "한동대학교 HUSS미래디자인 사업단 단장"
      },
      {
        "year": "2024 ~ 2026",
        "text": "한동대학교 교수협의회 회장"
      },
      {
        "year": "2024 ~ 2026",
        "text": "한동대학교 환동해지역혁신원 원장"
      },
      {
        "year": "2022 ~ 현재",
        "text": "과학예술융합학회 논문 심사위원"
      },
      {
        "year": "2021 ~ 2025",
        "text": "한동대학교 LINC3.0 사업단 부단장"
      },
      {
        "year": "2021 ~ 2025",
        "text": "(주)EMOCOG 자문"
      },
      {
        "year": "2020 ~ 현재",
        "text": "한국산업디자이너 협회 논문심사위원"
      },
      {
        "year": "2017 ~ 2021",
        "text": "한동대학교  LINC+ 사업단 부단장"
      },
      {
        "year": "2017 ~ 2020",
        "text": "한동대학교 콘텐츠융합디자인학부 학부장"
      },
      {
        "year": "2011 ~ 현재",
        "text": "대구경북디자인 진흥원 기업지원 심사위원"
      },
      {
        "year": "2005 ~ 2008",
        "text": "한동대학교 콘텐츠융합디자인학부 객원교수"
      },
      {
        "year": "1997 ~ 2001",
        "text": "LG전자 디자인경영센터 연구원"
      }
    ],
    "publications": [
      {
        "entries": [
          {
            "year": "2026",
            "text": "Illustrator Supertips 2026"
          },
          {
            "year": "2024",
            "text": "시선 추적기를 이용한 모바일 두뇌훈련 어플리케이션 사용성 평가 방법 연구"
          },
          {
            "year": "2024",
            "text": "Illustrator Supertips 2024"
          },
          {
            "year": "2024",
            "text": "Photoshop Supertips 2024"
          },
          {
            "year": "2024",
            "text": "A Study on the Excavator Cockpit Usability Analysis Method Using Virtual Human Simulation (박찬송, 최인욱)"
          }
        ]
      }
    ],
    "patents": [
      {
        "year": "2024",
        "text": "기업 맞춤형 지식뱅크 시스템: 가사원뱅크 (소프트웨어)"
      },
      {
        "year": "2024",
        "text": "스마트 복약기 (디자인특허)"
      },
      {
        "year": "2023",
        "text": "중장년층 인지장애 훈련을 위한 기능성 앱 (소프트웨어)"
      },
      {
        "year": "2023",
        "text": "고령자 기억력 개선을 위한 모바일 어플리케이션 (소프트웨어)"
      }
    ],
    "works": [
      {
        "year": "2026",
        "text": "스마트 시스템가구 디자인 - (주)모빌퍼스"
      },
      {
        "year": "2026",
        "text": "AI 헬스케어제품시스템 디자인 개뱔 - (주)그래핀스퀘어"
      },
      {
        "year": "2026",
        "text": "AI 쿠킹제품시스템 디자인 개뱔 - (주)그래핀스퀘어"
      },
      {
        "year": "2026",
        "text": "Tic장애 훈련 디지털 치료제 개발 - (주)이모코그"
      },
      {
        "year": "2026",
        "text": "Cogthera 사용 보호자 및 의료진용 케어도구 개발 - (주)이모코그"
      },
      {
        "year": "2025",
        "text": "병원 정보시스템 디자인 가이드라인 개발 - 세명종합병원"
      },
      {
        "year": "2025",
        "text": "Transformable Smart Office System 디자인 가이드라인 - (주)모빌퍼스"
      },
      {
        "year": "2024",
        "text": "맞춤형 지식뱅크 개발 - (주)가인지컨설팅그룹"
      },
      {
        "year": "2024",
        "text": "기업 리브랜딩 적용 홈페이지 디자인 개발 - (주)해피마인드"
      },
      {
        "year": "2023",
        "text": "KFX 외부도장 그래픽디자인 개발 2차 - (주)한국항공우주산업"
      },
      {
        "year": "2023",
        "text": "고령자 및 독거노인을 위한 디지털 헬스케어 디바이스 개발 - 20PLUS"
      },
      {
        "year": "2023",
        "text": "기업 브랜딩 개발 및 브랜딩 전략에 따른 IR자료 및 홈페이지 개발 - (주)아바타테라퓨틱스"
      },
      {
        "year": "2022",
        "text": "기업 브랜딩 혁신을 위한 I.R.디자인 개발 및 제품디자인 가이드라인 개발 - (주)힐랩"
      },
      {
        "year": "2022",
        "text": "경도인지장애 환자를 위한 메타기억교실 UX디자인 개발 - (주)이모코그"
      }
    ]
  },
  "choi-sooshin": {
    "title": "겸임교수",
    "major": [
      {
        "text": "M.F.A., industrial design, Hongik University"
      }
    ],
    "biography": [
      {
        "year": "2025–present",
        "text": "Professor, industrial design, Savannah College of Art and Design, Savannah, GA"
      },
      {
        "year": "2022–2025",
        "text": "Chair, industrial design, Savannah College of Art and Design, Savannah, GA"
      },
      {
        "year": "2019–2022",
        "text": "Chief design officer/executive design director"
      },
      {
        "year": "2018–2022",
        "text": "CEO and CDO, The Modus Design Institute, Londonderry, NH"
      },
      {
        "year": "2014–2018",
        "text": "Provost and vice president of academic affairs/professor of design/interim dean of graduate studies, College for Creative Studies, Detroit"
      }
    ],
    "awards": [
      {
        "year": "2018",
        "text": "National Medal of Excellence, Republic of Korea"
      },
      {
        "year": "2015",
        "text": "iF Award, Discipline Product Category, Industrie Forum Hannover, Germany"
      },
      {
        "year": "2014",
        "text": "Educator of the Year, Industrial Designers Society of America"
      },
      {
        "text": "IDEA – Excellent Product Design, Industrial Designers Society of America"
      },
      {
        "year": "2009",
        "text": "Professor of the Year, University of Cincinnati"
      }
    ],
    "publications": [
      {
        "entries": [
          {
            "year": "2023",
            "text": "\"Infusing Humanity in Design Education: Bringing the Importance Back to Humanity,\" presented at 17th International Conference on Design Principles & Practices, Lisbon, March 2023."
          },
          {
            "year": "2021",
            "text": "\"Zero Waste: Towards Sustainable and Enjoyable Living,\" keynote presented at KIDP-IIDC, June 2021."
          },
          {
            "year": "2020",
            "text": "\"Design Against Pandemic,\" keynote presented at KIDP-IIDC, Aug. 2020."
          },
          {
            "year": "2019",
            "text": "\"Design and the Cities,\" keynote presented at KIDP-IIDC, June 2019."
          },
          {
            "year": "2018",
            "text": "\"Makers of the Future,\" keynote presented at KIDP-IIDC, June 2018."
          },
          {
            "text": "\"Designing from the Invisibles: Finding New Mobility Opportunities,\" presented at Toyota Design Center, Japan, June 2018."
          },
          {
            "text": "\"Inclusive Design for Inclusive Country,\" Design Issue Report, vol. 28, Korea Institute of Design Promotion, Dec. 2018."
          },
          {
            "year": "2016",
            "text": "\"Design Problems for Design Educators,\" Innovation, IDSA, Aug. 2016."
          },
          {
            "text": "\"Making Things Happen: Design for Inclusivity, Diversity, and Humanity,\" presented at Proceeding for She-Ji, Emerging Practices Conference 2016, Tongji University, Oct. 2016."
          },
          {
            "year": "2014",
            "text": "\"Evolution of Industrial Design and Education of Designers,\" Design Monthly, 2014."
          },
          {
            "year": "2013",
            "text": "Guest editor, \"Design for All,\" vol. 8 no. 12, A Publication of Design for All Institute of India, 2013."
          },
          {
            "year": "2011",
            "text": "\"Designnovation Studio: New Educational Platform for Design as Connecting,\" presented at IASDR 2011, TU Delft, Nov. 2011."
          },
          {
            "text": "\"Inclusive Design and Exclusive Design,\" m_story, issue #26, Daegu Design Center, 2011."
          },
          {
            "year": "2010",
            "text": "\"Successful Design Management for Small and Medium Businesses,\" presented at International Conference of Design, Production and Operations Management, 2010."
          },
          {
            "year": "2009",
            "text": "\"Inclusive Design as an Enabler of Design Innovation,\" presented at Include '09, Royal College of Art, London, April 2009."
          },
          {
            "text": "\"Opportunity Creation Through Strategic Design,\" NGV Special Report, Sept. 2009."
          },
          {
            "year": "2005",
            "text": "\"Universal Design - A Practical Tool for Diverse Society,\" International Journal of Diversity in Organizations, Communities and Nations, Dec. 2005."
          },
          {
            "year": "2004",
            "text": "\"Conception and Misconception about Universal Design,\" Design Monthly, 2004."
          }
        ]
      }
    ],
    "patents": [
      {
        "text": "67 utility and design patents of autonomous delivery robot, security robot, automobile, furniture, commercial aircraft, industrial computer, graphic user interface, and mobile digital devices including:"
      },
      {
        "text": "cargo container for autonomous delivery (US D953965), DEKA Research & Development"
      },
      {
        "text": "display screen or portion thereof with graphical user interface (US D761280 S1), Samsung Electronics"
      },
      {
        "text": "configurable tray table (US 9138055), The Boeing Company"
      },
      {
        "text": "industrial computer (US D746,280), Phoenix Contact"
      },
      {
        "text": "multifunction printer (US D732109 S1), Samsung Electronics"
      },
      {
        "text": "in-flight passenger information system (US 8806543 B1), The Boeing Company"
      }
    ]
  }
};
