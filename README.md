
# Team :seven: | TodoList 구현하기 (Week 1)

이 레파지토리는 원티드 프리온보딩 프론트엔드 인턴십 1주차 과제를 위해 만들어졌습니다.

팀원들과 토론해 선발과제의 요구사항별로 Best Practice를 도출해 하나의 프로젝트로 만들었습니다.

## :heavy_check_mark: 팀원 소개

<table>
  <tbody >
    <tr >
      <td align="center"><a href="https://github.com/SeokyoungYou"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/79842380?v=4" width="100px; height="100px" alt=""/><br /><sub><b>유서경 (팀장)</b></a><ul><li>프로젝트 총괄</li><li>Best Practice 토론 총괄 및 과제 배분 </li></sub><br /></td>
      <td align="center"><a href="https://github.com/JiyoonZ"><img style="margin-top: 20px;" src="https://avatars.githubusercontent.com/u/81758576?v=4" width="100px;" alt=""/><br /><sub><b>경지윤</b></sub></a><ul><li>회의록 작성</li><li>Best Practice 토론 총괄 및 과제 배분 </li><br /></td>
      <td align="center"><a href=""><img style="margin-top: 20px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56298540?v=4" width="100px;" alt=""/><br /><sub><b>김수진</b></sub></a><ul><li>리드미 구조 작성 및 배분</li><li>PR merge 담당</li><br /></td>
      <td align="center"><a href="https://github.com/khw970421"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/59253551?v=4" width="100px;" alt=""/><br /><sub><b>김형욱</b></sub></a><ul><li>과제/토론 일정 관리 및 과제 제출</li><li>PR merge 담당</li><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/eternalclash"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/77526745?v=4" width="100px;" alt=""/><br /><sub><b>이수창</b></sub></a><ul><li>CSS theme, constants 파일 총괄</li><li>최종 코드 확인 및 검토</li><br /></td>
      <td align="center"><a href="https://github.com/etoile-j?tab=repositories"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/102905624?v=4" width="100px;" alt=""/><br /><sub><b>임수진</b></sub></a><ul><li>팀/코드 컨벤션 총괄</li><li>최종 코드 배포 및 데모 영상 제작</li><br /></td>
      <td align="center"><a href="https://github.com/ckwlghks123"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/83552466?v=4" width="100px;" alt=""/><br /><sub><b>차지환</b></sub></a><ul><li>프로젝트 기초 세팅 및 폴더/파일 트리 총괄</li><li>최종 코드 확인 및 검토</li><br /></td>
    </tr>
  </tbody>
</table>

## :heavy_check_mark: 사용 라이브러리 및 툴

<div style="float: left;">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/React Router Dom-CA4245?style=for-the-badge&logo=react router&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Husky-808080?style=for-the-badge&logo=husky&logoColor=white">
</div>

<br/>

## :heavy_check_mark: 프로젝트 살펴 보기

### :one: 실행 방법

```
git clone https://github.com/wanted-pre-onboarding-team-7/week1-auth-todo.git
cd week1-auth-todo
npm install
npm start
```

## :two: 배포 링크

https://wanted-front-todo-team7.netlify.app

## :heavy_check_mark: 프로젝트 구조

```

📦project
┗ 📂src
┃ ┣ 📂components
┃ ┃ ┣ 📜SignForm.js
┃ ┃ ┣ 📜SignToggleBtn.js
┃ ┃ ┣ 📜TextInput.js
┃ ┃ ┣ 📜TodoForm.js
┃ ┃ ┣ 📜TodoItem.js
┃ ┃ ┣ 📜TodoList.js
┃ ┃ ┗ 📜index.js
┃ ┣ 📂context
┃ ┃ ┗ 📜ToDoContext.js
┃ ┣ 📂pages
┃ ┃ ┣ 📜Home.js
┃ ┃ ┣ 📜NotFound.js
┃ ┃ ┗ 📜Todos.js
┃ ┣ 📂routes
┃ ┃ ┣ 📜PrivateRoute.js
┃ ┃ ┣ 📜PublicRoute.js
┃ ┃ ┗ 📜Router.js
┃ ┣ 📂styles
┃ ┃ ┗ 📜GlobalStylesComp.js
┃ ┣ 📂utils
┃ ┃ ┣ 📜axios-api-fn.js
┃ ┃ ┣ 📜axios-setting.js
┃ ┃ ┣ 📜constants.js
┃ ┃ ┣ 📜local-storage-fn.js
┃ ┃ ┗ 📜validation.js
┃ ┣ 📜App.js
┃ ┣ 📜index.js
┗ ┗ 📜theme.js

```

## :heavy_check_mark: 과제 요구사항에 따른 Best Practice

꼭 Best Practice로 선정되지 않아도 스스로 공부해보고 싶은 부분을 담당해 코드를 구현했습니다.

### [Assignment 공통] Axios 라이브러리 사용

#### 📝 Axios Error handling (Best Practice By 경지윤 & 김형욱 )

- 담당자: 경지윤 & 김형욱
- 선정 이유

