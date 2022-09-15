# default_react_project

React.js Framwork's Default Project Setting & Example
ver. 2022.09.15 JAEYUN JUNG

# React 실행 및 빌드 방법

### 1. 개발자 모드로 실행:

```bash
npm start / npm run start

```

기본적으로 실행되는 로컬url 주소: [http://localhost:3000](http://localhost:3000)

### 2. 프로젝트 빌드:

production mode로 project build

```bash
npm run build:prod

```

해당 명령어를 실행시 .env.production이 적용

### 3. 프로덕션 모드로 실행 (빌드한 것 로컬에서 실행):

두 가지 방법 중 선택하여 사용

#### 3.1static server를 통한 실행

static serve 설치

```bash
npm install -g serve
```

sever 가동

```bash
serve -s build
```

#### 3.2npx server를 통한 실행

```bash
npx serve build
```

명령어를 실행하면 serve 프로그램을 다운 받고 build 폴더에서 서버가 실행

### 4. 테스트 모드로 실행:

```bash
npm test
```

각 새로운 명령어를 추가하거나 기존의 명령어를 수정해야 할 경우, package.json의 "scripts"를 수정한 뒤 파일을 닫았다가 새로열면 적용됩니다.
