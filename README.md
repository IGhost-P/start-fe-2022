# start-fe-2022

advanced-webapps-class : final exam
2016108271 양상우 고급웹 기말과제 입니다.

# Result

https://start-fe-2022.vercel.app/

# Directory

```jsx
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂Learn
 ┃ ┃ ┣ 📂LearnHeader
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂LearnTable
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂LoadingSpiner
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Quiz
 ┃ ┃ ┣ 📂QuizHeader
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂QuizTable
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📜index.js
 ┣ 📂constants
 ┣ 📂utils
 ┃ ┣ 📜api.js
 ┃ ┣ 📜selector.js
 ┃ ┗ 📜tagFilter.js
 ┣ 📜app.css
 ┣ 📜app.js
 ┣ 📜classData.json
 ┣ 📜index.html
 ┣ 📜index.js
 ┗ 📜quizData.json
```

# 미션

### github

- [x] private 레파지토리 생성 (start-fe-2022)
- [x] 의미에 맞는 commit 메세지 작성
- [x] https://github.com/{본인의ID}/start-fe-2022
- [x] niceaji collaborator로 레파지토리 초대

### 코드

- [x] 1. index.html과 같은 모습 구현, 미리보기
- [x] 2. index.html안에 주석내용 잘 살펴서 구현하기
- [x] 3. class.json은 수업15개에 맞게 나머지 속성 추가(현재 3개만 존재)
- [x] 4. quiz.json도 본인에 맞게 속성값 입력 필요
  - [x] 퀴즈결과 html은 모두 배포하여 previewUrl에 입력
- [x] 5. fetch()를 통해서 class.json,quiz.json 가져오기 구현
- [x] 6. json시에 로딩중에 로딩스피너 구현 (마크업 위치 표시)
- [x] 7. 학습리스트 필터 (마크업 위치표시)
  - [x] 모두: class.json 모든 속성 표시
  - [x] 도움링크: class.json에서 links.length>0 이상인 속성들만 표시
  - [x] git: 실습한 git주소가 있는 속성만 표시
  - [x] 최신순: date가 최신순으로 소팅해서 모든 속성 표시
- [x] 8. 퀴즈리스트 필터 (마크업 위치표시)
  - [x] 모두: quiz.json 모든 속성 표시
  - [x] git: 실습한 git주소가 있는 속성만 표시
- [x] 9. webpack 빌드 환경 구성
- [x] 10. JS 에러 발생하면 안됨
- [x] 11. JS 네이티브 함수 사용, 최신 DOM 사용하여 구현
- [x] 12. JS 모듈화,함수화