1. 응답/요청/그 외의 에러상황들에 대처
2. 이메일 중복 혹은 잘못된 로그인 인증 등 특수한 상황에 따라 사용자에게 에러 메세지를 알려주기 위해

```js
authAxios.interceptors.response.use(
  //... 중략
  ,
  async (error) => {
    //... 중략
    if (errorResponse) {
      // 인증 에러 발생시
      if (errorResponse.status === 401 && errorResp === 'Unauthorized') {
        alert('아이디와 비밀번호를 확인해주세요.');
        window.location.href = '/';
      }
      if (
        errorResponse.status === 400 &&
        error.response.data.message === '동일한 이메일이 이미 존재합니다.'
      ) {
        alert('해당 이메일은 이미 존재합니다!');
      }
      //... 중략
  },
```

- `401` 토큰 관련 에러를 todo/auth 모두 공통적으로 처리했습니다.
- 잘못된 값(`400` status)과 중복이메일(`400` status)의 경우 에러메세지에 따라 다른 `alert`창을 띄웠습니다.

### [Assignment1] 이메일과 비밀번호 유효성 검사

#### 📝 유효성 체크 (Best Practice By <span style="background-color: #BFCFFF">유서경</span> )

- 담당자: 이수창

* 선정 이유: HTML의 의미를 살려서(semantic) 사용

```js
export default function TextInput({ type, value, onChange, refValue }) {
  return (
    <Wrapper>
      <InputLabel for={type}>{type}</InputLabel>
      <Input
        type={type}
        id={type}
        placeholder={INPUT.PLACEHOLDER[type]}
        minLength={INPUT.MIN_LEN[type]}
        value={value}
        required
        onChange={onChange}
        ref={refValue}
      />
    </Wrapper>
  );
}
```

- 유효성 조건을 Input tag의 attribute로 전달: `type`, `minLength`,`required`로 검사

#### 📝 onChange validation 추가 (Best Practice By <span style="background-color: #BFCFFF">김수진</span> )

- 담당자: 차지환
- 선정 이유: `regexp`객체를 사용해 유효성 검사

```js
const regexp = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^.{8,30}$/,
};

export const validation = (type, value) => regexp[type].test(value);
```

- `regexp`객체를 생성해서 입력받은 input값에 해당하는 타입을 인덱스로 받아 유효성 검사를 진행했습니다.
- `test`메서드를 사용해 검사해 코드의 간결성을 높였습니다.

---

### [Assignment2] 로그인 API 호출

#### 📝 로그인 API 호출 및 응답 관리 (Best Practice By <span style="background-color: #BFCFFF">이수창</span> )

- 담당자: 유서경
- 선정 이유: Axios middleware 등을 사용한 라이브러리 활용

```js
export const setting = axios.create({
  baseURL,
  headers,
});
```

- `.create()` 메서드를 사용해 사용자 정의 구성을 사용하는 axios 인스턴스를 생성

```js
preconfigedAxios.interceptors.request.use((config) => {
  const accessToken = getLocalStorageToken();
  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
```

- 토큰이 존재하면 config header에 `Authorization` 키 추가
- 이후 `axios.interceptors.request.eject`로 필요 시 인터셉터 제거도 가능함
- `validateStatus` config 옵션을 사용하면, 오류를 발생시키는 HTTP 코드를 정의 가능
- 현재 프로젝트에서는 axios의 기본 상태 코드 처리 방법을 따름

---

### [Assignment3] 로그인 여부에 따른 리다이렉트 처리

#### 📝 리다이렉트 처리 (Best Practice By <span style="background-color: #BFCFFF">경지윤</span> )

- 담당자: 임수진

* 선정 이유: 리다이렉션 등 라우팅 관련 로직을 Router 컴포넌트에 위임

1. PublicRoute

```js
const PublicRoute = ({ children }) => {
  const isLogined = getLocalStorageToken();
  return isLogined ? <Navigate to="/todo" /> : children;
};
```

2. PrivateRoute

```js
const PrivateRoute = ({ children }) => {
  const isLogined = getLocalStorageToken();
  return isLogined ? children : <Navigate to="/" />;
};
```

- `PublicRoute`에서는 '`/`'에 접근 시 토큰이 존재한다면 '`/todo`'로 리다이렉트
- `PrivateRoute`에서는 '`/todo`'에 접근 시 토큰이 존재하지 않는다면 '`/`'로 리다이렉트

```js
  <Route
  path="/"
  element={
  <PublicRoute>
  <Home />
  </PublicRoute>
  }
  />
  <Route
  path="/todos"
  element={
  <PrivateRoute>
  <Todos />
  </PrivateRoute>
  }
  />
```

- Public, PrivateRoute로 각각의 컴포넌트를 감싸주어 역할을 수행토록 합니다.

### 📝 로그인/회원가입 Input 태그에 useRef Hook 사용 (Best Practice By <span style="background-color: #BFCFFF">차지환</span> )

- 담당자: 경지윤

- 선정 이유:

1.  저장하고 싶은 값(이메일, 패스워드)을 re-rendering 없이 저장(react life-cycle과 분리)
2.  직접적으로 input 태그를 조작하여 로그인/회원가입 완료시 초기화 하기 위해

