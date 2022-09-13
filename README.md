# default_react_project

React.js Framwork's Default Project Setting & Example
ver. 2022.09.13 Jaeyun Jung

# React 실행 및 빌드 방법

### 1. 개발자 모드로 실행:

```bash
npm start / npm run start
# or
yarn start
```

기본적으로 실행되는 로컬url 주소: [http://localhost:3000](http://localhost:3000)

### 2. 프로젝트 빌드:

```bash
npm run build
# or
yarn build
```

해당 명령어를 실행시 .env.production이 적용된다.

### 3. 프로덕션 모드로 실행 (빌드한 것 로컬에서 실행):

```bash
npm serve build
```

명령어를 실행하면 serve 프로그램을 다운 받고 build 폴더에서 서버가 실행된다.

### 4. 테스트 모드로 실행:

```bash
npm test
```
