# 트래블메이커스 FE 미션

## 목차

[실행 방법](##실행-방법)

[기술 스택](##기술-스택)

[디렉터리 구조](##디렉터리-구조)

[상세 설명](##상세-설명)

## 실행 방법

```shell
$ git clone git@github.com:baegofda/hotel-mission.git
$ yarn

$ yarn dev # dev mode
# or
$ yarn prod # production mode
```

## 기술 스택

- Nextjs (Typescript)
- emotion

  - styled-component 대비 작은 번들 사이즈
  - 간편한 세팅

  ```Typescript
  // next.config.js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    ...
    compiler: {
      emotion: true,
    },
  };

  module.exports = nextConfig;
  ```

- react-query
- recoil
- swiper
  - slide, fade, swiper, virtual mode 기능 구현
- svgr

  - svg 파일을 컴포넌트로 변환하기 위함

  ```shell
  yarn icon
  ```

- axios, lodash-es, dayjs, next-seo, vercel

## 디렉터리 구조

<!-- prettier-ignore-start -->
```markdown
📁 public
 └─ 📁 icons              <!-- svg to components/icons (with svgr)-->
📁 src
 └─ 📁 api
     ├─ 📁 queries        <!-- react-query -->
     ├─ 📁 types          <!-- API Response Types -->
     ├─ 📃 config.ts      <!-- Axios config, interceptor etc. -->
     └─ 📃 index.ts       <!-- Axios APIs -->
 ├─ 📁 components         <!-- Global, Common Components -->
     └─ 📁 icons          <!-- svg Components from public/icons (with svgr)-->  
 ├─ 📁 config
     └─ 📃 index.ts       <!-- API_ENDPOINT, etc. -->
 ├─ 📁 consts             <!-- Common Contants -->
 ├─ 📁 hooks              <!-- Common Custom Hooks -->
 ├─ 📁 pages              <!-- _app, _document, _error, 404, Router Pages -->
 ├─ 📁 store              <!-- Global Recoil Store -->
 ├─ 📁 styles             <!-- Common Emotion style, css -->
 ├─ 📁 types              <!-- Common Types -->
 ├─ 📁 utils              <!-- Common Util Functions -->
 └─ 📁 views
     └─ 📁 [page-name]    <!-- form Pages -->
         ├─ 📁 components <!-- Page Components -->
         ├─ 📁 consts     <!-- Contants -->
         ├─ 📁 hooks      <!-- Custom Hooks -->
         ├─ 📁 store      <!-- Recoil Store -->  
         ├─ 📁 types      <!-- Types -->
         ├─ 📁 utils      <!-- Util Functions -->
         └─ 📃 index.tsx  <!-- Page Container -->
```
<!-- prettier-ignore-end -->