```js
useEffect(() => {
  clearInput();
}, [signState]);

const clearInput = () => {
  emailRef.current.value = '';
  passwordRef.current.value = '';
};
//... 중략

<TextInput
  type="email"
  value={emailRef.current.value}
  onChange={handleChange}
  refValue={emailRef}
/>;
// ...
// ...
```

- Input 태그를 직접적으로 조작 가능 (value값 초기화 혹은 focus() 등)
- `onChange`시에도 리렌더링 없이 값 저장

### [Assignment 4~5] 투두리스트 목록 구현

#### 📝 페이지 CSS (Best Practice By <span style="background-color: #BFCFFF">유서경</span> )

- 담당자: 유서경
- 선정 이유: 과제의 요구사항을 가장 컴팩트하게 보여줄 수 있는 Styling

#### 📝 TodoList 컴포넌트 (Best Practice By <span style="background-color: #BFCFFF">임수진</span> )

- 담당자: 임수진

* 선정 이유: 사용자 친화적 인터페이스

```js
{
  getTodo ? (
    getTodo.map((todo) => {
      return (
        <li key={todo.id}>
          <TodoItem
            text={todo.todo}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        </li>
      );
    })
  ) : (
    <span>TodoList가 없습니다</span>
  );
}
```

- 투두 리스트를 받아와 있다면 목록들을 위에서부터 차례로 보여주고, 존재하지 않는다면 없다는 메세지를 보여주는 처리

#### 📝 TodoItem 컴포넌트 (Best Practice By <span style="background-color: #BFCFFF">임수진</span> )

- 담당자: 김수진
- 선정 이유: 사용자 인터페스에 충족한 기능 구현

```js
<>
  <input
    autoFocus
    type="text"
    value={text}
    onChange={(e) => {
      setEditedText(e.target.value);
    }}
  />
  <button type="button" onClick={() => clickEditDoneButton(false)}>
    제출
  </button>
  <button type="button" onClick={clickEdit}>
    취소
  </button>
</>
```

- 수정모드일 때 Todo완료 버튼을 안보이게 html구조를 작성

#### 📝 Todo 추가 input 에 useRef Hook 사용 (Best Practice By 경지윤 )

- 담당자: 경지윤
- 선정 이유

1.  저장하고 싶은 값(`todo`)을 re-rendering 없이 저장(`useState` 대신 사용)
2.  할일 추가 input 태그를 직접적으로 조작하기 위해

```js
...
  const sumbitHandler = useCallback(
    //... 중략
        inputRef.current.value = '';
        inputRef.current.focus();
    //...

  );
   //... 중략
    <TodoInput
      ref={inputRef}
      placeholder="Add task"
      onChange={changeHadler}
    />
  // ...
```

- 할일 추가 완료 후 input 태그를 초기화하고 포커스

#### 📝 투두리스트 CRUD (Best Practice By <span style="background-color: #BFCFFF">이수창</span> )

- 담당자: 이수창

* 선정 이유: contextAPI, use Reducer를 활용해 전역 상태 관리

1.  reducer 함수

```js
const todoReducer = (state, action) => {
 switch (action.type) {
   const initTodos = [];
   case 'INIT':
     return [...action.initTodos];
   case 'ADD':
     return [...state, action.todo];

   case 'DELETE':
     return state.filter((task) => task.id !== action.id);
   case 'EDIT':
     return state.map((task) =>
       task.id === action.todo.id ? { ...action.todo } : task,
     );
   default:
     return state;
 }
};
```

- 'INIT'action은 투두리스트를 보여줌
- 'ADD'action은 투두리스트의 리스트를 추가함
- 'DELETE'action은 투두리스트에서 리스트를 지움
- 'EDIT'action은 투두리스트에서 리스트를 수정함

2. contextAPI

```js
export const dispatchContext = createContext('');
export const todoContext = createContext('');
export default function TodoContextWrapper(props) {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  return (
    <todoContext.Provider value={todos}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </todoContext.Provider>
  );
```

- 액션을 실행해주는 dispatch와 그에 따른 state인 `todos`에 각각 context 객체를 생성
- 액션이 실행될때마다 state의 변화를 주어서 props drilling을 하지 않고 전역 상태 관리를 함

#### 📝 Todo axios (Best Practice By 김형욱 )

- 담당자: 이수창, 김형욱

* 선정 이유: 메소드에 대한 각각을 공통적인 requestTodos에서 작성하여 불필요 중복코드 개선

```js
export const requestTodos = async (method, propsData = {}) => {
  const { id = '', ...userData } = propsData;
  const config = {
    method: method,
    url: `/todos/${id}`,
    data: userData,
  };
  return await todosAxios(config).then((res) => res.data);
};
```

- 필요한 메소드와 전달 DATA에 따라 `GET`,`POST`,`PUT`,`DELETE`를 `getTodos` , `postTodos` , `putTodos` , `deleteTodos` 함수로 나누어 내부에서 `requestTodos`를 실행
