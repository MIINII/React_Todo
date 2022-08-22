# ⚛️ React로 Todo-List 만들기

<span style="color:#008080">나曰 휴;; 진짜 힘들었다....리액트 마스터 하는 그날까지 화이팅...</span> 


## 01. React 프로젝트 만들어보기   

> ### nvm 설치확인하귀   

``` bash
 nvm --version
 nvm install 16.16.0
```
내가 무슨 14.12.0 버전? 사용하기 해서 아주 난리가 났었다. 분명 16.16.0이 설치 되어있었는데 14.뭐시기? 써서 `styled-components`도 못쓰고... `nvm use 16.16.0`해도 껏다키면 다시 원상복귀 하두라...
``` bash
 nvm ls
 nvm uninstall [해당버전]
```
``` bash
nvm alias default 16.16.0 // 기본버전으로 설정
```   
여튼 이제 yarn이나 npm으로 react를 실행해 보쟈쟈

### CRA(Create React App) : 웹사이트 만들때 필요한것을 담은 선물상자
```bash
// 얀으로 깐다! 글로벌하게(전역으로) CRA패키지를!
yarn add global create-react-app
```
### 리액트 프로젝트 드디어 만들기
``` bash
yarn create react-app [프로젝트명]
```
이제 하라는 데로 하면 끝!

---
## 02. jsx
> JSX 문법을 사용해서 React 요소를 만들고 DOM에 렌더링 시킨다...

JS가 있는데 그안에 HTML을 쓸수 있으요.   
html 태그같은 마크업을 넣어 뷰(UI) 작업을 편하게 할수 있답니다.
   
  > JSX 규칙
  01. 태그는 꼭 닫자!
  2.  무족권 한개의 엘리먼트 반환하자!   `<div></div>`안에 다 때려넣기
  3. JS값을 가져오려면 **{중괄호}**를 사용하자!
  4.  `class`말고 `className`
  5.  인라인으로 스타일 넣기   
   
---
## 03. 이제 어떻게 구조를 만들지?
이걸 절대 까먹으면 안됩니다 나중에 헷갈려요   


>  `App > TodoList > Layout > Header / Form / List  > Todo`   

App은 뷰를 보여주는 페이지입니다. 그안에 TodoList라는 큰 틀이 있고 그안에 Layout이 존재하여 Header, Form, List를 담고 있는것! 이제 리스트 안에 Todo들이 쑉ㅆ ㅛㄱ 들어 가겠지요?
