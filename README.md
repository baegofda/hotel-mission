## 목차

[실행 방법](##실행-방법)

[기술 스택](##기술-스택)

[디렉터리 구조](##디렉터리-구조)

[상세 설명](##상세-설명)

## 실행 방법

```shell
$ git clone git@github.com:baegofda/hotel-mission.git
$ yarn

# dev mode
$ yarn dev
# production mode
$ yarn prod
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

## 상세 설명

> 💡 **_요구 사항_**
>
> 1. 메인페이지(PC/모바일)일부 [피그마](https://www.figma.com/file/dpDdtxmIeW19nFSiWgUOGD/Livinginhotel_Developer_mission?node-id=0%3A1&t=a2efLW2UV3mDRhkx-0)
> 2. 프론트기술 설명
> 3. 슬라이드, 페이지네이션, 프로그래스 구현
>    1. 공통
>       - 좌우 터치 스와이프
>       - 부드러운 이미지 전환
>       - 페이지네이션
>    2. 최상단 배너
>       - 무한 루프 true (딜레이 5초)
>       - fade 슬라이드
>       - progress
>    3. Local Hotels
>       - default 슬라이드
>       - 무한 루프 false
>       - 슬라이드 처음과 끝 버튼 disable

### 최상단 배너

> - 무한 루프 true (딜레이 5초)
> - fade 슬라이드
> - progress
> - 첫 슬라이드에서만 NEW 태그 활성화

<p align="center">
  <img src="public/images/readMe/1-large.gif" width="600"/>
</p>

```javascript
<Swiper
  effect="fade"
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  navigation={{ prevEl, nextEl }}
  onInit={onInit}
  onSlideChange={onSlideChange}
  onTouchMove={onTouchMove}
  onAutoplayResume={onAutoplayResume}
  modules={[Autoplay, EffectFade, Navigation]}
  loop
>
  ...
  <ButtonContainer>
    <SliderBtn mode="prev" onClick={() => handleSlider(currentIndex - 1)} size={isRange ? 32 : 28} setEl={setPrevEl} />
    <SliderBtn mode="next" onClick={() => handleSlider(currentIndex)} size={isRange ? 32 : 28} setEl={setNextEl} />
  </ButtonContainer>
</Swiper>
```

프로그래스바 기능 구현을 위해 Swiper의 onInit, onSlideChange, onTouchMove, onAutoplayResume 그리고 navigation옵션을 사용하였습니다.

- onInit: 슬라이드가 처음 마운트가될 시 실행됩니다.
- onTouchMove: 유저가 슬라이드 터치 중에 실행됩니다.
- onSlideChange: 슬라이드가 변경되고 난 뒤 실행됩니다.
- onAutoplayResume: AutoPlay가 재생되어 슬라이드가 전환될 때 실행됩니다.

```javascript
// useBannerSlider.ts
...
  // 버튼을 클릭 시 애니메이션 없이 프로그래스가 이동합니다.
  const handleSlider = (index: number) => offset(index);

  // 유저가 슬라이드를 터치하여 드래그를 할 때 상태를 업데이트 합니다.
  const onTouchMove = () => setIsDragging(true);

  // 슬라이드의 상태가 마지막을 지나서 isEnd가 되었고 첫번째가 될 시 애니메이션 없이 프로그래스가 이동합니다. 1번 으로 갑니다.
  const onSlideChange = (swiper: Swiper) => {
    // isEnd가 true이고 첫번째 슬라이드로 변경될 시 애니메이션 없이 프로그래스가 이동합니다.
    if (isEnd && swiper.realIndex === 0) {
      reset();
      setIsEnd(false);
    }

    // isDragging가 true일 경우 애니메이션 없이 프로그래스가 이동합니다.
    if (isDragging) offset(swiper.realIndex);

    // 페이지네이션의 번호와, 데이터 바인딩, 프로그래스 위치를 위해 슬라이드가 전환될 때 마다 index를 업데이트 합니다.
    setCurrentIndex(swiper.realIndex);
  };

  const onAutoplayResume = (swiper: Swiper) => {
    // 마지막 슬라이드에서 1번으로 돌아갈 때의 타이밍을 알기 위해 상태를 업데이트합니다.
    if (swiper.realIndex === size - 1) setIsEnd(true);

    // 기본적인 프로그래스 이동
    slide(currentIndex + 1);

    // 만약 유저가 터치를 하여 isDragging이 true가 되어 동작을 한 후 슬라이드가 다시 움직일 때 false로 변경합니다.
    isDragging && setIsDragging(false);
  };

  ...

```

사용된 reset, offset, slide등의 함수는 CustomHooks로 분리하여 관리합니다.

```javascript
// useProgress.ts
const useProgress = (element: HTMLElement | null, size: number, transition = 'transform 5s linear 0s', transform?: string) => {
  const animation = (index: number) => `translateX(calc(-100% + ((100% / ${size}) * ${index})))`;

  const reset = () => {
    if (!element) return;

    element.style.transition = 'none';
    element.style.transform = `translateX(-100%)`;
  };

  const slide = (index = 1) => {
    if (!element) return;

    element.style.transition = transition;
    element.style.transform = transform ?? animation(index);
  };

  const offset = (index = 1) => {
    if (!element) return;

    element.style.transition = 'none';
    element.style.transform = transform ?? animation(index);
  };

  return { reset, slide, offset };
};

export default useProgress;
```

### Local Hotels

> - default 슬라이드
> - 무한 루프 false
> - 슬라이드 처음과 끝 버튼 disable

<p align="center">
  <img src="public/images/readMe/2-large.gif" width="600"/>
</p>

```javascript
<Wrapper>
  <Swiper
    key={localHotelCategory}
    spaceBetween={50}
    centeredSlides
    onSlideChange={swiper => setLocalHotelCurrentIdx(swiper.realIndex)}
    navigation={{ prevEl, nextEl }}
    modules={[Navigation, Virtual]}
    virtual
  >
    ...
  </Swiper>
  <PaginationContainer>
    <SliderBtn mode="prev" size={32} setEl={setPrevEl} isDisable={localHotelCurrentIdx === 0} />
    ...
    <SliderBtn mode="next" size={32} setEl={setNextEl} isDisable={localHotelCurrentIdx === hotelSize} />
  </PaginationContainer>
</Wrapper>
```

성능을 위해 virtal mode를 추가하였습니다.
자연스러운 이미지 전환을 위해 애니메이션을 추가하였습니다.
