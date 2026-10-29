// Firebase 웹 앱 설정
// Firebase 콘솔 → 프로젝트 설정(톱니바퀴) → 일반 → 내 앱 → 웹 앱의 "SDK 설정 및 구성"에 나오는
// firebaseConfig 값을 아래 null 자리에 붙여 넣으세요.
//
// 이 값은 브라우저에 그대로 공개되는 식별 정보이고, 기록은 Firestore 보안 규칙(firestore.rules)이 지킵니다.
// 값을 채우기 전에는 로그인 버튼이 나타나지 않고, 입력값은 이 브라우저에만 저장됩니다.
//
// 형식 예시:
// window.FIREBASE_CONFIG = {
//   apiKey: '<웹 API 키>',
//   authDomain: '<프로젝트ID>.firebaseapp.com',
//   projectId: '<프로젝트ID>',
//   storageBucket: '<프로젝트ID>.appspot.com',
//   messagingSenderId: '<숫자>',
//   appId: '<앱 ID>',
// };
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBgbJ7Wj07hVxKxNO76vtG525CZ2Ow77sY",
  authDomain: "workca-calculator.firebaseapp.com",
  projectId: "workca-calculator",
  storageBucket: "workca-calculator.firebasestorage.app",
  messagingSenderId: "241567797520",
  appId: "1:241567797520:web:4d66bf408af221d4369595"
};
