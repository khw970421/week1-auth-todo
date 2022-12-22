## 커밋 컨벤션

```
Feat: 새로운 기능에 대한 커밋
Fix: build 빌드 관련 파일 수정에 대한 커밋
Build: 빌드 관련 파일 수정에 대한 커밋
Chore: 그 외 자잘한 수정에 대한 커밋, 패키지 설정
Ci: CI 관련 설정 수정에 대한 커밋
Docs: 문서 수정에 대한 커밋
Style: 코드 스타일 혹은 포맷 등에 관한 커밋
Refactor: 코드 리팩토링에 대한 커밋
Test: 테스트 코드 수정에 대한 커밋
```

## 라이브러리

- axios
- react-router-dom
- styled-component
  - 컴포넌트 파일 내에서 하단에 두고 사용

## 작동 방식

- 사용자 output msg: alert

  - axios error msg
  - email, password validation

- 로그인 <=> 회원가입: state로 관리

## Assignment

### 0: Home 로그인/회원가입 관리

- 로그인 <=> 회원가입: state로 관리 (담당자: 김수진)

  - 선택 이유:

### 1: 이메일과 비밀번호의 유효성 검사기능

- 유효성 체크: html attribute (담당자: 이수창)

  - 참고 코드: 유서경
  - 선택 이유: HTML의 의미를 살려서(semantic) 사용

- onChange validation 추가 (담당자: 차지환)

  - 참고 코드: SJ0826
  - 선택 이유: 사용자에게 validation 로직을 UI 상에 보여주어 사용선 증가

### 2: 로그인 API 호출 및 응답 관리

- axios 관련 함수 (담당자: 유서경)

  - 참고 코드: 이수창
  - 선택 이유: Axios middleware 등을 사용한 라이브러리 활용

- response handle (담당자: 김형욱, 경지윤)

  - 참고 코드: 경지윤, 김형욱
  - 선택 이유: Status code를 판별하여 분기처리

### 3: 로그인 여부에 따른 리다이렉트 처리

- input hook: useRef (담당자: 경지윤)

  - 참고 코드: 차지환
  - 선택 이유: 변수값이 변화할 때마다 리렌더링되는 `useState` 대신 `useRef` 사용

- <Navigate /> 컴포넌트 사용 (담당자: 임수진)

  - 참고 코드: 경지윤
  - 선택 이유: 리다이렉션 등 라우팅 관련 로직을 `Router` 컴포넌트에 위임

### 4: Todo list 목록 구현(Create, Read)

### 5: Todo list 수정 삭제 기능 구현(Update, Delete)
