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

- 2.1 axios 관련 함수 (담당자: 유서경)

  - 참고 코드: 이수창
  - 선택 이유: Axios middleware 등을 사용한 라이브러리 활용
  - 코드 활용

    - 2.1.1. `.create()` 메서드를 사용해 사용자 정의 구성을 사용하는 axios 인스턴스를 생성

      ```js
      export const setting = axios.create({
        baseURL,
        headers,
      });
      ```

    - 2.1.2 요청 인터셉터를 추가하여 `then`, `catch`로 처리되기 전에 작업 수행
      - 토큰이 존재하면 config header에 `Authorization` 키 추가
      - 이후 `axios.interceptors.request.eject`로 필요 시 인터셉터 제거도 가능함
      ```js
      preconfigedAxios.interceptors.request.use((config) => {
        const accessToken = getLocalStorageToken();
        if (accessToken && config.headers) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      });
      ```
    - 2.1.3 `validateStatus` config 옵션을 사용하면, 오류를 발생시키는 HTTP 코드를 정의 가능
      - 현재 프로젝트에서는 axios의 기본 상태 코드 처리 방법을 따름

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

### 4-5: Todo list 목록 구현

- Todo 페이지 구조

  - A.페이지 CSS(담당자: 유서경)

    - 참고 코드: 유서경

  - B.TodoList(담당자: 임수진)

    - 최신 투두 아래에

    - C.TodoItem(담당자: 김수진)
      - 참고 코드: 임수진
      - 수정 모드 X: 체크박스 수정
      - 수정 모드: 텍스트 수정
        - 여러 컴포넌트 동시에 가능

  - D. TodoForm 컴포넌트: 투두 새로 추가(담당자: 경지윤)

    - useRef 사용하여 만들기

  - E. Todo CRUD(담당자: 이수창, 차지환)

    - 참고 코드: 이수창
    - contextAPI

  - F.Todo axios(담당자: 김형욱)

    - todoAxios 인스턴스 생성
